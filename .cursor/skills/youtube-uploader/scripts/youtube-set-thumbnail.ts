import { google } from "googleapis";
import * as fs from "fs";
import * as path from "path";
import * as http from "http";
import * as url from "url";
import open from "open";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: path.join(__dirname, ".env") });

const SCOPES = [
  "https://www.googleapis.com/auth/youtube",
  "https://www.googleapis.com/auth/youtube.upload",
];

const TOKEN_PATH = path.join(__dirname, ".youtube-token.json");

interface ThumbnailOptions {
  videoId: string;
  thumbnail: string;
  dryRun?: boolean;
}

interface TokenData {
  access_token: string;
  refresh_token: string;
  scope: string;
  token_type: string;
  expiry_date: number;
}

// Parse command line arguments
function parseArgs(): { auth: boolean; options: ThumbnailOptions } {
  const args = process.argv.slice(2);
  let auth = false;
  const options: ThumbnailOptions = {
    videoId: "",
    thumbnail: "",
    dryRun: false,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    const next = args[i + 1];

    switch (arg) {
      case "--auth":
        auth = true;
        break;
      case "--video-id":
      case "-v":
        options.videoId = next;
        i++;
        break;
      case "--thumbnail":
      case "-t":
        options.thumbnail = next;
        i++;
        break;
      case "--dry-run":
        options.dryRun = true;
        break;
      case "--help":
      case "-h":
        printHelp();
        process.exit(0);
    }
  }

  return { auth, options };
}

function printHelp() {
  console.log(`
YouTube Thumbnail Setter

Usage:
  npx ts-node youtube-set-thumbnail.ts [options]

Options:
  --auth                  Run OAuth2 authentication
  --video-id, -v <id>     YouTube video ID (required)
  --thumbnail, -t <path>  Thumbnail image path (required)
  --dry-run               Preview without uploading
  --help, -h              Show this help

Examples:
  npx ts-node youtube-set-thumbnail.ts --auth
  npx ts-node youtube-set-thumbnail.ts -v abc123 -t thumbnail.png
`);
}

// OAuth2 authentication
async function authenticate(): Promise<any> {
  const clientId = process.env.YOUTUBE_CLIENT_ID;
  const clientSecret = process.env.YOUTUBE_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    console.error("Error: Missing YOUTUBE_CLIENT_ID or YOUTUBE_CLIENT_SECRET in .env");
    console.error("Get credentials from Google Cloud Console:");
    console.error("1. Go to console.cloud.google.com");
    console.error("2. Create a project and enable YouTube Data API v3");
    console.error("3. Create OAuth2 credentials (Desktop app)");
    process.exit(1);
  }

  const oauth2Client = new google.auth.OAuth2(
    clientId,
    clientSecret,
    "http://localhost:3333/callback"
  );

  // Check for existing token
  if (fs.existsSync(TOKEN_PATH)) {
    const tokenData: TokenData = JSON.parse(fs.readFileSync(TOKEN_PATH, "utf-8"));
    oauth2Client.setCredentials(tokenData);

    // Check if token is expired
    if (tokenData.expiry_date && tokenData.expiry_date > Date.now()) {
      return oauth2Client;
    }

    // Try to refresh token
    if (tokenData.refresh_token) {
      try {
        const { credentials } = await oauth2Client.refreshAccessToken();
        oauth2Client.setCredentials(credentials);
        fs.writeFileSync(TOKEN_PATH, JSON.stringify(credentials, null, 2));
        console.log("Token refreshed successfully");
        return oauth2Client;
      } catch (err) {
        console.log("Token refresh failed, re-authenticating...");
      }
    }
  }

  // Need new authentication
  return new Promise((resolve, reject) => {
    const authUrl = oauth2Client.generateAuthUrl({
      access_type: "offline",
      scope: SCOPES,
      prompt: "consent",
    });

    console.log("\n=== YouTube Authentication ===");
    console.log("Opening browser for authentication...\n");

    // Create local server to receive callback
    const server = http.createServer(async (req, res) => {
      try {
        const parsedUrl = url.parse(req.url!, true);
        if (parsedUrl.pathname === "/callback") {
          const code = parsedUrl.query.code as string;

          if (code) {
            const { tokens } = await oauth2Client.getToken(code);
            oauth2Client.setCredentials(tokens);

            // Save token
            fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens, null, 2));

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(`
              <html>
                <body style="font-family: sans-serif; text-align: center; padding: 50px;">
                  <h1>Authentication Successful!</h1>
                  <p>You can close this window and return to the terminal.</p>
                </body>
              </html>
            `);

            server.close();
            console.log("Authentication successful! Token saved.");
            resolve(oauth2Client);
          } else {
            res.writeHead(400);
            res.end("No code received");
            reject(new Error("No code received"));
          }
        }
      } catch (err) {
        res.writeHead(500);
        res.end("Authentication failed");
        reject(err);
      }
    });

    server.listen(3333, () => {
      open(authUrl);
    });

    // Timeout after 2 minutes
    setTimeout(() => {
      server.close();
      reject(new Error("Authentication timeout"));
    }, 120000);
  });
}

// Set thumbnail for existing video
async function setThumbnail(
  auth: any,
  options: ThumbnailOptions
): Promise<{ success: boolean; videoId: string; thumbnailPath: string }> {
  const youtube = google.youtube({ version: "v3", auth });

  console.log("\n=== Setting YouTube Thumbnail ===");
  console.log(`Video ID: ${options.videoId}`);
  console.log(`Thumbnail: ${path.basename(options.thumbnail)}`);

  if (options.dryRun) {
    console.log("\n[DRY RUN] Would set thumbnail with above settings");
    return { success: true, videoId: options.videoId, thumbnailPath: options.thumbnail };
  }

  console.log("\nUploading thumbnail...");

  try {
    const response = await youtube.thumbnails.set({
      videoId: options.videoId,
      media: {
        body: fs.createReadStream(options.thumbnail),
      },
    });

    console.log("\n=== Thumbnail Update Complete! ===");
    console.log(`Video ID: ${options.videoId}`);
    console.log(`Video URL: https://youtu.be/${options.videoId}`);
    console.log(`Thumbnail URL: ${response.data.items?.[0]?.default?.url || 'N/A'}`);
    console.log("Thumbnail successfully updated!");

    return { success: true, videoId: options.videoId, thumbnailPath: options.thumbnail };
  } catch (err: any) {
    console.error("\n=== Thumbnail Update Failed ===");
    console.error(`Error: ${err.message}`);
    
    if (err.response?.data?.error) {
      const error = err.response.data.error;
      console.error(`Code: ${error.code}`);
      console.error(`Status: ${error.status}`);
      console.error(`Message: ${error.message}`);
      
      if (error.errors) {
        error.errors.forEach((e: any) => {
          console.error(`  - ${e.message} (${e.reason})`);
        });
      }
    }
    
    throw err;
  }
}

// Main function
async function main() {
  const { auth: runAuth, options } = parseArgs();

  // Just authenticate
  if (runAuth && !options.videoId) {
    await authenticate();
    console.log("\nAuthentication complete! You can now set thumbnails.");
    return;
  }

  // Validate required options
  if (!options.videoId) {
    console.error("Error: --video-id is required");
    printHelp();
    process.exit(1);
  }

  if (!options.thumbnail) {
    console.error("Error: --thumbnail is required");
    printHelp();
    process.exit(1);
  }

  if (!fs.existsSync(options.thumbnail)) {
    console.error(`Error: Thumbnail file not found: ${options.thumbnail}`);
    process.exit(1);
  }

  // Authenticate
  const auth = await authenticate();

  // Set thumbnail
  const result = await setThumbnail(auth, options);

  console.log(`\nhttps://youtu.be/${result.videoId}`);
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});

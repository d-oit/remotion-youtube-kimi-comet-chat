# Setup Guide for Thumbnail Uploader

Follow these steps to set up the thumbnail uploader skill.

## Step 1: Install Python Dependencies

```bash
pip install dropbox python-dotenv
```

## Step 2: Get Dropbox Access Token

1. Go to https://www.dropbox.com/developers/apps
2. Click "Create app"
3. Choose "Scoped access"
4. Select "App folder" access (recommended for security)
5. Name your app (e.g., "kimi-comet-chat-thumbnails")
6. In the "Permissions" tab, enable:
   - `files.content.write`
   - `files.content.read`
   - `sharing.write`
7. Click "Submit"
8. Go to "Settings" tab
9. Under "OAuth 2", click "Generate access token"
10. Copy the token (starts with `sl.`)

## Step 3: Configure Environment Variables

Create or update `.env` file in `skills/dropbox-uploader/`:

```bash
DROPBOX_ACCESS_TOKEN=sl.your_token_here
```

## Step 4: Test the Setup

```bash
cd ~/.claude/skills/thumbnail-uploader/scripts
python upload_thumbnails.py
```

If successful, you should see upload progress and share links.

## Step 5: Mark Setup Complete

Edit `SKILL.md` and change:

```yaml
setup_complete: false
```

to:

```yaml
setup_complete: true
```

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `[!] Dropbox SDK not installed` | Run `pip install dropbox` |
| `[!] DROPBOX_ACCESS_TOKEN not found` | Check .env file location and format |
| `AuthError` | Regenerate token in Dropbox app settings |
| `[X] File not found` | Generate thumbnails using Remotion first |

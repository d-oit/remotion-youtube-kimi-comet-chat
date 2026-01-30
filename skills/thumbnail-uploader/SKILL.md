---
name: thumbnail-uploader
description: Upload YouTube video thumbnails to Dropbox cloud storage and generate share links. Use when Claude needs to upload thumbnail images for YouTube videos, specifically for the kimi-comet-chat project's thumbnail-main.png and thumbnail-short.png files.
setup_complete: false
setup: "./scripts/setup.md"
---

# Thumbnail Uploader

Upload YouTube video thumbnails to Dropbox and generate shareable links.

> **First time?** If `setup_complete: false` above, run `./scripts/setup.md` first, then set `setup_complete: true`.

## Quick Start

```bash
cd ~/.claude/skills/thumbnail-uploader/scripts

# Upload all thumbnails
python upload_thumbnails.py

# Direct execution from project root
python upload_thumbnails.py
```

## Files Uploaded

The script uploads these specific files from `remotion-video/out/`:

| File | Remote Path |
|------|-------------|
| `thumbnail-main.png` | `/kimi-comet-chat/thumbnails/thumbnail-main.png` |
| `thumbnail-short.png` | `/kimi-comet-chat/thumbnails/thumbnail-short.png` |

## Setup

### Prerequisites

1. Install Python dependencies:
   ```bash
   pip install dropbox python-dotenv
   ```

2. Configure Dropbox access token in `skills/dropbox-uploader/.env`:
   ```bash
   DROPBOX_ACCESS_TOKEN=your_token_here
   ```

### Getting a Dropbox Access Token

1. Go to https://www.dropbox.com/developers/apps
2. Click "Create app"
3. Choose "Scoped access"
4. Select "App folder" access
5. Name your app (e.g., "kimi-comet-chat-thumbnails")
6. In the "Permissions" tab, enable:
   - `files.content.write`
   - `files.content.read`
   - `sharing.write`
7. Click "Submit"
8. Go to "Settings" tab
9. Under "OAuth 2", click "Generate access token"
10. Copy the token to your `.env` file

## Output

On successful upload, the script displays:

```
[>] Uploading: thumbnail-main.png
[i] Size: X.XX MB
[i] Destination: /kimi-comet-chat/thumbnails/thumbnail-main.png
[OK] Upload successful!
[LINK] https://www.dropbox.com/s/xxxxx/thumbnail-main.png
```

Summary section shows:
- Filename
- File size in MB
- Share URL
- Dropbox remote path

## Error Handling

| Error | Cause | Solution |
|-------|-------|----------|
| `[!] Dropbox SDK not installed` | Missing dependency | Run `pip install dropbox` |
| `[!] DROPBOX_ACCESS_TOKEN not found` | Missing .env file | Create .env in dropbox-uploader/ |
| `AuthError` | Invalid token | Regenerate token in Dropbox app settings |
| `[X] File not found` | Thumbnail doesn't exist | Generate thumbnails with Remotion first |
| `[X] Upload failed` | Network or Dropbox issue | Check internet connection, retry |

## Notes

- Thumbnails must be generated first using Remotion
- Share links are public by default
- Existing files are overwritten automatically
- Uses the same Dropbox credentials as dropbox-uploader skill

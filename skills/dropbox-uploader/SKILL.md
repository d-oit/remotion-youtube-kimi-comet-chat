---
name: dropbox-uploader
description: Upload large video files and other assets to Dropbox cloud storage. Use when Claude needs to upload files to Dropbox, especially when files exceed GitHub's size limits (50-100MB), when sharing files via cloud storage, or when backing up project assets to Dropbox.
---

# Dropbox Uploader

Upload files to Dropbox cloud storage, with support for large files using chunked uploads.

## Quick Start

1. Copy `.env.example` to `.env` and add your Dropbox access token
2. Run the upload script:
   ```bash
   python scripts/upload.py <file_path> [remote_path]
   ```

## Setup

### Getting a Dropbox Access Token

1. Go to https://www.dropbox.com/developers/apps
2. Click "Create app"
3. Choose "Scoped access"
4. Select "App folder" access (recommended for security)
5. Name your app (e.g., "my-project-uploader")
6. In the "Permissions" tab, enable:
   - `files.content.write`
   - `files.content.read`
   - `sharing.write`
7. Click "Submit"
8. Go to "Settings" tab
9. Under "OAuth 2", click "Generate access token"
10. Copy the token (starts with `sl.`) to your `.env` file

### Environment Variables

Create a `.env` file in the skill directory:

```bash
DROPBOX_ACCESS_TOKEN=your_token_here
```

## Usage

### Upload a Single File

```bash
python scripts/upload.py path/to/video.mp4
```

### Upload with Custom Remote Path

```bash
python scripts/upload.py path/to/video.mp4 /my-project/videos/video.mp4
```

### Upload Multiple Files

```bash
python scripts/upload.py video1.mp4 video2.mp4 video3.mp4
```

### Upload Directory

```bash
python scripts/upload.py --directory ./assets /backup/assets
```

## Features

- **Large file support**: Automatic chunked uploads for files >150MB
- **Progress tracking**: Real-time upload progress display
- **Resume support**: Resume interrupted uploads
- **Share links**: Automatic generation of shareable links
- **Batch uploads**: Upload multiple files at once

## Error Handling

Common errors and solutions:

| Error | Cause | Solution |
|-------|-------|----------|
| `AuthError` | Invalid token | Regenerate token in Dropbox app settings |
| `FileNotFoundError` | File doesn't exist | Check file path |
| `ApiError` | Path conflict | Use `--overwrite` flag or change remote path |
| `QuotaExceeded` | Storage full | Clean up Dropbox or upgrade account |

## Notes

- Uploads are stored in your app's folder by default
- Generated share links are public by default
- Large files use chunked upload (4MB chunks) for reliability

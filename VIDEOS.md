# Video Files

This repository contains video files that are too large for GitHub (>50MB). They are stored on Dropbox and linked below.

## Uploaded Videos

### Output Videos

| File | Size | Dropbox Link |
|------|------|--------------|
| `kimi-comet-chat-final.mp4` | 62.73 MB | [Download](https://www.dropbox.com/scl/fi/nczmxmi5fdidq8c8qaetq/kimi-comet-chat-final.mp4?rlkey=wl5dcp55hkgmhtl2bk8bch98h&dl=0) |
| `kimi-comet-chat-full-10min.mp4` | 154.22 MB | [Download](https://www.dropbox.com/scl/fi/rydd6sahu1e7f3tklgb42/kimi-comet-chat-full-10min.mp4?rlkey=iel4181wp5y4brxgy8c2bbsdl&dl=0) |

### Asset Videos (Source Recordings)

| File | Size | Dropbox Link |
|------|------|--------------|
| `1-Recording 2026-01-28 130105.mp4` | 314.81 MB | [Download](https://www.dropbox.com/scl/fi/g7mqz3zf331u3vb0unz7o/1-Recording-2026-01-28-130105.mp4?rlkey=ksiw5kywsyy2yai5qx45jtxmm&dl=0) |
| `2-Recording 2026-01-28 130218.mp4` | 972.93 MB | [Download](https://www.dropbox.com/scl/fi/rir6lfuktvwz4gxny35wb/2-Recording-2026-01-28-130218.mp4?rlkey=bakbi4qkyzf9avjqo7awf9gzb&dl=0) |

## How to Download

1. Click on any Dropbox link above
2. Click the "Download" button on the Dropbox page
3. Place the downloaded file in the appropriate directory (matching the `.url` file location)

## Placeholder Files

The `.url` files in this repository serve as placeholders indicating where the actual video files should be placed. They contain the direct Dropbox download links.

## Upload Tool

To upload more files to Dropbox, use the agent skill in `skills/dropbox-uploader/`:

```bash
cd skills/dropbox-uploader
python scripts/upload.py <file> --remote-path "//kimi-comet-chat"
```

Don't forget to update this VIDEOS.md file with new links!

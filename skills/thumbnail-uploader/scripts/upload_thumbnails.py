#!/usr/bin/env python3
"""
Upload thumbnails to Dropbox
"""

import os
import sys
from pathlib import Path

# Load environment variables
from dotenv import load_dotenv

load_dotenv(Path(__file__).parent / "skills" / "dropbox-uploader" / ".env")


def upload_to_dropbox():
    try:
        import dropbox
    except ImportError:
        print("[!] Dropbox SDK not installed. Run: pip install dropbox")
        return

    access_token = os.getenv("DROPBOX_ACCESS_TOKEN")
    if not access_token:
        print("[!] DROPBOX_ACCESS_TOKEN not found")
        return

    dbx = dropbox.Dropbox(access_token)

    files = [
        (
            "D:\\git\\youtube\\kimi-comet-chat\\src\\remotion-video\\out\\thumbnail-main.png",
            "/kimi-comet-chat/thumbnails/thumbnail-main.png",
        ),
        (
            "D:\\git\\youtube\\kimi-comet-chat\\src\\remotion-video\\out\\thumbnail-short.png",
            "/kimi-comet-chat/thumbnails/thumbnail-short.png",
        ),
    ]

    print("=" * 60)
    print("Dropbox Thumbnail Upload")
    print("=" * 60)

    results = []

    for local_path, remote_path in files:
        try:
            if not os.path.exists(local_path):
                print(f"\n[X] File not found: {local_path}")
                continue

            file_size = os.path.getsize(local_path)
            filename = os.path.basename(local_path)

            print(f"\n[>] Uploading: {filename}")
            print(f"[i] Size: {file_size / (1024 * 1024):.2f} MB")
            print(f"[i] Destination: {remote_path}")

            # Upload with overwrite
            from dropbox.files import WriteMode

            with open(local_path, "rb") as f:
                dbx.files_upload(f.read(), remote_path, mode=WriteMode("overwrite"))

            print(f"[OK] Upload successful!")

            # Create or get share link
            try:
                shared_link = dbx.sharing_create_shared_link_with_settings(remote_path)
                share_url = shared_link.url
            except Exception:
                # Link may already exist, try to get existing
                shared_links = dbx.sharing_list_shared_links(path=remote_path)
                if shared_links.links:
                    share_url = shared_links.links[0].url
                else:
                    share_url = None

            if share_url:
                print(f"[LINK] {share_url}")
                results.append(
                    {
                        "filename": filename,
                        "size_mb": file_size / (1024 * 1024),
                        "url": share_url,
                        "remote_path": remote_path,
                    }
                )

        except Exception as e:
            print(f"[X] Upload failed: {e}")

    print("\n" + "=" * 60)
    print("SUMMARY")
    print("=" * 60)
    for r in results:
        print(f"\n📄 {r['filename']}")
        print(f"   Size: {r['size_mb']:.2f} MB")
        print(f"   URL: {r['url']}")
        print(f"   Dropbox Path: {r['remote_path']}")

    return results


if __name__ == "__main__":
    upload_to_dropbox()

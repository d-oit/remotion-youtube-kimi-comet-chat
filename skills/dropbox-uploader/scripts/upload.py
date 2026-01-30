#!/usr/bin/env python3
"""
Dropbox Upload Script
Uploads files to Dropbox with support for large files using chunked uploads.
"""

import os
import sys
import argparse
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()


def get_dropbox_client():
    """Initialize and return Dropbox client"""
    try:
        import dropbox
    except ImportError:
        print("[X] Dropbox SDK not installed. Run: pip install dropbox")
        sys.exit(1)

    access_token = os.getenv("DROPBOX_ACCESS_TOKEN")
    if not access_token:
        print("[X] DROPBOX_ACCESS_TOKEN not found in environment")
        print("   Please set it in your .env file or environment variables")
        sys.exit(1)

    return dropbox.Dropbox(access_token)


def upload_file(dbx, local_path, remote_path, overwrite=False):
    """Upload a file to Dropbox with chunked upload support for large files"""
    from dropbox.files import WriteMode, UploadSessionCursor, CommitInfo

    # Check if file exists
    if not os.path.exists(local_path):
        print(f"[X] File not found: {local_path}")
        return False

    file_size = os.path.getsize(local_path)
    file_size_mb = file_size / (1024 * 1024)
    filename = os.path.basename(local_path)

    print(f"[>] Uploading: {filename}")
    print(f"[i] Size: {file_size_mb:.2f} MB")
    print(f"[i] Destination: {remote_path}")

    mode = WriteMode("overwrite") if overwrite else WriteMode("add")

    try:
        with open(local_path, "rb") as f:
            if file_size <= 150 * 1024 * 1024:  # 150 MB threshold
                # Small file - upload in one chunk
                dbx.files_upload(f.read(), remote_path, mode=mode)
            else:
                # Large file - use chunked upload
                chunk_size = 4 * 1024 * 1024  # 4 MB chunks

                # Start upload session
                upload_session_start_result = dbx.files_upload_session_start(
                    f.read(chunk_size)
                )
                cursor = UploadSessionCursor(
                    session_id=upload_session_start_result.session_id, offset=f.tell()
                )
                commit = CommitInfo(path=remote_path, mode=mode)

                # Upload chunks
                while f.tell() < file_size:
                    if (file_size - f.tell()) <= chunk_size:
                        # Last chunk - finish the upload
                        dbx.files_upload_session_finish(
                            f.read(chunk_size), cursor, commit
                        )
                    else:
                        # Append chunk
                        dbx.files_upload_session_append_v2(f.read(chunk_size), cursor)
                        cursor.offset = f.tell()

                    # Show progress
                    progress = (f.tell() / file_size) * 100
                    print(f"[*] Progress: {progress:.1f}%", end="\r", flush=True)

                print()  # New line after progress

        print(f"[OK] Uploaded successfully!")

        # Generate share link
        try:
            shared_link_metadata = dbx.sharing_create_shared_link_with_settings(
                remote_path
            )
            print(f"[LINK] Share link: {shared_link_metadata.url}")
        except Exception as e:
            # Link might already exist
            try:
                shared_links = dbx.sharing_list_shared_links(path=remote_path)
                if shared_links.links:
                    print(f"[LINK] Share link: {shared_links.links[0].url}")
            except:
                print(f"[!] Could not create share link: {e}")

        return True

    except Exception as e:
        print(f"[X] Upload failed: {e}")
        return False


def upload_directory(dbx, local_dir, remote_dir, overwrite=False):
    """Upload all files in a directory"""
    if not os.path.isdir(local_dir):
        print(f"[X] Directory not found: {local_dir}")
        return False

    success_count = 0
    failed_count = 0

    for root, dirs, files in os.walk(local_dir):
        for filename in files:
            local_path = os.path.join(root, filename)
            relative_path = os.path.relpath(local_path, local_dir)
            remote_path = f"{remote_dir}/{relative_path}".replace("\\", "/")

            if upload_file(dbx, local_path, remote_path, overwrite):
                success_count += 1
            else:
                failed_count += 1

    print(f"\n[i] Summary: {success_count} uploaded, {failed_count} failed")
    return failed_count == 0


def main():
    parser = argparse.ArgumentParser(
        description="Upload files to Dropbox",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python upload.py video.mp4
  python upload.py video.mp4 /my-folder/video.mp4
  python upload.py file1.mp4 file2.mp4 file3.mp4
  python upload.py --directory ./assets /backup/assets
        """,
    )

    parser.add_argument("files", nargs="+", help="Files or directories to upload")
    parser.add_argument(
        "--directory", "-d", action="store_true", help="Treat arguments as directories"
    )
    parser.add_argument(
        "--overwrite", "-o", action="store_true", help="Overwrite existing files"
    )
    parser.add_argument(
        "--remote-path",
        "-r",
        default=None,
        help="Remote path prefix (default: app root)",
    )

    args = parser.parse_args()

    # Initialize Dropbox client
    dbx = get_dropbox_client()

    print("=" * 60)
    print("Dropbox Upload Tool")
    print("=" * 60)

    success_count = 0
    failed_count = 0

    if args.directory:
        # Upload directories
        for local_dir in args.files:
            remote_dir = args.remote_path or f"/{os.path.basename(local_dir)}"
            print(f"\n[DIR] Uploading directory: {local_dir}")
            if upload_directory(dbx, local_dir, remote_dir, args.overwrite):
                success_count += 1
            else:
                failed_count += 1
    else:
        # Upload individual files
        for i, local_path in enumerate(args.files):
            # Determine remote path
            filename = os.path.basename(local_path)
            if args.remote_path:
                # Use remote_path as destination folder
                remote_path = args.remote_path.replace("\\", "/")
                if not remote_path.startswith("/"):
                    remote_path = "/" + remote_path
                remote_path = f"{remote_path}/{filename}"
            else:
                # Use filename as remote path
                remote_path = f"/{filename}"

            print()  # Add spacing between files
            if upload_file(dbx, local_path, remote_path, args.overwrite):
                success_count += 1
            else:
                failed_count += 1

    print("\n" + "=" * 60)
    print(f"[OK] Successful: {success_count}")
    print(f"[X] Failed: {failed_count}")
    print("=" * 60)

    return 0 if failed_count == 0 else 1


if __name__ == "__main__":
    sys.exit(main())

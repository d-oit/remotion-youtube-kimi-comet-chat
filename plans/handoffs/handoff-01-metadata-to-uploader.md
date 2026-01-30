# Handoff: Metadata → YouTube Uploader

## Context
**User Request**: Upload Kimi Comet Chat videos to YouTube with best-practice metadata

**Completed by Agent 2**:
- ✅ Created main video metadata in `plans/agent-outputs/youtube-metadata/main-video.md`
- ✅ Created short video metadata in `plans/agent-outputs/youtube-metadata/short-video.md`
- ✅ Video downloaded by Agent 1 to `remotion-video/out/kimi-comet-chat-final.mp4`

## Your Task
Upload BOTH videos to YouTube using the youtube-uploader skill.

### Main Video
- **File**: `remotion-video/out/kimi-comet-chat-final.mp4` (62.73 MB)
- **Metadata**: Read from `plans/agent-outputs/youtube-metadata/main-video.md`
- **Title**: "I Negotiated Kimi AI Down to $0.99/Month - Here's the Exploit Prompt Method That Actually Works"
- **Privacy**: public
- **Category**: 28 (Science & Technology)
- **Tags**: Kimi AI, AI negotiation, subscription hack, $0.99, prompt engineering, AI tips, money saving, tech hack, AI tutorial, browser agent, automation, AI subscription, Claude, Comet

### Short Video
- **File**: `remotion-video/out/kimi-comet-chat-short-video.mp4` (already local, 8.4 MB)
- **Metadata**: Read from `plans/agent-outputs/youtube-metadata/short-video.md`
- **Title**: "I Got Kimi AI for $0.99/Month Using This Prompt 🤯 #Shorts #KimiAI #PromptEngineering"
- **Privacy**: public
- **Category**: 28 (Science & Technology)
- **Use --short flag**: YES
- **Important**: Include link to main video in description (use placeholder [MAIN_VIDEO_URL] - will be filled after main video uploads)

## Steps
1. First, read the youtube-uploader skill documentation
2. Read both metadata files
3. If not authenticated: Run `npx ts-node youtube-upload.ts --auth` and guide user through OAuth
4. Upload main video first
5. Get the video URL from output
6. Update short video description with actual main video URL
7. Upload short video

## Output
Write results to `plans/agent-outputs/youtube-uploader/results.md`:
- Main video URL
- Short video URL  
- Upload status
- Any errors

## Commands
```bash
cd .opencode/skills/youtube-uploader/scripts

# Main video:
npx ts-node youtube-upload.ts \
  --video /path/to/kimi-comet-chat-final.mp4 \
  --title "..." \
  --description "..." \
  --tags "tag1,tag2,tag3" \
  --privacy public \
  --category 28

# Short video:
npx ts-node youtube-upload.ts \
  --video /path/to/kimi-comet-chat-short-video.mp4 \
  --title "..." \
  --description "..." \
  --tags "tag1,tag2" \
  --privacy public \
  --short
```

## Notes
- If authentication required, pause and ask user to complete OAuth
- The short video should reference the main video (use the URL from main video upload)
- Both should be PUBLIC for maximum reach

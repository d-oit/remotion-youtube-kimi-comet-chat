---
name: ffmpeg-video-creation
description: Create videos using FFmpeg - fast video concatenation, audio mixing, encoding, and transcoding. Use when Remotion rendering is too slow or when you need to combine existing video/audio assets quickly.
---

# FFmpeg Video Creation Skill

Fast video production using FFmpeg command-line tool.

## Quick Commands

```bash
# Combine videos
ffmpeg -i video1.mp4 -i video2.mp4 -filter_complex "[0:v][1:v]concat=n=2:v=1:a=0" output.mp4

# Add background music
ffmpeg -i video.mp4 -i music.mp3 -filter_complex "[0:a][1:a]amix=inputs=2:duration=longest" output.mp4

# Trim video
ffmpeg -i input.mp4 -ss 10 -to 60 -c copy output.mp4

# Scale to 1080p
ffmpeg -i input.mp4 -vf scale=1920:1080 output.mp4
```

## Common Use Cases

### 1. Concatenate Multiple Videos
```bash
ffmpeg -f concat -safe 0 -i filelist.txt -c copy output.mp4
```

### 2. Add Background Music
```bash
ffmpeg -i video.mp4 -i music.mp3 \
  -filter_complex "[0:a][1:a]amix=inputs=2:weights=1 0.3:duration=longest" \
  -c:v copy -c:a aac output.mp4
```

### 3. Create Intro + Content + Outro
```bash
ffmpeg -i intro.mp4 -i content.mp4 -i outro.mp4 \
  -filter_complex "[0:v][0:a][1:v][1:a][2:v][2:a]concat=n=3:v=1:a=1[outv][outa]" \
  -map "[outv]" -map "[outa]" output.mp4
```

### 4. Add Voiceover to Video
```bash
ffmpeg -i video.mp4 -i voiceover.mp3 \
  -filter_complex "[0:a][1:a]amix=inputs=2:weights=1 1" \
  -c:v copy -c:a aac output.mp4
```

### 5. Trim to Specific Duration
```bash
ffmpeg -i input.mp4 -t 600 -c copy output.mp4  # First 10 minutes
ffmpeg -i input.mp4 -ss 30 -c copy output.mp4  # Skip first 30s
```

### 6. Encode with Specific Settings
```bash
ffmpeg -i input.mp4 -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k output.mp4
```

## Preset Quality Settings

| Preset | Speed | Quality | Use Case |
|--------|-------|---------|----------|
| ultrafast | Fastest | Largest | Quick previews |
| fast | Fast | Good | Draft renders |
| medium | Balanced | Good | Standard output |
| slow | Slow | Better | Final renders |

## CRF Quality Values

| CRF | Quality | Size | Use Case |
|-----|---------|------|----------|
| 18 | High | Large | Archive |
| 23 | Good | Medium | YouTube (default) |
| 28 | Lower | Small | Web optimized |
| 35 | Low | Smallest | Previews only |

## Audio Mixing

```bash
# Music at 30% volume
ffmpeg -i video.mp4 -i music.mp3 \
  -filter_complex "[0:a][1:a]amix=inputs=2:weights=1 0.3" \
  output.mp4

# Voiceover dominant
ffmpeg -i video.mp4 -i voice.mp3 \
  -filter_complex "[0:a][1:a]amix=inputs=2:weights=1 2" \
  output.mp4
```

## Progress Monitoring

```bash
ffmpeg -i input.mp4 output.mp4 2>&1 | grep -E "frame=|time="
```

## Useful Flags

- `-y`: Overwrite output without asking
- `-nostdin`: Disable stdin interaction
- `-stats`: Show encoding progress
- `-loglevel error`: Only show errors

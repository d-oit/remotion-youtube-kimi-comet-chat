#!/bin/bash
# Create 10-minute video from existing assets
# Uses FFmpeg for faster processing than Remotion

OUTPUT="out/kimi-comet-chat-10min.mp4"
INTRO_DURATION=3

echo "Creating 10-minute video..."

# Create intro with ElevenLabs audio and logo
ffmpeg -loop 1 -i public/final-0-99-output.png \
  -i public/ElevenLabs_kimi-comet-chat-full-video.mp3 \
  -i public/background-music.mp3 \
  -filter_complex "[0:v]scale=1920:1080,fade=t=in:st=0:d=1,fade=t=out:st=3:d=1,setpts=PTS-STARTPTS[intro]; [1:a][2:a]amix=inputs=2:duration=longest[intro_audio]" \
  -map "[intro]" -map "[intro_audio]" -t $INTRO_DURATION -c:v libx264 -c:a aac -shortest out/intro-ffmpeg.mp4

# Get durations
DUR1=$(ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 public/"1-Recording 2026-01-28 130105.mp4")
DUR2=$(ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 public/"2-Recording 2026-01-28 130218.mp4")

echo "Video 1: ${DUR1}s, Video 2: ${DUR2}s"

# Concatenate videos with music
ffmpeg -i public/"1-Recording 2026-01-28 130105.mp4" \
  -i public/"2-Recording 2026-01-28 130218.mp4" \
  -i public/background-music.mp3 \
  -filter_complex "[0:v]scale=1920:1080[ v1]; [1:v]scale=1920:1080[ v2]; [v1][v2]concat=n=2:v=1:a=0[video]; [2:a]volume=0.3[audio]" \
  -map "[video]" -map "[audio]" -c:v libx264 -c:a aac -shortest out/content-ffmpeg.mp4

echo "Content created. Concatenating with intro..."

# Final concatenation
ffmpeg -i out/intro-ffmpeg.mp4 -i out/content-ffmpeg.mp4 -i public/background-music.mp3 \
  -filter_complex "[0:v][0:a][1:v][2:a]concat=n=2:v=1:a=1[outv][outa]" \
  -map "[outv]" -map "[outa]" -c:v libx264 -c:a aac -movflags +faststart $OUTPUT

echo "Done! Output: $OUTPUT"

# Cleanup temp files
rm -f out/intro-ffmpeg.mp4 out/content-ffmpeg.mp4

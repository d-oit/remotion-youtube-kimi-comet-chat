# GOAP Production Plan: 10-Minute Kimi Comet Chat Video

## Executive Summary

Create a 10-minute YouTube video using:
- **ElevenLabs intro** (few seconds) + **background music** (rest of video)
- **3 existing video recordings** synced to content
- **PPTX content** for text overlays
- **GOAP orchestrator** for task management

**Timeline:** 2-3 hours total
**Output:** `kimi-comet-chat-full-10min.mp4`

---

## GOAP Architecture

### Goal State
```
FINAL_STATE: {
  video_rendered: true,
  duration_seconds: 600,
  audio_mixed: true,
  text_overlays_synced: true,
  thumbnail_generated: true,
  youtube_optimized: true
}
```

### Initial State
```
CURRENT_STATE: {
  assets_copied: false,
  audio_analyzed: false,
  music_downloaded: false,
  remotion_composition_created: false,
  video_rendered: false,
  thumbnail_created: false
}
```

### Actions (GOAP)

| Action | Preconditions | Effects | Duration |
|--------|---------------|---------|----------|
| COPY_ASSETS | - | assets_copied: true | 2 min |
| ANALYZE_AUDIO | assets_copied | audio_analyzed: true | 5 min |
| DOWNLOAD_MUSIC | - | music_downloaded: true | 3 min |
| CREATE_COMPOSITION | assets_copied, music_downloaded | remotion_composition_created: true | 30 min |
| RENDER_VIDEO | remotion_composition_created | video_rendered: true | 45 min |
| CREATE_THUMBNAIL | video_rendered | thumbnail_created: true | 10 min |

---

## Agent Skill Registry

### Available Skills

| Skill | Type | Purpose | Mode |
|-------|------|---------|------|
| `brand-compliant-thumbnails` | **Thumbnail** | **YouTube thumbnails with brand guidelines** | **Single** |
| `vercel-react-best-practices` | Composition | React/Remotion patterns | Single |
| `vercel-composition-patterns` | Component | Reusable component design | Single |
| `remotion-best-practices` | Animation | Smooth animations, timing | Single |
| `pptx-reader` | Data | Extract PPTX content | Single |
| `browser-automation` | Testing | Verify video playback | Single |
| `code-reviewer` | Quality | Code review | Single |

### New: Brand-Compliant Thumbnails Skill

**Location**: `skills/brand-compliant-thumbnails/SKILL.md`

**Purpose**: Create high-CTR YouTube thumbnails following:
- Kimi AI brand colors (Moonshot guidelines)
- Anthropic/Comet brand colors (Geist design)
- 2026 thumbnail best practices (3-5 words, bold outlines, visual cues)
- Mobile-optimized designs (1280x720, safe zones)

**Use for**: All thumbnail generation tasks to ensure brand compliance and maximum CTR

### Swarm Skills (Multiple Agents)

| Swarm Task | Agents Required | Coordination |
|------------|-----------------|--------------|
| ASSET_PREP | 2 (audio + video) | Parallel |
| COMPONENT_BUILD | 3 (Intro + Segments + Outro) | Parallel |
| TEST_VERIFY | 2 (render + browser) | Sequential |

---

## Execution Plan: Phases

### Phase 1: Asset Preparation (5 min)

**GOAP Action:** `COPY_ASSETS`, `ANALYZE_AUDIO`, `DOWNLOAD_MUSIC`

**Single Execution:**
- Copy all assets from `assets/` to `remotion-video/public/`
- Analyze ElevenLabs audio duration
- Download Pixabay CC0 background music

**Agents:**
- `pptx-reader` skill to extract content structure
- `browser-agent` to download music from Pixabay

### Phase 2: Composition Architecture (15 min)

**GOAP Action:** `CREATE_COMPOSITION`

**Single Execution:**
- Create main Remotion composition with:
  - Audio mixing (ElevenLabs intro + looped music)
  - Video sequence timing
  - Text overlay system
  - Logo watermark

**Parallel Execution (3 agents):**
1. **Agent 1:** Create `Intro.tsx` with ElevenLabs audio + logo animation
2. **Agent 2:** Create `MainContent.tsx` with video segments + text overlays
3. **Agent 3:** Create `Outro.tsx` with CTA + music fade

**Skills Used:**
- `remotion-best-practices` for animation timing
- `vercel-composition-patterns` for component structure
- `vercel-react-best-practices` for React hooks

### Phase 3: Video Rendering (45 min)

**GOAP Action:** `RENDER_VIDEO`

**Single Execution:**
- Render full 10-minute composition
- Output to `out/kimi-comet-chat-full-10min.mp4`

**Verification:**
- Browser playback test using `browser-automation` skill
- Audio sync verification

### Phase 4: Thumbnail & Polish (10 min)

**GOAP Action:** `CREATE_THUMBNAIL`

**Single Execution:**
- Generate YouTube-optimized thumbnail
- Create YouTube description with timestamps

---

## Detailed Task Breakdown

### Task 1: Asset Preparation

```yaml
task: ASSET_PREP
mode: single
skills: [pptx-reader, browser-automation]
actions:
  - copy: "assets/*.mp4" → "remotion-video/public/"
  - copy: "assets/*.mp3" → "remotion-video/public/"
  - copy: "assets/*.png" → "remotion-video/public/"
  - analyze: "ElevenLabs_kimi-comet-chat-full-video.mp3" duration
  - download: "Pixabay Chill Study LoFi" as "background-music.mp3"
  - extract: PPTX content to "extracted-content.json"
```

### Task 2: Main Composition

```yaml
task: CREATE_MAIN_COMPOSITION
mode: parallel
agents: 3
skills: [remotion-best-practices, vercel-composition-patterns]
actions:
  - agent_1:
      task: Create Intro composition
      file: "src/compositions/Intro.tsx"
      features: [ElevenLabs audio, logo spring animation, title reveal]
      duration: 10 sec
  
  - agent_2:
      task: Create Main Content composition
      file: "src/compositions/MainContent.tsx"
      features: [video segments, text overlays from PPTX, music mixing]
      duration: 9 min 40 sec
  
  - agent_3:
      task: Create Outro composition
      file: "src/compositions/Outro.tsx"
      features: [CTA, subscribe button, end card]
      duration: 10 sec
```

### Task 3: Video Rendering

```yaml
task: RENDER_VIDEO
mode: single
actions:
  - bundle: "src/Root.tsx"
  - render: "MainVideo" composition
  - output: "out/kimi-comet-chat-full-10min.mp4"
  - codec: "h264"
  - fps: 30
  - duration: 600 frames (10 min @ 30fps)
```

### Task 4: Thumbnail Generation

> **Uses Skill**: `@skills/brand-compliant-thumbnails/` for brand-compliant, high-CTR thumbnails

```yaml
task: CREATE_THUMBNAIL
mode: single
skill: brand-compliant-thumbnails
actions:
  - generate: "thumbnail.png" (1280x720) using brand-compliant-thumbnails skill
  - apply: 2026 best practices (3-5 words, bold outlines, visual cues)
  - use: Kimi brand colors (#667eea, #00d4ff, #ffd700)
  - create: "youtube-description.md"
  - create: "video-metadata.json"
reference: skills/brand-compliant-thumbnails/SKILL.md
```

---

## Parallel Execution Matrix

| Time | Agent 1 | Agent 2 | Agent 3 |
|------|---------|---------|---------|
| 0-5 min | Asset Prep | Asset Prep | Asset Prep |
| 5-20 min | Intro.tsx | MainContent.tsx | Outro.tsx |
| 20-65 min | (Idle) | (Idle) | (Idle) |
| 65-75 min | Thumbnail | - | - |

**Total Wall Time:** ~75 minutes (not 2-3 hours due to parallelization)

---

## Code Structure

```
remotion-video/
├── public/
│   ├── 1-Recording 2026-01-28 130105.mp4
│   ├── 2-Recording 2026-01-28 130218.mp4
│   ├── 3-Recording 2026-01-28 130727.mp4
│   ├── ElevenLabs_kimi-comet-chat-full-video.mp3
│   ├── background-music.mp3
│   └── final-0-99-output.png
├── src/
│   ├── compositions/
│   │   ├── Intro.tsx          # Agent 1
│   │   ├── MainContent.tsx    # Agent 2
│   │   ├── Outro.tsx          # Agent 3
│   │   └── FullVideo.tsx      # Master composition
│   ├── components/
│   │   ├── TextOverlay.tsx
│   │   ├── VideoSegment.tsx
│   │   ├── MusicMixer.tsx
│   │   └── LogoWatermark.tsx
│   ├── utils/
│   │   ├── audio-sync.ts
│   │   ├── timing.ts
│   │   └── constants.ts
│   └── Root.tsx
└── output/
    └── kimiche.comet-chat-full-10min.mp4
```

---

## Audio Mixing Configuration

```typescript
// Audio timeline
const AUDIO_MIX = {
  intro: {
    source: "ElevenLabs_kimi-comet-chat-full-video.mp3",
    start: 0,
    volume: 1.0,
    duration: null // Use actual file duration
  },
  background: {
    source: "background-music.mp3",
    start: 0,
    volume: 0.3, // 30% of voiceover volume
    loop: true
  }
};
```

---

## Text Overlay System

```typescript
// Synchronize text to PPTX content + video timing
const TEXT_OVERLAYS = [
  { time: 5, text: "KIMI COMET", duration: 60 },
  { time: 15, text: "$0.99 NEGOTIATION", duration: 120 },
  { time: 60, text: "The Problem: AI Pricing", duration: 90 },
  { time: 150, text: "Analyze the Sale Page", duration: 120 },
  { time: 270, text: "The Exploit Prompt", duration: 180 },
  { time: 450, text: "Kimi's Response", duration: 150 },
  { time: 600, text: "The Result: $0.99/month", duration: 180 },
  { time: 780, text: "Subscribe for More Tips", duration: 60 }
];
```

---

## Success Criteria

| Metric | Target | Measurement |
|--------|--------|-------------|
| Video duration | 10:00 ± 0:30 | FFprobe |
| Audio sync | < 100ms drift | Manual verification |
| File size | < 200MB | File check |
| Resolution | 1920x1080 | FFprobe |
| Frame rate | 30 fps | FFprobe |
| YouTube-ready | Yes | Upload test |

---

## Risk Mitigation

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Audio sync issues | Medium | High | Use Remotion's Audio component |
| Music license | Low | High | Use Pixabay CC0 only |
| Render timeout | Medium | Medium | Use cloud rendering if needed |
| Memory issues | Low | Medium | 1080p instead of 4K |

---

## Post-Production

After video render:
1. Upload to YouTube (unlisted first)
2. Verify playback in browser
3. Add chapters based on TEXT_OVERLAYS timestamps
4. Create end screens
5. Publish with optimized title/tags

---

**Plan Version:** 1.0
**Created:** January 29, 2026
**GOAP Orchestrator:** Active

# Thumbnail Generation Plan: Kimi Comet Chat Videos

## Goal
Create high-converting YouTube thumbnails for both videos:
1. **Main Video** (10-min tutorial): 1280x720 pixels (16:9)
2. **Short Video** (60-sec Short): 1280x720 pixels (16:9) - YouTube will crop to 9:16 on mobile

## State
**Initial State**: Videos uploaded to YouTube, no custom thumbnails
**Final State**: Both videos have custom thumbnails uploaded to YouTube

## Reference Data

### Main Video
- **Title**: "I Negotiated Kimi AI Down to $0.99/Month - Here's the Exploit Prompt Method That Actually Works"
- **URL**: https://youtu.be/J7ixZts5GyY
- **Duration**: 10:07
- **Key Elements**: $0.99 price point, prompt engineering, Kimi AI logo, negotiation

### Short Video
- **Title**: "I Got Kimi AI for $0.99/Month Using This Prompt 🤯 #Shorts #KimiAI #PromptEngineering"
- **URL**: https://youtu.be/ZMLsLDtR7N8
- **Key Elements**: $0.99 vs $9.99 comparison, shocked reaction, bright colors, swipe up CTA
- **Thumbnail Notes from Metadata**:
  - High contrast text: "$0.99" vs "$9.99" with slash through
  - Kimi logo or AI-themed visual
  - Shocked face reaction (top right corner)
  - Arrow pointing to phone/screen
  - Bright gradient background (purple/pink)
  - Top text: "THEY DON'T WANT YOU TO KNOW"
  - Middle: "$0.99" (large, glowing effect)
  - Bottom: "Swipe up for full tutorial"

## Agents Required (3 Specialist Agents)

### Agent 1: Thumbnail Designer & Generator
- **Task**: Create both thumbnail images using Remotion/React components
- **Input**: 
  - Video metadata from `plans/agent-outputs/youtube-metadata/`
  - Color palette: `#667eea` (primary), `#764ba2` (secondary), `#0a0a0f` (background)
  - Fonts: system-ui with bold weights
- **Output**: 
  - `thumbnail-main.png` (1280x720)
  - `thumbnail-short.png` (1280x720)
  - Location: `remotion-video/out/`
- **Tech**: Remotion components (similar to existing video project)
- **Parallel**: YES (works independently)

### Agent 2: Dropbox Uploader
- **Task**: Upload generated thumbnails to Dropbox for backup
- **Input**: 
  - `thumbnail-main.png`
  - `thumbnail-short.png`
- **Output**: Dropbox URLs for both thumbnails
- **Depends on**: Agent 1 complete
- **Parallel**: NO (requires Agent 1)

### Agent 3: YouTube Thumbnail Updater
- **Task**: Update both YouTube videos with custom thumbnails
- **Input**: 
  - Local thumbnail files
  - YouTube video IDs: `J7ixZts5GyY` (main), `ZMLsLDtR7N8` (short)
- **Output**: Updated video thumbnails on YouTube
- **Depends on**: Agent 1 complete
- **Parallel**: YES (can work simultaneously with Agent 2)

## Workflow

```
Phase 1:
└── Agent 1: Create thumbnails (Remotion/React) ───────┐
                                                      ↓
Phase 2 (Parallel, after Phase 1):
├── Agent 2: Upload to Dropbox ───────────────────────┤
└── Agent 3: Update YouTube thumbnails ───────────────┘
                                                      ↓
Phase 3:
└── Results Aggregator: Report all URLs and status
```

## Thumbnail Specifications

### Main Video Thumbnail (1280x720)
**Layout**: Standard YouTube thumbnail format
**Design Elements**:
- **Background**: Dark gradient (#0a0a0f to #1a1a2e) with subtle grid pattern
- **Left Side**: Kimi logo or AI-related icon (purple glow)
- **Right Side**: Large text "$0.99" in bright cyan/teal (#00ffff)
- **Subtitle**: "INSTEAD OF $9.99" in smaller white text with strikethrough on $9.99
- **Bottom**: "THE EXPLOIT PROMPT METHOD" in bold white
- **Accent**: Purple/blue glow effect around key elements
- **Safety Zone**: Keep text within center 1280x360 to avoid mobile cropping

### Short Video Thumbnail (1280x720)
**Layout**: Optimized for both 16:9 and 9:16 display
**Design Elements**:
- **Background**: Bright gradient (purple #667eea to pink #f093fb)
- **Top Text**: "THEY DON'T WANT YOU TO KNOW" in bold black/white
- **Center**: Large "$0.99" with glowing effect, "$9.99" crossed out behind it
- **Icon**: Kimi AI logo or lightning bolt emoji
- **Bottom**: "Swipe up for tutorial" with arrow
- **Mobile Optimization**: Key elements in center 720x720 zone

## Success Criteria
- [ ] Main video thumbnail created (1280x720 PNG, <2MB)
- [ ] Short video thumbnail created (1280x720 PNG, <2MB)
- [ ] Thumbnails uploaded to Dropbox with URLs
- [ ] YouTube videos updated with custom thumbnails
- [ ] Thumbnails are visually appealing and click-worthy
- [ ] Text readable at small sizes (mobile)

## YouTube Thumbnail Requirements
- Format: JPG or PNG
- Resolution: 1280x720 (minimum width: 640 pixels)
- Aspect Ratio: 16:9
- File Size: <2MB
- Color Space: RGB

## Color Palette
```typescript
const colors = {
  primary: '#667eea',
  secondary: '#764ba2',
  accent: '#00ffff', // cyan for $0.99
  background: '#0a0a0f',
  backgroundLight: '#1a1a2e',
  white: '#ffffff',
  pink: '#f093fb',
};
```

## Output Locations

- `remotion-video/src/thumbnails/` - Thumbnail React components
- `remotion-video/out/thumbnail-main.png` - Main video thumbnail
- `remotion-video/out/thumbnail-short.png` - Short video thumbnail
- `plans/agent-outputs/thumbnail-generator/` - Generation status and logs
- `plans/handoffs/handoff-thumbnails-to-youtube.md` - Handoff document

## Session IDs

- `thumbnail-generation` - Agent 1
- `thumbnail-dropbox` - Agent 2  
- `thumbnail-youtube-update` - Agent 3

## Reference Files

All agents need access to:
- `AGENTS.md` - Project guidelines and color palette
- `plans/agent-outputs/youtube-metadata/main-video.md` - Main video metadata
- `plans/agent-outputs/youtube-metadata/short-video.md` - Short video metadata
- `remotion-video/src/` - Existing Remotion components for reference
- `VIDEOS.md` - Video URLs and Dropbox links

## Implementation Approach

**Option A: Remotion-based (Recommended)**
- Create thumbnail components using existing Remotion setup
- Use `still()` export to generate static PNG
- Leverages existing color palette and animation utilities

**Option B: HTML/CSS to Image**
- Create HTML template with inline styles
- Use puppeteer or similar to capture screenshot
- Simpler but less consistent with brand

**Selected**: Option A (Remotion) - maintains consistency with video project

## Estimated Timeline

| Phase | Duration | Parallel Agents |
|-------|----------|----------------|
| 1 - Generation | 10 min | 1 |
| 2 - Upload/Distribution | 5 min | 2 |
| **Total Wall Time** | **~15 minutes** | - |

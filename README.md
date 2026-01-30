# Kimi Comet Chat - $0.99 Series

<div align="center">

[![Remotion](https://img.shields.io/badge/Built%20with-Remotion-cyan?style=for-the-badge&logo=react)](https://remotion.dev)
[![YouTube](https://img.shields.io/badge/Watch%20on-YouTube-red?style=for-the-badge&logo=youtube)](https://youtube.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)](https://typescriptlang.org)

A professional YouTube video production using **Remotion** - the React-powered video creation framework.

</div>

---

## About This Project

Complete source code for the **"Kimi Comet Chat - $0.99 Series"** YouTube video. Demonstrates an AI-powered negotiation strategy using Kimi (Moonshot AI) to secure the lowest legitimate first-month subscription price.

### What You'll Find

- **Intro/Outro Sequences** - Cinematic opening and closing with animated text
- **Main Content Segments** - Three video segments showing the negotiation process
- **Text Overlay System** - Dynamic, animated text overlays with fade effects
- **Progress Indicators** - Visual progress bars and timeline markers
- **Audio Integration** - Background music with volume control

---

## Quick Start

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** or **yarn**
- **FFmpeg** (for video rendering)

### Installation

```bash
cd remotion-video
npm install
```

### Development

```bash
npm run dev
```

### Rendering

```bash
npm run build              # Full video to out/video.mp4
npm run build-intro        # Intro only
npm run build-segment1     # Segment 1
npm run build-segment2     # Segment 2
npm run build-segment3     # Segment 3
npm run build-outro        # Outro only
```

---

## Project Structure

```
remotion-video/
├── src/
│   ├── Root.tsx              # Main composition entry point
│   ├── compositions/
│   │   ├── Intro.tsx         # Opening sequence
│   │   ├── MainContent.tsx   # Main video content
│   │   ├── MainVideo.tsx     # Full video composition
│   │   ├── Outro.tsx         # Closing sequence
│   │   ├── Segment1.tsx      # Step 1: Analyze sale page
│   │   ├── Segment2.tsx      # Step 2: Extract constraints
│   │   └── Segment3.tsx      # Step 3: Execute workflow
│   ├── components/
│   │   ├── Intro.tsx, Outro.tsx, ProgressBar.tsx
│   │   ├── SlideTransition.tsx, TitleCard.tsx
│   │   ├── TransitionEffect.tsx, VideoOverlay.tsx
│   │   └── VideoSegment.tsx
│   └── styles/
│       └── global.css
├── static/                   # Static assets
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Key Features

### Dynamic Text Overlays
- Fade-in/fade-out animations
- Customizable duration and timing
- Semi-transparent backgrounds
- Responsive typography

### Multi-Segment Composition
- **Intro** (90 frames @ 30fps)
- **Segment 1** - The Exploit Prompt (143 seconds)
- **Segment 2** - Kimi's Response (437 seconds)
- **Segment 3** - The 3-Phase Workflow (20 seconds)
- **Outro** (120 frames @ 30fps)

### Sequence Management
- Frame-perfect transitions
- Layered audio control
- Background video with overlays

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI component framework |
| **Remotion 4.0** | Video creation framework |
| **TypeScript 5.3** | Type safety |
| **Vite 5** | Build tool and dev server |
| **FFmpeg** | Video encoding |

---

## Dependencies

```json
{
  "@remotion/bundler": "^4.0.410",
  "@remotion/cli": "^4.0.410",
  "@remotion/player": "^4.0.410",
  "@remotion/renderer": "^4.0.410",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "remotion": "^4.0.410"
}
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Render full video |
| `npm run build-intro/outro` | Render specific segments |
| `npm run typecheck` | TypeScript type checking |

---

## Video Sections

### Section 1: The Exploit Prompt (~143s)
Analyzes the Kimi sale page to identify negotiation opportunities.

### Section 2: Kimi's Response (~437s)
Demonstrates how Kimi AI responds to strategic negotiation prompts.

### Section 3: The 3-Phase Workflow (~20s)
Shows the complete execution of the negotiation script.

---

## Configuration

Video settings in `src/Root.tsx`:
- **Resolution:** 1920x1080 (1080p)
- **Frame Rate:** 30 fps
- **Format:** MP4 (H.264)

---

## Resources

- [Remotion Documentation](https://remotion.dev/docs)
- [Remotion GitHub](https://github.com/remotion-dev/remotion)
- [React Documentation](https://react.dev)

---

## Acknowledgments

- **[Remotion](https://remotion.dev)** - Amazing video creation framework for React
- **[Moonshot AI](https://www.mimenshi.com)** - Kimi AI capabilities

---

<div align="center">

**Built with love using Remotion**

</div>

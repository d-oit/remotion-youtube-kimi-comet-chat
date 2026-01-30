# Kimi Comet Chat - Agent Guidelines

**Version 1.0.0**  
January 2026

> This document provides coding guidelines and commands for AI agents working on this Remotion video project.

---

## Commands

### Development

```bash
cd remotion-video
npm run dev              # Start development server
npm run typecheck         # TypeScript type checking
```

### Video Rendering

```bash
npm run build              # Render full video to out/video.mp4
npm run build-intro        # Intro only (90 frames)
npm run build-segment1     # Step 1: The Exploit Prompt (~143s)
npm run build-segment2     # Step 2: Kimi's Response (~437s)
npm run build-segment3     # Step 3: The 3-Phase Workflow (~20s)
npm run build-outro        # Outro only (120 frames)
```

### Testing

No test framework is currently configured. When adding tests:
- Use Vitest (already installed via Vite)
- Run single test: `npm test -- path/to/test.test.ts`
- Run all tests: `npm test`

---

## Tech Stack

- **React 18.3.1** - UI components
- **Remotion 4.0.410** - Video creation framework
- **TypeScript 5.3** - Type safety (strict mode enabled)
- **Vite 5** - Build tool and dev server
- **FFmpeg** - Video encoding (required for rendering)

---

## Code Style Guidelines

### Component Structure

**Use functional components with `React.FC` annotation:**

```tsx
export const ComponentName: React.FC = () => {
  return <div>Content</div>;
};
```

**With props interface:**

```tsx
interface ComponentProps {
  videoPath: string;
  title: string;
  segmentIndex: number;
}

export const Component: React.FC<ComponentProps> = ({ videoPath, title, segmentIndex }) => {
  return <div>{title}</div>;
};
```

### Remotion Hooks and Imports

**Always import from `remotion` package:**

```tsx
import { AbsoluteFill, Img, Audio, Video, useVideoConfig } from 'remotion';
import { useCurrentFrame, spring, interpolate, useSpring } from 'remotion';
```

**Use `staticFile()` for asset paths:**

```tsx
const VIDEO = staticFile('recording.mp4');
const LOGO = staticFile('logo.png');
<Audio src={staticFile('background-music.mp3')} />
```

### Animations and Interpolation

**Centralize animation configs in `utils/animation.ts`:**

```tsx
import { springConfig } from '../utils/animation';

const scale = spring({ frame, config: springConfig.default });
const opacity = interpolate(frame, [0, 30], [0, 1], { extrapolateLeft: 'clamp' });
```

**Use `useSpring` for component-level animations:**

```tsx
const opacity = useSpring({ frame: 20, config: springConfig.gentle });
```

### Styling

**Inline styles only (no CSS-in-JS library):**

```tsx
<div style={{
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)',
  fontSize: 80,
  fontWeight: 800,
  color: '#ffffff',
  fontFamily: 'system-ui, -apple-system, sans-serif'
}}>
```

**Use `AbsoluteFill` for full-screen layouts:**

```tsx
<AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
  <div>Centered content</div>
</AbsoluteFill>
```

### Video Composition Structure

**Use `Sequence` for timed segments:**

```tsx
<Sequence from={0} duration={90}>
  <Intro />
</Sequence>

<Sequence from={90} duration={VIDEO_1_DURATION}>
  <VideoSegment />
</Sequence>
```

**Define durations as constants at top:**

```tsx
const INTRO_DURATION = 90;
const VIDEO_1_DURATION = 143 * 30;
const VIDEO_2_DURATION = 437 * 30;
const OUTRO_DURATION = 120;

const TOTAL_FRAMES = INTRO_DURATION + VIDEO_1_DURATION + VIDEO_2_DURATION + OUTRO_DURATION;
```

### File Organization

```
remotion-video/src/
├── components/          # Reusable UI components
│   ├── Intro.tsx
│   ├── Outro.tsx
│   ├── VideoSegment.tsx
│   └── index.ts
├── compositions/         # Video sequence definitions
│   ├── Intro.tsx
│   ├── FullVideo.tsx
│   └── index.ts
├── utils/
│   └── animation.ts     # Spring configs and easing functions
├── assets/
│   └── index.ts
├── Root.tsx            # Entry point, registers compositions
└── styles/
    └── global.css
```

### Naming Conventions

- **Components**: PascalCase (`VideoSegment`, `TitleCard`)
- **Files**: PascalCase for components (`VideoSegment.tsx`)
- **Constants**: UPPER_SNAKE_CASE (`VIDEO_1_DURATION`, `TOTAL_FRAMES`)
- **Props interfaces**: ComponentName + Props (`VideoSegmentProps`)
- **Utilities**: camelCase (`easeInOut`, `elastic`)

### Imports

**Group imports in this order:**

```tsx
// 1. Third-party packages
import { AbsoluteFill, Video } from 'remotion';
import React from 'react';

// 2. Internal imports (absolute paths via @ alias)
import { springConfig } from '@/utils/animation';
import { Intro } from './compositions/Intro';
```

### TypeScript Configuration

**Strict mode enabled - always provide types:**

```tsx
interface VideoSegmentProps {
  videoPath: string;
  title: string;
  description: string;
  segmentIndex: number;
}

export const VideoSegment: React.FC<VideoSegmentProps> = ({ videoPath, title }) => {
  // TypeScript will catch type errors
};
```

### Color Palette

**Use consistent color variables:**

```tsx
const colors = {
  primary: '#667eea',
  secondary: '#764ba2',
  background: '#0a0a0f',
  white: '#ffffff',
  gray: {
    200: '#cbd5e0',
    400: '#718096',
  },
};
```

### Performance Best Practices

**Use `OffthreadVideo` for large video files:**

```tsx
<OffthreadVideo src={VIDEO_PATH} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
```

**Prefer `Video` for short clips:**

```tsx
<Video src={VIDEO_PATH} />
```

**Lazy-load expensive components with conditional rendering:**

```tsx
{shouldRender && <ExpensiveComponent />}
```

### Common Patterns

**Text overlay with fade in/out:**

```tsx
const opacity = interpolate(localFrame, [0, 30], [0, 1], { extrapolateLeft: 'clamp' });
const exitOpacity = interpolate(localFrame, [duration - 30, duration], [1, 0], { extrapolateLeft: 'clamp' });

<div style={{ opacity: Math.min(opacity, exitOpacity) }}>
  Text content
</div>
```

**Pulsing glow effect:**

```tsx
const pulse = 0.5 + Math.sin(frame * 0.05) * 0.3;
<div style={{ opacity: pulse }} />
```

**Progress bar:**

```tsx
const progress = interpolate(0, durationInFrames, [0, 1]);
<div style={{ flex: 1, height: 3, background: 'rgba(255,255,255,0.2)' }}>
  <div style={{ width: `${progress * 100}%`, height: '100%', background: '#667eea' }} />
</div>
```

---

## Video Specifications

- **Resolution**: 1920x1080 (1080p)
- **Frame Rate**: 30 fps
- **Format**: MP4 (H.264)
- **Audio**: Background music at 0.25 volume, narration at 1.0

---

## Error Handling

**Wrap asset references in try-catch when needed:**

```tsx
try {
  const asset = staticFile('video.mp4');
  return <Video src={asset} />;
} catch (error) {
  console.error('Failed to load video:', error);
  return <div>Fallback content</div>;
}
```

---

## Notes for Agents

1. **No tests configured** - When adding features, also add Vitest tests
2. **No linter configured** - Follow TypeScript strict mode rules
3. **No formatting config** - Use consistent indentation (2 spaces)
4. **Assets in `public/`** - Reference via `staticFile()` or `public/` path
5. **Video rendering is CPU-intensive** - Test small segments first
6. **Frame timing is critical** - Calculate durations carefully before rendering
7. **Use Remotion Player** for previewing without full render during development

---

## Resources

- [Remotion Documentation](https://remotion.dev/docs)
- [Remotion GitHub](https://github.com/remotion-dev/remotion)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

# Kimi Comet Chat - YouTube Video Composition

A professional Remotion-based video composition for YouTube featuring animated intros, video segments, smooth transitions, and call-to-action endings.

## Project Structure

```
remotion-video/
├── src/
│   ├── assets/
│   │   ├── final-0-99-output.png          # Logo/branding
│   │   └── index.ts                        # Asset exports
│   ├── components/
│   │   ├── Intro.tsx                       # Animated intro sequence
│   │   ├── VideoSegment.tsx                # Video segment wrapper
│   │   ├── TransitionEffect.tsx            # Transition effects
│   │   └── Outro.tsx                       # Call-to-action ending
│   ├── compositions/
│   │   └── VideoComposition.tsx            # Main composition
│   ├── utils/
│   │   └── animation.ts                    # Animation utilities
│   ├── index.css                           # Global styles
│   └── Root.tsx                            # Entry point
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Features

- **Animated Intro**: Stunning title animation with logo reveal
- **3 Video Segments**: Professional video playback with overlay effects
- **Smooth Transitions**: Slide, fade, and zoom-blur transitions
- **Animated Text**: Typography with spring-based animations
- **Call-to-Action**: Engaging outro with download prompt

## Technical Details

- Resolution: 1920x1080 (1080p)
- Frame Rate: 30 FPS
- Animation: Physics-based springs using `useSpring`
- Transitions: `interpolate` for smooth value transitions

## Available Assets

- `1-Recording 2026-01-28 130105.mp4` - Video recording 1
- `2-Recording 2026-01-28 130218.mp4` - Video recording 2
- `3-Recording 2026-01-28 130727.mp4` - Video recording 3
- `final-0-99-output.png` - Logo/branding image

## Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Render video
npm run build

# Run type checking
npm run typecheck

# Run linter
npm run lint
```

## Animation Configuration

Custom spring configurations in `src/utils/animation.ts`:
- `default`: Standard smooth animation
- `gentle`: Softer, slower animation
- `wobbly`: Bouncy, elastic feel
- `stiff`: Quick, precise animation
- `bouncy`: High elasticity

## Transition Types

- `slide-left`: Horizontal slide transition
- `fade`: Opacity fade transition
- `zoom-blur`: Zoom with blur effect

## Duration Breakdown

- Intro: 180 frames (6 seconds)
- Each Segment: 300 frames (10 seconds)
- Segment Gap: 60 frames (2 seconds)
- Outro: 120 frames (4 seconds)
- **Total: ~32 seconds**

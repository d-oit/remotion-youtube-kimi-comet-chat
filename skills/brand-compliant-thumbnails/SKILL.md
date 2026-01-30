---
name: youtube-thumbnails
description: Create stunning, high-CTR YouTube thumbnails using Remotion that avoid generic AI aesthetics. Use when creating thumbnails for YouTube videos, especially for tech/AI content about Kimi AI, Anthropic, Claude, or similar topics. Implements 2026 best practices with brand-compliant design.
---

# YouTube Thumbnail Creation with Remotion

Create scroll-stopping YouTube thumbnails that maximize CTR while avoiding generic AI slop. Built with Remotion for programmatic, reproducible designs.

## When to Use This Skill

Trigger this skill when:
- User asks to create a YouTube thumbnail
- User mentions "thumbnail" with video content
- User wants to design video cover images
- User references Remotion for thumbnail generation
- User asks for clickable, high-CTR video graphics

## Anti-Slop Principles

**NEVER create thumbnails with these AI slop characteristics:**
- ❌ Generic Inter/Roboto/Arial fonts
- ❌ Purple gradients on white backgrounds
- ❌ Cookie-cutter layouts (centered text + generic photo)
- ❌ Overused stock images or Unsplash aesthetics
- ❌ Predictable color schemes (blue-purple gradients)
- ❌ Timid, evenly-distributed color palettes
- ❌ Generic "professional" look without personality
- ❌ Boring symmetrical layouts
- ❌ Thin text without contrast/outlines
- ❌ Abstract geometric patterns without purpose

**ALWAYS create thumbnails with:**
- ✅ Bold, distinctive typography (700-900 font weights)
- ✅ High contrast color combinations (tested for mobile)
- ✅ Clear visual hierarchy with ONE focal point
- ✅ Text with thick outlines (3-5px) for readability
- ✅ Asymmetric, dynamic layouts
- ✅ Context-specific design choices
- ✅ Brand-aligned aesthetics (when applicable)
- ✅ Unexpected visual elements that create curiosity
- ✅ Professional polish without being generic

## 2026 Thumbnail Best Practices

### Text Rules (CRITICAL)
- **3-5 words maximum** (+30% CTR impact)
- **Bold fonts only** (weights 700-900)
- **3-5px black text outlines** for readability at any size
- **One clear message** - avoid competing text elements
- **Mobile-readable** at 168x94 pixels (smallest size)

### Visual Impact
| Element | CTR Impact | Implementation |
|---------|-----------|----------------|
| High-contrast colors | +30% | Yellow on black, cyan on dark purple |
| Visual cues (circles/arrows) | +25% | 1-2 maximum, purposeful placement |
| Single focal point | +20% | One subject dominates composition |
| Expressive faces (if applicable) | +20-30% | Real emotion, not stock smiles |
| Bold text outlines | +15% | 3-5px stroke for mobile readability |

### Mobile-First Design
- Primary content in **center 720x405px safe zone**
- Test readability at 168x94px (mobile grid view)
- Maintain WCAG AA contrast (4.5:1 minimum)
- Keep critical elements 40px from edges

## Brand Guidelines

### Kimi AI (Moonshot AI)

**Brand Identity**:
- Tagline: "Visual Coding Meets Agent Swarm"
- Key features: Kimi Code, Agent Swarm, Websites, Docs, Slides, Sheets, Deep Research
- Logo: K with stylized design
- Brand assets: https://moonshotai.github.io/Branding-Guide/

**Official Colors**:
```typescript
const kimiColors = {
  primary: '#667eea',        // Kimi purple
  secondary: '#764ba2',      // Deep purple
  accent: '#00ffff',         // Cyan accent
  highlight: '#ffeb3b',      // Yellow highlight
  background: '#0a0a0f',     // Dark background
  backgroundLight: '#1a1a2e', // Light dark
  white: '#ffffff',
  black: '#000000',
};
```

**Typography**:
- Primary: System fonts, bold weights (700-900)
- Style: Modern, tech-forward, clean

### Anthropic / Comet / Claude

**Brand Identity**:
- Mission: "Making AI safe for humanity"
- Values: Trust, collaboration, clarity, human-centered
- Logo: Typographic with distinctive slash
- Typography: Styrene family (headings), Tiempos family (body)
- Designer: Geist studio (https://geist.co/work/anthropic)

**Official Color Palette**:
```typescript
const anthropicColors = {
  // Primary Palette
  dialogueAqua: '#4cc9f0',    // Main brand color
  safetyGold: '#ffd166',      // Accent/CTA
  reasonPurple: '#9d4edd',    // Secondary accent
  alignmentBlack: '#0d0d0d',  // Dark background
  promptWhite: '#fefefe',     // Light background
  contextCoral: '#f28482',    // Alert/urgency
  
  // Alternative Official Palette
  crail: '#C15F3C',           // Orange/rust
  cloudy: '#B1ADA1',          // Gray
  pampas: '#F4F3EE',          // Cream/off-white
  orange: '#d97757',          // Bright orange
  blue: '#6a9bcc',            // Steel blue
  green: '#788c5d',           // Sage green
  dark: '#141413',            // Near black
  light: '#faf9f5',           // Warm white
};
```

**Typography**:
- Headings: Styrene family (Commercial Type) or Poppins
- Body: Tiempos family (Klim) or Lora
- Fallbacks: system-ui, Arial, Georgia

## Implementation

### Using with Remotion

**Step 1: Import brand colors**
```typescript
import { brandColors } from './brand-palettes';

const { kimi, anthropic } = brandColors;
```

**Step 2: Create thumbnail component**
```typescript
export const KimiThumbnail: React.FC = () => {
  return (
    <AbsoluteFill style={{
      background: `linear-gradient(135deg, ${kimi.background} 0%, ${kimi.primary}20 100%)`,
    }}>
      {/* Anti-slop design - bold, distinctive, brand-compliant */}
    </AbsoluteFill>
  );
};
```

**Step 3: Export using still()**
```bash
npx remotion still src/Root.tsx ThumbnailName out/thumbnail.png
```

### Text Outline Function (2026 Standard)

```typescript
const createTextOutline = (color: string, size: number = 4) => ({
  textShadow: `
    ${size}px ${size}px 0 ${color},
    -${size}px -${size}px 0 ${color},
    ${size}px -${size}px 0 ${color},
    -${size}px ${size}px 0 ${color},
    0 ${size}px 0 ${color},
    0 -${size}px 0 ${color},
    ${size}px 0 0 ${color},
    -${size}px 0 0 ${color}
  `,
});
```

### Thumbnail Component Structure

```tsx
import React from 'react';
import { AbsoluteFill } from 'remotion';
import { brandColors, createTextOutline } from './brand-palettes';

const kimi = brandColors.kimi;

export const MainThumbnail: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(145deg, ${kimi.dark} 0%, ${kimi.primary}15 100%)`,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        fontFamily: '"Inter", "SF Pro Display", -apple-system, sans-serif',
      }}
    >
      {/* Grid pattern for tech aesthetic */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(${kimi.primary}10 1px, transparent 1px),
            linear-gradient(90deg, ${kimi.primary}10 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.5,
        }}
      />

      {/* Purple glow effect */}
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          background: `radial-gradient(circle, ${kimi.primary}25 0%, transparent 70%)`,
          filter: 'blur(100px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Main content */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', zIndex: 10 }}>
        {/* Headline */}
        <div style={{ padding: '14px 28px', background: `linear-gradient(135deg, ${kimi.primary}30 0%, ${kimi.secondary}40 100%)`, borderRadius: '12px', border: `3px solid ${kimi.primary}` }}>
          <span style={{ fontSize: '44px', fontWeight: 900, color: kimi.white, letterSpacing: '3px', ...createTextOutline(kimi.dark, 3) }}>
            90% OFF
          </span>
        </div>

        {/* Price with circle cue */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', width: '300px', height: '300px', border: `6px solid ${kimi.highlight}`, borderRadius: '50%', boxShadow: `0 0 40px ${kimi.highlight}` }} />
          <span style={{ fontSize: '190px', fontWeight: 900, color: kimi.accent, lineHeight: 1, ...createTextOutline(kimi.dark, 5), textShadow: `0 0 80px ${kimi.accent}` }}>
            $0.99
          </span>
        </div>

        {/* CTA */}
        <div style={{ marginTop: '24px', padding: '18px 45px', background: `linear-gradient(135deg, ${kimi.primary} 0%, ${kimi.secondary} 100%)`, borderRadius: '10px', border: `3px solid ${kimi.highlight}` }}>
          <span style={{ fontSize: '40px', fontWeight: 900, color: kimi.white, letterSpacing: '3px', ...createTextOutline(kimi.dark, 3) }}>
            LIMITED TIME
          </span>
        </div>
      </div>

      {/* Visual cue arrow */}
      <div style={{ position: 'absolute', left: '80px', top: '50%', transform: 'translateY(-50%)', zIndex: 5 }}>
        <svg width="130" height="70" viewBox="0 0 130 70" style={{ filter: `drop-shadow(0 0 15px ${kimi.highlight})` }}>
          <path d="M10 35 L90 35 L90 15 L120 35 L90 55 L90 35" fill={kimi.highlight} />
        </svg>
      </div>

      {/* Sparkle effects */}
      <div style={{ position: 'absolute', right: '140px', top: '22%', fontSize: '55px', color: kimi.highlight, filter: `drop-shadow(0 0 20px ${kimi.highlight})` }}>
        ✦
      </div>

      {/* Mobile safe zone indicator */}
      <div style={{ position: 'absolute', width: '720px', height: '405px', border: '3px dashed rgba(255,255,255,0.08)', pointerEvents: 'none', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '8px' }} />
    </AbsoluteFill>
  );
};

export default MainThumbnail;
```

### Shorts Thumbnail Template

```tsx
export const ShortThumbnail: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(145deg, ${kimi.primary} 0%, ${kimi.secondary} 50%, ${kimi.dark} 100%)`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: '"Inter", "SF Pro Display", -apple-system, sans-serif',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Background glow effects */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 80%, ${kimi.highlight}25 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, ${kimi.accent}20 0%, transparent 50%)
          `,
        }}
      />

      {/* TOP TEXT - 2 words max for Shorts */}
      <div style={{ position: 'absolute', top: '7%', textAlign: 'center', width: '100%', zIndex: 10 }}>
        <span style={{ fontSize: '46px', fontWeight: 900, color: kimi.white, textTransform: 'uppercase', letterSpacing: '4px', ...createTextOutline(kimi.dark, 3) }}>
          SECRET METHOD
        </span>
      </div>

      {/* Price Comparison - Center focal point */}
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', zIndex: 10 }}>
        {/* Old Price with strikethrough */}
        <span style={{ fontSize: '68px', fontWeight: 800, color: kimi.gray, textDecoration: 'line-through', textDecorationColor: kimi.danger, textDecorationThickness: '8px', opacity: 0.8, ...createTextOutline(kimi.dark, 2) }}>
          $9.99
        </span>

        {/* Lightning bolt visual cue */}
        <div style={{ position: 'absolute', right: '-130px', top: '15%', fontSize: '90px', filter: `drop-shadow(0 0 25px ${kimi.highlight})`, ...createTextOutline(kimi.dark, 2) }}>
          ⚡
        </div>

        {/* NEW PRICE with circle cue */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', width: '280px', height: '280px', border: `8px solid ${kimi.highlight}`, borderRadius: '50%', boxShadow: `0 0 50px ${kimi.highlight}` }} />
          <span style={{ fontSize: '150px', fontWeight: 900, color: kimi.accent, ...createTextOutline(kimi.dark, 5), textShadow: `0 0 80px ${kimi.accent}` }}>
            $0.99
          </span>
        </div>

        {/* KIMI label */}
        <span style={{ fontSize: '34px', fontWeight: 900, color: kimi.highlight, ...createTextOutline(kimi.dark, 2), letterSpacing: '3px' }}>
          KIMI AI HACK
        </span>
      </div>

      {/* BOTTOM CTA - Shorts optimized */}
      <div style={{ position: 'absolute', bottom: '7%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', zIndex: 10 }}>
        <div style={{ fontSize: '30px', fontWeight: 900, color: kimi.dark, background: kimi.highlight, padding: '16px 45px', borderRadius: '50px', ...createTextOutline(kimi.white, 1), boxShadow: `0 0 35px ${kimi.highlight}` }}>
          SWIPE UP
        </div>
        <div style={{ fontSize: '44px', color: kimi.white, ...createTextOutline(kimi.dark, 2), animation: 'bounce 1.2s ease-in-out infinite' }}>
          ↓
        </div>
      </div>

      {/* Mobile safe zone - 9:16 crop area for Shorts */}
      <div style={{ position: 'absolute', width: '405px', height: '720px', border: '3px dashed rgba(255,255,255,0.12)', pointerEvents: 'none', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '8px' }} />

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(12px); }
        }
      `}</style>
    </AbsoluteFill>
  );
};
```

## Design Templates

### Kimi AI Thumbnail Template

**Layout**:
- Background: Dark gradient (#0a0a0f to #161b22) with tech grid
- Top: Bold headline in white with black outline (3-5 words)
- Center: Large "$0.99" in cyan (#00ffff) with yellow (#ffeb3b) circle
- Bottom: CTA badge ("AGENT DEAL", "LIMITED TIME", etc.)
- Visual cues: Lightning bolt, arrows, sparkles

**Color Application**:
- Primary text: White with 4px black outline
- Price highlight: Cyan (#00ffff) + Yellow (#ffeb3b) circle
- Background: Dark (#0a0a0f) with purple (#667eea) glow

### Anthropic/Comet Thumbnail Template

**Layout**:
- Background: Clean light (#faf9f5) or dark (#0d0d0d)
- Top: "COMET" or "CLAUDE" in Styrene-style font
- Center: Key value proposition
- Bottom: "BROWSER AGENT" or "AI AUTOMATION"
- Visual cues: Minimal, trust-focused design

**Color Application**:
- Primary: Dialogue Aqua (#4cc9f0) for trust
- Accent: Safety Gold (#ffd166) for CTAs
- Background: Prompt White (#fefefe) or Alignment Black (#0d0d0d)
- Text: Dark (#141413) on light, White on dark

### High-CTR Angle Templates

| Angle | Headline Examples | CTA | Strategy |
|-------|-------------------|-----|----------|
| **Discount/Urgency** | "90% OFF", "LIMITED TIME", "LAST CHANCE" | "CLAIM NOW" | Scarcity |
| **Exclusive/Intrigue** | "SECRET METHOD", "THEY HIDE THIS" | "SWIPE UP" | Curiosity gap |
| **Feature-Focused** | "AGENT SWARM", "VISUAL CODING" | "LEARN MORE" | Value proposition |
| **Contrast/Value** | "DITCH THE PREMIUM PRICE", "CHEAPER ALTERNATIVE" | "TRY IT FREE" | Direct comparison |
| **Results** | "AUTOMATE EVERYTHING", "10X FASTER" | "GET STARTED" | Benefit-driven |

### Registering Thumbnails in Root.tsx

```tsx
import { Still, registerRoot } from 'remotion';
import { MainThumbnail } from './thumbnails/MainThumbnail';
import { ShortThumbnail } from './thumbnails/ShortThumbnail';
import { MainThumbnailV2 } from './thumbnails/MainThumbnailV2';
import { ShortThumbnailV2 } from './thumbnails/ShortThumbnailV2';

registerRoot(() => {
  return (
    <>
      <Still
        id="MainThumbnail"
        component={MainThumbnail}
        width={1280}
        height={720}
      />
      <Still
        id="ShortThumbnail"
        component={ShortThumbnail}
        width={1280}
        height={720}
      />
      <Still
        id="MainThumbnailV2"
        component={MainThumbnailV2}
        width={1280}
        height={720}
      />
      <Still
        id="ShortThumbnailV2"
        component={ShortThumbnailV2}
        width={1280}
        height={720}
      />
    </>
  );
});
```

### Rendering Thumbnails

```bash
# Render main thumbnail
npx remotion still src/Root.tsx MainThumbnail out/thumbnail-main.png

# Render Shorts thumbnail
npx remotion still src/Root.tsx ShortThumbnail out/thumbnail-short.png

# Render V2 variants
npx remotion still src/Root.tsx MainThumbnailV2 out/thumbnail-main-v2.png
npx remotion still src/Root.tsx ShortThumbnailV2 out/thumbnail-short-v2.png
```

## Brand Compliance Checklist

Before finalizing thumbnails:

- [ ] **Anti-slop**: Not generic, distinctive visual identity
- [ ] **3-5 words maximum** in headlines
- [ ] **Bold text outlines** (3-5px) for mobile readability
- [ ] **High contrast colors** (WCAG AA compliant)
- [ ] **Single focal point** with visual hierarchy
- [ ] **Using official brand hex codes** (when applicable)
- [ ] **Mobile-readable** at 168x94px
- [ ] **Visual cues** (1-2 maximum) enhance not distract
- [ ] **File size < 2MB**
- [ ] **1280x720 resolution**
- [ ] **Safe zone**: Content in center 720x405px

## Quick Reference

### Kimi Brand Colors (Copy-Paste)
```
Primary Purple: #667eea
Deep Purple: #764ba2
Cyan Accent: #00ffff
Yellow Highlight: #ffeb3b
Dark BG: #0a0a0f
```

### Anthropic Brand Colors (Copy-Paste)
```
Dialogue Aqua: #4cc9f0
Safety Gold: #ffd166
Reason Purple: #9d4edd
Alignment Black: #0d0d0d
Prompt White: #fefefe
Context Coral: #f28482
```

### 2026 CTR Quick Wins
| Element | Implementation |
|---------|----------------|
| Text words | 3-5 max |
| Text outline | 4px black |
| Colors | Cyan + yellow on dark |
| Focal point | One circle with price |
| Safe zone | 720x405 center |
| Font weight | 700-900 only |

### Common Mistakes to Avoid

| Mistake | Why It's Bad | Fix |
|---------|--------------|-----|
| Thin text | Unreadable on mobile | Use 700-900 weights + outlines |
| Centered everything | Boring, generic | Asymmetric, dynamic layout |
| No contrast | Gets lost in feed | Cyan on dark, yellow highlights |
| Too many words | Confuses viewer | 3-5 words maximum |
| Generic gradients | AI slop aesthetic | Custom, purposeful design |
| No visual cue | Lower CTR | Add circle, arrow, or sparkles |

## Resources

- Kimi Brand Guidelines: https://moonshotai.github.io/Branding-Guide/
- Anthropic Brand (Geist): https://geist.co/work/anthropic
- Remotion Documentation: https://remotion.dev/docs
- Mobile thumbnail size: 1280x720 (YouTube standard)
- YouTube thumbnail specs: 1280x720px, JPG or PNG, <2MB

## Example Gallery

### Variant 1: Brand-Focused (Original)
- Headline: "KIMI AI"
- Price: "$0.99" with yellow circle
- CTA: "AGENT DEAL"
- Strategy: Trust and brand recognition

### Variant 2: Discount Focus (V5)
- Headline: "90% OFF"
- Price: "$0.99" with cyan accent
- CTA: "LIMITED TIME"
- Strategy: Scarcity and savings

### Variant 3: Feature Focus (V6)
- Headline: "AGENT SWARM"
- Price: "$0.99" with yellow highlight
- CTA: "UNBELIEVABLE"
- Strategy: Feature differentiation

### Variant 4: Intrigue (Shorts V2)
- Headline: "SECRET METHOD"
- Price: "$0.99" vs "$9.99" crossed out
- CTA: "SWIPE UP"
- Strategy: Curiosity gap

### Variant 5: Value Contrast (Shorts V3)
- Headline: "DITCH THE PREMIUM PRICE"
- Price: "$0.99" with arrow
- CTA: "TRY IT FREE"
- Strategy: Direct comparison

Each variant tests different psychological triggers while maintaining brand compliance and anti-slop principles.
// Brand color palettes for thumbnails

// Kimi AI Official Brand Colors (from Moonshot AI Brand Guidelines)
// Source: skills/brand-compliant-thumbnails/SKILL.md
const kimiBrand = {
  // Primary Palette - Official Moonshot AI colors
  primary: '#667eea',        // Kimi purple
  secondary: '#764ba2',      // Deep purple
  accent: '#00ffff',         // Cyan accent (official)
  highlight: '#ffeb3b',      // Yellow highlight (official)
  
  // Background Colors
  background: '#0a0a0f',     // Dark background (official)
  dark: '#0a0a0f',           // Alias for background
  darkSecondary: '#161b22',  // Slightly lighter dark
  darkTertiary: '#21262d',   // Card/element background
  
  // Text Colors
  white: '#ffffff',
  black: '#000000',
  gray: '#8b949e',           // Secondary text
  lightGray: '#c9d1d9',      // Body text
  
  // Accent Colors
  success: '#3fb950',        // Green for positive
  warning: '#d29922',        // Yellow/orange for attention
  danger: '#f85149',         // Red for strikethrough
};

// Anthropic/Comet Official Brand Colors
const anthropicBrand = {
  // Primary Palette (from Geist design)
  dialogueAqua: '#4cc9f0',   // Main brand color
  safetyGold: '#ffd166',     // Accent/CTA
  reasonPurple: '#9d4edd',   // Secondary
  alignmentBlack: '#0d0d0d', // Dark
  promptWhite: '#fefefe',    // Light
  contextCoral: '#f28482',   // Alert
  
  // Extended Palette
  crail: '#C15F3C',          // Orange/rust
  cloudy: '#B1ADA1',         // Gray
  pampas: '#F4F3EE',         // Cream
  sage: '#788c5d',           // Green
};

// Export for use in components
export const brandColors = {
  kimi: kimiBrand,
  anthropic: anthropicBrand,
};

// 2026 Best Practice: Bold text outline for mobile readability
export const createTextOutline = (color: string, size: number = 4) => ({
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

// 2026 Best Practice: Glow effect
export const createGlow = (color: string, intensity: number = 30) => ({
  filter: `drop-shadow(0 0 ${intensity}px ${color})`,
});

export default brandColors;

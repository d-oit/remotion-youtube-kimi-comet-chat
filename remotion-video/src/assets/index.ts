export const ASSETS = {
  video1: '/assets/1-Recording 2026-01-28 130105.mp4',
  video2: '/assets/2-Recording 2026-01-28 130218.mp4',
  video3: '/assets/3-Recording 2026-01-28 130727.mp4',
  logo: '/assets/final-0-99-output.png',
  presentation: '/assets/d-oit Kimi $0.99 Series.pptx',
} as const;

export type AssetKey = keyof typeof ASSETS;

export function getAssetPath(key: AssetKey): string {
  return ASSETS[key];
}

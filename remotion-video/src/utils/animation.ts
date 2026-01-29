import { SpringConfig } from 'remotion';

export const springConfig: Record<string, SpringConfig> = {
  default: {
    mass: 1,
    damping: 18,
    stiffness: 180,
  },
  gentle: {
    mass: 1,
    damping: 20,
    stiffness: 100,
  },
  wobbly: {
    mass: 1,
    damping: 12,
    stiffness: 120,
  },
  stiff: {
    mass: 1,
    damping: 30,
    stiffness: 300,
  },
  bouncy: {
    mass: 1,
    damping: 8,
    stiffness: 150,
  },
};

export const easeInOut = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

export const easeOut = (t: number): number => {
  return 1 - Math.pow(1 - t, 3);
};

export const easeIn = (t: number): number => {
  return t * t * t;
};

export const elastic = (t: number): number => {
  const c4 = (2 * Math.PI) / 3;
  return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
};

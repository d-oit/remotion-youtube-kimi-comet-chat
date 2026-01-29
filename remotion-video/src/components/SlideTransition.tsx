import { useVideoConfig, useCurrentFrame } from 'remotion';
import { AbsoluteFill } from 'remotion';
import { ReactNode } from 'react';

interface SlideTransitionProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
}

export const SlideTransition: React.FC<SlideTransitionProps> = ({
  children,
  direction = 'left',
}) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  const transitionDuration = 30;
  const progress = Math.min(frame / transitionDuration, 1);
  const easeProgress = 1 - Math.pow(1 - progress, 3);

  const getTransform = () => {
    const offset = 1920 * easeProgress;
    switch (direction) {
      case 'left':
        return `translateX(-${offset}px)`;
      case 'right':
        return `translateX(${offset}px)`;
      case 'up':
        return `translateY(-${offset}px)`;
      case 'down':
        return `translateY(${offset}px)`;
      default:
        return 'translateX(0)';
    }
  };

  return (
    <AbsoluteFill className="overflow-hidden">
      <div
        className="w-full h-full"
        style={{
          transform: getTransform(),
          transition: 'transform 0.1s linear',
        }}
      >
        {children}
      </div>
    </AbsoluteFill>
  );
};

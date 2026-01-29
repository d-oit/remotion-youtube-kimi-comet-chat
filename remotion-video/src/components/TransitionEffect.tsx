import { useVideoConfig, useSpring, interpolate, AbsoluteFill } from 'remotion';
import { springConfig } from '../utils/animation';

interface TransitionEffectProps {
  type: 'slide-left' | 'fade' | 'zoom-blur';
}

export const TransitionEffect = ({ type }: TransitionEffectProps) => {
  const { durationInFrames } = useVideoConfig();

  const slideProgress = useSpring({ frame: 0, config: springConfig.default });
  const fadeProgress = useSpring({ frame: 0, config: springConfig.default });
  const zoomProgress = useSpring({ frame: 0, config: springConfig.bouncy });
  const blurProgress = useSpring({ frame: 0, config: springConfig.default });

  const interpolatedSlide = interpolate(slideProgress, [0, 1], [1, 0]);
  const interpolatedFade = interpolate(fadeProgress, [0, 1], [1, 0]);
  const interpolatedZoom = interpolate(zoomProgress, [0, 1], [1.1, 1]);
  const interpolatedBlur = interpolate(blurProgress, [0, 1], [20, 0]);

  const renderSlideLeft = () => (
    <AbsoluteFill
      style={{
        background: '#0a0a0a',
        transform: `translateX(${interpolatedSlide * 1920}px)`,
      }}
    />
  );

  const renderFade = () => (
    <AbsoluteFill
      style={{
        background: '#0a0a0a',
        opacity: interpolatedFade,
      }}
    />
  );

  const renderZoomBlur = () => (
    <AbsoluteFill
      style={{
        background: '#0a0a0a',
        opacity: interpolatedFade,
        filter: `blur(${interpolatedBlur}px)`,
        transform: `scale(${interpolatedZoom})`,
      }}
    />
  );

  switch (type) {
    case 'slide-left':
      return renderSlideLeft();
    case 'fade':
      return renderFade();
    case 'zoom-blur':
      return renderZoomBlur();
    default:
      return renderFade();
  }
};

import { useVideoConfig, useCurrentFrame } from 'remotion';
import { AbsoluteFill } from 'remotion';

export const ProgressBar: React.FC = () => {
  const { durationInFrames } = useVideoConfig();
  const frame = useCurrentFrame();

  const progress = frame / durationInFrames;

  return (
    <AbsoluteFill className="pointer-events-none">
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-800">
        <div
          className="h-full bg-primary transition-all duration-75"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </AbsoluteFill>
  );
};

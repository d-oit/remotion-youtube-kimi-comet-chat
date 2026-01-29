import { AbsoluteFill, useVideoConfig } from 'remotion';
import { useEffect, useState } from 'react';

interface TitleCardProps {
  title: string;
  subtitle: string;
  frame: number;
}

export const TitleCard: React.FC<TitleCardProps> = ({
  title,
  subtitle,
  frame,
}) => {
  const { fps } = useVideoConfig();
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const targetFrame = 30;
    const fadeInDuration = 30;

    if (frame >= targetFrame) {
      const progress = Math.min((frame - targetFrame) / fadeInDuration, 1);
      setOpacity(progress);
    }
  }, [frame]);

  return (
    <AbsoluteFill className="pointer-events-none">
      <div
        className="absolute top-20 left-10 bg-black/70 backdrop-blur-sm p-6 rounded-lg"
        style={{ opacity }}
      >
        <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
        <p className="text-xl text-gray-300">{subtitle}</p>
      </div>
    </AbsoluteFill>
  );
};

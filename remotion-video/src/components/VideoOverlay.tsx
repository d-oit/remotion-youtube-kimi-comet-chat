import { useVideoAsset, AbsoluteFill } from 'remotion';

interface VideoOverlayProps {
  videoNumber: 1 | 2 | 3;
  startFrame: number;
}

export const VideoOverlay: React.FC<VideoOverlayProps> = ({
  videoNumber,
  startFrame,
}) => {
  const videoPath = videoNumber === 1
    ? 'D:/git/youtube/kimi-comet-chat/src/assets/1-Recording 2026-01-28.mp4'
    : videoNumber === 2
    ? 'D:/git/youtube/kimi-comet-chat/src/assets/2-Recording 2026-01-28.mp4'
    : 'D:/git/youtube/kimi-comet-chat/src/assets/3-Recording 2026-01-28.mp4';

  const { mediaAsset } = useVideoAsset({
    src: videoPath,
    startFrom: startFrame,
    loop: true,
  });

  return (
    <AbsoluteFill>
      <video
        src={mediaAsset?.url}
        className="w-full h-full object-cover"
        muted
        playsInline
        autoPlay
        loop
      />
    </AbsoluteFill>
  );
};

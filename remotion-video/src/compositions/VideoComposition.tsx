import { AbsoluteFill, useVideoConfig, Sequence, interpolate } from 'remotion';
import { Intro } from '../components/Intro';
import { VideoSegment } from '../components/VideoSegment';
import { Outro } from '../components/Outro';
import { TransitionEffect } from '../components/TransitionEffect';

export const VIDEO_WIDTH = 1920;
export const VIDEO_HEIGHT = 1080;
export const FPS = 30;

const INTRO_DURATION = 180;
const SEGMENT_DURATION = 300;
const SEGMENT_GAP = 60;
const OUTRO_DURATION = 120;

export const VideoComposition = () => {
  const { durationInFrames } = useVideoConfig();

  const totalDuration = INTRO_DURATION + (SEGMENT_DURATION * 3) + (SEGMENT_GAP * 2) + OUTRO_DURATION;

  return (
    <AbsoluteFill style={{ backgroundColor: '#0a0a0a' }}>
      <Sequence from={0} duration={INTRO_DURATION}>
        <Intro />
      </Sequence>

      <Sequence from={INTRO_DURATION} duration={SEGMENT_DURATION}>
        <TransitionEffect type="slide-left" />
        <VideoSegment
          videoPath="D:/git/youtube/kimi-comet-chat/src/assets/1-Recording 2026-01-28 130105.mp4"
          title="Getting Started"
          description="Learn the basics of Kimi Comet Chat"
          segmentIndex={0}
        />
      </Sequence>

      <Sequence from={INTRO_DURATION + SEGMENT_DURATION + SEGMENT_GAP} duration={SEGMENT_DURATION}>
        <TransitionEffect type="fade" />
        <VideoSegment
          videoPath="D:/git/youtube/kimi-comet-chat/src/assets/2-Recording 2026-01-28 130218.mp4"
          title="Core Features"
          description="Discover powerful features and capabilities"
          segmentIndex={1}
        />
      </Sequence>

      <Sequence from={INTRO_DURATION + (SEGMENT_DURATION * 2) + (SEGMENT_GAP * 2)} duration={SEGMENT_DURATION}>
        <TransitionEffect type="zoom-blur" />
        <VideoSegment
          videoPath="D:/git/youtube/kimi-comet-chat/src/assets/3-Recording 2026-01-28 130727.mp4"
          title="Advanced Tips"
          description="Master advanced techniques and workflows"
          segmentIndex={2}
        />
      </Sequence>

      <Sequence
        from={INTRO_DURATION + (SEGMENT_DURATION * 3) + (SEGMENT_GAP * 2)}
        duration={OUTRO_DURATION}
      >
        <TransitionEffect type="fade" />
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
};

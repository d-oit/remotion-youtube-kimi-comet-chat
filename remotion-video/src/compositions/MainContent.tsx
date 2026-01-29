import { AbsoluteFill, Sequence, Audio, Img, OffthreadVideo, useVideoConfig, staticFile } from 'remotion';
import { useCurrentFrame, interpolate, spring } from 'remotion';
import React from 'react';

const VIDEO_1 = staticFile('1-Recording 2026-01-28 130105.mp4');
const VIDEO_2 = staticFile('2-Recording 2026-01-28 130218.mp4');
const VIDEO_3 = staticFile('3-Recording 2026-01-28 130727.mp4');
const LOGO = staticFile('final-0-99-output.png');

interface TextOverlayProps {
  text: string;
  subtext?: string;
  startFrame: number;
  duration: number;
}

const TextOverlay: React.FC<TextOverlayProps> = ({ text, subtext, startFrame, duration }) => {
  const frame = useCurrentFrame();
  const localFrame = Math.max(0, frame - startFrame);
  const { fps } = useVideoConfig();

  const opacity = interpolate(localFrame, [0, 30], [0, 1], { extrapolateLeft: 'clamp' });
  const scale = spring({ fps, frame: localFrame, config: { mass: 1, stiffness: 120, damping: 12 } });
  const exitOpacity = interpolate(localFrame, [duration - 30, duration], [1, 0], { extrapolateLeft: 'clamp' });

  if (localFrame > duration) return null;

  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
      <div style={{
        opacity: Math.min(opacity, exitOpacity),
        transform: `scale(${0.9 + scale * 0.2})`,
        textAlign: 'center',
        padding: 40,
        background: 'rgba(0,0,0,0.6)',
        borderRadius: 20,
        border: '1px solid rgba(102, 126, 234, 0.3)',
      }}>
        <h2 style={{
          fontSize: 48,
          fontWeight: 700,
          color: '#ffffff',
          margin: 0,
          textShadow: '0 4px 30px rgba(102, 126, 234, 0.6)',
          fontFamily: 'system-ui, sans-serif',
        }}>
          {text}
        </h2>
        {subtext && (
          <p style={{
            fontSize: 24,
            color: 'rgba(255, 255, 255, 0.8)',
            marginTop: 15,
            fontFamily: 'system-ui, sans-serif',
          }}>
            {subtext}
          </p>
        )}
      </div>
    </AbsoluteFill>
  );
};

const VideoSegment: React.FC<{ videoSrc: string; startFrame: number; endFrame: number; overlay?: React.ReactNode }> = ({ videoSrc, startFrame, endFrame, overlay }) => {
  const frame = useCurrentFrame();
  const localFrame = Math.max(0, frame - startFrame);

  if (localFrame > (endFrame - startFrame)) return null;

  return (
    <>
      <OffthreadVideo
        src={videoSrc}
        startFrom={Math.max(0, Math.floor(localFrame * 0.5))}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <AbsoluteFill style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.7) 100%)' }} />
      {overlay}
    </>
  );
};

export const MainContent: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ background: '#000' }}>
      <Audio src={staticFile('background-music.mp3')} volume={0.3} loop />

      <Sequence from={0} duration={90}>
        <Intro />
      </Sequence>

      <Sequence from={90} duration={150}>
        <TextOverlay
          text="THE PROBLEM"
          subtext="AI subscriptions add up fast"
          startFrame={0}
          duration={150}
        />
        <VideoSegment
          videoSrc={VIDEO_1}
          startFrame={0}
          endFrame={150}
        />
      </Sequence>

      <Sequence from={240} duration={180}>
        <TextOverlay
          text="THE EXPLOIT PROMPT"
          subtext="Analyze, extract, negotiate"
          startFrame={0}
          duration={180}
        />
        <VideoSegment
          videoSrc={VIDEO_1}
          startFrame={0}
          endFrame={180}
        />
      </Sequence>

      <Sequence from={420} duration={180}>
        <TextOverlay
          text="KIMI'S RESPONSE"
          subtext="Understanding the constraints"
          startFrame={0}
          duration={180}
        />
        <VideoSegment
          videoSrc={VIDEO_2}
          startFrame={0}
          endFrame={180}
        />
      </Sequence>

      <Sequence from={600} duration={180}>
        <TextOverlay
          text="THE 3-PHASE WORKFLOW"
          subtext="Decode | Brief | Execute"
          startFrame={0}
          duration={180}
        />
        <VideoSegment
          videoSrc={VIDEO_3}
          startFrame={0}
          endFrame={180}
        />
      </Sequence>

      <Sequence from={780} duration={120}>
        <TextOverlay
          text="THE RESULT"
          subtext="$0.99/month - Systematic negotiation works"
          startFrame={0}
          duration={120}
        />
        <VideoSegment
          videoSrc={VIDEO_3}
          startFrame={0}
          endFrame={120}
        />
      </Sequence>

      <Sequence from={900} duration={120}>
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
};

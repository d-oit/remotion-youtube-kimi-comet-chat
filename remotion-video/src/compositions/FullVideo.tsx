import { AbsoluteFill, Sequence, Audio, Img, OffthreadVideo, useVideoConfig, staticFile } from 'remotion';
import { useCurrentFrame, interpolate, spring } from 'remotion';
import React from 'react';
import { Intro } from './Intro';
import { Outro } from './Outro';

const VIDEO_1 = staticFile('1-Recording 2026-01-28 130105.mp4');
const VIDEO_2 = staticFile('2-Recording 2026-01-28 130218.mp4');
const VIDEO_3 = staticFile('3-Recording 2026-01-28 130727.mp4');
const LOGO = staticFile('final-0-99-output.png');

const INTRO_DURATION = 90;
const VIDEO_1_DURATION = 143 * 30;
const VIDEO_2_DURATION = 437 * 30;
const VIDEO_3_DURATION = 20 * 30;
const OUTRO_DURATION = 120;

const TOTAL_DURATION = INTRO_DURATION + VIDEO_1_DURATION + VIDEO_2_DURATION + VIDEO_3_DURATION + OUTRO_DURATION;

interface TextOverlayProps {
  text: string;
  subtext?: string;
  startFrame: number;
  duration: number;
}

const TextOverlay: React.FC<TextOverlayProps> = ({ text, subtext, startFrame, duration }) => {
  const frame = useCurrentFrame();
  const localFrame = Math.max(0, frame - startFrame);

  const opacity = interpolate(localFrame, [0, 30], [0, 1], { extrapolateLeft: 'clamp' });
  const exitOpacity = interpolate(localFrame, [duration - 30, duration], [1, 0], { extrapolateLeft: 'clamp' });

  if (localFrame > duration) return null;

  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
      <div style={{
        opacity: Math.min(opacity, exitOpacity),
        textAlign: 'center',
        padding: 40,
        background: 'rgba(0,0,0,0.7)',
        borderRadius: 20,
        border: '1px solid rgba(102, 126, 234, 0.4)',
      }}>
        <h2 style={{
          fontSize: 56,
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
            fontSize: 28,
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

export const FullVideo: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ background: '#000' }}>
      <Audio src={staticFile('background-music.mp3')} volume={0.25} loop />

      <Sequence from={0} duration={INTRO_DURATION}>
        <Intro />
      </Sequence>

      <Sequence from={INTRO_DURATION} duration={VIDEO_1_DURATION}>
        <AbsoluteFill>
          <OffthreadVideo src={VIDEO_1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <AbsoluteFill style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)' }} />
          <TextOverlay text="THE EXPLOIT PROMPT" subtext="Step 1: Analyze the sale page" startFrame={0} duration={180} />
          <AbsoluteFill style={{ bottom: 60, left: 80, right: 80 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <Img src={LOGO} style={{ width: 40, height: 'auto' }} />
              <div style={{ flex: 1, height: 3, background: 'rgba(255,255,255,0.2)', borderRadius: 2 }}>
                <div style={{ width: '15%', height: '100%', background: 'linear-gradient(90deg, #667eea, #764ba2)', borderRadius: 2 }} />
              </div>
            </div>
          </AbsoluteFill>
        </AbsoluteFill>
      </Sequence>

      <Sequence from={INTRO_DURATION + VIDEO_1_DURATION} duration={VIDEO_2_DURATION}>
        <AbsoluteFill>
          <OffthreadVideo src={VIDEO_2} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <AbsoluteFill style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)' }} />
          <TextOverlay text="KIMI'S RESPONSE" subtext="Step 2: Extract the constraints" startFrame={0} duration={180} />
          <AbsoluteFill style={{ bottom: 60, left: 80, right: 80 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <Img src={LOGO} style={{ width: 40, height: 'auto' }} />
              <div style={{ flex: 1, height: 3, background: 'rgba(255,255,255,0.2)', borderRadius: 2 }}>
                <div style={{ width: '40%', height: '100%', background: 'linear-gradient(90deg, #667eea, #764ba2)', borderRadius: 2 }} />
              </div>
            </div>
          </AbsoluteFill>
        </AbsoluteFill>
      </Sequence>

      <Sequence from={INTRO_DURATION + VIDEO_1_DURATION + VIDEO_2_DURATION} duration={VIDEO_3_DURATION}>
        <AbsoluteFill>
          <OffthreadVideo src={VIDEO_3} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <AbsoluteFill style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)' }} />
          <TextOverlay text="THE 3-PHASE WORKFLOW" subtext="Step 3: Execute the negotiation" startFrame={0} duration={600} />
          <AbsoluteFill style={{ bottom: 60, left: 80, right: 80 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <Img src={LOGO} style={{ width: 40, height: 'auto' }} />
              <div style={{ flex: 1, height: 3, background: 'rgba(255,255,255,0.2)', borderRadius: 2 }}>
                <div style={{ width: '60%', height: '100%', background: 'linear-gradient(90deg, #667eea, #764ba2)', borderRadius: 2 }} />
              </div>
            </div>
          </AbsoluteFill>
        </AbsoluteFill>
      </Sequence>

      <Sequence from={INTRO_DURATION + VIDEO_1_DURATION + VIDEO_2_DURATION + VIDEO_3_DURATION} duration={OUTRO_DURATION}>
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
};

export const TOTAL_FRAMES = TOTAL_DURATION;

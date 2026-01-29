import { AbsoluteFill, Img, Audio, useVideoConfig, staticFile } from 'remotion';
import { useCurrentFrame, spring, interpolate } from 'remotion';
import React from 'react';

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoScale = spring({ fps, frame, config: { mass: 1, stiffness: 200, damping: 12 } });
  const logoOpacity = interpolate(frame, [0, 30], [0, 1], { extrapolateLeft: 'clamp' });
  const titleOpacity = interpolate(frame, [20, 60], [0, 1], { extrapolateLeft: 'clamp' });
  const subtitleOpacity = interpolate(frame, [60, 90], [0, 1], { extrapolateLeft: 'clamp' });

  const glowPulse = 0.5 + Math.sin(frame * 0.05) * 0.3;

  return (
    <AbsoluteFill style={{ background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)' }}>
      <Audio src={staticFile('ElevenLabs_kimi-comet-chat-full-video.mp3')} volume={1} />
      <Audio src={staticFile('background-music.mp3')} volume={0.25} loop />

      <AbsoluteFill>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 50%, rgba(102, 126, 234, ${glowPulse * 0.4}) 0%, transparent 70%)`,
        }} />
      </AbsoluteFill>

      <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30 }}>
          <div style={{ transform: `scale(${0.3 + logoScale * 0.4})`, opacity: logoOpacity }}>
            <Img src={staticFile('final-0-99-output.png')} style={{ width: 300, height: 'auto', filter: 'drop-shadow(0 0 30px rgba(102, 126, 234, 0.8))' }} />
          </div>

          <div style={{ opacity: titleOpacity, textAlign: 'center' }}>
            <h1 style={{ fontSize: 80, fontWeight: 800, color: '#ffffff', margin: 0, textShadow: '0 0 40px rgba(102, 126, 234, 0.6)', letterSpacing: '0.05em', fontFamily: 'system-ui, sans-serif' }}>
              KIMI COMET
            </h1>
            <p style={{ fontSize: 24, color: 'rgba(255, 255, 255, 0.7)', marginTop: 15, letterSpacing: '0.4em', textTransform: 'uppercase', fontFamily: 'system-ui, sans-serif' }}>
              $0.99 NEGOTIATION
            </p>
          </div>

          <div style={{ opacity: subtitleOpacity, marginTop: 20 }}>
            <p style={{ fontSize: 16, color: 'rgba(255, 255, 255, 0.5)', letterSpacing: '0.2em', fontFamily: 'system-ui, sans-serif' }}>
              GET THE HOW | COMET AUTO-NEGOTIATES | RESULT
            </p>
          </div>
        </div>
      </AbsoluteFill>

      <AbsoluteFill style={{ bottom: 40, left: 0, right: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 15 }}>
          <div style={{ width: 60, height: 2, background: 'linear-gradient(90deg, transparent, #667eea)' }} />
          <span style={{ color: '#667eea', fontSize: 14, letterSpacing: '3px', fontFamily: 'system-ui, sans-serif' }}>INTRO</span>
          <div style={{ width: 60, height: 2, background: 'linear-gradient(90deg, #667eea, transparent)' }} />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

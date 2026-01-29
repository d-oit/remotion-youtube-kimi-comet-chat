import { AbsoluteFill, Img, Audio, useVideoConfig, staticFile } from 'remotion';
import { useCurrentFrame, spring, interpolate } from 'remotion';
import React from 'react';

export const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pulseScale = spring({ fps, frame, config: { mass: 1, stiffness: 100, damping: 8 } });
  const contentOpacity = interpolate(frame, [0, 30], [0, 1], { extrapolateLeft: 'clamp' });
  const buttonOpacity = interpolate(frame, [30, 60], [0, 1], { extrapolateLeft: 'clamp' });

  return (
    <AbsoluteFill style={{ background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)' }}>
      <Audio src={staticFile('background-music.mp3')} volume={0.25} loop />
      
      <AbsoluteFill>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
        }} />
      </AbsoluteFill>

      <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', opacity: contentOpacity }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40 }}>
          <div style={{ position: 'relative', transform: `scale(${0.5 + pulseScale * 0.3})` }}>
            <div style={{
              position: 'absolute',
              inset: -30,
              borderRadius: '50%',
              border: '2px solid rgba(102, 126, 234, 0.5)',
              transform: `scale(${1 + pulseScale * 0.3})`,
              opacity: 1 - pulseScale,
            }} />
            <Img src={staticFile('final-0-99-output.png')} style={{ width: 250, height: 'auto', filter: 'drop-shadow(0 0 40px rgba(102, 126, 234, 0.8))' }} />
          </div>

          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: 56, fontWeight: 700, color: '#ffffff', margin: '0 0 20px 0', textShadow: '0 4px 30px rgba(102, 126, 234, 0.5)', fontFamily: 'system-ui, sans-serif' }}>
              RESULT: $0.99/MONTH
            </h2>
            <p style={{ fontSize: 20, color: 'rgba(255, 255, 255, 0.7)', fontFamily: 'system-ui, sans-serif' }}>
              Systematic negotiation works.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 20, opacity: buttonOpacity }}>
            <div style={{ padding: '16px 40px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: 50, boxShadow: '0 10px 40px rgba(102, 126, 234, 0.4)' }}>
              <span style={{ color: '#fff', fontSize: 18, fontWeight: 600, fontFamily: 'system-ui, sans-serif' }}>Full Tutorial →</span>
            </div>
          </div>
        </div>
      </AbsoluteFill>

      <AbsoluteFill style={{ bottom: 40, left: 0, right: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 15 }}>
          <div style={{ width: 60, height: 2, background: 'linear-gradient(90deg, transparent, #667eea)' }} />
          <span style={{ color: '#667eea', fontSize: 14, letterSpacing: '3px', fontFamily: 'system-ui, sans-serif' }}>OUTRO</span>
          <div style={{ width: 60, height: 2, background: 'linear-gradient(90deg, #667eea, transparent)' }} />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

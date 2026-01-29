import { AbsoluteFill, Img, OffthreadVideo, useVideoConfig, staticFile } from 'remotion';
import { useCurrentFrame, interpolate } from 'remotion';
import React from 'react';

export const Segment1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = Math.max(0, frame - 30);

  const overlayOpacity = interpolate(localFrame, [0, 20], [0, 0.7], { extrapolateLeft: 'clamp' });
  const titleOpacity = interpolate(localFrame, [20, 50], [0, 1], { extrapolateLeft: 'clamp' });
  const contentOpacity = interpolate(localFrame, [50, 80], [0, 1], { extrapolateLeft: 'clamp' });

  return (
    <AbsoluteFill>
      <OffthreadVideo src={staticFile('1-Recording 2026-01-28 130105.mp4')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <AbsoluteFill style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.85) 100%)' }} />
      <AbsoluteFill>
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, rgba(102, 126, 234, ${overlayOpacity * 0.3}) 0%, rgba(118, 75, 162, ${overlayOpacity * 0.3}) 100%)` }} />
      </AbsoluteFill>

      <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ maxWidth: 1200, textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 25, opacity: titleOpacity }}>
            <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'linear-gradient(135deg, #667eea, #764ba2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#fff', fontSize: 28, fontWeight: 700 }}>1</span>
            </div>
            <h2 style={{ fontSize: 48, fontWeight: 700, color: '#ffffff', margin: 0, textShadow: '0 4px 20px rgba(0,0,0,0.5)', fontFamily: 'system-ui, sans-serif' }}>
              THE EXPLOIT PROMPT
            </h2>
          </div>

          <div style={{ opacity: contentOpacity, marginTop: 40 }}>
            <div style={{ background: 'rgba(0,0,0,0.6)', padding: 30, borderRadius: 16, border: '1px solid rgba(102, 126, 234, 0.3)', textAlign: 'left' }}>
              <p style={{ color: '#667eea', fontSize: 14, fontWeight: 600, margin: '0 0 15px 0', letterSpacing: '2px', fontFamily: 'system-ui, sans-serif' }}>ANALYZE AND EXTRACT:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Sale page analysis at kimi.com/kimiplus/sale', 'Request lowest legitimate first-month price', 'Extract: meaning of price runs on my mood', 'Map cost-reduction methods and UI steps'].map((item, i) => (
                  <li key={i} style={{ color: 'rgba(255,255,255,0.9)', fontSize: 22, marginBottom: 12, fontFamily: 'system-ui, sans-serif', display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ color: '#667eea', fontSize: 18 }}>*</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AbsoluteFill>

      <AbsoluteFill style={{ bottom: 40, left: 0, right: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 15 }}>
          <div style={{ width: 60, height: 2, background: 'linear-gradient(90deg, transparent, #667eea)' }} />
          <span style={{ color: '#667eea', fontSize: 14, letterSpacing: '3px', fontFamily: 'system-ui, sans-serif' }}>PHASE 1: PROMPT ENGINEERING</span>
          <div style={{ width: 60, height: 2, background: 'linear-gradient(90deg, #667eea, transparent)' }} />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

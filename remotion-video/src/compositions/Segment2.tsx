import { AbsoluteFill, OffthreadVideo, useVideoConfig, staticFile } from 'remotion';
import { useCurrentFrame, interpolate } from 'remotion';
import React from 'react';

export const Segment2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = Math.max(0, frame - 30);

  const overlayOpacity = interpolate(localFrame, [0, 20], [0, 0.7], { extrapolateLeft: 'clamp' });
  const titleOpacity = interpolate(localFrame, [20, 50], [0, 1], { extrapolateLeft: 'clamp' });

  return (
    <AbsoluteFill>
      <OffthreadVideo src={staticFile('2-Recording 2026-01-28 130218.mp4')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <AbsoluteFill style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.85) 100%)' }} />
      <AbsoluteFill>
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, rgba(102, 126, 234, ${overlayOpacity * 0.3}) 0%, rgba(118, 75, 162, ${overlayOpacity * 0.3}) 100%)` }} />
      </AbsoluteFill>

      <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ maxWidth: 1200, textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 25, opacity: titleOpacity }}>
            <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'linear-gradient(135deg, #667eea, #764ba2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#fff', fontSize: 28, fontWeight: 700 }}>2</span>
            </div>
            <h2 style={{ fontSize: 48, fontWeight: 700, color: '#ffffff', margin: 0, textShadow: '0 4px 20px rgba(0,0,0,0.5)', fontFamily: 'system-ui, sans-serif' }}>
              KIMIS RESPONSE: THE MECHANICS
            </h2>
          </div>

          <div style={{ opacity: titleOpacity, marginTop: 50, display: 'flex', justifyContent: 'center', gap: 30, flexWrap: 'wrap' }}>
            {[
              { title: 'Final Price Authority', desc: 'Discounts subject to activity in order link' },
              { title: 'One-Time Only', desc: 'Each user ID gets first-month entire activity period' },
              { title: 'No Stacking', desc: 'Cannot combine with other coupons' },
              { title: 'Link Uniqueness', desc: 'Each discount link for one account only' }
            ].map((item, i) => (
              <div key={i} style={{ background: 'rgba(0,0,0,0.7)', padding: 25, borderRadius: 12, border: '1px solid rgba(102, 126, 234, 0.4)', width: 280 }}>
                <p style={{ color: '#667eea', fontSize: 12, fontWeight: 600, margin: '0 0 10px 0', letterSpacing: '1px', fontFamily: 'system-ui, sans-serif' }}>{item.title.toUpperCase()}</p>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 18, margin: 0, fontFamily: 'system-ui, sans-serif' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AbsoluteFill>

      <AbsoluteFill style={{ bottom: 40, left: 0, right: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 15 }}>
          <div style={{ width: 60, height: 2, background: 'linear-gradient(90deg, transparent, #667eea)' }} />
          <span style={{ color: '#667eea', fontSize: 14, letterSpacing: '3px', fontFamily: 'system-ui, sans-serif' }}>PHASE 2: CONSTRAINT EXTRACTION</span>
          <div style={{ width: 60, height: 2, background: 'linear-gradient(90deg, #667eea, transparent)' }} />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

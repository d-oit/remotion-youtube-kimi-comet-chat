import { AbsoluteFill, OffthreadVideo, useVideoConfig, staticFile } from 'remotion';
import { useCurrentFrame, interpolate } from 'remotion';
import React from 'react';

export const Segment3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = Math.max(0, frame - 30);

  const overlayOpacity = interpolate(localFrame, [0, 20], [0, 0.7], { extrapolateLeft: 'clamp' });
  const titleOpacity = interpolate(localFrame, [20, 50], [0, 1], { extrapolateLeft: 'clamp' });

  return (
    <AbsoluteFill>
      <OffthreadVideo src={staticFile('3-Recording 2026-01-28 130727.mp4')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <AbsoluteFill style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.85) 100%)' }} />
      <AbsoluteFill>
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, rgba(102, 126, 234, ${overlayOpacity * 0.3}) 0%, rgba(118, 75, 162, ${overlayOpacity * 0.3}) 100%)` }} />
      </AbsoluteFill>

      <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ maxWidth: 1200, textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 25, opacity: titleOpacity }}>
            <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'linear-gradient(135deg, #667eea, #764ba2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#fff', fontSize: 28, fontWeight: 700 }}>3</span>
            </div>
            <h2 style={{ fontSize: 48, fontWeight: 700, color: '#ffffff', margin: 0, textShadow: '0 4px 20px rgba(0,0,0,0.5)', fontFamily: 'system-ui, sans-serif' }}>
              THE 3-PHASE WORKFLOW
            </h2>
          </div>

          <div style={{ opacity: titleOpacity, marginTop: 50 }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 20 }}>
              {[
                { phase: 'PHASE 1', title: 'Decode', desc: 'Paste exploit prompt - Decode mechanics - Extract constraints' },
                { phase: 'PHASE 2', title: 'Brief', desc: 'Use response - Brief Comet agent - Execute negotiation' },
                { phase: 'PHASE 3', title: 'Document', desc: 'Document workflow - Create proof - Leverage for next' }
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(0,0,0,0.7)', padding: 25, borderRadius: 12, border: '1px solid rgba(102, 126, 234, 0.4)', width: 320, textAlign: 'left' }}>
                  <p style={{ color: '#667eea', fontSize: 11, fontWeight: 600, margin: '0 0 8px 0', letterSpacing: '1px', fontFamily: 'system-ui, sans-serif' }}>{item.phase}</p>
                  <p style={{ color: '#fff', fontSize: 20, fontWeight: 700, margin: '0 0 8px 0', fontFamily: 'system-ui, sans-serif' }}>{item.title}</p>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, margin: 0, fontFamily: 'system-ui, sans-serif' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AbsoluteFill>

      <AbsoluteFill style={{ bottom: 40, left: 0, right: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 15 }}>
          <div style={{ width: 60, height: 2, background: 'linear-gradient(90deg, transparent, #667eea)' }} />
          <span style={{ color: '#667eea', fontSize: 14, letterSpacing: '3px', fontFamily: 'system-ui, sans-serif' }}>PHASE 3: AUTOMATION EXECUTION</span>
          <div style={{ width: 60, height: 2, background: 'linear-gradient(90deg, #667eea, transparent)' }} />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

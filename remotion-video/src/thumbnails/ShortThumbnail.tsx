import { AbsoluteFill } from 'remotion';
import React from 'react';

const colors = {
  primary: '#667eea',
  secondary: '#764ba2',
  accent: '#00ffff',
  pink: '#f093fb',
  white: '#ffffff',
  darkText: '#1a1a2e',
};

export const ShortThumbnail: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.pink} 100%)`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        overflow: 'hidden',
      }}
    >
      {/* Top Text */}
      <div
        style={{
          position: 'absolute',
          top: '8%',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            fontSize: 42,
            fontWeight: 900,
            color: colors.white,
            textTransform: 'uppercase',
            textShadow: '4px 4px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000',
            letterSpacing: '2px',
          }}
        >
          THEY DON'T WANT YOU TO KNOW
        </div>
      </div>

      {/* Price Comparison Container */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        {/* Old Price with Strikethrough */}
        <div
          style={{
            position: 'relative',
            fontSize: 72,
            fontWeight: 700,
            color: '#888888',
            textDecoration: 'line-through',
            textDecorationColor: '#ff4444',
            textDecorationThickness: '8px',
            opacity: 0.7,
          }}
        >
          $9.99
        </div>

        {/* Lightning/Rocket Icon */}
        <div
          style={{
            position: 'absolute',
            right: '-100px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: 100,
            filter: 'drop-shadow(0 0 20px rgba(255, 255, 0, 0.8))',
          }}
        >
          ⚡
        </div>

        {/* New Price - Main Focus */}
        <div
          style={{
            fontSize: 140,
            fontWeight: 900,
            color: colors.accent,
            textShadow: `
              0 0 20px ${colors.accent},
              0 0 40px ${colors.accent},
              0 0 60px ${colors.accent},
              4px 4px 0 rgba(0,0,0,0.3)
            `,
            animation: 'pulse 2s ease-in-out infinite',
          }}
        >
          $0.99
        </div>

        {/* Per Month Label */}
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: colors.white,
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            marginTop: '-10px',
          }}
        >
          per month
        </div>
      </div>

      {/* Bottom CTA */}
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <div
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: colors.white,
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            background: 'rgba(0,0,0,0.3)',
            padding: '12px 30px',
            borderRadius: '30px',
            backdropFilter: 'blur(10px)',
          }}
        >
          Swipe up for tutorial
        </div>
        {/* Down Arrow */}
        <div
          style={{
            fontSize: 48,
            color: colors.white,
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
            animation: 'bounce 1.5s ease-in-out infinite',
          }}
        >
          ↓
        </div>
      </div>

      {/* Mobile Safe Zone Indicator (for reference - invisible in final) */}
      <div
        style={{
          position: 'absolute',
          width: '720px',
          height: '720px',
          border: '2px dashed rgba(255,255,255,0.2)',
          pointerEvents: 'none',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Style tag for animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
      `}</style>
    </AbsoluteFill>
  );
};

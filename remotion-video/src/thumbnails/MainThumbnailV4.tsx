import React from 'react';
import { AbsoluteFill } from 'remotion';
import { brandColors, createTextOutline } from './brand-palettes';

const kimi = brandColors.kimi;

export const MainThumbnailV4: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${kimi.dark} 0%, ${kimi.primary}20 50%, ${kimi.secondary}15 100%)`,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      {/* Animated grid background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(${kimi.accent}08 1px, transparent 1px),
            linear-gradient(90deg, ${kimi.accent}08 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          opacity: 0.6,
        }}
      />

      {/* Large glow effect */}
      <div
        style={{
          position: 'absolute',
          width: '700px',
          height: '700px',
          background: `radial-gradient(circle, ${kimi.highlight}20 0%, ${kimi.accent}10 40%, transparent 70%)`,
          filter: 'blur(80px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Main content container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          zIndex: 10,
          position: 'relative',
        }}
      >
        {/* 90% OFF Badge */}
        <div
          style={{
            padding: '16px 40px',
            background: `linear-gradient(135deg, ${kimi.danger}90 0%, ${kimi.danger} 100%)`,
            borderRadius: '16px',
            border: `4px solid ${kimi.highlight}`,
            boxShadow: `
              0 0 50px ${kimi.danger}60,
              0 8px 30px rgba(0,0,0,0.4),
              inset 0 0 30px rgba(255,255,255,0.1)
            `,
            transform: 'rotate(-3deg)',
          }}
        >
          <span
            style={{
              fontSize: '56px',
              fontWeight: 900,
              color: kimi.white,
              letterSpacing: '4px',
              ...createTextOutline(kimi.dark, 4),
            }}
          >
            90% OFF
          </span>
        </div>

        {/* Price display with circle */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '10px',
          }}
        >
          {/* Yellow circle around price */}
          <div
            style={{
              position: 'absolute',
              width: '340px',
              height: '340px',
              border: `8px solid ${kimi.highlight}`,
              borderRadius: '50%',
              boxShadow: `
                0 0 60px ${kimi.highlight},
                inset 0 0 60px ${kimi.highlight}30,
                0 0 100px ${kimi.highlight}50
              `,
            }}
          />

          {/* $0.99 Price */}
          <span
            style={{
              fontSize: '200px',
              fontWeight: 900,
              color: kimi.accent,
              lineHeight: 1,
              ...createTextOutline(kimi.dark, 6),
              textShadow: `
                0 0 50px ${kimi.accent},
                0 0 100px ${kimi.accent}80,
                0 0 150px ${kimi.accent}40
              `,
            }}
          >
            $0.99
          </span>
        </div>

        {/* Limited Time CTA */}
        <div
          style={{
            marginTop: '30px',
            padding: '20px 50px',
            background: `linear-gradient(135deg, ${kimi.highlight} 0%, ${kimi.warning} 100%)`,
            borderRadius: '12px',
            border: `3px solid ${kimi.white}`,
            boxShadow: `
              0 0 40px ${kimi.highlight}60,
              0 8px 30px rgba(0,0,0,0.4)
            `,
          }}
        >
          <span
            style={{
              fontSize: '44px',
              fontWeight: 900,
              color: kimi.dark,
              letterSpacing: '3px',
              ...createTextOutline(kimi.white, 3),
            }}
          >
            LIMITED TIME
          </span>
        </div>
      </div>

      {/* Lightning bolt visual cue */}
      <div
        style={{
          position: 'absolute',
          right: '100px',
          top: '35%',
          fontSize: '100px',
          filter: `drop-shadow(0 0 30px ${kimi.highlight})`,
          ...createTextOutline(kimi.dark, 2),
          animation: 'pulse 1.5s ease-in-out infinite',
        }}
      >
        ⚡
      </div>

      {/* Arrow pointing to price */}
      <div
        style={{
          position: 'absolute',
          left: '70px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 5,
        }}
      >
        <svg
          width="140"
          height="80"
          viewBox="0 0 140 80"
          fill="none"
          style={{
            filter: `drop-shadow(0 0 20px ${kimi.accent})`,
          }}
        >
          <path
            d="M10 40 L100 40 L100 20 L130 40 L100 60 L100 40"
            stroke={kimi.accent}
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={kimi.accent}
          />
        </svg>
        <div
          style={{
            fontSize: '28px',
            fontWeight: 800,
            color: kimi.accent,
            textAlign: 'center',
            marginTop: '10px',
            ...createTextOutline(kimi.dark, 2),
          }}
        >
          DEAL!
        </div>
      </div>

      {/* Sparkle decorations */}
      <div
        style={{
          position: 'absolute',
          right: '150px',
          bottom: '25%',
          fontSize: '50px',
          color: kimi.highlight,
          filter: `drop-shadow(0 0 25px ${kimi.highlight})`,
          ...createTextOutline(kimi.dark, 1),
        }}
      >
        ✦
      </div>
      <div
        style={{
          position: 'absolute',
          left: '150px',
          top: '20%',
          fontSize: '40px',
          color: kimi.accent,
          filter: `drop-shadow(0 0 20px ${kimi.accent})`,
          ...createTextOutline(kimi.dark, 1),
        }}
      >
        ✦
      </div>

      {/* Corner decorations */}
      <div
        style={{
          position: 'absolute',
          top: '40px',
          right: '40px',
          width: '80px',
          height: '80px',
          border: `3px solid ${kimi.highlight}`,
          borderRadius: '12px',
          opacity: 0.5,
          transform: 'rotate(15deg)',
          boxShadow: `0 0 20px ${kimi.highlight}40`,
        }}
      />

      {/* Mobile safe zone indicator */}
      <div
        style={{
          position: 'absolute',
          width: '720px',
          height: '405px',
          border: '3px dashed rgba(255,255,255,0.06)',
          pointerEvents: 'none',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '8px',
        }}
      />

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.15); opacity: 0.9; }
        }
      `}</style>
    </AbsoluteFill>
  );
};

export default MainThumbnailV4;

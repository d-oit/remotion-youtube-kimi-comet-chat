import React from 'react';
import { AbsoluteFill } from 'remotion';
import { brandColors, createTextOutline } from './brand-palettes';

const kimi = brandColors.kimi;

export const ShortThumbnailV4: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(160deg, ${kimi.primary} 0%, ${kimi.dark} 50%, ${kimi.secondary} 100%)`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Radial glow effects */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 30% 70%, ${kimi.highlight}20 0%, transparent 50%),
            radial-gradient(circle at 70% 30%, ${kimi.accent}15 0%, transparent 50%)
          `,
        }}
      />

      {/* Top section - SECRET METHOD */}
      <div
        style={{
          position: 'absolute',
          top: '5%',
          textAlign: 'center',
          width: '100%',
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontSize: '58px',
            fontWeight: 900,
            color: kimi.highlight,
            textTransform: 'uppercase',
            letterSpacing: '4px',
            ...createTextOutline(kimi.dark, 5),
            textShadow: `0 0 30px ${kimi.highlight}60`,
          }}
        >
          SECRET
        </div>
        <div
          style={{
            fontSize: '54px',
            fontWeight: 900,
            color: kimi.white,
            textTransform: 'uppercase',
            letterSpacing: '4px',
            marginTop: '-8px',
            ...createTextOutline(kimi.dark, 4),
          }}
        >
          METHOD
        </div>
      </div>

      {/* Center section - Price comparison */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '15px',
          zIndex: 10,
        }}
      >
        {/* Old price strikethrough */}
        <div
          style={{
            position: 'relative',
            fontSize: '56px',
            fontWeight: 800,
            color: kimi.gray,
            textDecoration: 'line-through',
            textDecorationColor: kimi.danger,
            textDecorationThickness: '10px',
            opacity: 0.7,
            ...createTextOutline(kimi.dark, 2),
          }}
        >
          $9.99
        </div>

        {/* Left arrow animation */}
        <div
          style={{
            position: 'absolute',
            left: '-140px',
            top: '15%',
            fontSize: '90px',
            filter: `drop-shadow(0 0 30px ${kimi.accent})`,
            ...createTextOutline(kimi.dark, 3),
            animation: 'slideLeft 1.5s ease-in-out infinite',
          }}
        >
          ←
        </div>

        {/* NEW PRICE with enhanced circle */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: '320px',
              height: '320px',
              border: `10px solid ${kimi.accent}`,
              borderRadius: '50%',
              boxShadow: `
                0 0 70px ${kimi.accent},
                inset 0 0 70px ${kimi.accent}40,
                0 0 120px ${kimi.accent}60
              `,
            }}
          />

          <span
            style={{
              fontSize: '170px',
              fontWeight: 900,
              color: kimi.highlight,
              ...createTextOutline(kimi.dark, 6),
              textShadow: `
                0 0 50px ${kimi.highlight},
                0 0 100px ${kimi.highlight},
                0 0 150px ${kimi.highlight}60
              `,
            }}
          >
            $0.99
          </span>
        </div>

        {/* KIMI AI label */}
        <div
          style={{
            fontSize: '36px',
            fontWeight: 900,
            color: kimi.accent,
            ...createTextOutline(kimi.dark, 2),
            letterSpacing: '4px',
            marginTop: '-10px',
          }}
        >
          KIMI AI HACK
        </div>
      </div>

      {/* Bottom CTA section */}
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontSize: '36px',
            fontWeight: 900,
            color: kimi.dark,
            background: kimi.highlight,
            padding: '18px 55px',
            borderRadius: '50px',
            ...createTextOutline(kimi.white, 2),
            boxShadow: `
              0 0 40px ${kimi.highlight},
              0 8px 30px rgba(0,0,0,0.4)
            `,
          }}
        >
          SWIPE UP
        </div>
        
        <div
          style={{
            fontSize: '48px',
            color: kimi.white,
            ...createTextOutline(kimi.dark, 3),
            filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))',
            animation: 'bounce 1s ease-in-out infinite',
          }}
        >
          ↓
        </div>
      </div>

      {/* Sparkle decorations */}
      <div
        style={{
          position: 'absolute',
          right: '8%',
          top: '16%',
          fontSize: '52px',
          color: kimi.highlight,
          ...createTextOutline(kimi.dark, 1),
          filter: `drop-shadow(0 0 25px ${kimi.highlight})`,
        }}
      >
        ✦
      </div>
      <div
        style={{
          position: 'absolute',
          left: '7%',
          bottom: '20%',
          fontSize: '44px',
          color: kimi.accent,
          ...createTextOutline(kimi.dark, 1),
          filter: `drop-shadow(0 0 25px ${kimi.accent})`,
        }}
      >
        ✦
      </div>
      <div
        style={{
          position: 'absolute',
          right: '12%',
          bottom: '30%',
          fontSize: '34px',
          color: kimi.white,
          ...createTextOutline(kimi.dark, 1),
          filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.8))',
        }}
      >
        ✦
      </div>

      {/* Mobile safe zone for Shorts (9:16 aspect) */}
      <div
        style={{
          position: 'absolute',
          width: '405px',
          height: '720px',
          border: '3px dashed rgba(255,255,255,0.1)',
          pointerEvents: 'none',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '8px',
        }}
      />

      {/* Full frame border */}
      <div
        style={{
          position: 'absolute',
          width: '1280px',
          height: '720px',
          border: '2px solid rgba(255,255,255,0.05)',
          pointerEvents: 'none',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <style>{`
        @keyframes slideLeft {
          0%, 100% { transform: translateX(0); opacity: 1; }
          50% { transform: translateX(-15px); opacity: 0.8; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(15px); }
        }
      `}</style>
    </AbsoluteFill>
  );
};

export default ShortThumbnailV4;

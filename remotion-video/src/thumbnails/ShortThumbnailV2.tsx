import React from 'react';
import { AbsoluteFill } from 'remotion';
import { brandColors, createTextOutline } from './brand-palettes';

const kimi = brandColors.kimi;

export const ShortThumbnailV2: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(145deg, ${kimi.primary} 0%, ${kimi.secondary} 50%, ${kimi.dark} 100%)`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 80%, ${kimi.highlight}25 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, ${kimi.accent}20 0%, transparent 50%)
          `,
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '7%',
          textAlign: 'center',
          width: '100%',
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontSize: '46px',
            fontWeight: 900,
            color: kimi.white,
            textTransform: 'uppercase',
            letterSpacing: '4px',
            ...createTextOutline(kimi.dark, 3),
          }}
        >
          SECRET METHOD
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          zIndex: 10,
        }}
      >
        <div
          style={{
            position: 'relative',
            fontSize: '68px',
            fontWeight: 800,
            color: kimi.gray,
            textDecoration: 'line-through',
            textDecorationColor: kimi.danger,
            textDecorationThickness: '8px',
            opacity: 0.8,
            ...createTextOutline(kimi.dark, 2),
          }}
        >
          REGULAR PRICE
        </div>

        <div
          style={{
            position: 'absolute',
            right: '-130px',
            top: '15%',
            fontSize: '90px',
            filter: `drop-shadow(0 0 25px ${kimi.highlight})`,
            ...createTextOutline(kimi.dark, 2),
            animation: 'pulse 1.5s ease-in-out infinite',
          }}
        >
          ⚡
        </div>

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
              width: '280px',
              height: '280px',
              border: `8px solid ${kimi.highlight}`,
              borderRadius: '50%',
              boxShadow: `
                0 0 50px ${kimi.highlight},
                inset 0 0 50px ${kimi.highlight}40,
                0 0 100px ${kimi.highlight}60
              `,
            }}
          />

          <span
            style={{
              fontSize: '150px',
              fontWeight: 900,
              color: kimi.accent,
              ...createTextOutline(kimi.dark, 5),
              textShadow: `
                0 0 40px ${kimi.accent},
                0 0 80px ${kimi.accent},
                0 0 120px ${kimi.accent}80
              `,
            }}
          >
            $0.99
          </span>
        </div>

        <div
          style={{
            fontSize: '40px',
            fontWeight: 800,
            color: kimi.white,
            ...createTextOutline(kimi.dark, 2),
            marginTop: '-5px',
          }}
        >
          MONTHLY
        </div>

        <div
          style={{
            fontSize: '34px',
            fontWeight: 900,
            color: kimi.highlight,
            ...createTextOutline(kimi.dark, 2),
            letterSpacing: '3px',
            marginTop: '5px',
          }}
        >
          KIMI AI HACK
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '7%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontSize: '30px',
            fontWeight: 900,
            color: kimi.dark,
            background: kimi.highlight,
            padding: '16px 45px',
            borderRadius: '50px',
            ...createTextOutline(kimi.white, 1),
            boxShadow: `
              0 0 35px ${kimi.highlight},
              0 6px 25px rgba(0,0,0,0.4)
            `,
          }}
        >
          SWIPE UP
        </div>
        
        <div
          style={{
            fontSize: '44px',
            color: kimi.white,
            ...createTextOutline(kimi.dark, 2),
            filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))',
            animation: 'bounce 1.2s ease-in-out infinite',
          }}
        >
          ↓
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: '7%',
          top: '18%',
          fontSize: '48px',
          color: kimi.highlight,
          ...createTextOutline(kimi.dark, 1),
          filter: `drop-shadow(0 0 20px ${kimi.highlight})`,
        }}
      >
        ✦
      </div>
      <div
        style={{
          position: 'absolute',
          right: '8%',
          bottom: '22%',
          fontSize: '42px',
          color: kimi.accent,
          ...createTextOutline(kimi.dark, 1),
          filter: `drop-shadow(0 0 20px ${kimi.accent})`,
        }}
      >
        ✦
      </div>
      <div
        style={{
          position: 'absolute',
          left: '10%',
          bottom: '32%',
          fontSize: '32px',
          color: kimi.white,
          ...createTextOutline(kimi.dark, 1),
          filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.8))',
        }}
      >
        ✦
      </div>

      <div
        style={{
          position: 'absolute',
          width: '405px',
          height: '720px',
          border: '3px dashed rgba(255,255,255,0.12)',
          pointerEvents: 'none',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '8px',
        }}
      />

      <div
        style={{
          position: 'absolute',
          width: '1280px',
          height: '720px',
          border: '2px solid rgba(255,255,255,0.06)',
          pointerEvents: 'none',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.9; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(12px); }
        }
      `}</style>
    </AbsoluteFill>
  );
};

export default ShortThumbnailV2;
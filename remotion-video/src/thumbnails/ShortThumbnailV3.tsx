import React from 'react';
import { AbsoluteFill } from 'remotion';
import { brandColors, createTextOutline } from './brand-palettes';

const kimi = brandColors.kimi;

export const ShortThumbnailV3: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(145deg, ${kimi.dark} 0%, ${kimi.secondary} 50%, ${kimi.primary} 100%)`,
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
          top: '6%',
          textAlign: 'center',
          width: '100%',
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontSize: '52px',
            fontWeight: 900,
            color: kimi.highlight,
            textTransform: 'uppercase',
            letterSpacing: '3px',
            ...createTextOutline(kimi.dark, 4),
          }}
        >
          DITCH THE
        </div>
        <div
          style={{
            fontSize: '48px',
            fontWeight: 900,
            color: kimi.white,
            textTransform: 'uppercase',
            letterSpacing: '3px',
            marginTop: '-5px',
            ...createTextOutline(kimi.dark, 3),
          }}
        >
          PREMIUM PRICE
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          zIndex: 10,
        }}
      >
        <div
          style={{
            position: 'relative',
            fontSize: '62px',
            fontWeight: 800,
            color: kimi.gray,
            textDecoration: 'line-through',
            textDecorationColor: kimi.danger,
            textDecorationThickness: '8px',
            opacity: 0.8,
            ...createTextOutline(kimi.dark, 2),
          }}
        >
          EXPENSIVE AI
        </div>

        <div
          style={{
            position: 'absolute',
            left: '-110px',
            top: '20%',
            fontSize: '80px',
            filter: `drop-shadow(0 0 25px ${kimi.accent})`,
            ...createTextOutline(kimi.dark, 2),
            animation: 'pulse 1.5s ease-in-out infinite',
          }}
        >
          ←
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
              width: '300px',
              height: '300px',
              border: `8px solid ${kimi.accent}`,
              borderRadius: '50%',
              boxShadow: `
                0 0 50px ${kimi.accent},
                inset 0 0 50px ${kimi.accent}40,
                0 0 100px ${kimi.accent}60
              `,
            }}
          />

          <span
            style={{
              fontSize: '160px',
              fontWeight: 900,
              color: kimi.highlight,
              ...createTextOutline(kimi.dark, 5),
              textShadow: `
                0 0 40px ${kimi.highlight},
                0 0 80px ${kimi.highlight},
                0 0 120px ${kimi.highlight}80
              `,
            }}
          >
            $0.99
          </span>
        </div>

        <div
          style={{
            fontSize: '38px',
            fontWeight: 800,
            color: kimi.accent,
            ...createTextOutline(kimi.dark, 2),
            marginTop: '-5px',
          }}
        >
          MONTHLY CHEAP
        </div>

        <div
          style={{
            fontSize: '32px',
            fontWeight: 900,
            color: kimi.white,
            ...createTextOutline(kimi.dark, 2),
            letterSpacing: '3px',
            marginTop: '5px',
          }}
        >
          KIMI CODE
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '6%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontSize: '32px',
            fontWeight: 900,
            color: kimi.dark,
            background: kimi.highlight,
            padding: '16px 50px',
            borderRadius: '50px',
            ...createTextOutline(kimi.white, 1),
            boxShadow: `
              0 0 35px ${kimi.highlight},
              0 6px 25px rgba(0,0,0,0.4)
            `,
          }}
        >
          TRY IT FREE
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
          right: '7%',
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
          left: '8%',
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
          right: '10%',
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

export default ShortThumbnailV3;
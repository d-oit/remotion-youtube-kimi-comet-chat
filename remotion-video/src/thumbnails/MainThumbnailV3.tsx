import React from 'react';
import { AbsoluteFill } from 'remotion';
import { brandColors, createTextOutline } from './brand-palettes';

const kimi = brandColors.kimi;

export const MainThumbnailV3: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(145deg, ${kimi.dark} 0%, ${kimi.darkSecondary} 50%, ${kimi.primary}15 100%)`,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(${kimi.primary}10 1px, transparent 1px),
            linear-gradient(90deg, ${kimi.primary}10 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.5,
        }}
      />

      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          background: `radial-gradient(circle, ${kimi.primary}25 0%, transparent 70%)`,
          filter: 'blur(100px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          zIndex: 10,
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '14px 28px',
            background: `linear-gradient(135deg, ${kimi.primary}30 0%, ${kimi.secondary}40 100%)`,
            borderRadius: '12px',
            border: `3px solid ${kimi.primary}`,
            boxShadow: `0 0 40px ${kimi.primary}50`,
          }}
        >
          <span
            style={{
              fontSize: '44px',
              fontWeight: 900,
              color: kimi.white,
              letterSpacing: '3px',
              ...createTextOutline(kimi.dark, 3),
            }}
          >
            AGENT SWARM
          </span>
        </div>

        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '8px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: '320px',
              height: '320px',
              border: `6px solid ${kimi.accent}`,
              borderRadius: '50%',
              boxShadow: `
                0 0 40px ${kimi.accent},
                inset 0 0 40px ${kimi.accent}30,
                0 0 80px ${kimi.accent}50
              `,
            }}
          />

          <span
            style={{
              fontSize: '180px',
              fontWeight: 900,
              color: kimi.highlight,
              lineHeight: 1,
              ...createTextOutline(kimi.dark, 5),
              textShadow: `
                0 0 40px ${kimi.highlight},
                0 0 80px ${kimi.highlight}80,
                0 0 120px ${kimi.highlight}40
              `,
            }}
          >
            $0.99
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginTop: '-5px',
          }}
        >
          <span
            style={{
              fontSize: '36px',
              fontWeight: 700,
              color: kimi.gray,
              ...createTextOutline(kimi.dark, 2),
            }}
          >
            INSTEAD OF
          </span>
          <span
            style={{
              fontSize: '48px',
              fontWeight: 800,
              color: kimi.gray,
              textDecoration: 'line-through',
              textDecorationColor: kimi.danger,
              textDecorationThickness: '6px',
              ...createTextOutline(kimi.dark, 2),
            }}
          >
            $9.99
          </span>
        </div>

        <div
          style={{
            marginTop: '24px',
            padding: '18px 45px',
            background: `linear-gradient(135deg, ${kimi.accent} 0%, ${kimi.primary} 100%)`,
            borderRadius: '10px',
            border: `3px solid ${kimi.white}`,
            boxShadow: `
              0 0 30px ${kimi.accent}60,
              0 8px 30px rgba(0,0,0,0.4)
            `,
          }}
        >
          <span
            style={{
              fontSize: '40px',
              fontWeight: 900,
              color: kimi.dark,
              letterSpacing: '3px',
              ...createTextOutline(kimi.white, 3),
            }}
          >
            UNBELIEVABLE
          </span>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: '80px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 5,
        }}
      >
        <svg
          width="130"
          height="70"
          viewBox="0 0 130 70"
          fill="none"
          style={{
            filter: `drop-shadow(0 0 15px ${kimi.accent})`,
          }}
        >
          <path
            d="M10 35 L90 35 L90 15 L120 35 L90 55 L90 35"
            stroke={kimi.accent}
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={kimi.accent}
          />
        </svg>
        <div
          style={{
            fontSize: '26px',
            fontWeight: 800,
            color: kimi.accent,
            textAlign: 'center',
            marginTop: '8px',
            ...createTextOutline(kimi.dark, 2),
          }}
        >
          VALUE!
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          right: '140px',
          top: '22%',
          fontSize: '55px',
          color: kimi.highlight,
          filter: `drop-shadow(0 0 20px ${kimi.highlight})`,
          ...createTextOutline(kimi.dark, 1),
        }}
      >
        ✦
      </div>
      <div
        style={{
          position: 'absolute',
          right: '180px',
          bottom: '28%',
          fontSize: '40px',
          color: kimi.accent,
          filter: `drop-shadow(0 0 15px ${kimi.accent})`,
          ...createTextOutline(kimi.dark, 1),
        }}
      >
        ✦
      </div>
      <div
        style={{
          position: 'absolute',
          left: '180px',
          top: '28%',
          fontSize: '35px',
          color: kimi.primary,
          filter: `drop-shadow(0 0 15px ${kimi.primary})`,
          ...createTextOutline(kimi.dark, 1),
        }}
      >
        ✦
      </div>

      <div
        style={{
          position: 'absolute',
          top: '35px',
          right: '35px',
          width: '90px',
          height: '90px',
          border: `3px solid ${kimi.accent}`,
          borderRadius: '14px',
          opacity: 0.5,
          transform: 'rotate(45deg)',
          boxShadow: `0 0 20px ${kimi.accent}40`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '35px',
          left: '35px',
          width: '90px',
          height: '90px',
          border: `3px solid ${kimi.primary}`,
          borderRadius: '14px',
          opacity: 0.4,
          transform: 'rotate(45deg)',
          boxShadow: `0 0 20px ${kimi.primary}40`,
        }}
      />

      <div
        style={{
          position: 'absolute',
          width: '720px',
          height: '405px',
          border: '3px dashed rgba(255,255,255,0.08)',
          pointerEvents: 'none',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '8px',
        }}
      />
    </AbsoluteFill>
  );
};

export default MainThumbnailV3;
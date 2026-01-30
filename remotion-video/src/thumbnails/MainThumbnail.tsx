import React from 'react';
import { AbsoluteFill, staticFile } from 'remotion';

const colors = {
  primary: '#667eea',
  secondary: '#764ba2',
  accent: '#00ffff',
  background: '#0a0a0f',
  backgroundLight: '#1a1a2e',
  white: '#ffffff',
};

const TECH_GRID_PATH = staticFile('final-0-99-output.png');

export const MainThumbnail: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${colors.background} 0%, ${colors.backgroundLight} 100%)`,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Grid pattern overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(102, 126, 234, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(102, 126, 234, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          opacity: 0.5,
        }}
      />

      {/* Gradient glow behind content */}
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          background: `radial-gradient(circle, ${colors.primary}30 0%, transparent 70%)`,
          filter: 'blur(60px)',
        }}
      />

      {/* Main content container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          zIndex: 1,
        }}
      >
        {/* KIMI AI Logo/Label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 24px',
            background: 'rgba(102, 126, 234, 0.2)',
            borderRadius: '12px',
            border: `2px solid ${colors.primary}`,
            boxShadow: `0 0 30px ${colors.primary}50`,
          }}
        >
          <span
            style={{
              fontSize: '42px',
              fontWeight: 900,
              color: colors.white,
              fontFamily: 'system-ui, -apple-system, sans-serif',
              textShadow: `0 0 20px ${colors.primary}`,
              letterSpacing: '2px',
            }}
          >
            KIMI AI
          </span>
        </div>

        {/* Main price display */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <span
            style={{
              fontSize: '180px',
              fontWeight: 900,
              color: colors.accent,
              fontFamily: 'system-ui, -apple-system, sans-serif',
              textShadow: `
                0 0 20px ${colors.accent}80,
                0 0 40px ${colors.accent}50,
                0 0 60px ${colors.accent}30
              `,
              lineHeight: 1,
            }}
          >
            $0.99
          </span>
          <span
            style={{
              fontSize: '48px',
              fontWeight: 700,
              color: colors.white,
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            /mo
          </span>
        </div>

        {/* Instead of $9.99 with strikethrough */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: '-10px',
          }}
        >
          <span
            style={{
              fontSize: '32px',
              fontWeight: 600,
              color: 'rgba(255, 255, 255, 0.8)',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              letterSpacing: '1px',
            }}
          >
            INSTEAD OF
          </span>
          <span
            style={{
              fontSize: '40px',
              fontWeight: 700,
              color: 'rgba(255, 255, 255, 0.5)',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              textDecoration: 'line-through',
              textDecorationColor: '#ff4444',
              textDecorationThickness: '4px',
            }}
          >
            $9.99
          </span>
        </div>

        {/* Bottom subtitle */}
        <div
          style={{
            marginTop: '30px',
            padding: '16px 40px',
            background: `linear-gradient(135deg, ${colors.primary}40 0%, ${colors.secondary}40 100%)`,
            borderRadius: '8px',
            border: `2px solid ${colors.primary}60`,
            boxShadow: `0 0 30px ${colors.primary}30`,
          }}
        >
          <span
            style={{
              fontSize: '38px',
              fontWeight: 800,
              color: colors.white,
              fontFamily: 'system-ui, -apple-system, sans-serif',
              letterSpacing: '2px',
              textShadow: `0 0 20px ${colors.primary}60`,
            }}
          >
            THE EXPLOIT PROMPT METHOD
          </span>
        </div>

        {/* Arrow pointing to price */}
        <div
          style={{
            position: 'absolute',
            left: '100px',
            top: '50%',
            transform: 'translateY(-50%) rotate(-15deg)',
          }}
        >
          <div
            style={{
              width: '120px',
              height: '8px',
              background: colors.accent,
              borderRadius: '4px',
              boxShadow: `0 0 20px ${colors.accent}`,
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                right: '-20px',
                top: '-16px',
                width: 0,
                height: 0,
                borderLeft: '24px solid transparent',
                borderRight: '24px solid transparent',
                borderBottom: `32px solid ${colors.accent}`,
                filter: `drop-shadow(0 0 10px ${colors.accent})`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Corner accents */}
      <div
        style={{
          position: 'absolute',
          top: '30px',
          right: '30px',
          width: '80px',
          height: '80px',
          border: `3px solid ${colors.primary}`,
          borderRadius: '12px',
          opacity: 0.4,
          transform: 'rotate(45deg)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '30px',
          width: '80px',
          height: '80px',
          border: `3px solid ${colors.secondary}`,
          borderRadius: '12px',
          opacity: 0.4,
          transform: 'rotate(45deg)',
        }}
      />
    </AbsoluteFill>
  );
};

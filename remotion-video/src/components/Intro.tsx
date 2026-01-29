import { useVideoConfig, useSpring, interpolate, AbsoluteFill, Img } from 'remotion';
import { springConfig } from '../utils/animation';

export const Intro = () => {
  const { durationInFrames } = useVideoConfig();

  const titleOpacity = useSpring({ frame: 0, config: springConfig.stiff });
  const titleScale = useSpring({ frame: 0, config: springConfig.wobbly });
  const subtitleOpacity = useSpring({ frame: 30, config: springConfig.default });
  const logoOpacity = useSpring({ frame: 60, config: springConfig.default });
  const logoScale = useSpring({ frame: 60, config: springConfig.bouncy });

  const progress = interpolate(0, durationInFrames, [0, 1]);

  const backgroundProgress = interpolate(0, durationInFrames, [0, 1]);
  const gradientOpacity = interpolate(backgroundProgress, [0.7, 1], [0, 0.8]);

  return (
    <AbsoluteFill style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}>
      <AbsoluteFill>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(102, 126, 234, 0.3) 0%, transparent 70%)',
            opacity: gradientOpacity,
          }}
        />
      </AbsoluteFill>

      <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40 }}>
          <div
            style={{
              transform: `scale(${1 + (1 - titleScale) * 0.5})`,
              opacity: titleOpacity,
            }}
          >
            <h1
              style={{
                fontSize: 120,
                fontWeight: 900,
                color: '#ffffff',
                margin: 0,
                textShadow: '0 0 60px rgba(102, 126, 234, 0.8)',
                letterSpacing: '-4px',
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}
            >
              KIMI
            </h1>
            <h1
              style={{
                fontSize: 120,
                fontWeight: 900,
                background: 'linear-gradient(90deg, #667eea, #764ba2, #f093fb)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                margin: 0,
                marginTop: -20,
                letterSpacing: '-4px',
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}
            >
              COMET CHAT
            </h1>
          </div>

          <div
            style={{
              opacity: subtitleOpacity,
              transform: `translateY(${(1 - subtitleOpacity) * 50}px)`,
            }}
          >
            <p
              style={{
                fontSize: 36,
                color: '#a0aec0',
                margin: 0,
                letterSpacing: '8px',
                textTransform: 'uppercase',
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}
            >
              Revolutionary Messaging Experience
            </p>
          </div>

          <div
            style={{
              opacity: logoOpacity,
              transform: `scale(${0.8 + (1 - logoScale) * 0.3})`,
              marginTop: 40,
            }}
          >
            <Img
              src="src/assets/final-0-99-output.png"
              style={{
                width: 200,
                height: 'auto',
                filter: 'drop-shadow(0 0 20px rgba(102, 126, 234, 0.5))',
              }}
            />
          </div>
        </div>
      </AbsoluteFill>

      <AbsoluteFill style={{ bottom: 60, left: 0, right: 0 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20,
          }}
        >
          <div
            style={{
              width: 100,
              height: 4,
              background: 'linear-gradient(90deg, transparent, #667eea)',
              borderRadius: 2,
            }}
          />
          <span
            style={{
              color: '#667eea',
              fontSize: 18,
              letterSpacing: '4px',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            INTRO
          </span>
          <div
            style={{
              width: 100,
              height: 4,
              background: 'linear-gradient(90deg, #667eea, transparent)',
              borderRadius: 2,
            }}
          />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

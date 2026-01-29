import { useVideoConfig, useSpring, interpolate, AbsoluteFill, Img } from 'remotion';
import { springConfig } from '../utils/animation';

export const Outro = () => {
  const { durationInFrames } = useVideoConfig();

  const titleOpacity = useSpring({ frame: 0, config: springConfig.stiff });
  const titleScale = useSpring({ frame: 0, config: springConfig.wobbly });
  const ctaOpacity = useSpring({ frame: 40, config: springConfig.default });
  const ctaY = useSpring({ frame: 40, config: springConfig.gentle });
  const logoOpacity = useSpring({ frame: 80, config: springConfig.default });

  const progress = interpolate(0, durationInFrames, [0, 1]);
  const glowIntensity = interpolate(progress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        overflow: 'hidden',
      }}
    >
      <AbsoluteFill>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 800,
            height: 800,
            background: `radial-gradient(circle, rgba(102, 126, 234, ${0.2 * glowIntensity}) 0%, transparent 70%)`,
            borderRadius: '50%',
            filter: 'blur(60px)',
          }}
        />
      </AbsoluteFill>

      <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 50 }}>
          <div
            style={{
              transform: `scale(${1 + (1 - titleScale) * 0.3})`,
              opacity: titleOpacity,
              textAlign: 'center',
            }}
          >
            <h1
              style={{
                fontSize: 64,
                fontWeight: 800,
                color: '#ffffff',
                margin: 0,
                marginBottom: 20,
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}
            >
              Ready to Get Started?
            </h1>
            <p
              style={{
                fontSize: 28,
                color: '#a0aec0',
                margin: 0,
                maxWidth: 600,
                lineHeight: 1.6,
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}
            >
              Join thousands of users experiencing the future of messaging with Kimi Comet Chat.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              gap: 30,
              opacity: ctaOpacity,
              transform: `translateY(${(1 - ctaY) * 50}px)`,
            }}
          >
            <div
              style={{
                padding: '20px 50px',
                background: 'linear-gradient(90deg, #667eea, #764ba2)',
                borderRadius: 50,
                boxShadow: '0 10px 40px rgba(102, 126, 234, 0.4)',
              }}
            >
              <span
                style={{
                  color: '#ffffff',
                  fontSize: 24,
                  fontWeight: 700,
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                }}
              >
                Download Now
              </span>
            </div>
          </div>

          <div style={{ opacity: logoOpacity, marginTop: 40 }}>
            <Img
              src="src/assets/final-0-99-output.png"
              style={{
                width: 150,
                height: 'auto',
                filter: 'drop-shadow(0 0 20px rgba(102, 126, 234, 0.5))',
              }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              marginTop: 60,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#667eea',
              }}
            />
            <span
              style={{
                color: '#667eea',
                fontSize: 16,
                letterSpacing: '4px',
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}
            >
              SUBSCRIBE FOR MORE
            </span>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#667eea',
              }}
            />
          </div>
        </div>
      </AbsoluteFill>

      <AbsoluteFill style={{ bottom: 40, left: 0, right: 0 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 60,
            color: '#718096',
            fontSize: 14,
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          <span>KimiCometChat.com</span>
          <span>Support@kimi.com</span>
          <span>Version 1.0</span>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

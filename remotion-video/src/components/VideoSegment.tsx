import { useVideoConfig, useSpring, interpolate, AbsoluteFill, Video, Img } from 'remotion';
import { springConfig } from '../utils/animation';

interface VideoSegmentProps {
  videoPath: string;
  title: string;
  description: string;
  segmentIndex: number;
}

export const VideoSegment = ({ videoPath, title, description, segmentIndex }: VideoSegmentProps) => {
  const { durationInFrames } = useVideoConfig();

  const overlayOpacity = useSpring({ frame: 0, config: springConfig.default });
  const titleOpacity = useSpring({ frame: 20, config: springConfig.default });
  const titleY = useSpring({ frame: 20, config: springConfig.gentle });
  const descOpacity = useSpring({ frame: 50, config: springConfig.default });
  const logoOpacity = useSpring({ frame: 80, config: springConfig.default });

  const progress = interpolate(0, durationInFrames, [0, 1]);
  const scale = interpolate(progress, [0, 0.1, 0.9, 1], [1.1, 1, 1, 1.1]);

  const segmentColors = [
    { primary: '#667eea', secondary: '#764ba2' },
    { primary: '#f093fb', secondary: '#f5576c' },
    { primary: '#4facfe', secondary: '#00f2fe' },
  ];
  const colors = segmentColors[segmentIndex];

  return (
    <AbsoluteFill style={{ backgroundColor: '#0a0a0a' }}>
      <Video
        src={videoPath}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: `scale(${scale})`,
        }}
      />

      <AbsoluteFill
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
        }}
      />

      <AbsoluteFill
        style={{
          background: `linear-gradient(135deg, ${colors.primary}22 0%, transparent 50%)`,
          opacity: overlayOpacity,
        }}
      />

      <AbsoluteFill style={{ justifyContent: 'flex-end', padding: 60, paddingBottom: 120 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            maxWidth: 800,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              marginBottom: 10,
            }}
          >
            <div
              style={{
                width: 60,
                height: 6,
                background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
                borderRadius: 3,
              }}
            />
            <span
              style={{
                color: colors.primary,
                fontSize: 16,
                letterSpacing: '4px',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: 600,
              }}
            >
              PART {segmentIndex + 1}
            </span>
          </div>

          <div
            style={{
              opacity: titleOpacity,
              transform: `translateY(${(1 - titleY) * 30}px)`,
            }}
          >
            <h2
              style={{
                fontSize: 72,
                fontWeight: 800,
                color: '#ffffff',
                margin: 0,
                lineHeight: 1.1,
                textShadow: '0 4px 30px rgba(0,0,0,0.5)',
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}
            >
              {title}
            </h2>
          </div>

          <div style={{ opacity: descOpacity }}>
            <p
              style={{
                fontSize: 28,
                color: '#cbd5e0',
                margin: 0,
                lineHeight: 1.6,
                maxWidth: 600,
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}
            >
              {description}
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 15,
              marginTop: 30,
              opacity: logoOpacity,
            }}
          >
            <Img
              src="src/assets/final-0-99-output.png"
              style={{
                width: 40,
                height: 'auto',
              }}
            />
            <span
              style={{
                color: '#718096',
                fontSize: 14,
                letterSpacing: '2px',
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}
            >
              KIMI COMET CHAT
            </span>
          </div>
        </div>
      </AbsoluteFill>

      <AbsoluteFill style={{ top: 40, right: 60 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '12px 24px',
            background: 'rgba(0,0,0,0.6)',
            borderRadius: 30,
            backdropFilter: 'blur(10px)',
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: colors.primary,
              animation: 'pulse 2s infinite',
            }}
          />
          <span
            style={{
              color: '#ffffff',
              fontSize: 14,
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            LIVE DEMO
          </span>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

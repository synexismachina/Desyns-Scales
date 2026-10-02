import "./AnimatedGoldLines.css";

/**
 * Flowing gold line system.
 * Renders a faint static path plus a bright travelling segment on top of it,
 * animated via stroke-dashoffset so it reads as slow, liquid light rather
 * than a decorative border. Kept to CSS animation (GPU-friendly, no JS ticking).
 */
const PRESETS = {
  hero: [
    { d: "M -50 620 C 250 520, 480 700, 780 560 S 1250 420, 1500 500", duration: 26, delay: 0, width: 1.4 },
    { d: "M -80 180 C 220 260, 460 80, 760 200 S 1220 300, 1560 160", duration: 32, delay: -8, width: 1 },
    { d: "M -60 860 C 260 780, 620 900, 900 780 S 1300 700, 1560 820", duration: 22, delay: -4, width: 1 },
  ],
  section: [
    { d: "M -40 90 C 240 20, 480 160, 780 70 S 1180 -20, 1480 90", duration: 28, delay: 0, width: 1 },
    { d: "M -40 300 C 300 380, 560 220, 860 320 S 1240 400, 1480 280", duration: 24, delay: -10, width: 1 },
  ],
  vertical: [
    { d: "M 60 -40 C -20 220, 140 420, 40 640 S -40 900, 80 1160", duration: 30, delay: 0, width: 1.2 },
    { d: "M 260 -60 C 340 200, 180 440, 300 680 S 380 940, 240 1180", duration: 34, delay: -12, width: 1 },
  ],
};

export default function AnimatedGoldLines({
  variant = "section",
  viewBox = "0 0 1440 900",
  className = "",
  opacity = 1,
}) {
  const lines = PRESETS[variant] || PRESETS.section;
  const uid = variant;

  return (
    <svg
      className={`gold-lines gold-lines--${variant} ${className}`}
      viewBox={viewBox}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      style={{ opacity }}
    >
      <defs>
        <linearGradient id={`goldFlow-${uid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--gold)" stopOpacity="0" />
          <stop offset="45%" stopColor="var(--gold-light)" stopOpacity="0.95" />
          <stop offset="55%" stopColor="var(--gold)" stopOpacity="0.85" />
          <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {lines.map((line, i) => (
        <g key={i}>
          <path
            d={line.d}
            className="gold-lines__base"
            strokeWidth={line.width}
            fill="none"
          />
          <path
            d={line.d}
            className="gold-lines__flow"
            stroke={`url(#goldFlow-${uid})`}
            strokeWidth={line.width + 0.6}
            fill="none"
            style={{
              animationDuration: `${line.duration}s`,
              animationDelay: `${line.delay}s`,
            }}
          />
        </g>
      ))}
    </svg>
  );
}

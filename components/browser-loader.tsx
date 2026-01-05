"use client"

export const BrowserLoader = ({ isVisible = true }: { isVisible?: boolean }) => {
  if (!isVisible) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50">
      <div className="w-full h-full flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 1200 800" className="w-full h-full max-w-2xl max-h-96">
          <defs>
            {/* Gradient definitions for trace flows */}
            <linearGradient id="traceGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#22d3ee", stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: "#06b6d4", stopOpacity: 0 }} />
            </linearGradient>
            <linearGradient id="traceGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: "#1e40af", stopOpacity: 0 }} />
            </linearGradient>
            <linearGradient id="traceGradient3" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#a855f7", stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: "#7c3aed", stopOpacity: 0 }} />
            </linearGradient>
            <linearGradient id="traceGradient4" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#06b6d4", stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: "#0891b2", stopOpacity: 0 }} />
            </linearGradient>
          </defs>

          {/* Grid background */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#222" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="1200" height="800" fill="url(#grid)" />

          {/* Browser frame */}
          <rect
            x="150"
            y="80"
            width="900"
            height="600"
            rx="12"
            fill="#111"
            stroke="#666"
            strokeWidth="1"
            filter="drop-shadow(0 0 10px rgba(0,0,0,0.9))"
          />

          {/* Browser top bar */}
          <rect x="150" y="80" width="900" height="50" rx="12" fill="#1a1a1a" />

          {/* Browser controls */}
          <circle cx="190" cy="105" r="6" fill="#ff5f56" />
          <circle cx="220" cy="105" r="6" fill="#ffbd2e" />
          <circle cx="250" cy="105" r="6" fill="#27c93f" />

          {/* URL bar */}
          <rect x="290" y="95" width="700" height="20" rx="4" fill="#2d2d2d" stroke="#444" strokeWidth="0.5" />
          <text x="300" y="107" fontSize="12" fill="#888" fontFamily="Haettenschweiler, sans-serif">
            https://portfolio.dev ✓
          </text>

          {/* Content area with skeleton loaders */}
          {/* Header skeleton */}
          <rect
            x="170"
            y="150"
            width="860"
            height="30"
            rx="4"
            fill="#2d2d2d"
            className="skeleton"
            filter="drop-shadow(0 0 3px rgba(255,255,255,0.02))"
          />

          {/* Paragraph skeleton lines */}
          <rect
            x="170"
            y="200"
            width="860"
            height="16"
            rx="4"
            fill="#2d2d2d"
            className="skeleton"
            filter="drop-shadow(0 0 3px rgba(255,255,255,0.02))"
          />
          <rect
            x="170"
            y="230"
            width="820"
            height="16"
            rx="4"
            fill="#2d2d2d"
            className="skeleton"
            filter="drop-shadow(0 0 3px rgba(255,255,255,0.02))"
          />
          <rect
            x="170"
            y="260"
            width="840"
            height="16"
            rx="4"
            fill="#2d2d2d"
            className="skeleton"
            filter="drop-shadow(0 0 3px rgba(255,255,255,0.02))"
          />

          {/* Card skeleton */}
          <rect
            x="170"
            y="310"
            width="400"
            height="120"
            rx="8"
            fill="#2d2d2d"
            className="skeleton"
            filter="drop-shadow(0 0 3px rgba(255,255,255,0.02))"
          />
          <rect
            x="600"
            y="310"
            width="430"
            height="120"
            rx="8"
            fill="#2d2d2d"
            className="skeleton"
            filter="drop-shadow(0 0 3px rgba(255,255,255,0.02))"
          />

          {/* Trace flow animations */}
          <path
            d="M 150 150 Q 300 200, 450 180 T 750 220 Q 900 240, 1050 200"
            className="trace-flow"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="drop-shadow(0 0 8px rgba(34, 211, 238, 0.8)) blur(0.5px)"
          />
          <path
            d="M 150 300 Q 400 280, 600 330 T 950 320"
            className="trace-flow"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ animationDelay: "0.5s" }}
            filter="drop-shadow(0 0 8px rgba(59, 130, 246, 0.8)) blur(0.5px)"
          />
          <path
            d="M 200 450 Q 450 420, 700 480 T 1000 450"
            className="trace-flow"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ animationDelay: "1s" }}
            filter="drop-shadow(0 0 8px rgba(168, 85, 247, 0.8)) blur(0.5px)"
          />
          <path
            d="M 150 550 Q 350 500, 550 550 T 1050 500"
            className="trace-flow"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ animationDelay: "1.5s" }}
            filter="drop-shadow(0 0 8px rgba(6, 182, 212, 0.8)) blur(0.5px)"
          />

          {/* Loading text */}
          <text
            x="600"
            y="720"
            fontSize="16"
            textAnchor="middle"
            fill="#e4e4e4"
            fontFamily="Haettenschweiler, sans-serif"
            fontWeight="bold"
          >
            Loading...
          </text>
        </svg>
      </div>

      <style>{`
        @keyframes pulse {
          0% { fill: #2d2d2d; }
          50% { fill: #505050; }
          100% { fill: #2d2d2d; }
        }

        @keyframes flow {
          from { stroke-dashoffset: 720; }
          to { stroke-dashoffset: 0; }
        }

        .skeleton {
          fill: #2d2d2d;
          rx: 4;
          ry: 4;
          animation: pulse 1.8s ease-in-out infinite;
          filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.02));
        }

        .trace-flow {
          stroke-width: 2;
          fill: none;
          stroke-dasharray: 120 600;
          stroke-dashoffset: 720;
          animation: flow 5s linear infinite;
          opacity: 0.95;
          stroke-linejoin: round;
        }
      `}</style>
    </div>
  )
}

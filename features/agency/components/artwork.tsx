import type { CSSProperties } from "react";

export function BrandMark() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect width="48" height="48" rx="12" fill="#171717" />
      <path
        d="M8 34V14l8 11 8-11v20M40 25H32a4 4 0 0 1-4-4v-3a4 4 0 0 1 4-4h8v16a4 4 0 0 1-4 4h-8"
        stroke="#FFF21A"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Starburst({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 500 500"
      fill="none"
      aria-hidden="true"
    >
      {Array.from({ length: 120 }, (_, i) => {
        const angle = (i * Math.PI) / 60;
        const outer = i % 3 === 0 ? 238 : 221;
        const inner = i % 2 === 0 ? 88 : 73;
        return (
          <line
            key={i}
            x1={(250 + Math.sin(angle) * outer).toFixed(4)}
            y1={(250 - Math.cos(angle) * outer).toFixed(4)}
            x2={(250 + Math.sin(angle) * inner).toFixed(4)}
            y2={(250 - Math.cos(angle) * inner).toFixed(4)}
            stroke="currentColor"
            strokeWidth="1"
          />
        );
      })}
    </svg>
  );
}

export function ProjectArtwork({
  kind,
  compact = false,
}: {
  kind: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`project-art art-${kind}${compact ? " art-compact" : ""}`}
      aria-hidden="true"
    >
      {(kind === "nova" || kind === "orbit" || kind === "kinetic") && (
        <div className="orbit-rings">
          {Array.from({ length: 8 }, (_, i) => (
            <span key={i} style={{ "--ring": i } as CSSProperties} />
          ))}
        </div>
      )}
      {kind === "nova" && <strong className="nova-word">NOVA</strong>}
      {kind === "pulse" && (
        <>
          <span className="pulse-word">PULSE</span>
          <div className="equalizer">
            {[28, 53, 79, 44, 100, 65, 38, 83, 55, 96, 30, 47].map(
              (height, i) => (
                <span
                  key={i}
                  style={
                    {
                      "--bar-height": `${height}%`,
                      "--bar-index": i,
                    } as CSSProperties
                  }
                />
              ),
            )}
          </div>
        </>
      )}
      {kind === "orbit" && <span className="orbit-dot" />}
      {kind === "kinetic" && <strong className="kinetic-word">K</strong>}
      {kind === "sun" && (
        <>
          <div className="sun-lines">
            {Array.from({ length: 9 }, (_, i) => (
              <span key={i} />
            ))}
          </div>
          <span className="sun-disc" />
        </>
      )}
    </div>
  );
}

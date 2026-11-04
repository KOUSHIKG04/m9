import { Sparkle } from "lucide-react";

export function DisciplineRibbon() {
  return (
    <div
      className="discipline-ribbon"
      aria-label="Branding, web design, development, product, automation, campaigns"
    >
      <div>
        {[0, 1].map((copy) => (
          <span className="ribbon-group" key={copy} aria-hidden={copy === 1}>
            {[
              "BRANDING",
              "WEB DESIGN",
              "DEVELOPMENT",
              "PRODUCT",
              "AI AUTOMATION",
              "CAMPAIGNS",
            ].map((word) => (
              <span key={word}>
                {word}
                <Sparkle fill="currentColor" strokeWidth={0} />
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

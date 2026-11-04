"use client";

import { Stage } from "@/components/stageshow/stage";
import { Window } from "@/components/stageshow/window";
import type { Script } from "@/components/stageshow/act";

const orbitScript: Script<object> = async (act) => {
  await act.wait(14000);
};

// An illustrative website with decorative, CSS-driven orbital motion.
export function WebsitePreview() {
  return (
    <figure
      className="website-preview"
      aria-label="Illustrative website build preview, showing a responsive design ready for launch"
    >
      <Stage
        script={orbitScript}
        play="loop"
        width={960}
        height={340}
        compact={{ below: 560, width: 358, height: 320 }}
        theme="light"
        accent="#FFF21A"
        fidelity="realistic"
        className="website-stage"
        tokens={{ "--ss-font": "var(--font-inter), sans-serif" }}
      >
        {(_scene, _rect, layout) => (
          <>
            <Window
              url="yourbrand.example"
              urlShape="pill"
              lights="color"
              lightsSize="large"
              nav
              className={`preview-browser preview-${layout}`}
            >
              <div className="preview-site">
                <div
                  className="preview-site-links"
                  aria-label="Example site navigation"
                >
                  <span>Design</span>
                  <span>Build</span>
                  <span>Launch</span>
                </div>
                <div className="preview-site-hero">
                  <strong>
                    A home for
                    <br />
                    your next idea
                  </strong>
                  <span className="preview-site-action">
                    Explore the possibilities
                  </span>
                  <div className="preview-site-orbits" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                    <i />
                    <span className="preview-orbit-track orbit-track-outer">
                      <b />
                    </span>
                    <span className="preview-orbit-track orbit-track-middle">
                      <b />
                    </span>
                    <span className="preview-orbit-track orbit-track-inner">
                      <b />
                    </span>
                  </div>
                </div>
              </div>
            </Window>
          </>
        )}
      </Stage>
    </figure>
  );
}

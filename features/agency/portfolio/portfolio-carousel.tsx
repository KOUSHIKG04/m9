"use client";

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
  type KeyboardEvent,
} from "react";
import { motion } from "framer-motion";
import { ProjectPreview } from "./project-preview";
import { portfolioProjects } from "./portfolio-content";
import { portfolioImages } from "./portfolio-images";

function subscribeToMotion(callback: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function getServerMotion() {
  return true;
}

const total = portfolioProjects.length;

export function PortfolioCarousel() {
  const gallery = useRef<HTMLElement>(null);
  const swipe = useRef<{ x: number; y: number } | null>(null);
  const wasDragged = useRef(false);
  const [active, setActive] = useState(0);
  const reducedMotion = useSyncExternalStore(
    subscribeToMotion,
    getReducedMotion,
    getServerMotion,
  );

  useEffect(() => {
    const element = gallery.current;
    if (!element || reducedMotion) return;
    let visible = false;
    let dragging = false;
    let timer: number | undefined;
    function syncAutoplay() {
      window.clearInterval(timer);
      timer = undefined;
      if (
        visible &&
        !document.hidden &&
        !dragging &&
        !element!.matches(":hover") &&
        !element!.contains(document.activeElement)
      )
        timer = window.setInterval(
          () => setActive((current) => (current + 1) % total),
          3000,
        );
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncAutoplay();
    });
    const startDrag = () => {
      dragging = true;
      syncAutoplay();
    };
    const endDrag = () => {
      dragging = false;
      syncAutoplay();
    };
    observer.observe(element);
    element.addEventListener("mouseenter", syncAutoplay);
    element.addEventListener("mouseleave", syncAutoplay);
    element.addEventListener("focusin", syncAutoplay);
    element.addEventListener("focusout", syncAutoplay);
    element.addEventListener("pointerdown", startDrag);
    document.addEventListener("pointerup", endDrag);
    document.addEventListener("pointercancel", endDrag);
    document.addEventListener("visibilitychange", syncAutoplay);
    return () => {
      window.clearInterval(timer);
      observer.disconnect();
      element.removeEventListener("mouseenter", syncAutoplay);
      element.removeEventListener("mouseleave", syncAutoplay);
      element.removeEventListener("focusin", syncAutoplay);
      element.removeEventListener("focusout", syncAutoplay);
      element.removeEventListener("pointerdown", startDrag);
      document.removeEventListener("pointerup", endDrag);
      document.removeEventListener("pointercancel", endDrag);
      document.removeEventListener("visibilitychange", syncAutoplay);
    };
  }, [reducedMotion]);

  function goTo(index: number) {
    setActive(((index % total) + total) % total);
  }
  function onKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(active - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(active + 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      goTo(0);
    } else if (event.key === "End") {
      event.preventDefault();
      goTo(total - 1);
    }
  }

  return (
    <section
      ref={gallery}
      className="portfolio-gallery"
      role="region"
      aria-label="Selected projects"
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDownCapture={onKeyDown}
    >
      <div className="portfolio-carousel-viewport" id="portfolio-deck">
        <div
          className="portfolio-coverflow-stage"
          onPointerDown={(event) => {
            if (event.button !== 0) return;
            swipe.current = { x: event.clientX, y: event.clientY };
            wasDragged.current = false;
          }}
          onPointerMove={(event) => {
            if (!swipe.current) return;
            const dx = event.clientX - swipe.current.x;
            const dy = event.clientY - swipe.current.y;
            if (Math.abs(dx) > 12 && Math.abs(dx) > Math.abs(dy)) {
              event.currentTarget.setPointerCapture(event.pointerId);
              wasDragged.current = true;
            }
          }}
          onPointerUp={(event) => {
            const start = swipe.current;
            swipe.current = null;
            if (!start) return;
            const dx = event.clientX - start.x;
            const dy = event.clientY - start.y;
            if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
              wasDragged.current = true;
              goTo(active + (dx < 0 ? 1 : -1));
            }
          }}
          onPointerCancel={() => {
            swipe.current = null;
          }}
          onClickCapture={(event) => {
            if (!wasDragged.current) return;
            event.preventDefault();
            event.stopPropagation();
            wasDragged.current = false;
          }}
        >
          {portfolioProjects.map((project, index) => {
            const offset = (index - active + total) % total;
            const position = offset > total / 2 ? offset - total : offset;
            const distance = Math.abs(position);
            const direction = Math.sign(position);
            const visible = distance <= 2;
            const offsetFromCenter =
              distance === 0 ? 0 : direction * (distance === 1 ? 0.6 : 0.745);
            return (
              <motion.button
                key={project.slug}
                type="button"
                className="portfolio-project-card"
                initial={false}
                animate={{
                  "--portfolio-width-factor":
                    distance === 0 ? 1 : distance === 1 ? 0.14 : 0.085,
                  "--portfolio-height-factor":
                    distance === 0 ? 1 : distance === 1 ? 0.7 : 0.44,
                  "--portfolio-offset": offsetFromCenter,
                  x: "-50%",
                  y: "-50%",
                  z: reducedMotion ? 0 : distance === 0 ? 12 : -distance * 12,
                  rotateX: reducedMotion ? 0 : distance === 0 ? 5 : 3,
                  rotateY: reducedMotion
                    ? 0
                    : distance === 0
                      ? -4
                      : direction * 4,
                  scale: 1,
                  scaleZ: 1,
                  borderRadius: distance === 0 ? 16 : distance === 1 ? 12 : 8,
                  opacity: visible ? 1 : 0,
                }}
                transition={{
                  duration: reducedMotion ? 0 : 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={
                  {
                    "--portfolio-image-ratio":
                      portfolioImages[project.slug].height /
                      portfolioImages[project.slug].width,
                    zIndex: total - distance,
                    pointerEvents: visible ? "auto" : "none",
                  } as CSSProperties
                }
                aria-label={"Show " + project.name}
                aria-pressed={index === active}
                aria-hidden={!visible}
                tabIndex={index === active ? 0 : -1}
                onClick={() => goTo(index)}
              >
                <ProjectPreview
                  slug={project.slug}
                  name={project.name}
                  priority={index === 0}
                />
              </motion.button>
            );
          })}
        </div>
      </div>
      <p
        className="portfolio-caption"
        aria-live={reducedMotion ? "polite" : "off"}
        aria-atomic="true"
      >
        <span
          key={portfolioProjects[active].slug}
          className="portfolio-caption-name"
        >
          {portfolioProjects[active].name}
        </span>
      </p>
    </section>
  );
}

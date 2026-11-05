"use client";

import { useEffect, useRef } from "react";
import { Starburst } from "../components/artwork";

type Spike = {
  line: SVGLineElement;
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  innerX: number;
  innerY: number;
  directionX: number;
  directionY: number;
  length: number;
  targetX: number;
  targetY: number;
};

export function HeroVisual() {
  const root = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);
  const spikes = useRef<Spike[]>([]);

  useEffect(() => {
    const surface = root.current?.closest<HTMLElement>(".hero-shell");
    if (!surface) return;

    function getSpikes() {
      if (!spikes.current.length) {
        spikes.current = Array.from(
          root.current?.querySelectorAll<SVGLineElement>(".hero-burst line") ??
            [],
        ).map((line) => {
          const x = Number(line.getAttribute("x1"));
          const y = Number(line.getAttribute("y1"));
          const innerX = Number(line.getAttribute("x2"));
          const innerY = Number(line.getAttribute("y2"));
          const length = Math.hypot(x - innerX, y - innerY);
          return {
            line,
            baseX: x,
            baseY: y,
            x,
            y,
            innerX,
            innerY,
            length,
            directionX: (x - innerX) / length,
            directionY: (y - innerY) / length,
            targetX: x,
            targetY: y,
          };
        });
      }
      return spikes.current;
    }

    function animateSpikes() {
      if (frame.current !== null) return;
      let previousTime = 0;
      function tick(time: number) {
        const blend =
          1 -
          Math.exp(-Math.min(previousTime ? time - previousTime : 16, 64) / 65);
        previousTime = time;
        let moving = false;
        for (const spike of spikes.current) {
          const dx = spike.targetX - spike.x;
          const dy = spike.targetY - spike.y;
          if (Math.abs(dx) + Math.abs(dy) > 0.05) {
            spike.x += dx * blend;
            spike.y += dy * blend;
            moving = true;
          } else {
            spike.x = spike.targetX;
            spike.y = spike.targetY;
          }
          spike.line.setAttribute("x1", String(spike.x));
          spike.line.setAttribute("y1", String(spike.y));
        }
        frame.current = moving ? requestAnimationFrame(tick) : null;
      }
      frame.current = requestAnimationFrame(tick);
    }

    function moveSpikes(event: PointerEvent) {
      if (
        event.pointerType !== "mouse" ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      )
        return;
      const svg = root.current?.querySelector<SVGSVGElement>(".hero-burst");
      if (!svg) return;
      const bounds = svg.getBoundingClientRect();
      const cursorX = ((event.clientX - bounds.left) * 500) / bounds.width;
      const cursorY = ((event.clientY - bounds.top) * 500) / bounds.height;
      for (const spike of getSpikes()) {
        // Directional influence reaches every part of the hero, even outside the SVG.
        const offsetX = cursorX - 250;
        const offsetY = cursorY - 250;
        const distance = Math.hypot(offsetX, offsetY);
        const alignment =
          distance > 0
            ? (offsetX * spike.directionX + offsetY * spike.directionY) /
              distance
            : 0;
        const influence = Math.max(0, Math.min(1, (alignment - 0.9) / 0.1));
        const extension = 45 * influence * influence;
        spike.targetX = spike.baseX + spike.directionX * extension;
        spike.targetY = spike.baseY + spike.directionY * extension;
      }
      animateSpikes();
    }

    function resetSpikes() {
      for (const spike of getSpikes()) {
        spike.targetX = spike.baseX;
        spike.targetY = spike.baseY;
      }
      animateSpikes();
    }

    surface.addEventListener("pointermove", moveSpikes);
    surface.addEventListener("pointerleave", resetSpikes);
    return () => {
      surface.removeEventListener("pointermove", moveSpikes);
      surface.removeEventListener("pointerleave", resetSpikes);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
      frame.current = null;
      for (const spike of spikes.current) {
        spike.line.setAttribute("x1", String(spike.baseX));
        spike.line.setAttribute("y1", String(spike.baseY));
      }
      spikes.current = [];
    };
  }, []);

  return (
    <div ref={root} className="hero-center">
      <Starburst className="hero-burst" />
      <h1>
        MOTIVE 9<span className="sr-only"> Independent creative agency</span>
      </h1>
      <p className="hero-statement">
        We’re a creative
        <br />
        digital agency<span>.</span>
      </p>
    </div>
  );
}

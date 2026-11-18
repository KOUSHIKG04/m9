"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const MotionActiveContext = createContext(false);

export function PrincipleOrbits({ index }: { index: number }) {
  const active = useContext(MotionActiveContext);
  const reducedMotion = useReducedMotion();
  const running = active && !reducedMotion;
  const still = {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 0.25,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
  };
  const transition = running
    ? {
        duration: 3.2,
        delay: index * 0.12,
        repeat: Infinity,
        ease: "easeOut" as const,
      }
    : { duration: 0 };

  return (
    <>
      <motion.span
        className="approach-orbit"
        initial={false}
        animate={
          running
            ? {
                ...still,
                scale: [0.45, 0.8, 1.25],
                opacity: [0, 0.45, 0],
              }
            : still
        }
        transition={transition}
      />
      <motion.span
        className="approach-orbit approach-orbit-inner"
        initial={false}
        animate={
          running
            ? {
                ...still,
                scale: [0.65, 1.15, 1.8],
                opacity: [0, 0.45, 0],
              }
            : still
        }
        transition={
          running ? { ...transition, delay: index * 0.12 + 1.6 } : transition
        }
      />
    </>
  );
}

export function StudioPrincipleCards({ children }: { children: ReactNode }) {
  const grid = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const element = grid.current;
    if (!element) return;
    let visible = false;
    function syncMotion() {
      setActive(visible && !document.hidden);
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncMotion();
    });
    observer.observe(element);
    document.addEventListener("visibilitychange", syncMotion);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncMotion);
    };
  }, []);
  return (
    <MotionActiveContext.Provider value={active}>
      <div ref={grid} className="approach-grid" data-in-view={String(active)}>
        {children}
      </div>
    </MotionActiveContext.Provider>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse/trackpad)
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let ringX = targetX;
    let ringY = targetY;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      }

      // Detect hover on interactive elements
      const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      const hoverable = el?.closest(
        "a, button, [role='button'], input, textarea, select, label"
      );
      setInteractive(Boolean(hoverable));
    };

    let raf = 0;
    const loop = () => {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Trailing ring */}
      <div
        ref={ringRef}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 rounded-full border transition-[width,height,border-color,background-color,opacity] duration-200 ${
          interactive
            ? "h-12 w-12 border-accent-blue/60 bg-accent-blue/10"
            : "border-accent-blue/40"
        }`}
        style={{ willChange: "transform" }}
      />
      {/* Core dot */}
      <div
        ref={dotRef}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-accent-blue transition-opacity duration-150 ${
          interactive ? "opacity-0" : "opacity-100"
        }`}
        style={{
          willChange: "transform",
          boxShadow: "0 0 14px rgba(76,139,255,0.9)"
        }}
      />
    </>
  );
}

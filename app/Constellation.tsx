"use client";

import { useEffect, useRef } from "react";

const ACCENT = "#cca3ff"; // primary color

type Star = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  tw: number; // twinkle phase
};

export default function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let stars: Star[] = [];
    let raf = 0;
    let t = 0;

    const seed = (i: number, max: number) =>
      // deterministic-ish spread without Math.random dependence on first paint
      ((Math.sin(i * 12.9898) * 43758.5453) % 1 + 1) % 1 * max;

    function build() {
      const parent = canvas.parentElement;
      width = parent?.clientWidth ?? window.innerWidth;
      height = parent?.clientHeight ?? 480;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = Math.round((width * height) / 14000);
      const count = Math.max(28, Math.min(110, density));

      stars = Array.from({ length: count }, (_, i) => ({
        x: seed(i + 1, width),
        y: seed(i + 7, height),
        vx: (seed(i + 3, 1) - 0.5) * 0.22,
        vy: (seed(i + 5, 1) - 0.5) * 0.22,
        r: 0.9 + seed(i + 11, 1.9),
        tw: seed(i + 13, Math.PI * 2),
      }));
    }

    const LINK_DIST = 130;

    function frame() {
      t += 0.012;
      ctx.clearRect(0, 0, width, height);

      // move
      for (const s of stars) {
        if (!reduced) {
          s.x += s.vx;
          s.y += s.vy;
          if (s.x < -20) s.x = width + 20;
          if (s.x > width + 20) s.x = -20;
          if (s.y < -20) s.y = height + 20;
          if (s.y > height + 20) s.y = -20;
        }
      }

      // links
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const a = stars[i];
          const b = stars[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.7;
            ctx.strokeStyle = ACCENT;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // stars
      for (const s of stars) {
        const twinkle = reduced ? 0.9 : 0.7 + 0.3 * Math.sin(t * 2 + s.tw);
        ctx.globalAlpha = twinkle;
        ctx.fillStyle = ACCENT;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      if (!reduced) raf = requestAnimationFrame(frame);
    }

    build();
    frame();

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        build();
        if (reduced) frame();
      }, 150);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero__constellation"
      aria-hidden="true"
    />
  );
}

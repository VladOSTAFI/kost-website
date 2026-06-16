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
  rx: number; // rendered x (with mouse displacement)
  ry: number; // rendered y
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

    // smoothed cursor position (relative to canvas)
    const mouse = { x: 0, y: 0, tx: 0, ty: 0, active: false };

    const seed = (i: number, max: number) =>
      // deterministic-ish spread without Math.random dependence on first paint
      ((((Math.sin(i * 12.9898) * 43758.5453) % 1) + 1) % 1) * max;

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
        rx: 0,
        ry: 0,
      }));
    }

    const LINK_DIST = 130;
    const MOUSE_LINK = 190;
    const INFLUENCE = 170; // radius the cursor pushes stars within
    const PUSH = 28; // how far stars are nudged away from the cursor

    function frame() {
      t += 0.012;
      ctx.clearRect(0, 0, width, height);

      // ease the cursor toward its target for buttery motion
      mouse.x += (mouse.tx - mouse.x) * 0.14;
      mouse.y += (mouse.ty - mouse.y) * 0.14;

      // drift + compute rendered (mouse-displaced) positions
      for (const s of stars) {
        if (!reduced) {
          s.x += s.vx;
          s.y += s.vy;
          if (s.x < -20) s.x = width + 20;
          if (s.x > width + 20) s.x = -20;
          if (s.y < -20) s.y = height + 20;
          if (s.y > height + 20) s.y = -20;
        }

        let rx = s.x;
        let ry = s.y;
        if (mouse.active) {
          const dx = s.x - mouse.x;
          const dy = s.y - mouse.y;
          const d = Math.hypot(dx, dy) || 1;
          if (d < INFLUENCE) {
            const f = (1 - d / INFLUENCE) * PUSH;
            rx += (dx / d) * f;
            ry += (dy / d) * f;
          }
        }
        s.rx = rx;
        s.ry = ry;
      }

      // star-to-star links
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const a = stars[i];
          const b = stars[j];
          const dx = a.rx - b.rx;
          const dy = a.ry - b.ry;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DIST) {
            ctx.strokeStyle = ACCENT;
            ctx.globalAlpha = (1 - dist / LINK_DIST) * 0.7;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(a.rx, a.ry);
            ctx.lineTo(b.rx, b.ry);
            ctx.stroke();
          }
        }
      }

      // cursor-to-star links + cursor node
      if (mouse.active) {
        for (const s of stars) {
          const dx = s.rx - mouse.x;
          const dy = s.ry - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < MOUSE_LINK) {
            ctx.strokeStyle = ACCENT;
            ctx.globalAlpha = (1 - dist / MOUSE_LINK) * 0.85;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(s.rx, s.ry);
            ctx.stroke();
          }
        }
        ctx.globalAlpha = 0.9;
        ctx.fillStyle = ACCENT;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 2.6, 0, Math.PI * 2);
        ctx.fill();
      }

      // stars
      for (const s of stars) {
        const twinkle = reduced ? 0.9 : 0.7 + 0.3 * Math.sin(t * 2 + s.tw);
        ctx.globalAlpha = twinkle;
        ctx.fillStyle = ACCENT;
        ctx.beginPath();
        ctx.arc(s.rx, s.ry, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      if (!reduced) raf = requestAnimationFrame(frame);
    }

    build();
    frame();

    // ── interaction ──
    const parent = canvas.parentElement ?? canvas;

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (!mouse.active) {
        // snap on first entry to avoid a sweep from the corner
        mouse.x = x;
        mouse.y = y;
      }
      mouse.tx = x;
      mouse.ty = y;
      mouse.active = true;
      // reduced-motion users get no rAF loop, so repaint on demand
      if (reduced) frame();
    };
    const onLeave = () => {
      mouse.active = false;
      if (reduced) frame();
    };

    parent.addEventListener("pointermove", onMove);
    parent.addEventListener("pointerleave", onLeave);

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
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="hero__constellation" aria-hidden="true" />
  );
}

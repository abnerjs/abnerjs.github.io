"use client";

import gsap from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import type { HTMLAttributes } from "react";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

gsap.registerPlugin(InertiaPlugin);

type DotEntry = {
  el: HTMLDivElement;
  x: number;
  y: number;
};

interface DotPatternProps extends HTMLAttributes<HTMLDivElement> {
  followMouse?: boolean;
  baseColor?: string;
  activeColor?: string;
  threshold?: number;
  speedThreshold?: number;
  shockRadius?: number;
  shockPower?: number;
  maxSpeed?: number;
  dotSize?: number;
  gap?: number;
}

export function DotPattern({
  className,
  followMouse = false,
  baseColor = "#c8c8c8ff",
  activeColor = "#ffffffff",
  threshold = 200,
  speedThreshold = 100,
  shockRadius = 325,
  shockPower = 5,
  maxSpeed = 5000,
  dotSize = 16,
  gap = 32,
  ...props
}: DotPatternProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement[]>([]);
  const dotCentersRef = useRef<DotEntry[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    let rafCenters = 0;

    const buildGrid = () => {
      if (rafCenters) {
        window.cancelAnimationFrame(rafCenters);
      }

      container.innerHTML = "";
      dotsRef.current = [];
      dotCentersRef.current = [];

      const contW = container.clientWidth;
      const contH = container.clientHeight;
      if (contW <= 0 || contH <= 0) {
        return;
      }

      const cols = Math.floor((contW + gap) / (dotSize + gap));
      const rows = Math.floor((contH + gap) / (dotSize + gap));
      const total = cols * rows;

      if (cols <= 0 || rows <= 0 || total <= 0) {
        return;
      }

      for (let i = 0; i < total; i += 1) {
        const dot = document.createElement("div");
        dot.className = "dot-pattern-dot";
        dot.style.width = `${dotSize}px`;
        dot.style.height = `${dotSize}px`;
        dot.style.borderRadius = "9999px";
        dot.style.backgroundColor = baseColor;
        dot.style.transform = "translate(0px, 0px)";
        dot.style.willChange = "transform, background-color";
        dot.style.transformOrigin = "center";

        dot.dataset.inertiaApplied = "false";
        gsap.set(dot, { x: 0, y: 0, backgroundColor: baseColor });

        container.appendChild(dot);
        dotsRef.current.push(dot);
      }

      rafCenters = window.requestAnimationFrame(() => {
        dotsRef.current.forEach((dot) => {
          dot.style.visibility = "visible";
        });

        dotCentersRef.current = dotsRef.current.flatMap((dot) => {
          const rect = dot.getBoundingClientRect();
          const x = rect.left + rect.width / 2;
          const y = rect.top + rect.height / 2;
          return [{ el: dot, x, y }];
        });
      });
    };

    const resizeObserver = new ResizeObserver(buildGrid);
    resizeObserver.observe(container);
    window.addEventListener("scroll", buildGrid, true);
    buildGrid();

    return () => {
      if (rafCenters) {
        window.cancelAnimationFrame(rafCenters);
      }
      resizeObserver.disconnect();
      window.removeEventListener("scroll", buildGrid, true);
      dotsRef.current.forEach((dot) => {
        gsap.killTweensOf(dot);
      });
      dotsRef.current = [];
      dotCentersRef.current = [];
    };
  }, [baseColor, dotSize, gap]);

  useEffect(() => {
    if (!followMouse) {
      return;
    }

    let raf = 0;
    let lastTime = 0;
    let lastX = 0;
    let lastY = 0;

    const resetDot = (el: HTMLDivElement) => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 1.5,
        ease: "elastic.out(1,0.75)",
        onComplete: () => {
          el.dataset.inertiaApplied = "false";
        },
      });
    };

    const onMouseMove = (event: MouseEvent) => {
      const now = performance.now();
      const dt = now - lastTime || 16;
      const dx = event.pageX - lastX;
      const dy = event.pageY - lastY;
      let vx = (dx / dt) * 1000;
      let vy = (dy / dt) * 1000;
      let speed = Math.hypot(vx, vy);

      if (speed > maxSpeed) {
        const scale = maxSpeed / speed;
        vx *= scale;
        vy *= scale;
        speed = maxSpeed;
      }

      lastTime = now;
      lastX = event.pageX;
      lastY = event.pageY;

      if (raf) {
        window.cancelAnimationFrame(raf);
      }

      raf = window.requestAnimationFrame(() => {
        dotCentersRef.current.forEach(({ el, x, y }) => {
          const dist = Math.hypot(x - event.pageX, y - event.pageY);
          const t = Math.max(0, 1 - dist / threshold);
          const color = gsap.utils.interpolate(baseColor, activeColor, t);
          gsap.set(el, { backgroundColor: color });

          const inertiaApplied = el.dataset.inertiaApplied === "true";
          if (speed > speedThreshold && dist < threshold && !inertiaApplied) {
            el.dataset.inertiaApplied = "true";

            const pushX = x - event.pageX + vx * 0.005;
            const pushY = y - event.pageY + vy * 0.005;

            gsap.to(el, {
              inertia: {
                x: pushX,
                y: pushY,
                resistance: 750,
              },
              onComplete: () => {
                resetDot(el);
              },
            } as gsap.TweenVars);
          }
        });
      });
    };

    const onClick = (event: MouseEvent) => {
      dotCentersRef.current.forEach(({ el, x, y }) => {
        const dist = Math.hypot(x - event.pageX, y - event.pageY);
        const inertiaApplied = el.dataset.inertiaApplied === "true";

        if (dist < shockRadius && !inertiaApplied) {
          el.dataset.inertiaApplied = "true";
          const falloff = Math.max(0, 1 - dist / shockRadius);
          const pushX = (x - event.pageX) * shockPower * falloff;
          const pushY = (y - event.pageY) * shockPower * falloff;

          gsap.to(el, {
            inertia: {
              x: pushX,
              y: pushY,
              resistance: 750,
            },
            onComplete: () => {
              resetDot(el);
            },
          } as gsap.TweenVars);
        }
      });
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("click", onClick, { passive: true });

    return () => {
      if (raf) {
        window.cancelAnimationFrame(raf);
      }
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);
    };
  }, [
    activeColor,
    baseColor,
    followMouse,
    maxSpeed,
    shockPower,
    shockRadius,
    speedThreshold,
    threshold,
  ]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 flex flex-wrap items-center justify-center overflow-hidden",
        className,
      )}
      style={{ gap: `${gap}px` }}
      {...props}
    />
  );
}

"use client";

import gsap from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import type { HTMLAttributes } from "react";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

gsap.registerPlugin(InertiaPlugin);

type GridDot = {
  el: HTMLDivElement;
  x: number;
  y: number;
};

type GridLayout = {
  cols: number;
  rows: number;
  step: number;
  thresholdCells: number;
  offsetX: number;
  offsetY: number;
};

function clamp(min: number, max: number, value: number) {
  return Math.max(min, Math.min(max, value));
}

function colorToRgb(color: string): [number, number, number] {
  const raw = color.trim();

  if (raw.startsWith("#")) {
    const hex = raw.slice(1);
    const normalized =
      hex.length === 3
        ? hex
            .split("")
            .map((part) => `${part}${part}`)
            .join("")
        : hex;
    const value = Number.parseInt(normalized, 16);
    return [(value >> 16) & 255, (value >> 8) & 255, value & 255];
  }

  const match = raw.match(/\d+/g);
  if (match && match.length >= 3) {
    return [Number(match[0]), Number(match[1]), Number(match[2])];
  }

  return [0, 0, 0];
}

function mixRgb(
  from: [number, number, number],
  to: [number, number, number],
  amount: number,
) {
  const t = clamp(0, 1, amount);
  const r = Math.round(from[0] + (to[0] - from[0]) * t);
  const g = Math.round(from[1] + (to[1] - from[1]) * t);
  const b = Math.round(from[2] + (to[2] - from[2]) * t);
  return `rgb(${r}, ${g}, ${b})`;
}

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
  baseColor = "#1c1c1e",
  activeColor = "#131316",
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
  const dotsRef = useRef<GridDot[]>([]);
  const gridLayoutRef = useRef<GridLayout | null>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const activeIndicesRef = useRef<Set<number>>(new Set());
  const inertiaAppliedRef = useRef<Uint8Array>(new Uint8Array());
  const pendingPointerRef = useRef<{ clientX: number; clientY: number } | null>(
    null,
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const buildGrid = () => {
      container.innerHTML = "";
      dotsRef.current = [];
      gridLayoutRef.current = null;
      rectRef.current = container.getBoundingClientRect();
      activeIndicesRef.current.clear();

      const contW = container.clientWidth;
      const contH = container.clientHeight;
      if (contW <= 0 || contH <= 0) {
        return;
      }

      const step = dotSize + gap;
      const cols = Math.floor((contW + gap) / step);
      const rows = Math.floor((contH + gap) / step);
      const total = cols * rows;

      if (cols <= 0 || rows <= 0 || total <= 0) {
        return;
      }

      const contentWidth = cols * dotSize + (cols - 1) * gap;
      const contentHeight = rows * dotSize + (rows - 1) * gap;
      const offsetX = (contW - contentWidth) / 2 + dotSize / 2;
      const offsetY = (contH - contentHeight) / 2 + dotSize / 2;
      const thresholdCells = Math.max(1, Math.ceil(threshold / step));

      gridLayoutRef.current = {
        cols,
        rows,
        step,
        thresholdCells,
        offsetX,
        offsetY,
      };
      inertiaAppliedRef.current = new Uint8Array(total);

      for (let i = 0; i < total; i += 1) {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = offsetX + col * step;
        const y = offsetY + row * step;

        const dot = document.createElement("div");
        dot.className = "dot-pattern-dot";
        dot.style.position = "absolute";
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
        dot.style.width = `${dotSize}px`;
        dot.style.height = `${dotSize}px`;
        dot.style.borderRadius = "9999px";
        dot.style.backgroundColor = baseColor;
        dot.style.transform = "translate(-50%, -50%)";
        dot.style.willChange = "transform, background-color";
        dot.style.transformOrigin = "center";
        gsap.set(dot, { x: 0, y: 0, backgroundColor: baseColor });

        container.appendChild(dot);
        dotsRef.current.push({ el: dot, x, y });
      }
    };

    const refreshRect = () => {
      rectRef.current = container.getBoundingClientRect();
    };

    const resizeObserver = new ResizeObserver(buildGrid);
    resizeObserver.observe(container);
    window.addEventListener("scroll", refreshRect, true);
    buildGrid();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", refreshRect, true);
      dotsRef.current.forEach(({ el }) => {
        gsap.killTweensOf(el);
      });
      dotsRef.current = [];
      inertiaAppliedRef.current = new Uint8Array();
      activeIndicesRef.current.clear();
    };
  }, [baseColor, dotSize, gap, threshold]);

  useEffect(() => {
    if (!followMouse) {
      return;
    }

    let rafPointer = 0;
    let lastTime = 0;
    let lastX = 0;
    let lastY = 0;

    const baseRgb = colorToRgb(baseColor);
    const activeRgb = colorToRgb(activeColor);

    const resetDot = (index: number) => {
      const dot = dotsRef.current[index];
      if (!dot) return;

      gsap.to(dot.el, {
        x: 0,
        y: 0,
        duration: 1.5,
        ease: "elastic.out(1,0.75)",
        onComplete: () => {
          inertiaAppliedRef.current[index] = 0;
        },
      });
    };

    const updateNearbyDots = (
      clientX: number,
      clientY: number,
      speed: number,
    ) => {
      const layout = gridLayoutRef.current;
      const rect = rectRef.current;
      if (!layout || !rect) return;

      const localX = clientX - rect.left;
      const localY = clientY - rect.top;

      if (
        localX < -threshold ||
        localY < -threshold ||
        localX > rect.width + threshold ||
        localY > rect.height + threshold
      ) {
        for (const idx of activeIndicesRef.current) {
          const dot = dotsRef.current[idx];
          if (!dot) continue;
          dot.el.style.backgroundColor = baseColor;
        }
        activeIndicesRef.current.clear();
        return;
      }

      const centerCol = Math.round((localX - layout.offsetX) / layout.step);
      const centerRow = Math.round((localY - layout.offsetY) / layout.step);
      const minCol = clamp(
        0,
        layout.cols - 1,
        centerCol - layout.thresholdCells,
      );
      const maxCol = clamp(
        0,
        layout.cols - 1,
        centerCol + layout.thresholdCells,
      );
      const minRow = clamp(
        0,
        layout.rows - 1,
        centerRow - layout.thresholdCells,
      );
      const maxRow = clamp(
        0,
        layout.rows - 1,
        centerRow + layout.thresholdCells,
      );

      const nextActive = new Set<number>();

      for (let row = minRow; row <= maxRow; row += 1) {
        for (let col = minCol; col <= maxCol; col += 1) {
          const idx = row * layout.cols + col;
          const dot = dotsRef.current[idx];
          if (!dot) continue;

          const dx = dot.x - localX;
          const dy = dot.y - localY;
          const dist = Math.hypot(dx, dy);
          if (dist > threshold) {
            continue;
          }

          nextActive.add(idx);

          const amount = Math.max(0, 1 - dist / threshold);
          dot.el.style.backgroundColor = mixRgb(baseRgb, activeRgb, amount);

          if (speed > speedThreshold && inertiaAppliedRef.current[idx] === 0) {
            inertiaAppliedRef.current[idx] = 1;

            gsap.to(dot.el, {
              inertia: {
                x: dx,
                y: dy,
                resistance: 750,
              },
              onComplete: () => {
                resetDot(idx);
              },
            } as gsap.TweenVars);
          }
        }
      }

      for (const idx of activeIndicesRef.current) {
        if (nextActive.has(idx)) continue;
        const dot = dotsRef.current[idx];
        if (!dot) continue;
        dot.el.style.backgroundColor = baseColor;
      }

      activeIndicesRef.current = nextActive;
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

      pendingPointerRef.current = {
        clientX: event.clientX,
        clientY: event.clientY,
      };

      if (rafPointer) {
        window.cancelAnimationFrame(rafPointer);
      }

      rafPointer = window.requestAnimationFrame(() => {
        const pointer = pendingPointerRef.current;
        if (!pointer) return;
        updateNearbyDots(pointer.clientX, pointer.clientY, speed);
      });
    };

    const onClick = (event: MouseEvent) => {
      const rect = rectRef.current;
      if (!rect) return;

      const localX = event.clientX - rect.left;
      const localY = event.clientY - rect.top;

      dotsRef.current.forEach((dot, index) => {
        const dist = Math.hypot(dot.x - localX, dot.y - localY);
        if (dist >= shockRadius || inertiaAppliedRef.current[index] === 1) {
          return;
        }

        inertiaAppliedRef.current[index] = 1;
        const falloff = Math.max(0, 1 - dist / shockRadius);
        const pushX = (dot.x - localX) * shockPower * falloff;
        const pushY = (dot.y - localY) * shockPower * falloff;

        gsap.to(dot.el, {
          inertia: {
            x: pushX,
            y: pushY,
            resistance: 750,
          },
          onComplete: () => {
            resetDot(index);
          },
        } as gsap.TweenVars);
      });
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("click", onClick, { passive: true });

    return () => {
      if (rafPointer) {
        window.cancelAnimationFrame(rafPointer);
      }
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);

      for (const idx of activeIndicesRef.current) {
        const dot = dotsRef.current[idx];
        if (!dot) continue;
        dot.el.style.backgroundColor = baseColor;
      }
      activeIndicesRef.current.clear();
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
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
      {...props}
    />
  );
}

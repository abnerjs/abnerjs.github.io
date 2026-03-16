"use client";

import gsap from "gsap";
import type { CSSProperties, SVGProps } from "react";
import { useEffect, useId, useRef, useState } from "react";

import { cn } from "@/lib/utils";

/**
 *  DotPattern Component Props
 *
 * @param {number} [width=16] - The horizontal spacing between dots
 * @param {number} [height=16] - The vertical spacing between dots
 * @param {number} [x=0] - The x-offset of the entire pattern
 * @param {number} [y=0] - The y-offset of the entire pattern
 * @param {number} [cx=1] - The x-offset of individual dots
 * @param {number} [cy=1] - The y-offset of individual dots
 * @param {number} [cr=1] - The radius of each dot
 * @param {string} [className] - Additional CSS classes to apply to the SVG container
 * @param {boolean} [glow=false] - Whether dots should have a glowing animation effect
 */
interface DotPatternProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  className?: string;
  glow?: boolean;
  followMouse?: boolean;
  [key: string]: unknown;
}

/**
 * DotPattern Component
 *
 * A React component that creates an animated or static dot pattern background using SVG.
 * The pattern automatically adjusts to fill its container and can optionally display glowing dots.
 *
 * @component
 *
 * @see DotPatternProps for the props interface.
 *
 * @example
 * // Basic usage
 * <DotPattern />
 *
 * // With glowing effect and custom spacing
 * <DotPattern
 *   width={20}
 *   height={20}
 *   glow={true}
 *   className="opacity-50"
 * />
 *
 * @notes
 * - The component is client-side only ("use client")
 * - Automatically responds to container size changes
 * - When glow is enabled, dots will animate with random delays and durations
 * - Uses GSAP for animations
 * - Dots color can be controlled via the text color utility classes
 */

export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  glow = false,
  style,
  followMouse = false,
  ...props
}: DotPatternProps) {
  const id = useId();
  const containerRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const dots = Array.from(
    {
      length:
        Math.ceil(dimensions.width / width) *
        Math.ceil(dimensions.height / height),
    },
    (_, i) => {
      const col = i % Math.ceil(dimensions.width / width);
      const row = Math.floor(i / Math.ceil(dimensions.width / width));
      return {
        x: col * width + cx + x,
        y: row * height + cy + y,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
      };
    },
  );
  const dotCount = dots.length;

  useEffect(() => {
    if (!glow || !containerRef.current || dotCount === 0) {
      return;
    }

    const ctx = gsap.context(() => {
      const circles = gsap.utils.toArray<SVGCircleElement>(
        "circle[data-dot-pattern='true']",
      );

      gsap.fromTo(
        circles,
        { opacity: 0.4, scale: 1, transformOrigin: "center center" },
        {
          opacity: 1,
          scale: 1.5,
          duration: (_, target) => Number(target.dataset.duration) || 3,
          delay: (_, target) => Number(target.dataset.delay) || 0,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, [dotCount, glow]);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const svg = containerRef.current;
    svg.style.setProperty("--dot-mask-x", "50%");
    svg.style.setProperty("--dot-mask-y", "50%");

    const updateMaskPosition = (event: MouseEvent) => {
      const rect = svg.getBoundingClientRect();
      const x = Math.min(Math.max(event.clientX - rect.left, 0), rect.width);
      const y = Math.min(Math.max(event.clientY - rect.top, 0), rect.height);

      svg.style.setProperty("--dot-mask-x", `${x}px`);
      svg.style.setProperty("--dot-mask-y", `${y}px`);
    };

    window.addEventListener("mousemove", updateMaskPosition);

    return () => {
      window.removeEventListener("mousemove", updateMaskPosition);
    };
  }, []);

  const maskImage =
    "radial-gradient(500px circle at var(--dot-mask-x) var(--dot-mask-y), white, transparent)";
  const svgStyle: CSSProperties = {
    ...style,
    WebkitMaskImage: maskImage,
    maskImage,
  };

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      style={followMouse ? { ...svgStyle, cursor: "none" } : undefined}
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full text-neutral-400/80",
        className,
      )}
      {...props}
    >
      <defs>
        <radialGradient id={`${id}-gradient`}>
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      {dots.map((dot) => (
        <circle
          key={`${dot.x}-${dot.y}`}
          cx={dot.x}
          cy={dot.y}
          r={cr}
          fill={glow ? `url(#${id}-gradient)` : "currentColor"}
          opacity={glow ? 0.4 : 1}
          data-dot-pattern="true"
          data-delay={dot.delay}
          data-duration={dot.duration}
        />
      ))}
    </svg>
  );
}

"use client";

import { useAnimate } from "motion/react";
import type React from "react";
import { useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface MagneticWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  strengthX?: number;
  strengthY?: number;
  devOrientation?: boolean;
  devOrientationX?: boolean;
  devOrientationY?: boolean;
  bounceDuration?: number;
}

const MagneticWrapper = ({
  children,
  className,
  strengthX = 0.15,
  strengthY = 0.25,
  devOrientation,
  devOrientationX,
  devOrientationY,
  bounceDuration = 0.6,
  ...rest
}: MagneticWrapperProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const magneticRef = useRef<HTMLDivElement>(null);
  const [, animate] = useAnimate();

  const animateBackWithBounce = useCallback(() => {
    if (!magneticRef.current) {
      return;
    }

    animate(
      magneticRef.current,
      { x: 0, y: 0 },
      {
        type: "spring",
        duration: bounceDuration,
        bounce: 0.45,
      },
    );
  }, [animate, bounceDuration]);

  useEffect(() => {
    const magneticEl = magneticRef.current;
    if (!magneticEl) {
      return;
    }

    const handleDeviceOrientation = (event: DeviceOrientationEvent) => {
      const gamma = event.gamma ?? 0;
      const beta = event.beta ?? 0;

      const x = -gamma * strengthX;
      const y = -beta * strengthY;

      if (devOrientation) {
        animate(
          magneticEl,
          { x, y },
          { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
        );
        return;
      }

      if (devOrientationX) {
        animate(
          magneticEl,
          { x },
          { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
        );
      }

      if (devOrientationY) {
        animate(
          magneticEl,
          { y },
          { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
        );
      }
    };

    window.addEventListener("deviceorientation", handleDeviceOrientation, true);

    return () => {
      window.removeEventListener(
        "deviceorientation",
        handleDeviceOrientation,
        true,
      );
    };
  }, [
    animate,
    devOrientation,
    devOrientationX,
    devOrientationY,
    strengthX,
    strengthY,
  ]);

  useEffect(() => {
    const containerEl = containerRef.current;
    const magneticEl = magneticRef.current;

    if (!containerEl || !magneticEl) {
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = containerEl.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;

      animate(
        magneticEl,
        {
          x: x * strengthX,
          y: y * strengthY,
        },
        {
          duration: 0.2,
          ease: [0.22, 1, 0.36, 1],
        },
      );
    };

    const handleMouseLeave = () => {
      animateBackWithBounce();
    };

    const handlePointerUp = () => {
      animateBackWithBounce();
    };

    containerEl.addEventListener("mousemove", handleMouseMove);
    containerEl.addEventListener("mouseleave", handleMouseLeave);
    containerEl.addEventListener("pointerup", handlePointerUp);

    return () => {
      containerEl.removeEventListener("mousemove", handleMouseMove);
      containerEl.removeEventListener("mouseleave", handleMouseLeave);
      containerEl.removeEventListener("pointerup", handlePointerUp);
    };
  }, [animate, strengthX, strengthY, animateBackWithBounce]);

  return (
    <div ref={containerRef} className={cn("inline-block", className)} {...rest}>
      <div ref={magneticRef} style={{ willChange: "transform" }}>
        {children}
      </div>
    </div>
  );
};

export default MagneticWrapper;

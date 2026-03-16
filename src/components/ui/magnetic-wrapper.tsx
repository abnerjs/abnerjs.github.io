"use client";

import gsap from "gsap";
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

  const animateBackWithBounce = useCallback(() => {
    if (!magneticRef.current) {
      return;
    }

    gsap.to(magneticRef.current, {
      x: 0,
      y: 0,
      duration: bounceDuration,
      ease: "elastic.out(1, 0.55)",
    });
  }, [bounceDuration]);

  useEffect(() => {
    const magneticEl = magneticRef.current;
    if (!magneticEl) {
      return;
    }

    const xTo = gsap.quickTo(magneticEl, "x", {
      duration: 0.25,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(magneticEl, "y", {
      duration: 0.25,
      ease: "power3.out",
    });

    const handleDeviceOrientation = (event: DeviceOrientationEvent) => {
      const gamma = event.gamma ?? 0;
      const beta = event.beta ?? 0;

      if (devOrientation) {
        xTo(-gamma * strengthX);
        yTo(-beta * strengthY);
        return;
      }

      if (devOrientationX) {
        xTo(-gamma * strengthX);
      }

      if (devOrientationY) {
        yTo(-beta * strengthY);
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
  }, [devOrientation, devOrientationX, devOrientationY, strengthX, strengthY]);

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

      gsap.to(magneticEl, {
        x: x * strengthX,
        y: y * strengthY,
        duration: 0.2,
        ease: "power3.out",
        overwrite: true,
      });
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
  }, [strengthX, strengthY, animateBackWithBounce]);

  return (
    <div ref={containerRef} className={cn("inline-block", className)} {...rest}>
      <div ref={magneticRef} style={{ willChange: "transform" }}>
        {children}
      </div>
    </div>
  );
};

export default MagneticWrapper;

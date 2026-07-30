"use client";

import { useLayoutEffect } from "react";

let pluginsRegistered = false;
type LenisLike = {
  destroy: () => void;
  on: (
    event: "scroll",
    callback: (...args: Array<unknown>) => void,
  ) => unknown;
  raf: (time: number) => void;
  scrollTo: (
    target: string | HTMLElement | number,
    options?: {
      duration?: number;
      easing?: (t: number) => number;
    },
  ) => void;
};
let currentLenis: LenisLike | null = null;

export function getLenisInstance() {
  return currentLenis;
}

export function AppScrollSmoother() {
  useLayoutEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let mounted = true;
    let cleanup: (() => void) | null = null;

    void (async () => {
      const [{ gsap }, { ScrollTrigger }, { default: Lenis }] =
        await Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger"),
          import("lenis"),
        ]);

      if (!mounted) {
        return;
      }

      if (!pluginsRegistered) {
        gsap.registerPlugin(ScrollTrigger);
        pluginsRegistered = true;
      }

      const lenis = new Lenis({
        autoRaf: false,
        anchors: true,
        lerp: 0.2,
      });
      currentLenis = lenis;

      lenis.on("scroll", ScrollTrigger.update);

      const ticker = (time: number) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(ticker);
      gsap.ticker.lagSmoothing(0);

      cleanup = () => {
        gsap.ticker.remove(ticker);
        lenis.destroy();
        if (currentLenis === lenis) {
          currentLenis = null;
        }
      };
    })();

    return () => {
      mounted = false;
      cleanup?.();
    };
  }, []);

  return null;
}

"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useLayoutEffect } from "react";

let pluginsRegistered = false;
let currentLenis: Lenis | null = null;

export function getLenisInstance() {
  return currentLenis;
}

export function AppScrollSmoother() {
  useLayoutEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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

    return () => {
      gsap.ticker.remove(ticker);
      lenis.destroy();
      if (currentLenis === lenis) {
        currentLenis = null;
      }
    };
  }, []);

  return null;
}

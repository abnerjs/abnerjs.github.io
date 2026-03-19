"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useLayoutEffect } from "react";

let pluginsRegistered = false;

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

    lenis.on("scroll", ScrollTrigger.update);

    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    const heroSection = document.getElementById("hero");
    const heroAnchorTrigger = heroSection
      ? ScrollTrigger.create({
          trigger: heroSection,
          start: "top top",
          end: () => `+=${heroSection.offsetHeight}`,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        })
      : null;

    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(ticker);
      heroAnchorTrigger?.kill();
      lenis.destroy();
    };
  }, []);

  return null;
}

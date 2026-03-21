import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

export function useHeroScrollTrigger() {
  const [showDrawerButton, setShowDrawerButton] = React.useState(false);

  React.useLayoutEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const heroSection = document.getElementById("hero");
    if (!heroSection) {
      return;
    }

    const heroOutOfViewTrigger = ScrollTrigger.create({
      trigger: heroSection,
      start: "bottom top",
      end: "max",
      onEnter: () => setShowDrawerButton(true),
      onLeaveBack: () => setShowDrawerButton(false),
    });

    const syncInitialVisibility = requestAnimationFrame(() => {
      setShowDrawerButton(window.scrollY >= heroOutOfViewTrigger.start);
    });

    return () => {
      cancelAnimationFrame(syncInitialVisibility);
      heroOutOfViewTrigger.kill();
    };
  }, []);

  return showDrawerButton;
}

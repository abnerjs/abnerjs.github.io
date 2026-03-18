"use client";

import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
      pluginsRegistered = true;
    }

    const wrapper = document.getElementById("smooth-wrapper");
    const content = document.getElementById("smooth-content");

    if (!wrapper || !content) {
      return;
    }

    const existing = ScrollSmoother.get();
    if (existing) {
      existing.kill();
    }

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.1,
      smoothTouch: 0.1,
      normalizeScroll: true,
      effects: true,
      ignoreMobileResize: true,
    });

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

    let suppressNextHashChange = false;

    const scrollToHash = (hash: string) => {
      if (!hash || hash === "#") {
        return;
      }

      const id = decodeURIComponent(hash.slice(1));
      if (!id) {
        return;
      }

      const target = document.getElementById(id);
      if (!target) {
        return;
      }

      ScrollTrigger.refresh();

      const targetY = smoother.offset(target, "top top");
      const maxY = ScrollTrigger.maxScroll(window);
      const clampedY = gsap.utils.clamp(0, maxY, targetY);

      gsap.killTweensOf(smoother);
      smoother.scrollTo(clampedY, true);
    };

    const handleDocumentClick = (event: MouseEvent) => {
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const clickTarget = event.target as Element | null;
      const anchor = clickTarget?.closest(
        "a[href*='#']",
      ) as HTMLAnchorElement | null;

      if (!anchor || (anchor.target && anchor.target !== "_self")) {
        return;
      }

      const href = anchor.getAttribute("href");
      if (!href || href === "#") {
        return;
      }

      const targetUrl = new URL(href, window.location.href);
      if (
        targetUrl.origin !== window.location.origin ||
        targetUrl.pathname !== window.location.pathname ||
        !targetUrl.hash
      ) {
        return;
      }

      event.preventDefault();
      suppressNextHashChange = true;
      history.replaceState(
        history.state,
        "",
        `${targetUrl.pathname}${targetUrl.hash}`,
      );
      scrollToHash(targetUrl.hash);

      requestAnimationFrame(() => {
        suppressNextHashChange = false;
      });
    };

    const handleHashChange = () => {
      if (suppressNextHashChange) {
        return;
      }

      scrollToHash(window.location.hash);
    };

    document.addEventListener("click", handleDocumentClick, { capture: true });
    window.addEventListener("hashchange", handleHashChange);

    const hashOnLoadRaf = requestAnimationFrame(() => {
      scrollToHash(window.location.hash);
    });

    ScrollTrigger.refresh();

    return () => {
      cancelAnimationFrame(hashOnLoadRaf);
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("click", handleDocumentClick, {
        capture: true,
      });
      window.removeEventListener("hashchange", handleHashChange);
      heroAnchorTrigger?.kill();
      smoother.kill();
    };
  }, []);

  return null;
}

"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import { About } from "./_sections/about";
import { Hero } from "./_sections/hero";
import { MainDrawer } from "./_sections/main-drawer";
import { MainProjects } from "./_sections/main-projects";

export default function Home() {
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

  return (
    <div className="flex min-h-screen font-sans overflow-x-clip bg-white rounded-b-[3rem]">
      <MainDrawer showButton={showDrawerButton} />
      <main className="flex flex-col w-full">
        <Hero />

        {/* Sobre mim */}
        <About />

        {/* Projetos principais */}
        <MainProjects />
      </main>
    </div>
  );
}

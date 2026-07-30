"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useHeroScrollTrigger } from "@/hooks/use-hero-scroll-trigger";
import { Hero } from "./_sections/hero";
import { MainDrawer } from "./_sections/main-drawer";

const About = dynamic(
  () => import("./_sections/about").then((module) => module.About),
  { ssr: false },
);

const MainProjects = dynamic(
  () => import("./_sections/main-projects").then((module) => module.MainProjects),
  { ssr: false },
);

function SectionPlaceholder({ minHeight }: { minHeight: string }) {
  return (
    <div
      className="w-full animate-pulse bg-gradient-to-b from-zinc-100 to-transparent"
      style={{ minHeight }}
      aria-hidden
    />
  );
}

export default function Home() {
  const showDrawerButton = useHeroScrollTrigger();
  const aboutTriggerRef = useRef<HTMLDivElement>(null);
  const projectsTriggerRef = useRef<HTMLDivElement>(null);
  const [showAboutSection, setShowAboutSection] = useState(false);
  const [showProjectsSection, setShowProjectsSection] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const aboutTarget = aboutTriggerRef.current;
    const projectsTarget = projectsTriggerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          if (entry.target === aboutTarget) {
            setShowAboutSection(true);
            observer.unobserve(entry.target);
          }

          if (entry.target === projectsTarget) {
            setShowProjectsSection(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "500px 0px" },
    );

    if (aboutTarget) {
      observer.observe(aboutTarget);
    }

    if (projectsTarget) {
      observer.observe(projectsTarget);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex min-h-screen font-sans overflow-x-clip bg-white rounded-b-[3rem]">
      <MainDrawer showButton={showDrawerButton} />
      <main className="flex flex-col w-full">
        <Hero />

        {/* Sobre mim */}
        <div ref={aboutTriggerRef}>
          {showAboutSection ? (
            <About />
          ) : (
            <SectionPlaceholder minHeight="90svh" />
          )}
        </div>

        {/* Projetos principais */}
        <div ref={projectsTriggerRef}>
          {showProjectsSection ? (
            <MainProjects />
          ) : (
            <SectionPlaceholder minHeight="80svh" />
          )}
        </div>
      </main>
    </div>
  );
}

"use client";

import { useHeroScrollTrigger } from "@/hooks/use-hero-scroll-trigger";
import { About } from "./_sections/about";
import { Hero } from "./_sections/hero";
import { MainDrawer } from "./_sections/main-drawer";
import { MainProjects } from "./_sections/main-projects";

export default function Home() {
  const showDrawerButton = useHeroScrollTrigger();

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

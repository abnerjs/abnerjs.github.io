"use client";

import CurvedLoop from "@/components/ui/curved-loop";
import SplitTitle from "@/components/ui/split-title";
import { useHeroScrollTrigger } from "@/hooks/use-hero-scroll-trigger";
import { Navbar } from "../../../components/ui/navbar";
import { MainDrawer } from "../_sections/main-drawer";
import { ProjectsSection } from "./_sections/projects";

export default function Projects() {
  const showDrawerButton = useHeroScrollTrigger();

  return (
    <div className="flex flex-col min-h-screen font-sans overflow-x-clip pb-40 bg-white rounded-b-[3rem]">
      <MainDrawer showButton={showDrawerButton} />

      {/* navbar */}
      <Navbar theme="light" />

      {/* Hero */}
      <section id="hero">
        <h1 className="sr-only">Projetos — Abner J. Silva</h1>
        <SplitTitle
          text="Projetos"
          className="text-[calc(27vw)] pointer-events-none select-none w-full flex justify-center items-center text-center leading-none self-center font-['anton'] uppercase"
        />
        <CurvedLoop
          speed={2}
          curveAmount={90}
          direction="right"
          interactive
          className="fill-zinc-400"
        >
          <tspan>pense</tspan>
          <tspan className="fill-orange-500">✹</tspan>
          <tspan>fora</tspan>
          <tspan className="fill-orange-500">✹</tspan>
          <tspan>da</tspan>
          <tspan className="fill-orange-500">✹</tspan>
          <tspan>caixa</tspan>
          <tspan className="fill-orange-500">✹</tspan>
        </CurvedLoop>
      </section>

      {/* Projects */}
      <ProjectsSection />
    </div>
  );
}

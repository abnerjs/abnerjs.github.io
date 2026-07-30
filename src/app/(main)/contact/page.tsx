"use client";

import CurvedLoop from "@/components/ui/curved-loop";
import SplitTitle from "@/components/ui/split-title";
import { useHeroScrollTrigger } from "@/hooks/use-hero-scroll-trigger";
import { Navbar } from "../../../components/ui/navbar";
import { MainDrawer } from "../_sections/main-drawer";
import { FormSection } from "./_sections/form";

export default function Projects() {
  const showDrawerButton = useHeroScrollTrigger();

  return (
    <div className="flex flex-col min-h-screen font-sans overflow-x-clip bg-zinc-950 text-white">
      <MainDrawer showButton={showDrawerButton} />

      {/* navbar */}
      <Navbar theme="dark" />

      {/* Hero */}
      <section id="hero">
        <h1 className="sr-only">Contato — Abner J. Silva</h1>
        <SplitTitle
          text="Contato"
          className="text-[calc(31.2vw)] pointer-events-none select-none w-full flex justify-center items-center text-center leading-none self-center font-['anton'] uppercase"
        />
        <CurvedLoop
          speed={2}
          curveAmount={90}
          direction="right"
          interactive
          className="fill-zinc-700"
        >
          <tspan>vamos</tspan>
          <tspan className="fill-lime-500">✹</tspan>
          <tspan>conversar?</tspan>
          <tspan className="fill-lime-500">✹</tspan>
        </CurvedLoop>
      </section>

      <FormSection />
    </div>
  );
}

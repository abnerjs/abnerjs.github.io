"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import React from "react";
import { AbnerJSilva } from "@/components/svg/abnerjsilva";
import { Button } from "@/components/ui/button";
import CurvedLoop from "@/components/ui/curved-loop";
import MagneticWrapper from "@/components/ui/magnetic-wrapper";
import SplitTitle from "@/components/ui/split-title";
import { MainDrawer } from "../_sections/main-drawer";
import { FormSection } from "./_sections/form";

export default function Projects() {
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
    <div className="flex flex-col min-h-screen font-sans overflow-x-clip bg-zinc-950 text-white">
      <MainDrawer showButton={showDrawerButton} />

      {/* navbar */}
      <nav className="flex relative items-center md:pt-4">
        <div id="#nav-hero" className="flex md:gap-2 h-max">
          <MagneticWrapper>
            <Link href="/">
              <Button
                className="flex max-md:px-2 items-center gap-2 uppercase font-semibold xl:tracking-widest text-white hover:text-white"
                variant="ghost"
                overlayClassName="bg-white/10"
                size="lg"
              >
                Início
              </Button>
            </Link>
          </MagneticWrapper>
          <MagneticWrapper>
            <Link href="/projects">
              <Button
                className="flex max-md:px-2 items-center gap-2 uppercase font-semibold xl:tracking-widest text-white hover:text-white"
                variant="ghost"
                overlayClassName="bg-white/10"
                size="lg"
              >
                Projetos
              </Button>
            </Link>
          </MagneticWrapper>
          <MagneticWrapper>
            <Link href="/contact">
              <Button
                className="flex max-md:px-2 items-center gap-2 uppercase font-semibold xl:tracking-widest text-white hover:text-white"
                variant="ghost"
                overlayClassName="bg-white/10"
                size="lg"
              >
                Contato
              </Button>
            </Link>
          </MagneticWrapper>
        </div>

        <AbnerJSilva className="hidden md:block h-10 mt-2 absolute left-1/2 -translate-x-1/2" />
      </nav>

      {/* Hero */}
      <section id="hero">
        <SplitTitle
          text="Contato"
          className="text-[calc(31.2vw)] w-full flex justify-center items-center text-center leading-none self-center font-['anton'] uppercase"
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

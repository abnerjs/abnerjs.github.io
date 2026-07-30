"use client";

import { useGSAP } from "@gsap/react";
import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { MainDrawer } from "@/app/(main)/_sections/main-drawer";
import { Button } from "@/components/ui/button";
import CurvedLoop from "@/components/ui/curved-loop";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";
import SplitTitle from "@/components/ui/split-title";
import { useHeroScrollTrigger } from "@/hooks/use-hero-scroll-trigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function NotFound() {
  const showDrawerButton = useHeroScrollTrigger();

  return (
    <div className="flex flex-col font-sans overflow-x-clip bg-white rounded-b-[3rem]">
      <MainDrawer showButton={showDrawerButton} />

      {/* navbar */}
      <Navbar theme="light" />

      {/* Hero */}
      <section
        id="hero"
        className="flex flex-col items-center justify-center w-full flex-1 mb-20"
      >
        <SplitTitle
          text="404"
          className="text-[calc(12vw)] mt-8 pointer-events-none select-none w-full flex justify-center items-center text-center leading-none self-center font-['anton'] uppercase text-zinc-900"
        />
        <CurvedLoop
          speed={2}
          curveAmount={90}
          direction="right"
          interactive
          className="fill-zinc-400 -mt-8"
        >
          <tspan>página</tspan>
          <tspan className="fill-zinc-700">✹</tspan>
          <tspan>não</tspan>
          <tspan className="fill-zinc-700">✹</tspan>
          <tspan>encontrada</tspan>
          <tspan className="fill-zinc-700">✹</tspan>
        </CurvedLoop>

        <div className="flex flex-col items-center gap-6 max-w-lg text-center px-4">
          <p className="text-xl font-medium text-zinc-600 mb-4">
            Parece que a página que você está procurando não existe ou foi
            movida.
          </p>
          <Link href="/">
            <Button
              className="group h-12 px-8 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white transition-all duration-300 flex items-center gap-2 text-base whitespace-nowrap"
              tabIndex={-1}
            >
              <Icon
                icon="ph:arrow-left-bold"
                className="w-5 h-5 group-hover:-translate-x-1 transition-transform shrink-0"
              />
              Voltar para o início
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu } from "lucide-react";
import React from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { Drawer } from "@/components/ui/drawer";
import MagneticWrapper from "@/components/ui/magnetic-wrapper";
import { cn } from "@/lib/utils";
import { About } from "./_sections/about";
import { DrawerContent } from "./_sections/drawercontent";
import { Hero } from "./_sections/hero";
import { MainProjects } from "./_sections/main-projects";

export default function Home() {
  const [drawerOpened, setDrawerOpened] = React.useState(false);
  const [showDrawerButton, setShowDrawerButton] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

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
      setShowDrawerButton(heroSection.getBoundingClientRect().bottom <= 0);
    });

    return () => {
      cancelAnimationFrame(syncInitialVisibility);
      heroOutOfViewTrigger.kill();
    };
  }, []);

  return (
    <div className="flex min-h-screen font-sans">
      {isMounted
        ? createPortal(
            <div
              className={cn(
                "fixed right-6 top-6 z-60 transition-all duration-300",
                showDrawerButton
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-2 pointer-events-none opacity-0",
              )}
            >
              <MagneticWrapper>
                <Button
                  onClick={() => setDrawerOpened(!drawerOpened)}
                  className="size-20 rounded bg-primary px-4 py-2 text-white"
                >
                  <Menu className="size-7" />
                </Button>
              </MagneticWrapper>
            </div>,
            document.body,
          )
        : null}
      <main className="flex flex-col w-full">
        <Hero />

        {/* Sobre mim */}
        <About />

        {/* Projetos principais */}
        <MainProjects />

        <Drawer
          removeDefaultCloseButton
          open={drawerOpened}
          onClose={() => setDrawerOpened(false)}
        >
          <DrawerContent setClose={() => setDrawerOpened(false)} />
        </Drawer>
      </main>
    </div>
  );
}

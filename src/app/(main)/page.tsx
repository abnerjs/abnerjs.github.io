"use client";

import React from "react";
import { Drawer } from "@/components/ui/drawer";
import { About } from "./_sections/about";
import { DrawerContent } from "./_sections/drawercontent";
import { Hero } from "./_sections/hero";
import { MainProjects } from "./_sections/main-projects";

export default function Home() {
  const [drawerOpened, setDrawerOpened] = React.useState(false);

  return (
    <div className="flex min-h-screen font-sans">
      <div className="fixed left-6 top-6 z-40 hidden">
        <button
          type="button"
          onClick={() => setDrawerOpened(true)}
          className="rounded px-4 py-2 text-white bg-primary"
        >
          Abrir Drawer
        </button>
      </div>

      <main className="flex flex-col w-full">
        <Hero />

        {/* Sobre mim */}
        <About />

        {/* Projetos principais */}
        <MainProjects />

        <Drawer open={drawerOpened} onClose={() => setDrawerOpened(false)}>
          <DrawerContent setClose={() => setDrawerOpened(false)} />
        </Drawer>
      </main>
    </div>
  );
}

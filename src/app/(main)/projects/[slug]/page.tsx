"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import React, { use } from "react";
import CurvedLoop from "@/components/ui/curved-loop";
import SplitTitle from "@/components/ui/split-title";
import { projectsData } from "@/data/projects";
import { useHeroScrollTrigger } from "@/hooks/use-hero-scroll-trigger";
import { cn } from "@/lib/utils";
import { Navbar } from "../../../../components/ui/navbar";
import { MainDrawer } from "../../_sections/main-drawer";

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const project = projectsData.find((p) => p.name === resolvedParams.slug);

  const showDrawerButton = useHeroScrollTrigger();
  const titleContainerRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const resizeText = () => {
      if (!titleContainerRef.current) return;
      const el = titleContainerRef.current;

      // Reset para um valor base (ex: 10px) para medir a proporção pura natural
      el.style.fontSize = "10px";
      el.style.width = "max-content"; // garante que o flex nao será exprimido

      const naturalWidth = el.scrollWidth;
      // Pega a largura exata da janela (sem contar a scrollbar)
      const targetWidth = document.documentElement.clientWidth;

      // A razao entre o que temos de espaço tela e o que a fonte em 10px ocupa
      const ratio = targetWidth / naturalWidth;

      // Ajuste o tamanho da fonte (multiplicado por 10 porque a base é 10px)
      // Ajuste usando 0.98 para ter uma margem de seguranca de 1% de cada lado
      el.style.fontSize = `${10 * ratio * 0.98}px`;
      el.style.width = "auto";
    };

    resizeText();
    // Re-calcula apos as fontes carregarem para garantir proporcao certa
    document.fonts?.ready.then(resizeText);

    window.addEventListener("resize", resizeText);
    return () => window.removeEventListener("resize", resizeText);
  }, []);

  if (!project) return notFound();

  return (
    <div className="flex flex-col min-h-screen font-sans overflow-x-clip pb-40 bg-white rounded-b-[3rem]">
      <MainDrawer showButton={showDrawerButton} />

      {/* navbar */}
      <Navbar theme="light" />

      {/* Hero */}
      <section
        id="hero"
        className="flex flex-col w-full items-center pt-8 overflow-hidden"
      >
        <div
          ref={titleContainerRef}
          className="flex justify-center items-center whitespace-nowrap"
        >
          <SplitTitle
            text={project.projectName}
            className="w-full pointer-events-none select-none flex justify-center flex-nowrap! items-center text-center leading-snug self-center font-['anton'] uppercase tracking-tight"
          />
        </div>
        <CurvedLoop
          speed={2}
          curveAmount={90}
          direction="right"
          interactive
          className="fill-zinc-400 mt-12 -translate-y-4 mb-8"
        >
          <tspan>{project.projectName.toLowerCase()}</tspan>
          <tspan className={cn("fill-orange-500", project.className)}>✹</tspan>
          <tspan>{project.type}</tspan>
          <tspan className="fill-orange-500">✹</tspan>
          <tspan>{project.year}</tspan>
          <tspan className="fill-orange-500">✹</tspan>
        </CurvedLoop>
      </section>

      {/* Project Details */}
      <section className="mt-16 px-4 sm:px-8 md:px-16 lg:px-32 w-full flex flex-col gap-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg md:text-xl font-medium border-t border-b border-foreground/10 py-8">
          <div className="flex flex-col gap-2">
            <span className="text-zinc-500 uppercase text-sm font-bold tracking-widest">
              Serviços
            </span>
            <span>{project.roles.join(", ")}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-zinc-500 uppercase text-sm font-bold tracking-widest">
              Stack
            </span>
            <span>{project.stack.join(", ")}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-zinc-500 uppercase text-sm font-bold tracking-widest">
              Ano
            </span>
            <span>{project.year}</span>
          </div>
        </div>

        <div
          className={`w-full rounded-2xl flex flex-col items-center justify-center p-8 sm:p-16 overflow-hidden ${project.className}`}
        >
          {project.images.map((img, i) => (
            <div
              key={img}
              className="relative w-full max-w-5xl aspect-video my-8 drop-shadow-2xl"
            >
              <Image
                src={img}
                alt={`${project.projectName} image ${i + 1}`}
                fill
                sizes="100vw"
                quality={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

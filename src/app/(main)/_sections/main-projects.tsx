"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useCursor } from "@/components/ui/cursor-provider";
import MagneticWrapper from "@/components/ui/magnetic-wrapper";
import { projectsData } from "@/data/projects";
import { cn } from "@/lib/utils";

let globalMouseX = 0;
let globalMouseY = 0;

if (typeof window !== "undefined") {
  window.addEventListener("pointermove", (e) => {
    globalMouseX = e.clientX;
    globalMouseY = e.clientY;
  });
}

function FastCursorLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;

    // Inicia os dois pontos na posição atual do mouse, evitando saltos iniciais
    const targetPoint = { x: globalMouseX, y: globalMouseY };
    const parentPoint = { x: globalMouseX, y: globalMouseY };
    const innerPoint = { x: globalMouseX, y: globalMouseY };

    const handlePointerMove = (e: PointerEvent) => {
      targetPoint.x = e.clientX;
      targetPoint.y = e.clientY;
    };

    window.addEventListener("pointermove", handlePointerMove);

    const animate = () => {
      // 0.22 é o lerp do GlobalCursor pai
      parentPoint.x += (targetPoint.x - parentPoint.x) * 0.22;
      parentPoint.y += (targetPoint.y - parentPoint.y) * 0.22;

      // 0.33 é 50% mais rápido que 0.22 (força magnética 50% maior)
      innerPoint.x += (targetPoint.x - innerPoint.x) * 0.33;
      innerPoint.y += (targetPoint.y - innerPoint.y) * 0.33;

      const localX = innerPoint.x - parentPoint.x;
      const localY = innerPoint.y - parentPoint.y;

      if (labelRef.current) {
        labelRef.current.style.transform = `translate3d(${localX}px, ${localY}px, 0)`;
      }

      raf = window.requestAnimationFrame(animate);
    };

    raf = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={labelRef}
      className={className}
      style={{ willChange: "transform" }}
    >
      {children}
    </div>
  );
}

const items = projectsData
  .filter((p) => p.starred)
  .map((p, index) => {
    const mainContent = p.content.find((c) => "src" in c);
    return {
      index,
      link: `/projects/${p.name}`,
      text: p.projectName,
      projectName: p.projectName,
      stack: p.stack.join(" & "),
      description: p.roles.join(" & "),
      year: p.year,
      image: mainContent?.src || "",
      isScrollable: mainContent?.scrollable || false,
      type: mainContent?.type || "desktop",
      containerClassName: p.className,
    };
  });

export function MainProjects() {
  const { setCursor, setDefaultCursor } = useCursor();
  const listRef = useRef<HTMLDivElement>(null);

  const createProjectsCursor = (activeIndex: number) => (
    <div className="relative size-full overflow-hidden rounded-[inherit]">
      <div
        className="flex flex-col transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: `translateY(-${activeIndex * 20}rem)` }}
      >
        {items.map((item) => (
          <div
            key={item.index}
            className={cn(
              "relative flex items-center justify-center w-full h-80 overflow-hidden",
              item.containerClassName,
            )}
          >
            <div
              className={cn(
                "flex relative overflow-hidden",
                item.isScrollable && item.type === "mobile"
                  ? "aspect-9/16 h-64 shadow-lg bg-black"
                  : item.isScrollable && item.type === "desktop"
                    ? "aspect-video w-72 shadow-lg bg-black/2 dark:bg-white/2"
                    : "w-72 h-65",
              )}
            >
              <Image
                src={item.image}
                alt={item.text}
                width={408}
                height={260}
                className={cn(
                  "size-full",
                  item.isScrollable
                    ? "object-cover object-top"
                    : "object-contain",
                )}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <FastCursorLabel className="bg-purple-600 size-20 rounded-full text-white flex items-center justify-center text-sm font-semibold uppercase tracking-wider">
          Ver
        </FastCursorLabel>
      </div>
    </div>
  );

  const handleItemMouseEnter = (index: number) => {
    setCursor(createProjectsCursor(index), "size-80");
  };

  const handleItemMouseLeave = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const nextTarget = event.relatedTarget;
    const isWithinList =
      nextTarget instanceof Node && !!listRef.current?.contains(nextTarget);

    if (!isWithinList) {
      setDefaultCursor();
    }
  };

  return (
    <section id="projects" className="flex flex-col gap-8 pb-40">
      <h2 className="px-8 sm:px-16 md:px-32 transition-all font-semibold">
        Principais projetos
      </h2>
      <div ref={listRef} className="flex flex-col divide-y divide-zinc-200">
        {items.map((item) => (
          <Link
            key={item.index}
            href={item.link}
            className="flex items-center justify-between w-full px-8 sm:px-16 md:px-32 transition-all py-6 hover:px-4 sm:hover:px-12 md:hover:px-28"
            onMouseEnter={() => handleItemMouseEnter(item.index)}
            onMouseLeave={handleItemMouseLeave}
          >
            <span className="text-xl md:text-4xl uppercase">{item.text}</span>
            <div className="flex flex-col text-xs md:text-base text-right">
              <div className="text-zinc-950">{item.stack}</div>
              <div className="text-zinc-600">{item.description}</div>
            </div>
          </Link>
        ))}
      </div>

      <MagneticWrapper className="self-center my-20">
        <Link href="/projects">
          <Button
            variant="outline"
            size="xl"
            tabIndex={-1}
            className="uppercase flex items-center gap-2 font-semibold tracking-wide whitespace-nowrap"
          >
            Mais trabalhos
            <ArrowRight className="shrink-0" />
          </Button>
        </Link>
      </MagneticWrapper>
    </section>
  );
}

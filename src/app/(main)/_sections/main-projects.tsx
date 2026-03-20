"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useCursor } from "@/components/ui/cursor-provider";
import MagneticWrapper from "@/components/ui/magnetic-wrapper";
import { cn } from "@/lib/utils";

const items = [
  {
    index: 0,
    link: "#",
    text: "Agência de Viagens",
    projectName: "S2 Viagens",
    stack: "Next.js",
    description: "Desenvolvimento",
    year: "2025",
    image: "https://picsum.photos/600/400?random=1",
    containerClassName: "bg-blue-500",
  },
  {
    index: 1,
    link: "#",
    stack: "React.js & Node.js",
    description: "Design & Desenvolvimento",
    text: "Controle de Acesso",
    projectName: "Controle de Acesso",
    year: "2026",
    image: "https://picsum.photos/600/400?random=2",
    containerClassName: "bg-green-500",
  },
  {
    index: 2,
    link: "#",
    stack: "React.js & Node.js",
    description: "Design & Desenvolvimento",
    text: "Controle de Eventos",
    projectName: "Curso de React | V SEC IFSP",
    year: "2024",
    image: "https://picsum.photos/600/400?random=3",
    containerClassName: "bg-purple-500",
  },
  {
    index: 3,
    link: "#",
    stack: "React.js & Node.js",
    description: "Design & Desenvolvimento",
    text: "Gestão de Reuniões e Atas",
    projectName: "Conselho Deliberativo",
    year: "2024",
    image: "https://picsum.photos/600/400?random=3",
    containerClassName: "bg-purple-500",
  },
];

export function MainProjects() {
  const { setCursor, setDefaultCursor } = useCursor();
  const listRef = useRef<HTMLDivElement>(null);

  const createProjectsCursor = (activeIndex: number) => (
    <div className="size-full overflow-hidden rounded-[inherit]">
      <div
        className="flex flex-col transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: `translateY(-${activeIndex * 15}rem)` }}
      >
        {items.map((item) => (
          <div
            key={item.index}
            className={cn(
              "relative flex items-center justify-center size-60 overflow-hidden",
              item.containerClassName,
            )}
          >
            <div className="absolute inset-0 bg-black/50" />
            <Image
              src={item.image}
              alt={item.text}
              width={208}
              height={160}
              className="w-52 h-40 -mt-12 rounded-lg"
            />

            <span className="absolute flex flex-col top-46 left-4 pr-4 text-xs font-semibold uppercase tracking-wide text-white">
              {item.projectName}
            </span>
            <span className="absolute bottom-4 right-4 text-xs font-bold text-zinc-300">
              {item.year}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  const handleItemMouseEnter = (index: number) => {
    setCursor(createProjectsCursor(index), "size-60");
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
        <Button
          variant="outline"
          size="xl"
          className="uppercase flex items-center gap-2 font-semibold tracking-wide"
        >
          Mais trabalhos
          <ArrowRight />
        </Button>
      </MagneticWrapper>
    </section>
  );
}

"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useCursor } from "@/components/ui/cursor-provider";
import MagneticWrapper from "@/components/ui/magnetic-wrapper";
import { projectsData } from "@/data/projects";
import { cn } from "@/lib/utils";

const items = projectsData
  .filter((p) => p.starred)
  .map((p, index) => ({
    index,
    link: `/projects#${p.name}`,
    text: p.projectName,
    projectName: p.projectName,
    stack: p.stack.join(" & "),
    description: p.roles.join(" & "),
    year: p.year,
    image: p.images[0] || "",
    containerClassName: p.className,
  }));

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
            <Image
              src={item.image}
              alt={item.text}
              width={208}
              height={160}
              className="w-52 h-40 -mt-12 rounded-lg"
            />

            <span className="absolute flex flex-col top-46 left-4 pr-4 text-xs font-semibold uppercase tracking-wide text-black">
              {item.projectName}
            </span>
            <span className="absolute bottom-4 right-4 text-xs font-bold text-zinc-600">
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
        <Link href="/projects">
          <Button
            variant="outline"
            size="xl"
            className="uppercase flex items-center gap-2 font-semibold tracking-wide"
          >
            Mais trabalhos
            <ArrowRight />
          </Button>
        </Link>
      </MagneticWrapper>
    </section>
  );
}

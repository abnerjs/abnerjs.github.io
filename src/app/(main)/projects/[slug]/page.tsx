"use client";

import { useGSAP } from "@gsap/react";
import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { notFound } from "next/navigation";
import React, { use } from "react";
import { Button } from "@/components/ui/button";
import CurvedLoop from "@/components/ui/curved-loop";
import { Iphone } from "@/components/ui/iphone";
import { Safari } from "@/components/ui/safari";
import SplitTitle from "@/components/ui/split-title";
import { TextHighlight } from "@/components/ui/text-highlight";
import { projectsData } from "@/data/projects";
import { useHeroScrollTrigger } from "@/hooks/use-hero-scroll-trigger";
import { cn } from "@/lib/utils";
import { Navbar } from "../../../../components/ui/navbar";
import { MainDrawer } from "../../_sections/main-drawer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

function ProjectMediaRow({
  item,
  index,
  project,
}: {
  item: any;
  index: number;
  project: any;
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!item.scrollable) return;

      const img = containerRef.current?.querySelector(
        "img, video",
      ) as HTMLElement;
      if (!img) return;

      const setupTrigger = () => {
        const wrapper = img.parentElement;
        if (!wrapper) return;

        gsap.set(img, { clearProps: "y" });
        ScrollTrigger.refresh();

        const getScrollDistance = () => {
          const wrapperHeight = wrapper.getBoundingClientRect().height;
          const imgHeight = img.getBoundingClientRect().height;
          return imgHeight - wrapperHeight;
        };

        if (getScrollDistance() <= 0) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            start: "center center",
            end: () => `+=${getScrollDistance()}`,
            scrub: 1,
            invalidateOnRefresh: true,
            pinSpacing: true,
          },
        });

        tl.to(img, {
          y: () => -getScrollDistance(),
          ease: "none",
        });
      };

      if (img instanceof HTMLImageElement) {
        if (img.complete) {
          setupTrigger();
        } else {
          img.addEventListener("load", setupTrigger);
        }
      } else {
        if ((img as HTMLVideoElement).readyState >= 1) {
          setupTrigger();
        } else {
          img.addEventListener("loadedmetadata", setupTrigger);
        }
      }
    },
    { scope: containerRef, dependencies: [item.src, item.scrollable] },
  );

  const containerMaxW =
    item.type === "desktop" ? "max-w-5xl lg:flex-1" : "max-w-xs";

  let layoutClass = "flex-col-reverse";
  if (index > 0) {
    layoutClass =
      index % 2 === 0
        ? "flex-col-reverse lg:flex-row"
        : "flex-col-reverse lg:flex-row-reverse";
  }

  return (
    <div className="w-full relative flex justify-center">
      <div
        ref={containerRef}
        className={cn(
          "flex items-center justify-center gap-8 lg:gap-16 w-full",
          index === 0 ? "my-8" : "my-16",
          layoutClass,
        )}
      >
        <div
          className={`relative w-full ${containerMaxW} flex items-center justify-center`}
        >
          {item.type === "desktop" ? (
            <Safari
              imageSrc={item.src}
              url={project.sources[0]?.url}
              theme={item.theme}
              scrollable={item.scrollable}
            />
          ) : (
            <Iphone
              src={item.src}
              theme={item.theme}
              scrollable={item.scrollable}
            />
          )}
        </div>
        {item.text && (
          <div
            className={cn(
              "flex flex-col gap-4 px-4 w-full items-start text-left",
              index !== 0 && "lg:w-1/3",
            )}
          >
            {item.text.title && (
              <h3 className="text-3xl font-bold font-['anton'] uppercase tracking-widest text-zinc-800 dark:text-zinc-200">
                {item.text.title}
              </h3>
            )}
            {item.text.paragraph && (
              <TextHighlight className="text-lg md:text-xl font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg">
                {item.text.paragraph}
              </TextHighlight>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

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

      el.style.fontSize = "10px";
      el.style.width = "max-content";

      const naturalWidth = el.scrollWidth;
      const targetWidth = document.documentElement.clientWidth;

      const ratio = targetWidth / naturalWidth;

      el.style.fontSize = `${10 * ratio * 0.98}px`;
      el.style.width = "auto";
    };

    resizeText();
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
            text={project.projectName
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")}
            className="w-full pointer-events-none select-none flex justify-center flex-nowrap! items-center text-center leading-none self-center font-['anton'] uppercase tracking-tight"
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-lg md:text-xl font-medium border-t border-b border-foreground/10 py-8">
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
          {(project.sources?.length ?? 0) > 0 && (
            <div className="flex flex-col gap-2">
              <span className="text-zinc-500 uppercase text-sm font-bold tracking-widest">
                Links
              </span>
              <div className="flex flex-nowrap gap-4 items-start">
                {project.sources.map(
                  (source: { url: string; from: string }) => {
                    const isFigma = source.from === "Figma";
                    const isGitHub = source.from === "GitHub";

                    const bgClass = isFigma
                      ? "bg-[#2C2D33] hover:bg-[#2C2D33]/90 text-white"
                      : isGitHub
                        ? "bg-[#24292e] hover:bg-[#24292e]/90 text-white"
                        : "bg-blue-600 hover:bg-blue-700 text-white";

                    const iconName = isFigma
                      ? "material-icon-theme:figma"
                      : isGitHub
                        ? "mynaui:github-solid"
                        : "material-symbols-light:link";
                    const label = isFigma
                      ? "Protótipo"
                      : isGitHub
                        ? "Repo"
                        : "Link";

                    return (
                      <Button
                        key={source.url}
                        className={cn("rounded-full px-6", bgClass)}
                        onClick={() => window.open(source.url, "_blank")}
                      >
                        <Icon icon={iconName} className="w-5 h-5 mr-2" />
                        <span className="max-md:hidden">{label}</span>
                      </Button>
                    );
                  },
                )}
              </div>
            </div>
          )}
        </div>

        <div
          className={`flex w-full flex-col gap-32 items-center justify-center p-8 sm:p-16 overflow-visible`}
        >
          {project.content.map((item, index) => {
            if (!("src" in item)) return null;
            return (
              <ProjectMediaRow
                key={item.src}
                item={item}
                index={index}
                project={project}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

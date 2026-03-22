"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { allStacks, projectsData } from "@/data/projects";
import { cn } from "@/lib/utils";

interface TagButtonProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

function TagButton({ label, checked, onChange }: TagButtonProps) {
  return (
    <Button
      onClick={onChange}
      className={cn(
        "rounded-full whitespace-nowrap bg-zinc-950 hover:text-black text-white after:border after:border-zinc-950",
        !checked && "bg-transparent text-black hover:text-white",
      )}
      overlayClassName={cn(checked && "bg-white")}
    >
      {label}
    </Button>
  );
}

interface ImageDataProps {
  src: string;
  scrollable?: boolean;
  type?: string;
}

interface ImageStackProps {
  images: ImageDataProps[];
  type: "desktop" | "mobile" | "both" | string;
  projectName: string;
}

const ImageStack = ({ images, type, projectName }: ImageStackProps) => {
  return (
    <div className="relative w-[90%] h-[90%] transition-transform duration-700 ease-in-out group-hover:scale-105">
      {images.map((imgObj, index) => {
        const imgSrc = imgObj.src;
        const isScrollable = imgObj.scrollable;
        const imgContentType = imgObj.type;

        let transformArgs = "";
        let transformOrigin = "origin-center";
        let zIndex = "z-0";
        let bgPosition = "object-center";

        if (type === "desktop") {
          if (images.length === 2) {
            transformArgs = "scale-[0.85]";
            if (index === 0) {
              transformOrigin = "origin-top-left";
              zIndex = "z-10";
            } else {
              transformOrigin = "origin-bottom-right";
              zIndex = "z-[1]";
            }
          } else if (images.length === 3) {
            transformArgs = "scale-[0.7]";
            if (index === 0) {
              zIndex = "z-20";
            } else if (index === 1) {
              transformOrigin = "origin-top-left";
              zIndex = "z-10";
            } else {
              transformOrigin = "origin-bottom-right";
              zIndex = "z-[1]";
            }
          }
        } else if (type === "mobile") {
          if (images.length === 2) {
            transformArgs = "scale-[0.85]";
            if (index === 0) {
              transformOrigin = "origin-top-left";
              zIndex = "z-10";
            } else {
              transformOrigin = "origin-bottom-right";
              zIndex = "z-[1]";
            }
          } else if (images.length === 3) {
            if (index === 0) {
              zIndex = "z-20";
            } else if (index === 1) {
              transformOrigin = "origin-left";
              zIndex = "z-10";
              transformArgs = "scale-[0.7]";
              bgPosition = "object-[20%_center]"; // center_left_4rem equivalent approx
            } else {
              transformOrigin = "origin-right";
              zIndex = "z-[1]";
              transformArgs = "scale-[0.7]";
              bgPosition = "object-[80%_center]"; // center_right_4rem approx
            }
          }
        } else if (type === "both") {
          if (images.length === 2) {
            if (index === 1) {
              transformArgs = "scale-[0.85]";
              transformOrigin = "origin-bottom-right";
              zIndex = "z-10";
              bgPosition = "object-[90%_center]"; // center_right_6rem
            } else {
              bgPosition = "object-top";
              transformOrigin = "origin-top";
              zIndex = "z-[1]";
            }
          }
        }

        if (!isScrollable) {
          return (
            <div
              key={`${projectName} ${index + 1}`}
              className={`absolute inset-0 flex w-full h-full drop-shadow-xs ${transformArgs} ${transformOrigin} ${zIndex}`}
            >
              {imgSrc.endsWith(".mp4") ? (
                <video
                  src={imgSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={`object-contain ${bgPosition} w-full h-full`}
                />
              ) : (
                <Image
                  src={imgSrc}
                  alt={`${projectName} ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={85}
                  className={`object-contain ${bgPosition}`}
                />
              )}
            </div>
          );
        }

        return (
          <div
            key={`${projectName} ${index + 1}`}
            className={`absolute inset-0 flex items-center justify-center w-full h-full drop-shadow-lg ${transformArgs} ${transformOrigin} ${zIndex}`}
          >
            <div
              className={cn(
                "relative overflow-hidden",
                imgContentType === "mobile"
                  ? "aspect-9/16 h-full bg-black"
                  : "aspect-video w-full bg-black/2 dark:bg-white/2",
              )}
            >
              {imgSrc.endsWith(".mp4") ? (
                <video
                  src={imgSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover object-top w-full h-full"
                />
              ) : (
                <Image
                  src={imgSrc}
                  alt={`${projectName} ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={85}
                  className="object-cover object-top"
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export function ProjectsSection() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const isAllSelected = selectedTags.length === 0;

  const toggleTag = useCallback((tag: string) => {
    setSelectedTags((prev) => {
      if (prev.length === 0) {
        return [tag];
      }

      if (prev.includes(tag)) {
        return prev.filter((t) => t !== tag);
      }

      const newState = [...prev, tag];
      if (newState.length === allStacks.length) {
        return [];
      }
      return newState;
    });
  }, []);

  const toggleAll = useCallback(() => {
    setSelectedTags([]);
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) return projectsData;
    return projectsData.filter((p) =>
      p.stack.some((tag) => selectedTags.includes(tag)),
    );
  }, [selectedTags]);

  return (
    <div className="mt-32 px-4 sm:px-8 md:px-16 lg:px-32 transition-all flex flex-col items-center">
      <div className="w-full py-8 text-center">
        <div className="flex flex-wrap justify-center items-center gap-2">
          <TagButton
            label="Todos"
            checked={isAllSelected}
            onChange={toggleAll}
          />
          {allStacks.map((tag) => (
            <TagButton
              key={tag}
              label={tag}
              checked={selectedTags.includes(tag)}
              onChange={() => toggleTag(tag)}
            />
          ))}
        </div>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 sm:gap-8 md:gap-16 mt-4 w-full"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              key={project.name}
              className="group cursor-pointer flex flex-col mb-8 w-full"
            >
              <Link
                href={`/projects/${project.name}`}
                className="flex flex-col w-full h-full"
              >
                <div
                  className={`w-full aspect-4/3 mb-6 rounded-md flex items-center justify-center overflow-hidden transition-colors ${project.className}`}
                >
                  {project.content.filter((c) => "src" in c).length > 0 && (
                    <ImageStack
                      images={(() => {
                        const imgs = project.content
                          .filter((c) => "src" in c)
                          .map((c) => ({
                            src: c.src as string,
                            scrollable: c.scrollable,
                            type: c.type,
                          }));
                        return project.reverseStack ? imgs.reverse() : imgs;
                      })()}
                      type={project.type as "desktop" | "mobile" | "both"}
                      projectName={project.projectName}
                    />
                  )}
                </div>
                <div className="flex flex-col">
                  <h4 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4">
                    {project.projectName}
                  </h4>
                  <div className="w-full h-px bg-foreground/10 mb-4" />
                  <div className="flex justify-between items-center text-base font-semibold text-foreground/80">
                    <span className="opacity-90">
                      {project.roles.join(" & ")}
                    </span>
                    <span>
                      {project.stack[0]}{" "}
                      <span className="opacity-50 ml-1">• {project.year}</span>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <p className="mt-12 text-foreground/50">
          Nenhum projeto encontrado com os filtros selecionados.
        </p>
      )}
    </div>
  );
}

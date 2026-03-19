"use client";

import { gsap } from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export function About() {
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const descriptionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const stickerRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    if (!mediaQuery.matches) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          const nextIndex = Number.parseInt(
            entry.target.getAttribute("data-skill-index") ?? "0",
            10,
          );

          if (!Number.isNaN(nextIndex)) {
            setActiveSkillIndex(nextIndex);
          }
        }
      },
      {
        root: null,
        rootMargin: "-49% 0px -49% 0px",
        threshold: 0,
      },
    );

    for (const description of descriptionRefs.current) {
      if (!description) {
        continue;
      }

      observer.observe(description);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const skills = ["Front-end", "Back-end", "Full-Stack"];
  const stickerClasses = [
    "bg-amber-300 text-zinc-950 rotate-3",
    "bg-lime-300 text-zinc-950 -rotate-1",
    "bg-sky-300 text-zinc-950 rotate-2",
  ];

  useLayoutEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (!window.matchMedia("(min-width: 768px)").matches) {
      return;
    }

    for (let i = 0; i < stickerRefs.current.length; i += 1) {
      const sticker = stickerRefs.current[i];

      if (!sticker) {
        continue;
      }

      const isActive = i === activeSkillIndex;
      const isPast = i < activeSkillIndex;

      gsap.to(sticker, {
        autoAlpha: isActive || isPast ? 1 : 0,
        y: isActive ? 0 : isPast ? (activeSkillIndex - i) * 10 : 28,
        zIndex: isActive ? 50 : i + 1,
        duration: isActive ? 0.45 : 0.3,
        ease: isActive ? "power3.out" : "power2.out",
      });
    }
  }, [activeSkillIndex]);

  return (
    <section
      id="about"
      className="flex flex-col px-8 sm:px-16 md:px-32 transition-all py-40 gap-40"
    >
      {/* Greetings */}
      <div className="flex flex-col md:flex-row gap-12 px-8 sm:px-16 md:px-32 transition-all">
        <h2 className="text-4xl font-bold flex flex-col text-nowrap">
          <span>Olá, mundo!</span>
          <span>
            Sou o <span className="font-black">Abner</span> 👋
          </span>
        </h2>
        <p className="text-xl font-medium flex-1">
          Sou o{" "}
          <span className="text-purple-600 font-bold">Desenvolvedor Web</span>{" "}
          especializado em criar{" "}
          <span className="text-purple-600 font-bold">
            experiências digitais
          </span>{" "}
          excepcionais e estou{" "}
          <span className="text-purple-600 font-bold">pronto</span> para
          desenvolver o software que você ou seu cliente precisa!
        </p>
      </div>

      {/* Minhas habilidades */}
      <div className="grid items-start gap-10 md:grid-cols-[minmax(220px,0.9fr)_minmax(0,1.1fr)] md:gap-16">
        <h3 className="self-start text-6xl font-bold font-['anton'] uppercase leading-[0.95] md:sticky md:top-24 md:text-8xl">
          Posso te
          <br />
          ajudar com
          <span className="relative mt-6 hidden h-44 md:block">
            {skills.map((skill, index) => (
              <span
                key={skill}
                ref={(element) => {
                  stickerRefs.current[index] = element;
                }}
                className={`absolute left-0 top-0 inline-block rounded-2xl text-8xl p-2 leading-none ${stickerClasses[index]}`}
              >
                {skill}
              </span>
            ))}
          </span>
        </h3>

        <div className="flex flex-col gap-6 md:min-h-[300vh] md:justify-evenly">
          <div
            ref={(element) => {
              descriptionRefs.current[0] = element;
            }}
            data-skill-index="0"
            className="flex flex-col gap-2 justify-center"
          >
            <span className="block mt-2 md:hidden">Front-end</span>
            <p className="text-lg font-medium">
              Desenvolvo experiências web e sou apaixonado por criar soluções
              inovadoras e eficientes. Minha abordagem é sempre centrada no
              usuário, garantindo uma satisfação do usuário em usar um
              aplicativo. Construo interfaces ricas, intuitivas, responsivas e
              otimizadas para SEO.
            </p>
          </div>
          <div
            ref={(element) => {
              descriptionRefs.current[1] = element;
            }}
            data-skill-index="1"
            className="flex flex-col gap-2"
          >
            <span className="block mt-2 md:hidden">Back-end</span>
            <p className="text-lg font-medium">
              Construo sites escaláveis a partir do zero, bem como adiciono
              novas funcionalidades em sites pré-existentes. Tenho habilidades
              para construir aplicações performáticas e escaláveis com um
              backend robusto, utilizando as melhores práticas com princípios
              SOLID e Clean-Code.
            </p>
          </div>
          <div
            ref={(element) => {
              descriptionRefs.current[2] = element;
            }}
            data-skill-index="2"
            className="flex flex-col gap-2"
          >
            <span className="block mt-2 md:hidden">Full-Stack</span>
            <p className="text-lg font-medium">
              Ofereço a criação de um site completo, desde o conceito até a
              implementação. Com meu senso de design e habilidades de
              desenvolvimento, sou capaz de criar projetos que se encaixam
              perfeitamente no contexto da sua necessidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

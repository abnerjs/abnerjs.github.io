"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

export function About() {
  const skillsRef = React.useRef<HTMLDivElement | null>(null);
  const skillsTitleRef = React.useRef<HTMLHeadingElement | null>(null);

  React.useLayoutEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();

    media.add("(min-width: 768px)", () => {
      if (!skillsRef.current || !skillsTitleRef.current) {
        return;
      }

      const titlePin = ScrollTrigger.create({
        trigger: skillsRef.current,
        start: "top top+=112",
        end: "bottom bottom-=96",
        pin: skillsTitleRef.current,
        pinSpacing: false,
        anticipatePin: 1,
      });

      return () => {
        titlePin.kill();
      };
    });

    return () => {
      media.revert();
    };
  }, []);

  return (
    <section
      id="about"
      className="flex flex-col px-8 sm:px-16 md:px-32 transition-all py-40 gap-40"
    >
      {/* Greetings */}
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold">Olá, mundo! Me chamo Abner 👋</h2>
        <p className="text-xl font-medium">
          Sou o <span>Desenvolvedor Web</span> especializado em criar
          experiências digitais excepcionais e estou pronto para desenvolver o
          software que você ou seu cliente precisa!
        </p>
      </div>

      {/* Minhas habilidades */}
      <div
        ref={skillsRef}
        className="grid items-start gap-10 md:grid-cols-[minmax(220px,0.8fr)_minmax(0,1.2fr)] md:gap-16"
      >
        <h3
          ref={skillsTitleRef}
          className="self-start text-6xl font-bold font-['anton'] uppercase leading-[0.95] md:text-8xl"
        >
          Minhas
          <br />
          habilidades
        </h3>

        <div className="flex flex-col gap-6 *:min-h-lvh">
          <div className="flex flex-col gap-2 justify-center">
            <h3>Front-end avançado</h3>
            <p className="text-lg font-medium">
              Desenvolvo experiências web e sou apaixonado por criar soluções
              inovadoras e eficientes. Minha abordagem é sempre centrada no
              usuário, garantindo uma satisfação do usuário em usar um
              aplicativo. Construo interfaces ricas, intuitivas, responsivas e
              otimizadas para SEO.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3>Back-end robusto</h3>
            <p className="text-lg font-medium">
              Construo sites escaláveis a partir do zero, bem como adiciono
              novas funcionalidades em sites pré-existentes. Tenho habilidades
              para construir aplicações performáticas e escaláveis com um
              backend robusto, utilizando as melhores práticas com princípios
              SOLID e Clean-Code.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3>Full-Stack exemplar</h3>
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

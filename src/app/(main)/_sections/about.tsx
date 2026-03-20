"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import RotatingText, {
  type RotatingTextRef,
} from "@/components/ui/rotating-text";

export function About() {
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const descriptionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const splitTextRefs = useRef<Array<HTMLElement | null>>([]);
  const rotatingTextRef = useRef<RotatingTextRef>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (!window.matchMedia("(min-width: 768px)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const triggers: ScrollTrigger[] = [];

    // Aguarda um frame para garantir que outras animações (como SplitText)
    // tenham alterado o layout, evitando posições de trigger erradas
    requestAnimationFrame(() => {
      descriptionRefs.current.forEach((description, index) => {
        if (!description) {
          return;
        }

        const st = ScrollTrigger.create({
          trigger: description,
          start: "top 55%",
          end: "bottom 45%",
          onEnter: () => setActiveSkillIndex(index),
          onEnterBack: () => setActiveSkillIndex(index),
          onLeaveBack: () => {
            if (index === 0) {
              setActiveSkillIndex(0);
            }
          },
        });

        triggers.push(st);
      });

      // Refresh instantâneo para recalcular dimensões finais
      ScrollTrigger.refresh();
    });

    return () => {
      for (const st of triggers) {
        st.kill();
      }
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

    rotatingTextRef.current?.jumpTo(activeSkillIndex);
  }, [activeSkillIndex]);

  useLayoutEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    gsap.registerPlugin(ScrollTrigger, SplitText);

    const splitElements = splitTextRefs.current.filter(
      (element): element is HTMLElement => element !== null,
    );

    if (splitElements.length === 0) {
      return;
    }

    const splitInstances: SplitText[] = [];
    let isUnmounted = false;

    const createSplitAnimations = () => {
      if (isUnmounted) {
        return;
      }

      for (const element of splitElements) {
        const split = SplitText.create(element, {
          type: "words,lines",
          mask: "lines",
          linesClass: "about-line",
          autoSplit: true,
          onSplit: (instance) => {
            return gsap.from(instance.lines, {
              yPercent: 120,
              stagger: 0.08,
              ease: "none",
              scrollTrigger: {
                trigger: element,
                scrub: true,
                start: "clamp(top 82%)",
                end: "clamp(bottom 45%)",
              },
            });
          },
        });

        splitInstances.push(split);
      }

      ScrollTrigger.refresh();
    };

    if (document.fonts?.ready) {
      document.fonts.ready.then(createSplitAnimations);
    } else {
      createSplitAnimations();
    }

    return () => {
      isUnmounted = true;

      for (const splitInstance of splitInstances) {
        splitInstance.revert();
      }
    };
  }, []);

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
            <span>
              Sou o <span className="font-black">Abner</span> 👋
            </span>
          </span>
        </h2>
        <p
          ref={(element) => {
            splitTextRefs.current[0] = element;
          }}
          className="text-xl font-medium flex-1"
        >
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
          <span
            ref={(element) => {
              splitTextRefs.current[1] = element;
            }}
          >
            Posso te
            <br />
            ajudar com
          </span>
          <span className="relative mt-6 hidden h-44 md:block">
            <span
              className={`absolute left-0 top-0 inline-block rounded-2xl text-8xl p-2 leading-none transition-all duration-300 ${stickerClasses[activeSkillIndex]}`}
            >
              <RotatingText
                ref={rotatingTextRef}
                texts={skills}
                mainClassName="overflow-hidden"
                staggerDuration={0.03}
                staggerFrom="last"
                rotationInterval={3000}
                animatePresenceMode="wait"
                auto={false}
              />
            </span>
          </span>
        </h3>

        <div className="flex flex-col gap-6 md:min-h-[300vh] max-w-lg md:justify-evenly">
          <div
            ref={(element) => {
              descriptionRefs.current[0] = element;
            }}
            data-skill-index="0"
            className="flex flex-col gap-2 justify-center"
          >
            <span className="block mt-2 md:hidden text-4xl uppercase font-['anton']">
              Front-end
            </span>
            <p
              ref={(element) => {
                splitTextRefs.current[2] = element;
              }}
              className="text-lg font-medium"
            >
              Desenvolvo experiências web e sou apaixonado por criar{" "}
              <span className="text-amber-500">
                soluções inovadoras e eficientes
              </span>
              . Minha abordagem é sempre centrada no usuário, garantindo uma{" "}
              <span className="text-amber-500">satisfação do usuário</span> em
              usar um sistema. Construo interfaces ricas, intuitivas,
              responsivas e otimizadas para SEO.
            </p>
          </div>
          <div
            ref={(element) => {
              descriptionRefs.current[1] = element;
            }}
            data-skill-index="1"
            className="flex flex-col gap-2"
          >
            <span className="block mt-2 md:hidden text-4xl uppercase font-['anton']">
              Back-end
            </span>
            <p
              ref={(element) => {
                splitTextRefs.current[3] = element;
              }}
              className="text-lg font-medium"
            >
              Construo <span className="text-green-500">sites escaláveis</span>{" "}
              a partir do zero, bem como adiciono novas funcionalidades em sites
              pré-existentes. Tenho habilidades para construir{" "}
              <span className="text-green-500">
                aplicações performáticas e escaláveis
              </span>{" "}
              com um backend robusto, utilizando as melhores práticas com
              princípios SOLID e Clean-Code.
            </p>
          </div>
          <div
            ref={(element) => {
              descriptionRefs.current[2] = element;
            }}
            data-skill-index="2"
            className="flex flex-col gap-2"
          >
            <span className="block mt-2 md:hidden text-4xl uppercase font-['anton']">
              Full-Stack
            </span>
            <p
              ref={(element) => {
                splitTextRefs.current[4] = element;
              }}
              className="text-lg font-medium"
            >
              Ofereço a criação de um{" "}
              <span className="text-blue-500">projeto full-stack</span>, desde o
              conceito até a implementação. Com meu senso de design e
              habilidades de desenvolvimento, sou capaz de criar{" "}
              <span className="text-blue-500">
                projetos que se encaixam perfeitamente
              </span>{" "}
              no contexto da sua necessidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

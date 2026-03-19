"use client";

import { Icon } from "@iconify/react";
import dayjs from "dayjs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { Me } from "../svg/me";
import { MeClosedEyes } from "../svg/me-closed-eyes";
import { MeSmile } from "../svg/me-smile";
import { Rubrik } from "../svg/rubrik";
import { Button } from "./button";
import MagneticWrapper from "./magnetic-wrapper";
import { Separator } from "./separator";

export function Footer() {
  const workTogetherRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctaSection = workTogetherRef.current;
    if (!ctaSection) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ctaSection,
        {
          scale: 2,
          transformOrigin: "top center",
        },
        {
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaSection,
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        },
      );
    }, ctaSection);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <footer className="bg-zinc-950 text-zinc-950 overflow-x-clip">
      <div className="rounded-b-4xl bg-white h-10 w-full"></div>

      {/* content */}
      <div className="flex flex-col font-light gap-8 px-4 sm:px-8 md:px-16 transition-all">
        <div className="py-20 px-20 gap-12 flex flex-col md:flex-row justify-between">
          <h2 className="text-4xl font-bold text-white">
            Siga-me
            <br />
            nas redes sociais
          </h2>
          <div id="footer-socials" className="flex">
            {/* LinkedIn */}
            <Link
              href="https://linkedin.com/in/abner-j-silva"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir LinkedIn de Abner"
              className="group relative bg-zinc-300 size-32 rounded-full cursor-pointer flex items-center justify-center"
            >
              <MeClosedEyes className="absolute size-20 z-10 top-0 group-hover:-translate-x-14 group-hover:-rotate-12 transition-all duration-200" />
              <div className="absolute z-20 group-hover:translate-x-6 group-hover:translate-y-3 transition-all duration-100 ease-in size-32.5 bg-[#0a66c2] rounded-full flex items-center justify-center">
                <Icon
                  icon="basil:linkedin-solid"
                  className="size-16 text-white group-hover:rotate-12 transition-all duration-100 ease-in"
                />
              </div>
            </Link>
            {/* Github */}
            <Link
              href="https://github.com/abnerjs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir GitHub de Abner"
              className="group relative bg-zinc-300 mt-20 size-32 rounded-full cursor-pointer flex items-center justify-center"
            >
              <Me className="absolute size-20 z-10 top-0 group-hover:-translate-x-14 group-hover:-rotate-12 transition-all duration-200" />
              <div className="absolute z-20 group-hover:translate-x-6 group-hover:translate-y-3 transition-all duration-100 ease-in size-32.5 bg-[#24292e] rounded-full flex items-center justify-center">
                <Icon
                  icon="mynaui:github-solid"
                  className="size-16 text-white group-hover:rotate-12 transition-all duration-100 ease-in"
                />
              </div>
            </Link>
            {/* Whatsapp */}
            <Link
              href="https://wa.me/5518997261645"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir WhatsApp de Abner"
              className="group relative bg-zinc-300 size-32 rounded-full cursor-pointer flex items-center justify-center"
            >
              <MeClosedEyes className="absolute size-20 z-10 top-0 group-hover:-translate-x-14 group-hover:-rotate-12 transition-all duration-200" />
              <div className="absolute z-20 group-hover:translate-x-6 group-hover:translate-y-3 transition-all duration-100 ease-in size-32.5 bg-[#25D366] rounded-full flex items-center justify-center">
                <Icon
                  icon="ri:whatsapp-fill"
                  className="size-16 text-white group-hover:rotate-12 transition-all duration-100 ease-in"
                />
              </div>
            </Link>
            <Link
              href="https://instagram.com/abnerjs.dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir Instagram de Abner (@abnerjs.dev)"
              className="group relative bg-zinc-300 mt-20 size-32 rounded-full cursor-pointer flex items-center justify-center"
            >
              <Me className="absolute size-20 z-10 top-0 group-hover:-translate-x-14 group-hover:-rotate-12 transition-all duration-200" />
              <div className="absolute z-20 group-hover:translate-x-6 group-hover:translate-y-3 transition-all duration-100 ease-in size-32.5 bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] rounded-full flex items-center justify-center">
                <Icon
                  icon="line-md:instagram"
                  className="size-16 text-white group-hover:rotate-12 transition-all duration-100 ease-in"
                />
              </div>
            </Link>
          </div>
        </div>

        {/* Trabalhar juntos */}
        <section
          ref={workTogetherRef}
          id="work-together"
          className="flex flex-col bg-primary p-8 pt-12 rounded-t-4xl overflow-hidden"
        >
          <div className="flex flex-col gap-8">
            <h2 className="font-black lg:text-8xl font-['anton']">
              <div className="flex items-center gap-2">
                <MeSmile className="size-24" />
                VAMOS TRABALHAR
              </div>
              JUNTOS?
            </h2>

            {/* contact me */}
            <div className="flex flex-col mt-8">
              <MagneticWrapper className="absolute -translate-1/2 self-end size-40">
                <Link
                  href="https://wa.me/5518997261645"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="text-zinc-50 bg-zinc-950 text-base size-40"
                    overlayClassName="bg-purple-700"
                  >
                    Contate-me
                  </Button>
                </Link>
              </MagneticWrapper>

              <Separator className="w-full h-px bg-zinc-700/20" />
            </div>

            {/* Nav */}
            <div className="flex gap-12 w-full">
              <Rubrik className="size-40 mt-2" />
              <div className="flex flex-col w-full">
                <div className="flex items-start justify-between pt-8">
                  <div className="flex flex-1 flex-col gap-4 justify-between h-full">
                    <ul>
                      <li>
                        <Link href="/">
                          <Button
                            variant="link"
                            className="text-black font-['lexend'] p-0 h-max"
                          >
                            Início
                          </Button>
                        </Link>
                      </li>
                      <li>
                        <Link href="/projects">
                          <Button
                            variant="link"
                            className="text-black font-['lexend'] p-0 h-max"
                          >
                            Projetos
                          </Button>
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact">
                          <Button
                            variant="link"
                            className="text-black font-['lexend'] p-0 h-max"
                          >
                            Contato
                          </Button>
                        </Link>
                      </li>
                    </ul>
                    <p className="flex items-center gap-2 text-xs">
                      <span className="font-bold">{dayjs().year()}</span>{" "}
                      <span className="text-lg">&copy;</span>{" "}
                      <span className="font-bold text-nowrap">
                        Abner J. Silva
                      </span>
                    </p>
                  </div>
                  <div className="self-end flex flex-col w-full items-end gap-1">
                    <Link href="#hero">
                      <Button size="xs" className="hover:text-white">
                        Voltar ao topo
                        <ArrowUp className="size-6" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

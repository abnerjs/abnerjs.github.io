"use client";

import { Icon } from "@iconify/react";
import dayjs from "dayjs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";
import { SOCIAL_LINKS } from "@/config/social";
import { Me } from "../svg/me";
import { MeClosedEyes } from "../svg/me-closed-eyes";
import { MeSmile } from "../svg/me-smile";
import { Rubrik } from "../svg/rubrik";
import { Button } from "./button";
import MagneticWrapper from "./magnetic-wrapper";
import { getLenisInstance } from "./scroll-smoother";
import { Separator } from "./separator";

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const workTogetherRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    // Reference pathname to re-run effect on route change mapping without lint errors.
    void pathname;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctaSection = workTogetherRef.current;
    const footerEl = footerRef.current;
    if (!ctaSection || !footerEl) {
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
            end: "50% bottom",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        },
      );

      const mm = gsap.matchMedia();

      mm.add("(max-width: 767px)", () => {
        const socials = gsap.utils.toArray<HTMLElement>(".social-link");
        socials.forEach((social) => {
          const svg = social.querySelector<HTMLElement>(".social-svg");
          const bg = social.querySelector<HTMLElement>(".social-bg");
          const icon = social.querySelector<HTMLElement>(".social-icon");

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: social,
              start: "center 50%",
              end: "center 40%",
              scrub: true,
            },
          });

          // group-hover:-translate-x-14 is -3.5rem = -56px, rotate -12deg
          if (svg) {
            // Disable css transitions on mobile so GSAP scrub doesn't stutter
            svg.style.transition = "none";
            tl.to(svg, { x: -56, rotation: -12, ease: "none" }, 0);
          }

          // group-hover:translate-x-6 is 1.5rem = 24px, group-hover:translate-y-3 is 0.75rem = 12px
          if (bg) {
            bg.style.transition = "none";
            tl.to(bg, { x: 24, y: 12, ease: "none" }, 0);
          }

          if (icon) {
            icon.style.transition = "none";
            tl.to(icon, { rotation: 12, ease: "none" }, 0);
          }
        });
      });
    }, footerEl);

    return () => {
      ctx.revert();
    };
  }, [pathname]);

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const lenis = getLenisInstance();
    if (lenis) {
      lenis.scrollTo(0, {
        duration: 2.5,
        easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      ref={footerRef}
      className="bg-zinc-950 text-zinc-950 overflow-clip -mt-px"
    >
      {/* content */}
      <div className="flex flex-col font-light gap-8 px-4 sm:px-8 md:px-16 transition-all">
        <div className="py-20 px-8 md:px-20 gap-12 flex flex-col md:flex-row justify-between">
          <h2 className="text-4xl font-bold text-white">
            Siga-me
            <br />
            nas redes sociais
          </h2>
          <div
            id="footer-socials"
            className="flex flex-col md:flex-row gap-8 md:gap-0"
          >
            {/* LinkedIn */}
            <Link
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir LinkedIn de Abner"
              className="social-link group relative bg-zinc-300 size-32 rounded-full cursor-pointer flex items-center justify-center max-md:self-start"
            >
              <MeClosedEyes className="social-svg absolute size-20 z-10 top-0 md:group-hover:-translate-x-14 md:group-hover:-rotate-12 transition-all duration-200" />
              <div className="social-bg absolute z-20 md:group-hover:translate-x-6 md:group-hover:translate-y-3 transition-all duration-100 ease-in size-32.5 bg-[#0a66c2] rounded-full flex items-center justify-center">
                <Icon
                  icon="basil:linkedin-solid"
                  className="social-icon size-16 text-white md:group-hover:rotate-12 transition-all duration-100 ease-in"
                />
              </div>
            </Link>
            {/* Github */}
            <Link
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir GitHub de Abner"
              className="social-link group relative bg-zinc-300 max-md:self-end md:mt-20 size-32 rounded-full cursor-pointer flex items-center justify-center"
            >
              <Me className="social-svg absolute size-20 z-10 top-0 md:group-hover:-translate-x-14 md:group-hover:-rotate-12 transition-all duration-200" />
              <div className="social-bg absolute z-20 md:group-hover:translate-x-6 md:group-hover:translate-y-3 transition-all duration-100 ease-in size-32.5 bg-[#24292e] rounded-full flex items-center justify-center">
                <Icon
                  icon="mynaui:github-solid"
                  className="social-icon size-16 text-white md:group-hover:rotate-12 transition-all duration-100 ease-in"
                />
              </div>
            </Link>
            {/* Whatsapp */}
            <Link
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir WhatsApp de Abner"
              className="social-link group relative bg-zinc-300 size-32 rounded-full cursor-pointer flex items-center justify-center max-md:self-start"
            >
              <MeClosedEyes className="social-svg absolute size-20 z-10 top-0 md:group-hover:-translate-x-14 md:group-hover:-rotate-12 transition-all duration-200" />
              <div className="social-bg absolute z-20 md:group-hover:translate-x-6 md:group-hover:translate-y-3 transition-all duration-100 ease-in size-32.5 bg-[#25D366] rounded-full flex items-center justify-center">
                <Icon
                  icon="ri:whatsapp-fill"
                  className="social-icon size-16 text-white md:group-hover:rotate-12 transition-all duration-100 ease-in"
                />
              </div>
            </Link>
            <Link
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir Instagram de Abner"
              className="social-link group relative bg-zinc-300 max-md:self-end md:mt-20 size-32 rounded-full cursor-pointer flex items-center justify-center"
            >
              <Me className="social-svg absolute size-20 z-10 top-0 md:group-hover:-translate-x-14 md:group-hover:-rotate-12 transition-all duration-200" />
              <div className="social-bg absolute z-20 md:group-hover:translate-x-6 md:group-hover:translate-y-3 transition-all duration-100 ease-in size-32.5 bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] rounded-full flex items-center justify-center">
                <Icon
                  icon="line-md:instagram"
                  className="social-icon size-16 text-white md:group-hover:rotate-12 transition-all duration-100 ease-in"
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
            <h2 className="font-black text-2xl lg:text-8xl font-['anton']">
              <div className="flex items-center gap-2">
                <MeSmile className="size-12 md:size-24" />
                VAMOS TRABALHAR
              </div>
              JUNTOS?
            </h2>

            {/* contact me */}
            <div className="flex flex-col md:mt-8">
              <MagneticWrapper className="absolute -translate-1/2 self-end size-24 md:size-40">
                <Link href="/contact" className="outline-none focus:outline-none focus-visible:outline-none rounded-full block">
                  <Button
                    className="text-zinc-50 bg-zinc-950 uppercase text-xs md:text-base size-24 md:size-40"
                    overlayClassName="bg-purple-700"
                    tabIndex={-1}
                  >
                    Contate-me
                  </Button>
                </Link>
              </MagneticWrapper>

              <Separator className="w-full h-px bg-zinc-700/20" />
            </div>

            {/* Nav */}
            <div className="flex md:gap-12 w-full flex-col md:flex-row">
              <Rubrik className="max-md:absolute max-md:self-end min-w-12 size-12 md:size-40 md:mt-2" />
              <div className="flex flex-col w-full">
                <div className="flex items-start justify-between md:pt-8">
                  <div className="flex flex-1 flex-col gap-4 justify-between h-full">
                    <ul>
                      <li>
                        <Link href="/" className="outline-none focus:outline-none focus-visible:outline-none rounded">
                          <Button
                            variant="link"
                            className="text-black font-['lexend'] p-0 h-max"
                            tabIndex={-1}
                          >
                            Início
                          </Button>
                        </Link>
                      </li>
                      <li>
                        <Link href="/projects" className="outline-none focus:outline-none focus-visible:outline-none rounded">
                          <Button
                            variant="link"
                            className="text-black font-['lexend'] p-0 h-max"
                            tabIndex={-1}
                          >
                            Projetos
                          </Button>
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="outline-none focus:outline-none focus-visible:outline-none rounded">
                          <Button
                            variant="link"
                            className="text-black font-['lexend'] p-0 h-max"
                            tabIndex={-1}
                          >
                            Contato
                          </Button>
                        </Link>
                      </li>
                    </ul>
                    <p className="flex flex-col md:flex-row md:items-center md:gap-2 text-xs">
                      <span className="font-bold">
                        {dayjs().isSame("2026", "year")
                          ? "2026"
                          : `2026 - ${dayjs().year()}`}
                      </span>{" "}
                      <span className="text-lg">&copy;</span>{" "}
                      <span className="font-bold text-nowrap">
                        Abner J. Silva
                      </span>
                    </p>
                  </div>
                  <div className="self-end flex flex-col w-full items-end gap-1">
                    <Link href="#" onClick={handleScrollToTop} className="outline-none focus:outline-none focus-visible:outline-none rounded-full group/top">
                      <Button
                        size="sm"
                        className="group-hover/top:text-white group-focus-visible/top:text-white min-h-[44px] px-4 whitespace-nowrap flex items-center gap-2"
                        tabIndex={-1}
                      >
                        Voltar ao topo
                        <ArrowUp className="size-4 shrink-0" />
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

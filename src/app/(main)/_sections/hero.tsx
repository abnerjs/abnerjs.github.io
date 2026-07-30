import { Icon } from "@iconify/react";
import Link from "next/link";
import { DownloadIcon } from "@/components/svg/download";
import { Fullname } from "@/components/svg/fullname";
import { Me } from "@/components/svg/me";
import { Button } from "@/components/ui/button";
import MagneticWrapper from "@/components/ui/magnetic-wrapper";
import { getLenisInstance } from "@/components/ui/scroll-smoother";
import SplitTitle from "@/components/ui/split-title";
import { SOCIAL_LINKS } from "@/config/social";

export function Hero() {
  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const lenis = getLenisInstance();
    if (lenis) {
      lenis.scrollTo("#about", {
        duration: 2.5,
        easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      });
    } else {
      document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="flex min-h-svh p-4 w-full flex-col items-center overflow-hidden bg-white text-zinc-50"
    >
      <h1 className="sr-only">Abner J. Silva — Desenvolvedor Full-Stack</h1>
      <div className="relative flex flex-col bg-zinc-900 w-full h-full rounded-xl overflow-hidden">
        <SplitTitle
          text="BEM-VINDO"
          className="hidden pointer-events-none select-none text-[calc(23.6vw)] text-zinc-800 w-full md:flex justify-center items-center text-center leading-none self-center font-['anton'] uppercase"
        />
        <div className="flex md:hidden flex-col">
          <SplitTitle
            text="BEM"
            className="flex text-[calc(56.6vw)] pointer-events-none select-none text-zinc-800 w-full justify-center items-center text-center leading-none self-center font-['anton'] uppercase"
          />
          <SplitTitle
            text="VINDO"
            className="flex text-[calc(41.6vw)] pointer-events-none select-none -mt-5 text-zinc-800 w-full justify-center items-center text-center leading-none self-center font-['anton'] uppercase"
          />
        </div>
        <div className="absolute md:hidden flex top-1/2 -translate-y-36 bg-zinc-700/50 text-zinc-400 p-2 px-4 rounded-full self-center justify-self-center">
          full-stack dev
        </div>
        {/* Nome e meu rosto */}
        <div className="pt-16 sm:pt-8 md:pt-16 flex flex-col w-full items-center">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full flex items-center justify-center max-md:scale-75">
            <Fullname className="absolute -translate-x-2 md:-translate-x-4 w-md md:w-xl" />
            <Me className="absolute size-32 md:size-40" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row absolute left-0 w-full px-4 sm:px-8 md:px-16 transition-all bottom-20 items-center justify-between">
          {/* Nav */}
          {/* Nav */}
          {/* Nav */}
          <div
            id="#nav-hero"
            className="flex gap-0 md:gap-2 max-md:-translate-y-12"
          >
            <MagneticWrapper>
              <Link href="#about" onClick={handleScrollToAbout} className="outline-none focus:outline-none focus-visible:outline-none rounded-full">
                <Button
                  className="max-md:px-2 flex items-center gap-2 uppercase font-semibold xl:tracking-widest text-white hover:text-white"
                  variant="ghost"
                  overlayClassName="bg-white/10"
                  size="lg"
                  tabIndex={-1}
                >
                  Início
                </Button>
              </Link>
            </MagneticWrapper>
            <MagneticWrapper>
              <Link href="/projects" className="outline-none focus:outline-none focus-visible:outline-none rounded-full">
                <Button
                  className="max-md:px-2 flex items-center gap-2 uppercase font-semibold xl:tracking-widest text-white hover:text-white"
                  variant="ghost"
                  overlayClassName="bg-white/10"
                  size="lg"
                  tabIndex={-1}
                >
                  Projetos
                </Button>
              </Link>
            </MagneticWrapper>
            <MagneticWrapper>
              <Link href="/contact" className="outline-none focus:outline-none focus-visible:outline-none rounded-full">
                <Button
                  className="max-md:px-2 flex items-center gap-2 uppercase font-semibold xl:tracking-widest text-white hover:text-white"
                  variant="ghost"
                  overlayClassName="bg-white/10"
                  size="lg"
                  tabIndex={-1}
                >
                  Contato
                </Button>
              </Link>
            </MagneticWrapper>
          </div>

          {/* Curriculo */}
          <MagneticWrapper className="absolute left-1/2 -translate-x-1/2 group">
            <a
              href={SOCIAL_LINKS.resume}
              aria-label="Baixar currículo de Abner J. Silva"
              className="outline-none focus:outline-none focus-visible:outline-none rounded-full block group/resume"
              target={
                SOCIAL_LINKS.resume.startsWith("http") ? "_blank" : undefined
              }
              rel={
                SOCIAL_LINKS.resume.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              download={
                SOCIAL_LINKS.resume.startsWith("http")
                  ? undefined
                  : "Abner_Silva_Curriculo.pdf"
              }
            >
              <Button
                size="xl"
                inverse
                tabIndex={-1}
                className="flex items-center gap-2 uppercase bg-primary md:bg-zinc-950 text-black md:text-white group-hover/resume:md:text-black group-focus-visible/resume:md:text-black overflow-hidden whitespace-nowrap"
              >
                Currículo
                <DownloadIcon className="size-6 shrink-0" />
              </Button>
            </a>
          </MagneticWrapper>

          {/* Redes sociais */}
          <div id="social-links" className="hidden md:flex gap-2">
            <MagneticWrapper>
              <Link
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir LinkedIn de Abner J. Silva"
                className="outline-none focus:outline-none focus-visible:outline-none rounded-full block"
              >
                <Button
                  inverse
                  tabIndex={-1}
                  className="flex items-center gap-2 uppercase text-white hover:text-white w-16"
                  overlayClassName="bg-[#0a66c2]"
                  size="icon-lg"
                >
                  <Icon icon="basil:linkedin-solid" className="size-6" />
                </Button>
              </Link>
            </MagneticWrapper>
            <MagneticWrapper>
              <Link
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir GitHub de Abner J. Silva"
                className="outline-none focus:outline-none focus-visible:outline-none rounded-full block"
              >
                <Button
                  className="max-md:px-2 flex items-center gap-2 uppercase text-white hover:text-white w-16"
                  inverse
                  tabIndex={-1}
                  overlayClassName="bg-[#24292e]"
                  size="icon-lg"
                >
                  <Icon icon="mynaui:github-solid" className="size-6" />
                </Button>
              </Link>
            </MagneticWrapper>
            <MagneticWrapper>
              <Link
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir WhatsApp de Abner J. Silva"
                className="outline-none focus:outline-none focus-visible:outline-none rounded-full block"
              >
                <Button
                  className="flex items-center gap-2 uppercase text-white hover:text-white w-16"
                  inverse
                  tabIndex={-1}
                  overlayClassName="bg-[#25D366]"
                  size="icon-lg"
                >
                  <Icon icon="ri:whatsapp-fill" className="size-6" />
                </Button>
              </Link>
            </MagneticWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

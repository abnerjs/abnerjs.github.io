import { Icon } from "@iconify/react";
import Link from "next/link";
import { DownloadIcon } from "@/components/svg/download";
import { Fullname } from "@/components/svg/fullname";
import { Me } from "@/components/svg/me";
import { DotPattern } from "@/components/ui/bg/dot-pattern";
import { Button } from "@/components/ui/button";
import MagneticWrapper from "@/components/ui/magnetic-wrapper";
import { getLenisInstance } from "@/components/ui/scroll-smoother";

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
      <div className="relative flex flex-col bg-zinc-900 w-full h-full rounded-xl overflow-hidden">
        {/* Nome e meu rosto */}
        <DotPattern followMouse />
        <div className="pt-16 sm:pt-8 md:pt-16 flex flex-col w-full items-center">
          <span className="text-sm font-bold italic text-zinc-200 z-10">
            Sempre explorando...
          </span>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full flex items-center justify-center max-md:scale-75">
            <Fullname className="absolute -translate-x-2 md:-translate-x-4 w-md md:w-xl" />
            <Me className="absolute size-32 md:size-40" />
          </div>
        </div>

        <div className="flex absolute left-0 w-full px-4 sm:px-8 md:px-16 transition-all bottom-20 items-center justify-between">
          {/* Nav */}
          <div id="#nav-hero" className="hidden md:flex gap-2">
            <MagneticWrapper>
              <Link href="#about" onClick={handleScrollToAbout}>
                <Button
                  className="flex items-center gap-2 uppercase font-semibold xl:tracking-widest text-white hover:text-white"
                  variant="ghost"
                  overlayClassName="bg-white/10"
                  size="lg"
                >
                  Início
                </Button>
              </Link>
            </MagneticWrapper>
            <MagneticWrapper>
              <Link href="/projects">
                <Button
                  className="flex items-center gap-2 uppercase font-semibold xl:tracking-widest text-white hover:text-white"
                  variant="ghost"
                  overlayClassName="bg-white/10"
                  size="lg"
                >
                  Projetos
                </Button>
              </Link>
            </MagneticWrapper>
            <MagneticWrapper>
              <Link href="/contact">
                <Button
                  className="flex items-center gap-2 uppercase font-semibold xl:tracking-widest text-white hover:text-white"
                  variant="ghost"
                  overlayClassName="bg-white/10"
                  size="lg"
                >
                  Contato
                </Button>
              </Link>
            </MagneticWrapper>
          </div>

          {/* Curriculo */}
          <MagneticWrapper className="absolute left-1/2 -translate-x-1/2 group">
            <Button
              size="xl"
              inverse
              className="flex items-center gap-2 uppercase text-white hover:text-black overflow-hidden"
            >
              Currículo
              <DownloadIcon className="size-6" />
            </Button>
          </MagneticWrapper>

          {/* Redes sociais */}
          <div id="social-links" className="hidden md:flex gap-2">
            <MagneticWrapper>
              <Link
                href="https://linkedin.com/in/abner-j-silva"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  inverse
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
                href="https://github.com/abnerjs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="flex items-center gap-2 uppercase text-white hover:text-white w-16"
                  inverse
                  overlayClassName="bg-[#24292e]"
                  size="icon-lg"
                >
                  <Icon icon="mynaui:github-solid" className="size-6" />
                </Button>
              </Link>
            </MagneticWrapper>
            <MagneticWrapper>
              <Link
                href="https://wa.me/5518997261645"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="flex items-center gap-2 uppercase text-white hover:text-white w-16"
                  inverse
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

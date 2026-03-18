import { Icon } from "@iconify/react";
import { Download } from "lucide-react";
import Link from "next/link";
import { Fullname } from "@/components/svg/fullname";
import { Me } from "@/components/svg/me";
import { DotPattern } from "@/components/ui/bg/dot-pattern";
import { Button } from "@/components/ui/button";
import MagneticWrapper from "@/components/ui/magnetic-wrapper";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh w-full flex-col items-center overflow-hidden bg-zinc-900 text-zinc-50"
    >
      {/* Nome e meu rosto */}
      <DotPattern followMouse />
      <div className="pt-16 sm:pt-8 md:pt-16 flex flex-col w-full items-center">
        <span className="text-xl font-black text-zinc-200 z-10">
          Vamos trabalhar juntos?
        </span>
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex items-center justify-center max-md:scale-75">
          <Fullname className="absolute -translate-x-2 md:-translate-x-4 w-md md:w-xl" />
          <Me className="absolute size-32 md:size-40" />
        </div>
      </div>

      <div className="flex absolute w-full px-4 sm:px-8 md:px-16 transition-all bottom-20 items-center justify-between">
        {/* Nav */}
        <div id="#nav-hero" className="flex gap-2">
          <MagneticWrapper>
            <Link href="#about">
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
        <MagneticWrapper className="absolute left-1/2 -translate-x-1/2">
          <Button
            size="xl"
            inverse
            className="flex items-center gap-2 uppercase"
          >
            Currículo
            <Download className="size-5" />
          </Button>
        </MagneticWrapper>

        {/* Redes sociais */}
        <div id="social-links" className="flex gap-2">
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
    </section>
  );
}

import { Icon } from "@iconify/react";
import { Download } from "lucide-react";
import Link from "next/link";
import { Fullname } from "@/components/svg/fullname";
import { Me } from "@/components/svg/me";
import { Button } from "@/components/ui/button";
import MagneticWrapper from "@/components/ui/magnetic-wrapper";
import { DotPattern } from "../../components/ui/dot-pattern";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans dark:bg-black">
      <main className="flex flex-col w-full">
        {/* Hero */}
        <section
          id="hero"
          className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-zinc-200 text-zinc-950"
        >
          {/* Nome e meu rosto */}
          <DotPattern followMouse />
          <div className="pt-16 sm:pt-8 md:pt-16 flex flex-col w-full items-center">
            <span className="text-xl">Vamos trabalhar juntos?</span>
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex items-center justify-center max-md:scale-75">
              <Fullname className="absolute -translate-x-2 text-black md:-translate-x-4 w-md md:w-xl" />
              <Me className="absolute size-32 md:size-40" />
            </div>
          </div>

          <div className="flex absolute w-full px-4 sm:px-8 md:px-16 transition-all bottom-20 items-center justify-between">
            {/* Nav */}
            <div id="#nav-hero" className="flex gap-2">
              <MagneticWrapper>
                <Link href="#">
                  <Button
                    className="flex items-center gap-2 uppercase font-semibold xl:tracking-widest text-black"
                    variant="ghost"
                    overlayClassName="bg-black/10"
                    size="lg"
                  >
                    Home
                  </Button>
                </Link>
              </MagneticWrapper>
              <MagneticWrapper>
                <Link href="/works">
                  <Button
                    className="flex items-center gap-2 uppercase font-semibold xl:tracking-widest text-black"
                    variant="ghost"
                    overlayClassName="bg-black/10"
                    size="lg"
                  >
                    Trabalhos
                  </Button>
                </Link>
              </MagneticWrapper>
              <MagneticWrapper>
                <Link href="/contact">
                  <Button
                    className="flex items-center gap-2 uppercase font-semibold xl:tracking-widest text-black"
                    variant="ghost"
                    overlayClassName="bg-black/10"
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

        {/* Sobre mim */}
        <section id="sobre-mim" className="py-20">
          <p>Olá, eu sou o Abner!</p>
        </section>
      </main>
    </div>
  );
}

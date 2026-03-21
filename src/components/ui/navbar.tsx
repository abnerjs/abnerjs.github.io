import Link from "next/link";
import { AbnerJSilva } from "@/components/svg/abnerjsilva";
import { Button } from "@/components/ui/button";
import MagneticWrapper from "@/components/ui/magnetic-wrapper";

type NavbarProps = {
  theme?: "light" | "dark";
};

export function Navbar({ theme = "light" }: NavbarProps) {
  const isDark = theme === "dark";
  const btnClass = `flex max-md:px-2 items-center gap-2 uppercase font-semibold xl:tracking-widest ${
    isDark ? "text-white hover:text-white" : "text-zinc-950"
  }`;
  const overlayClass = isDark ? "bg-white/10" : "bg-black/10";

  return (
    <nav className="flex relative items-center md:pt-4">
      <div id="#nav-hero" className="flex md:gap-2 h-max">
        <MagneticWrapper>
          <Link href="/">
            <Button
              className={btnClass}
              variant="ghost"
              overlayClassName={overlayClass}
              size="lg"
            >
              Início
            </Button>
          </Link>
        </MagneticWrapper>
        <MagneticWrapper>
          <Link href="/projects">
            <Button
              className={btnClass}
              variant="ghost"
              overlayClassName={overlayClass}
              size="lg"
            >
              Projetos
            </Button>
          </Link>
        </MagneticWrapper>
        <MagneticWrapper>
          <Link href="/contact">
            <Button
              className={btnClass}
              variant="ghost"
              overlayClassName={overlayClass}
              size="lg"
            >
              Contato
            </Button>
          </Link>
        </MagneticWrapper>
      </div>

      <Link
        href="/"
        className="hidden md:block h-10 mt-2 absolute left-1/2 -translate-x-1/2 z-0"
      >
        <AbnerJSilva className="h-full" />
      </Link>
    </nav>
  );
}

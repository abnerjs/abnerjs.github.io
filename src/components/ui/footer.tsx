import dayjs from "dayjs";
import { Rubrik } from "../svg/rubrik";
import { Button } from "./button";
import MagneticWrapper from "./magnetic-wrapper";
import { Separator } from "./separator";

export function Footer() {
  return (
    <footer className="flex flex-col justify-end h-[calc(100lvh-40px)] bg-zinc-800 text-zinc-50 font-light gap-8">
      <div className="flex flex-col gap-12 px-8 sm:px-16 md:px-32 lg:px-64">
        <h2 className="text-6xl">Entre em contato!</h2>

        {/* contact me */}
        <div className="flex flex-col">
          <MagneticWrapper className="absolute -translate-1/2 self-end size-40">
            <Button
              className="text-white text-base size-40"
              overlayClassName="bg-purple-600"
            >
              Contate-me
            </Button>
          </MagneticWrapper>

          <Separator className="w-full h-px bg-zinc-700" />
        </div>

        {/* buttons */}
        <div className="flex gap-8">
          <MagneticWrapper>
            <Button
              variant="outline"
              size="xl"
              className="text-zinc-200 hover:text-zinc-800 uppercase tracking-wide"
            >
              abner.js05@gmail.com
            </Button>
          </MagneticWrapper>
          <MagneticWrapper>
            <Button
              variant="outline"
              size="xl"
              className="text-zinc-200 hover:text-zinc-800 uppercase tracking-wide"
            >
              +55 (18) 99736-1645
            </Button>
          </MagneticWrapper>
        </div>
      </div>

      {/* last */}
      <div className="flex items-center justify-between p-8">
        <p className="flex items-center gap-2">
          <span className="font-bold">{dayjs().year()}</span>{" "}
          <span className="text-2xl">&copy;</span>{" "}
          <span className="font-bold">Abner J. Silva</span>
        </p>
        <Rubrik className="size-12 text-zinc-700 hover:text-zinc-500 absolute left-1/2 -translate-x-1/2 transition-all duration-300" />
        <div className="flex flex-col">
          <span className="font-bold text-sm text-zinc-500 px-4">
            Redes sociais
          </span>
          <div className="flex items-center gap-2">
            <Button variant="link" className="text-white">
              LinkedIn
            </Button>
            <Button variant="link" className="text-white">
              GitHub
            </Button>
            <Button variant="link" className="text-white">
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

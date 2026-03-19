import dayjs from "dayjs";
import { Rubrik } from "../svg/rubrik";
import { Button } from "./button";

export function Footer() {
  return (
    <footer className="flex flex-col h-[calc(100lvh-40px)] bg-zinc-800 text-zinc-50 font-light">
      <div className="mt-auto flex items-center justify-between p-8">
        <p className="">{dayjs().year()} &copy; by Abner J. Silva</p>
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

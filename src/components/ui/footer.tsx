import { Icon } from "@iconify/react";
import dayjs from "dayjs";
import Link from "next/link";
import { Me } from "../svg/me";
import { MeClosedEyes } from "../svg/me-closed-eyes";
import { MeSmile } from "../svg/me-smile";
import { Rubrik } from "../svg/rubrik";
import { Button } from "./button";
import MagneticWrapper from "./magnetic-wrapper";
import { Separator } from "./separator";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-950 ">
      <div className="rounded-b-4xl bg-white h-10 w-full"></div>

      {/* content */}
      <div className="flex flex-col font-light gap-8 px-4 sm:px-8 md:px-16 transition-all">
        <div className="py-20 px-20 flex justify-between">
          <h2 className="text-4xl font-bold text-white">
            Siga-me
            <br />
            nas redes sociais
          </h2>
          <div className="flex">
            <div className="group relative bg-white mt-20 size-32 rounded-full cursor-pointer">
              <div className="absolute z-20 group-hover:translate-x-6 group-hover:translate-y-3 transition-all duration-100 ease-in size-32 bg-purple-600 rounded-full flex items-center justify-center">
                <Icon
                  icon="line-md:instagram"
                  className="size-16 text-white group-hover:rotate-12 transition-all duration-100 ease-in"
                />
              </div>
              <Me className="absolute size-20 z-10 top-0 group-hover:-translate-x-8 group-hover:-rotate-12 transition-all duration-200" />
            </div>

            <div className="group relative bg-zinc-600 size-32 rounded-full cursor-pointer">
              <MeClosedEyes className="absolute size-20 z-10 top-0 group-hover:-translate-x-8 group-hover:-rotate-12 transition-all duration-200" />
              <div className="absolute z-20 group-hover:translate-x-6 group-hover:translate-y-3 transition-all duration-100 ease-in size-32 bg-emerald-600 rounded-full flex items-center justify-center">
                <Icon
                  icon="codicon:twitter"
                  className="size-16 text-white group-hover:rotate-12 transition-all duration-100 ease-in"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Trabalhar juntos */}
        <div className="flex flex-col bg-primary p-8 pt-12 rounded-t-4xl">
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
                <Button
                  className="text-zinc-50 bg-zinc-950 text-base size-40"
                  overlayClassName="bg-purple-700"
                >
                  Contate-me
                </Button>
              </MagneticWrapper>

              <Separator className="w-full h-px bg-zinc-700/20" />
            </div>

            {/* buttons */}
            <div className="flex gap-12 w-full">
              <Rubrik className="size-40" />
              <div className="flex flex-col w-full">
                <div className="flex items-start justify-between pt-8">
                  <div className="flex flex-1 flex-col gap-4 justify-between h-full">
                    <ul>
                      <li>
                        <Button
                          variant="link"
                          className="text-black font-['lexend'] p-0 h-max"
                        >
                          Voltar ao topo
                        </Button>
                      </li>
                      <li>
                        <Button
                          variant="link"
                          className="text-black font-['lexend'] p-0 h-max"
                        >
                          Projetos
                        </Button>
                      </li>
                      <li>
                        <Button
                          variant="link"
                          className="text-black font-['lexend'] p-0 h-max"
                        >
                          Contato
                        </Button>
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
                    <span className="text-zinc-800 select-none font-medium text-sm">
                      Outras redes
                    </span>
                    <div className="flex gap-2">
                      <MagneticWrapper>
                        <Link
                          href="https://linkedin.com/in/abner-j-silva"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            inverse
                            className="flex items-center gap-2 uppercase text-white hover:text-white w-10"
                            overlayClassName="bg-[#0a66c2]"
                            size="icon-sm"
                          >
                            <Icon
                              icon="basil:linkedin-solid"
                              className="size-4"
                            />
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
                            className="flex items-center gap-2 uppercase text-white hover:text-white w-10"
                            inverse
                            overlayClassName="bg-[#24292e]"
                            size="icon-sm"
                          >
                            <Icon
                              icon="mynaui:github-solid"
                              className="size-4"
                            />
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
                            className="flex items-center gap-2 uppercase text-white hover:text-white w-10"
                            inverse
                            overlayClassName="bg-[#25D366]"
                            size="icon-sm"
                          >
                            <Icon icon="ri:whatsapp-fill" className="size-4" />
                          </Button>
                        </Link>
                      </MagneticWrapper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

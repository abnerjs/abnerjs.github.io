"use client";

import { Icon } from "@iconify/react";
import { useAnimate } from "motion/react";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { DrawerFooter } from "@/components/ui/drawer";
import MagneticWrapper from "@/components/ui/magnetic-wrapper";

const MENU_ITEMS = [
  { label: "Início", ariaLabel: "Ir para Home", link: "/" },
  { label: "Sobre", ariaLabel: "Ir para Sobre", link: "#about" },
  { label: "Projetos", ariaLabel: "Ir para Projetos", link: "/projects" },
  { label: "Contato", ariaLabel: "Ir para Contato", link: "/contact" },
];

interface DrawerContentProps {
  setClose: () => void;
}

export const DrawerContent = ({ setClose }: DrawerContentProps) => {
  const itemRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [, animate] = useAnimate();

  useLayoutEffect(() => {
    const itemEls = itemRefs.current.filter((el): el is HTMLSpanElement =>
      Boolean(el),
    );
    const numberEls = numberRefs.current.filter((el): el is HTMLSpanElement =>
      Boolean(el),
    );

    if (!itemEls.length) return;

    for (const el of itemEls) {
      el.style.transform = "translateY(140%) rotate(10deg)";
    }

    for (const el of numberEls) {
      el.style.opacity = "0";
    }

    const itemControls = animate(
      itemEls,
      { y: "0%", rotate: 0 },
      {
        duration: 1,
        delay: (index) => 0.4 + index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    );

    const numberControls = animate(
      numberEls,
      { opacity: 1 },
      {
        duration: 0.6,
        delay: (index) => 0.7 + index * 0.08,
        ease: [0.33, 1, 0.68, 1],
      },
    );

    return () => {
      itemControls.stop();
      numberControls.stop();
    };
  }, [animate]);

  return (
    <>
      <nav className="px-6 pb-8" aria-label="Navegação principal do drawer">
        <ul className="list-none m-0 p-0 flex flex-col gap-2">
          {MENU_ITEMS.map((item, idx) => (
            <li
              className="relative overflow-hidden leading-none"
              key={item.label}
            >
              <Link
                className="relative flex items-start cursor-pointer pr-[1.4em] text-[clamp(2.2rem,8vw,4rem)] font-semibold leading-none tracking-[-2px] text-black uppercase no-underline transition-colors duration-150 ease-linear hover:text-primary"
                href={item.link}
                aria-label={item.ariaLabel}
                onClick={setClose}
              >
                <span
                  ref={(el) => {
                    itemRefs.current[idx] = el;
                  }}
                  className="flex origin-[50%_100%] will-change-transform"
                >
                  {item.label}
                </span>
                <span
                  ref={(el) => {
                    numberRefs.current[idx] = el;
                  }}
                  aria-hidden="true"
                  className="pointer-events-none translate-y-2 select-none text-[18px] font-normal tracking-normal text-blue-700"
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <DrawerFooter>
        <div className="flex flex-col w-full items-end gap-1">
          <span className="text-zinc-400 select-none font-medium text-sm">
            Redes sociais
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
                  <Icon icon="basil:linkedin-solid" className="size-4" />
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
                  <Icon icon="mynaui:github-solid" className="size-4" />
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
      </DrawerFooter>
    </>
  );
};

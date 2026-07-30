"use client";

import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathRef = useRef<SVGPathElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    // Animação de Entrada: quando a página carrega, tira o "pano" (swipe para cima)
    if (pathRef.current) {
      // Começamos do topo totalmente coberto e esvaziamos para cima
      gsap.set(pathRef.current, {
        attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
      });

      const tl = gsap.timeline();

      tl.fromTo(
        pathRef.current,
        { attr: { d: "M 0 0 V 100 Q 50 100 100 100 V 0 z" } }, // Tela inteira preenchida
        {
          attr: { d: "M 0 0 V 0 Q 50 0 100 0 V 0 z" },
          ease: "power4.inOut",
          duration: 0.8,
        }, // Sobe e some
      );
    }
  }, [pathname]);

  return (
    <>
      {/* Camada de transição SVG */}
      <div className="pointer-events-none fixed inset-0 z-9999 flex items-center justify-center overflow-hidden">
        {/** biome-ignore lint/a11y/noSvgWithoutTitle: decorative */}
        <svg
          className="absolute inset-0 h-full w-full fill-orange-500"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="0" y2="100">
              <stop offset="0.2" stopColor="rgb(255, 135, 9)" />
              <stop offset="0.7" stopColor="rgb(247, 189, 248)" />
            </linearGradient>
          </defs>
          <path
            ref={pathRef}
            vectorEffect="non-scaling-stroke"
            fill="url(#grad)"
            d="M 0 100 V 0 Q 50 0 100 0 V 100 z"
          />
        </svg>
      </div>

      {children}
    </>
  );
}

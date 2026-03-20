/** biome-ignore-all lint/suspicious/noArrayIndexKey: do not will be chenged */
"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function SplitTitle({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Animação manual tipo SplitText por não termos o plugin pago instalado
    const chars = containerRef.current.querySelectorAll(".char");

    gsap.fromTo(
      chars,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 0.5, // Delay para rodar após a transição da página
      },
    );
  }, []);

  return (
    <h1
      ref={containerRef}
      className={`overflow-hidden flex flex-wrap gap-[0.15em] ${className || ""}`}
    >
      {text.split(" ").map((word, wIdx) => (
        <span key={wIdx} className="inline-flex overflow-hidden">
          {word.split("").map((char, cIdx) => (
            <span
              key={cIdx}
              className="char inline-block translate-y-12.5 opacity-0"
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}

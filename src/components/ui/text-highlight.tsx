"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface TextHighlightProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: ElementType;
}

export function TextHighlight({
  children,
  className,
  as: Component = "span",
  ...props
}: TextHighlightProps) {
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    gsap.registerPlugin(ScrollTrigger, SplitText);

    if (!textRef.current) {
      return;
    }

    let splitInstance: SplitText | null = null;
    let isUnmounted = false;

    const createAnimation = () => {
      if (isUnmounted || !textRef.current) {
        return;
      }

      splitInstance = SplitText.create(textRef.current, {
        type: "lines",
        autoSplit: true,
        aria: "none",
        onSplit: (instance) => {
          gsap.set(instance.lines, {
            maskImage:
              "linear-gradient(to right, black 50%, rgba(0, 0, 0, 0.2) 50%)",
            WebkitMaskImage:
              "linear-gradient(to right, black 50%, rgba(0, 0, 0, 0.2) 50%)",
            maskSize: "200% 100%",
            WebkitMaskSize: "200% 100%",
            maskPosition: "100% 0%",
            WebkitMaskPosition: "100% 0%",
          });

          for (const target of instance.lines) {
            gsap.to(target, {
              maskPosition: "0% 0%",
              WebkitMaskPosition: "0% 0%",
              ease: "none",
              scrollTrigger: {
                trigger: target,
                scrub: 0.5,
                start: "top bottom",
                end: "bottom center",
              },
            });
          }
        },
      });

      ScrollTrigger.refresh();
    };

    if (document.fonts?.ready) {
      document.fonts.ready.then(createAnimation);
    } else {
      createAnimation();
    }

    return () => {
      isUnmounted = true;
      if (splitInstance) {
        splitInstance.revert();
      }
    };
  }, []);

  return (
    <Component
      ref={textRef}
      className={cn("inline-block", className)}
      {...props}
    >
      {children}
    </Component>
  );
}

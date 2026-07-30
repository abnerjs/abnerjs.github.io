"use client";

import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import gsap from "gsap";
import * as React from "react";

import { cn } from "@/lib/utils";
import { useCursor } from "./cursor-provider";

const overlayVariants = cva(
  "pointer-events-none absolute left-0 top-0 block aspect-square w-[170%] -translate-x-1/2 -translate-y-1/2 rounded-full",
  {
    variants: {
      variant: {
        default: "bg-zinc-950 dark:bg-white",
        outline: "bg-zinc-300 dark:bg-zinc-600",
        destructive: "bg-destructive",
        secondary: "bg-secondary-foreground",
        ghost: "bg-accent",
        link: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 transition-colors",
  {
    variants: {
      variant: {
        default:
          "relative bg-primary text-primary-foreground dark:hover:text-black dark:focus-visible:text-black dark:active:text-black overflow-hidden rounded-full! px-6 py-3.5 tracking-tight after:absolute after:inset-0 after:rounded-full after:pointer-events-none after:content-[''] ",
        outline:
          "relative overflow-hidden rounded-full bg-transparent text-foreground px-6 py-3.5 tracking-tight after:absolute after:inset-0 after:rounded-full after:border-1 after:border-zinc-300 dark:after:border-zinc-600 after:pointer-events-none after:content-[''] ",
        destructive:
          "relative bg-destructive/10 dark:bg-destructive/20 text-destructive hover:text-background focus-visible:text-background active:text-background overflow-hidden rounded-full! px-6 py-3.5 tracking-tight",
        secondary:
          "relative bg-secondary text-secondary-foreground hover:text-background focus-visible:text-background active:text-background overflow-hidden rounded-full! px-6 py-3.5 tracking-tight",
        ghost:
          "relative bg-transparent! text-foreground hover:text-accent-foreground focus-visible:text-accent-foreground active:text-accent-foreground overflow-hidden rounded-full! px-6 py-3.5 tracking-tight",
        link: "relative text-primary",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-full px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 rounded-full gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-full px-6 has-[>svg]:px-4",
        xl: "h-18 rounded-full px-12 has-[>svg]:px-6",
        icon: "size-9 p-0",
        "icon-xs":
          "size-6 rounded-full p-0 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 p-0",
        "icon-lg": "size-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  children,
  inverse = false,
  overlayClassName,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    inverse?: boolean;
    overlayClassName?: string;
  }) {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const flairRef = React.useRef<HTMLSpanElement>(null);
  const underlineRef = React.useRef<HTMLSpanElement>(null);
  const { setCursor, setDefaultCursor } = useCursor();

  React.useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;
    const buttonEl = button;
    const targetEl = (buttonEl.closest("a") as HTMLElement) || buttonEl;

    // Skip hover animation setup on devices that do not support hover or are touch devices.
    if (typeof window !== "undefined") {
      const isTouchDescendant = window.matchMedia("(pointer: coarse)").matches;
      const isHoverNone = window.matchMedia("(hover: none)").matches;
      if (isTouchDescendant || isHoverNone) return;
    }

    if (variant === "link") {
      const underline = underlineRef.current;
      if (!underline) return;

      const getXPercent = (e: MouseEvent) => {
        const { left, width } = targetEl.getBoundingClientRect();
        return gsap.utils.clamp(0, 100, ((e.clientX - left) / width) * 100);
      };

      const handleEnter = (e: MouseEvent) => {
        const xPercent = getXPercent(e);
        gsap.killTweensOf(underline);
        gsap.fromTo(
          underline,
          { scaleX: 0, transformOrigin: `${xPercent}% center` },
          { scaleX: 1, duration: 0.3, ease: "power2.out" },
        );
      };

      const handleLeave = (e: MouseEvent) => {
        const xPercent = getXPercent(e);
        gsap.killTweensOf(underline);
        gsap.to(underline, {
          scaleX: 0,
          transformOrigin: `${xPercent}% center`,
          duration: 0.25,
          ease: "power2.in",
        });
      };

      const handleFocus = () => {
        gsap.killTweensOf(underline);
        gsap.fromTo(
          underline,
          { scaleX: 0, transformOrigin: "50% center" },
          { scaleX: 1, duration: 0.3, ease: "power2.out" },
        );
      };

      const handleBlur = () => {
        gsap.killTweensOf(underline);
        gsap.to(underline, {
          scaleX: 0,
          transformOrigin: "50% center",
          duration: 0.25,
          ease: "power2.in",
        });
      };

      targetEl.addEventListener("mouseenter", handleEnter);
      targetEl.addEventListener("mouseleave", handleLeave);
      targetEl.addEventListener("focusin", handleFocus);
      targetEl.addEventListener("focusout", handleBlur);

      return () => {
        targetEl.removeEventListener("mouseenter", handleEnter);
        targetEl.removeEventListener("mouseleave", handleLeave);
        targetEl.removeEventListener("focusin", handleFocus);
        targetEl.removeEventListener("focusout", handleBlur);
        gsap.killTweensOf(underline);
      };
    }

    const flair = flairRef.current;
    if (!flair) return;

    const xSet = gsap.quickSetter(flair, "xPercent");
    const ySet = gsap.quickSetter(flair, "yPercent");
    let xTo: ((value: number) => void) | null = null;
    let yTo: ((value: number) => void) | null = null;

    let rect: DOMRect | null = null;
    const clampPercent = gsap.utils.clamp(0, 100);

    function updateRect() {
      rect = targetEl.getBoundingClientRect();
    }

    function getXYFromClient(clientX: number, clientY: number) {
      if (!rect) updateRect();
      const width = rect?.width || 1;
      const height = rect?.height || 1;
      const left = rect?.left || 0;
      const top = rect?.top || 0;

      return {
        x: clampPercent(((clientX - left) / width) * 100),
        y: clampPercent(((clientY - top) / height) * 100),
      };
    }

    let nextClientX = 0;
    let nextClientY = 0;
    let rafId: number | null = null;

    function flushPointerFrame() {
      const next = getXYFromClient(nextClientX, nextClientY);
      xTo?.(next.x);
      yTo?.(next.y);
      rafId = null;
    }

    function getXY(e: MouseEvent) {
      return getXYFromClient(e.clientX, e.clientY);
    }

    function onMouseEnter(e: MouseEvent) {
      updateRect();
      xTo = gsap.quickTo(flair, "xPercent", {
        duration: 0.18,
        ease: "power1.out",
      });
      yTo = gsap.quickTo(flair, "yPercent", {
        duration: 0.18,
        ease: "power1.out",
      });

      const pos = getXY(e);
      if (!pos) return;
      const { x, y } = pos;
      xSet(x);
      ySet(y);

      gsap.to(flair, {
        scale: 1,
        duration: 0.28,
        ease: "power1.out",
      });
    }

    function onMouseLeave(e: MouseEvent) {
      const pos = getXY(e);
      if (!pos) return;
      const { x, y } = pos;

      gsap.killTweensOf(flair);
      xTo = null;
      yTo = null;

      gsap.to(flair, {
        xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
        yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
        scale: 0,
        duration: 0.22,
        ease: "power1.out",
      });
    }

    function onMouseMove(e: MouseEvent) {
      nextClientX = e.clientX;
      nextClientY = e.clientY;

      if (rafId === null) {
        rafId = window.requestAnimationFrame(flushPointerFrame);
      }
    }

    function onFocus() {
      gsap.killTweensOf(flair);
      xTo = null;
      yTo = null;
      xSet(50);
      ySet(50);

      gsap.to(flair, {
        scale: 1,
        duration: 0.28,
        ease: "power1.out",
      });
    }

    function onBlur() {
      gsap.killTweensOf(flair);
      xTo = null;
      yTo = null;

      gsap.to(flair, {
        scale: 0,
        duration: 0.22,
        ease: "power1.out",
      });
    }

    targetEl.addEventListener("mouseenter", onMouseEnter);
    targetEl.addEventListener("mouseleave", onMouseLeave);
    targetEl.addEventListener("mousemove", onMouseMove, { passive: true });
    targetEl.addEventListener("focusin", onFocus);
    targetEl.addEventListener("focusout", onBlur);
    window.addEventListener("resize", updateRect);
    window.addEventListener("scroll", updateRect, true);

    return () => {
      targetEl.removeEventListener("mouseenter", onMouseEnter);
      targetEl.removeEventListener("mouseleave", onMouseLeave);
      targetEl.removeEventListener("mousemove", onMouseMove);
      targetEl.removeEventListener("focusin", onFocus);
      targetEl.removeEventListener("focusout", onBlur);
      window.removeEventListener("resize", updateRect);
      window.removeEventListener("scroll", updateRect, true);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      gsap.killTweensOf(flair);
    };
  }, [variant]);

  const inverseStyles = React.useMemo(() => {
    if (!inverse || variant === "link") {
      return { button: "", overlay: "" };
    }

    switch (variant) {
      case "default":
        return {
          button: "bg-zinc-950 dark:bg-white",
          overlay: "bg-primary",
        };
      case "outline":
        return {
          button: "bg-zinc-300 dark:bg-zinc-600",
          overlay: "bg-transparent",
        };
      case "destructive":
        return {
          button: "bg-destructive",
          overlay: "bg-destructive/10 dark:bg-destructive/20",
        };
      case "secondary":
        return {
          button: "bg-secondary-foreground",
          overlay: "bg-secondary",
        };
      case "ghost":
        return {
          button: "bg-muted",
          overlay: "bg-transparent",
        };
      default:
        return { button: "", overlay: "" };
    }
  }, [inverse, variant]);

  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={buttonRef}
      data-slot="button"
      data-variant={variant}
      data-size={size}
      onMouseEnter={() => {
        setCursor(null, "hidden");
      }}
      onMouseLeave={() => setDefaultCursor()}
      className={cn(
        buttonVariants({ variant, size }),
        inverseStyles.button,
        className,
      )}
      {...props}
    >
      {variant !== "link" && (
        <span
          ref={flairRef}
          className="pointer-events-none absolute inset-0 origin-top-left scale-0 will-change-transform"
        >
          <span
            className={cn(
              overlayVariants({ variant }),
              inverseStyles.overlay,
              overlayClassName,
            )}
          />
        </span>
      )}
      <Slottable>
        <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">
          {children}
          {variant === "link" && (
            <span
              ref={underlineRef}
              className="absolute bottom-0 left-0 h-[1.5px] w-full scale-x-0 bg-current"
            />
          )}
        </span>
      </Slottable>
    </Comp>
  );
}

export { Button, buttonVariants };

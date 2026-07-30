"use client";

import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import gsap from "gsap";
import * as React from "react";

import { cn } from "@/lib/utils";
import { useCursor } from "./cursor-provider";
import { usePathname } from "next/navigation";

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
  "cursor-pointer isolate inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 transition-colors",
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
        // ghost: NO text-color changes on hover/focus — overlay handles the visual feedback
        ghost:
          "relative bg-transparent! text-foreground overflow-hidden rounded-full! px-6 py-3.5 tracking-tight",
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
  // Generic ref — points to the actual DOM element whether it's <button> or <a>
  const elRef = React.useRef<HTMLElement>(null);
  const flairRef = React.useRef<HTMLSpanElement>(null);
  const underlineRef = React.useRef<HTMLSpanElement>(null);
  const { setCursor, setDefaultCursor } = useCursor();
  const pathname = usePathname();

  React.useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    // Skip on touch / coarse-pointer devices
    if (typeof window !== "undefined") {
      const isTouchDescendant = window.matchMedia("(pointer: coarse)").matches;
      const isHoverNone = window.matchMedia("(hover: none)").matches;
      if (isTouchDescendant || isHoverNone) return;
    }

    // ── Link variant: animated underline ──────────────────────────────────────
    if (variant === "link") {
      const underline = underlineRef.current;
      if (!underline) return;

      const getXPercent = (e: MouseEvent) => {
        const { left, width } = el.getBoundingClientRect();
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

      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
      el.addEventListener("focusin", handleFocus);
      el.addEventListener("focusout", handleBlur);

      return () => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
        el.removeEventListener("focusin", handleFocus);
        el.removeEventListener("focusout", handleBlur);
        gsap.killTweensOf(underline);
      };
    }

    // ── All other variants: animated flair overlay ────────────────────────────
    const flair = flairRef.current;
    if (!flair) return;

    const xSet = gsap.quickSetter(flair, "xPercent");
    const ySet = gsap.quickSetter(flair, "yPercent");
    let xTo: ((value: number) => void) | null = null;
    let yTo: ((value: number) => void) | null = null;

    let rect: DOMRect | null = null;
    const clampPercent = gsap.utils.clamp(0, 100);

    function updateRect() {
      rect = el!.getBoundingClientRect();
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

    el.addEventListener("mouseenter", onMouseEnter);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("mousemove", onMouseMove, { passive: true });
    el.addEventListener("focusin", onFocus);
    el.addEventListener("focusout", onBlur);
    window.addEventListener("resize", updateRect);
    window.addEventListener("scroll", updateRect, true);

    // After navigating (pathname changed), the effect re-runs but mouseenter
    // won't fire because the cursor never left. Detect this and show the flair.
    if (el.matches(":hover")) {
      updateRect();
      // Try to get the real cursor position from a one-shot pointermove,
      // otherwise fall back to showing the flair centred.
      const syncOnce = (e: PointerEvent) => {
        window.removeEventListener("pointermove", syncOnce);
        const { x, y } = getXYFromClient(e.clientX, e.clientY);
        xSet(x);
        ySet(y);
        gsap.to(flair, { scale: 1, duration: 0.28, ease: "power1.out" });
      };
      window.addEventListener("pointermove", syncOnce, { passive: true });
      // Safety fallback: if the pointer doesn't move within 200ms, show centred
      const fallbackId = setTimeout(() => {
        window.removeEventListener("pointermove", syncOnce);
        if (el.matches(":hover")) {
          xSet(50);
          ySet(50);
          gsap.to(flair, { scale: 1, duration: 0.28, ease: "power1.out" });
        }
      }, 200);
      // Clear the fallback if syncOnce fires first
      const syncOnceClear = (e: PointerEvent) => {
        clearTimeout(fallbackId);
        window.removeEventListener("pointermove", syncOnceClear);
      };
      window.addEventListener("pointermove", syncOnceClear, {
        passive: true,
        once: true,
      });
    }

    return () => {
      el.removeEventListener("mouseenter", onMouseEnter);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("focusin", onFocus);
      el.removeEventListener("focusout", onBlur);
      window.removeEventListener("resize", updateRect);
      window.removeEventListener("scroll", updateRect, true);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      gsap.killTweensOf(flair);
      gsap.set(flair, { scale: 0, clearProps: "xPercent,yPercent" });
    };
  }, [variant, pathname]);

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

  const sharedClassName = cn(
    buttonVariants({ variant, size }),
    inverseStyles.button,
    className,
  );

  const sharedHandlers = {
    onMouseEnter: () => setCursor(null, "hidden"),
    onMouseLeave: () => setDefaultCursor(),
  };

  const overlayEl =
    variant !== "link" ? (
      <span
        ref={flairRef}
        className="pointer-events-none absolute inset-0 z-0 origin-top-left scale-0 will-change-transform"
      >
        <span
          className={cn(
            overlayVariants({ variant }),
            inverseStyles.overlay,
            overlayClassName,
          )}
        />
      </span>
    ) : null;

  const underlineEl =
    variant === "link" ? (
      <span
        ref={underlineRef}
        className="absolute bottom-0 left-0 h-[1.5px] w-full scale-x-0 bg-current z-20 pointer-events-none"
      />
    ) : null;

  if (asChild) {
    return (
      <Slot
        ref={elRef as React.Ref<HTMLButtonElement>}
        data-slot="button"
        data-variant={variant}
        data-size={size}
        className={sharedClassName}
        {...sharedHandlers}
        {...props}
      >
        {overlayEl}
        <Slottable>{children}</Slottable>
        {underlineEl}
      </Slot>
    );
  }

  return (
    <button
      ref={elRef as React.Ref<HTMLButtonElement>}
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={sharedClassName}
      {...sharedHandlers}
      {...(props as React.ComponentProps<"button">)}
    >
      {overlayEl}
      <span className="relative z-10 inline-flex items-center justify-center gap-2 whitespace-nowrap">
        {children}
      </span>
      {underlineEl}
    </button>
  );
}

export { Button, buttonVariants };

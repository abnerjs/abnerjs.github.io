"use client";

import { useAnimationFrame } from "motion/react";
import {
  Children,
  isValidElement,
  type ReactNode,
  type RefObject,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

type MarqueeProps = {
  className?: string;
  children?: ReactNode;
  direction?: "left" | "right";
  itemClassName?: string;
  numCopies?: number;
  paddingRight?: number;
  railClassName?: string;
  scrollContainerRef?: RefObject<HTMLElement | null>;
  speed?: number;
};

function wrap(min: number, max: number, value: number) {
  const range = max - min;
  const mod = (((value - min) % range) + range) % range;
  return mod + min;
}

function useElementWidth<T extends HTMLElement>(ref: RefObject<T | null>) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const updateWidth = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(ref.current);
    window.addEventListener("resize", updateWidth);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateWidth);
    };
  }, [ref]);

  return width;
}

export function Marquee({
  className,
  children,
  direction = "left",
  itemClassName,
  numCopies = 6,
  paddingRight = 30,
  railClassName,
  scrollContainerRef,
  speed = 1,
}: MarqueeProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  const baseItems = useMemo(() => {
    const content = Children.toArray(children);

    if (
      content.length === 1 &&
      isValidElement<{ children?: ReactNode }>(content[0])
    ) {
      const nested = Children.toArray(content[0].props.children);
      if (nested.length > 0) {
        return nested;
      }
    }

    if (content.length > 0) {
      return content;
    }

    return [
      "Animate Anything...",
      "Delivering silky-smooth performance",
      "so you can focus on the fun stuff.",
    ];
  }, [children]);

  const itemEntries = useMemo(() => {
    const occurrenceMap = new Map<string, number>();

    return baseItems.map((item) => {
      const reactKey = isValidElement(item) ? item.key : null;
      const baseKey =
        reactKey != null
          ? String(reactKey)
          : typeof item === "string"
            ? item
            : typeof item === "number"
              ? String(item)
              : "react-node";

      const occurrence = occurrenceMap.get(baseKey) ?? 0;
      occurrenceMap.set(baseKey, occurrence + 1);

      return {
        key: `${baseKey}-${occurrence}`,
        node: item,
      };
    });
  }, [baseItems]);

  const copyWidth = useElementWidth(copyRef);
  const animationStateRef = useRef({
    x: 0,
    lastScrollY: 0,
    lastScrollAt: 0,
    targetDirection: direction === "left" ? -1 : 1,
    hoverMultiplier: 1,
    currentVelocity: 0,
  });
  const mountedRef = useRef(false);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const scroller = scrollerRef.current;
    if (!root || !scroller || copyWidth <= 0) return;

    const directionFactor = direction === "left" ? -1 : 1;
    const baseVelocity = Math.max(20, speed * 100);
    const scrollSwitchThreshold = 1;

    const getScrollY = () =>
      scrollContainerRef?.current?.scrollTop ?? window.scrollY;

    const state = animationStateRef.current;
    const now = performance.now();

    state.x = wrap(-copyWidth, 0, directionFactor < 0 ? 0 : -copyWidth);
    state.lastScrollY = getScrollY();
    state.lastScrollAt = now;
    state.targetDirection = directionFactor;
    state.hoverMultiplier = 1;
    state.currentVelocity = directionFactor * baseVelocity;

    scroller.style.transform = `translate3d(${state.x}px, 0, 0)`;

    const onScroll = () => {
      const currentY = getScrollY();
      const deltaY = currentY - state.lastScrollY;

      if (deltaY < -scrollSwitchThreshold) {
        state.targetDirection = -directionFactor;
        state.lastScrollAt = performance.now();
      } else if (deltaY > scrollSwitchThreshold) {
        state.targetDirection = directionFactor;
        state.lastScrollAt = performance.now();
      }

      state.lastScrollY = currentY;
    };

    const onPointerEnter = () => {
      state.hoverMultiplier = 0;
    };

    const onPointerLeave = () => {
      state.hoverMultiplier = 1;
    };

    const scrollTarget = scrollContainerRef?.current ?? window;
    scrollTarget.addEventListener("scroll", onScroll, { passive: true });
    root.addEventListener("pointerenter", onPointerEnter);
    root.addEventListener("pointerleave", onPointerLeave);

    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
      scrollTarget.removeEventListener("scroll", onScroll);
      root.removeEventListener("pointerenter", onPointerEnter);
      root.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [copyWidth, direction, scrollContainerRef, speed]);

  useAnimationFrame((timeMs, deltaMs) => {
    const scroller = scrollerRef.current;
    if (!mountedRef.current || !scroller || copyWidth <= 0) return;

    const directionFactor = direction === "left" ? -1 : 1;
    const baseVelocity = Math.max(20, speed * 100);
    const scrollIdleTimeoutMs = 140;
    const state = animationStateRef.current;
    const deltaSeconds = deltaMs / 1000;
    const shouldReturnToBaseDirection =
      timeMs - state.lastScrollAt > scrollIdleTimeoutMs;

    if (shouldReturnToBaseDirection) {
      state.targetDirection = directionFactor;
    }

    const targetVelocity =
      state.targetDirection * baseVelocity * state.hoverMultiplier;
    const smoothing = 1 - Math.exp(-7 * deltaSeconds);
    state.currentVelocity +=
      (targetVelocity - state.currentVelocity) * smoothing;

    const moveBy = state.currentVelocity * deltaSeconds;
    state.x = wrap(-copyWidth, 0, state.x + moveBy);
    scroller.style.transform = `translate3d(${state.x}px, 0, 0)`;
  });

  const copies = Math.max(2, numCopies);

  return (
    <div
      className={cn(
        "relative flex w-full items-center overflow-hidden",
        className,
      )}
      ref={rootRef}
    >
      <div
        className="flex w-max whitespace-nowrap will-change-transform"
        ref={scrollerRef}
      >
        {Array.from({ length: copies }).map((_, copyIndex) => (
          <div
            className={cn("rail flex items-center", railClassName)}
            // biome-ignore lint/suspicious/noArrayIndexKey: static deterministic loop copies.
            key={copyIndex}
            ref={copyIndex === 0 ? copyRef : null}
          >
            {itemEntries.map((entry) => (
              <div
                className={cn("marquee-item shrink-0", itemClassName)}
                key={`${copyIndex}-${entry.key}`}
                style={{ marginRight: `${paddingRight}px` }}
              >
                {entry.node}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

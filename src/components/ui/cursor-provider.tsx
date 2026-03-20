"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

interface CursorState {
  content: ReactNode | null;
  containerClassName?: string;
}

interface CursorContextValue {
  setDefaultCursor: () => void;
  setCursor: (content: ReactNode | null, containerClassName?: string) => void;
}

const CursorContext = createContext<CursorContextValue | null>(null);

const initialCursorState: CursorState = {
  content: null,
  containerClassName: "mix-blend-difference border-2 border-white",
};

export function CursorProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<CursorState>(initialCursorState);

  const setDefaultCursor = useCallback(() => {
    setState(initialCursorState);
  }, []);

  const setCursor = useCallback(
    (content: ReactNode | null, containerClassName?: string) => {
      setState({
        content,
        containerClassName,
      });
    },
    [],
  );

  const contextValue = useMemo<CursorContextValue>(
    () => ({
      setDefaultCursor,
      setCursor,
    }),
    [setCursor, setDefaultCursor],
  );

  return (
    <CursorContext.Provider value={contextValue}>
      {children}
      <GlobalCursor
        content={state.content}
        containerClassName={state.containerClassName}
      />
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used inside CursorProvider");
  }

  return context;
}

function GlobalCursor({
  content,
  containerClassName,
}: {
  content: ReactNode | null;
  containerClassName?: string;
}) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const targetPoint = useRef({ x: 0, y: 0 });
  const currentPoint = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");

    const syncPointerMode = () => {
      setIsFinePointer(mediaQuery.matches);
    };

    syncPointerMode();
    mediaQuery.addEventListener("change", syncPointerMode);

    return () => {
      mediaQuery.removeEventListener("change", syncPointerMode);
    };
  }, []);

  useEffect(() => {
    if (!isFinePointer) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      targetPoint.current = { x: event.clientX, y: event.clientY };

      if (!isVisible) {
        currentPoint.current = { x: event.clientX, y: event.clientY };
        setIsVisible(true);
      }
    };

    const handlePointerLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, [isFinePointer, isVisible]);

  useEffect(() => {
    if (!isFinePointer) {
      return;
    }

    let raf = 0;

    const animate = () => {
      const cursor = cursorRef.current;
      if (cursor) {
        const dx = targetPoint.current.x - currentPoint.current.x;
        const dy = targetPoint.current.y - currentPoint.current.y;

        currentPoint.current.x += dx * 0.22;
        currentPoint.current.y += dy * 0.22;

        cursor.style.transform = `translate3d(${currentPoint.current.x}px, ${currentPoint.current.y}px, 0) translate(-50%, -50%)`;
      }

      raf = window.requestAnimationFrame(animate);
    };

    raf = window.requestAnimationFrame(animate);
    return () => {
      window.cancelAnimationFrame(raf);
    };
  }, [isFinePointer]);

  if (!isFinePointer) {
    return null;
  }

  const hasCustomCursor = content !== null;

  return (
    <div
      ref={cursorRef}
      className={cn(
        "pointer-events-none  rounded-2xl fixed left-0 top-0 z-999 flex items-center justify-center border border-zinc-950/70 transition-all duration-300 ease-out",
        hasCustomCursor ? "size-40 bg-zinc-950/5 border-transparent" : "size-8",
        isVisible ? "opacity-100" : "opacity-0",
        containerClassName,
      )}
      style={{ willChange: "transform" }}
      aria-hidden
    >
      {content}
    </div>
  );
}

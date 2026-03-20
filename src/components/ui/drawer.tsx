"use client";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

// ── Types ─────────────────────────────────────────────────────────────────────

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  className?: string;
  layerClassName?: {
    last?: string;
    middle?: string;
    first?: string;
  };
  removeDefaultCloseButton?: boolean;
  children: React.ReactNode;
}

// ── Easing ────────────────────────────────────────────────────────────────────

const EASE: [number, number, number, number] = [0.65, 0.01, 0.05, 0.99];
const EASE_CLOSE: [number, number, number, number] = [0.65, 0.05, 0, 1];

// ── Component ─────────────────────────────────────────────────────────────────

export function DrawerHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={cn("px-6 pt-4 pb-6 flex flex-col gap-1", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: EASE, delay: 0.37 }}
    >
      {children}
    </motion.div>
  );
}

export function DrawerFooter({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      {/* Spacer so footer sticks to bottom */}
      <div className="flex-1" />

      {/* Footer */}
      <motion.div
        className={cn("px-6 py-6", className)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: EASE, delay: 0.46 }}
      >
        {children}
      </motion.div>
    </>
  );
}

export function Drawer({
  open,
  onClose,
  layerClassName,
  removeDefaultCloseButton,
  children,
}: DrawerProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Lock page scroll synchronously before the first paint.
  useLayoutEffect(() => {
    if (open) {
      document.documentElement.classList.add("drawer-open");
    } else {
      document.documentElement.classList.remove("drawer-open");
    }
    return () => {
      document.documentElement.classList.remove("drawer-open");
    };
  }, [open]);

  if (!isMounted) {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            key="drawer-overlay"
            className="fixed inset-0 z-50 cursor-pointer bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE_CLOSE }}
            onClick={onClose}
            aria-hidden
          />

          {/* Outer positioner */}
          <div
            key="drawer-positioner"
            className="fixed inset-0 z-50 md:inset-y-0 md:left-auto md:w-full md:max-w-md"
            role="dialog"
            aria-modal
          >
            {/*
             * motion.div = clip boundary + slide-out element.
             * Everything inside is clipped by overflow-hidden, so nothing
             * leaks during open or close animations.
             */}
            <motion.div
              className="relative h-dvh overflow-hidden md:rounded-tl-2xl md:rounded-bl-2xl"
              initial={{ x: "101%" }}
              animate={{ x: 0 }}
              exit={{ x: "101%" }}
              transition={{ duration: 0.575, ease: EASE_CLOSE }}
            >
              {/* ── Background wipe layers ── */}
              <motion.div
                className={cn(
                  "absolute inset-0",
                  "bg-primary/50",
                  layerClassName ? layerClassName.last : "",
                )}
                initial={{ x: "101%" }}
                animate={{ x: 0 }}
                exit={{ x: 0 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0 }}
              />
              <motion.div
                className={cn(
                  "absolute inset-0",
                  "bg-primary",
                  layerClassName ? layerClassName.middle : "",
                )}
                initial={{ x: "101%" }}
                animate={{ x: 0 }}
                exit={{ x: 0 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.06 }}
              />
              <motion.div
                className={cn(
                  "absolute inset-0",
                  "bg-white dark:bg-zinc-900",
                  layerClassName ? layerClassName.first : "",
                )}
                initial={{ x: "101%" }}
                animate={{ x: 0 }}
                exit={{ x: 0 }}
                transition={{ duration: 0.575, ease: EASE, delay: 0.12 }}
              />

              {/* ── Content ── */}
              <div className="absolute inset-0 z-10 flex flex-col overflow-y-auto overflow-x-hidden">
                {/* Close */}
                <motion.div
                  className="flex items-start justify-end gap-4 px-6 pt-8 pb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE, delay: 0.32 }}
                >
                  {!removeDefaultCloseButton && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="shrink-0 size-8"
                      onClick={onClose}
                      aria-label="Fechar"
                    >
                      <X className="size-4" />
                    </Button>
                  )}
                </motion.div>

                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}

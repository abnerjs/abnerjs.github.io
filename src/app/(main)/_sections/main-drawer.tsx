"use client";

import React from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { Drawer } from "@/components/ui/drawer";
import MagneticWrapper from "@/components/ui/magnetic-wrapper";
import { cn } from "@/lib/utils";
import { DrawerContent } from "./drawercontent";

export function MainDrawer({ showButton = true }: { showButton?: boolean }) {
  const [drawerOpened, setDrawerOpened] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted
        ? createPortal(
            <div
              className={cn(
                "fixed right-6 top-6 z-60 transition-all duration-300",
                showButton
                  ? "translate-y-0 opacity-100 scale-100"
                  : "-translate-y-2 pointer-events-none opacity-0 scale-0",
                drawerOpened && "translate-y-0 opacity-100 scale-100",
              )}
            >
              <MagneticWrapper>
                <Button
                  onClick={() => setDrawerOpened(!drawerOpened)}
                  className="size-20 rounded bg-primary p-0 items-center justify-center text-black hover:text-white focus-visible:text-white group outline-none focus:outline-none focus-visible:outline-none"
                  aria-label={drawerOpened ? "Fechar menu" : "Abrir menu"}
                >
                  <div className="flex flex-col gap-1.5">
                    <div
                      className={cn(
                        "w-7.5 h-0.5 bg-current transition-all duration-300 ease-linear origin-center",
                        drawerOpened ? "translate-y-1 rotate-45" : "",
                      )}
                    />
                    <div
                      className={cn(
                        "w-7.5 h-0.5 bg-current transition-all duration-300 ease-linear origin-center",
                        drawerOpened ? "-translate-y-1 -rotate-45" : "",
                      )}
                    />
                  </div>
                </Button>
              </MagneticWrapper>
            </div>,
            document.body,
          )
        : null}

      <Drawer
        removeDefaultCloseButton
        open={drawerOpened}
        onClose={() => setDrawerOpened(false)}
      >
        <DrawerContent setClose={() => setDrawerOpened(false)} />
      </Drawer>
    </>
  );
}

import { Download } from "lucide-react";
import { Fullname } from "@/components/svg/fullname";
import { Me } from "@/components/svg/me";
import { Button } from "@/components/ui/button";
import MagneticWrapper from "@/components/ui/magnetic-wrapper";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans dark:bg-black">
      {/* Hero */}
      <main className="relative bg-zinc-700 flex min-h-screen w-full flex-col items-center">
        {/* Nome e meu rosto */}
        <div className="relative mt-50 flex items-center w-full justify-center">
          <Fullname className="absolute w-80 md:w-xl -translate-x-2 md:-translate-x-4 text-white pointer-events-none" />
          <Me className="size-26 md:size-40" />
        </div>

        <MagneticWrapper className="absolute bottom-20">
          <Button
            size="xl"
            inverse
            className="flex items-center gap-2 uppercase"
          >
            Baixar currículo
            <Download className="size-5" />
          </Button>
        </MagneticWrapper>
      </main>
    </div>
  );
}

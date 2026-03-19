import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FlowingMenu from "@/components/ui/flowing-menu";
import MagneticWrapper from "@/components/ui/magnetic-wrapper";

const demoItems = [
  {
    index: 0,
    link: "#",
    content: (
      <div className="flex items-center justify-between w-full px-8 sm:px-16 md:px-32 transition-all py-6">
        <span>S2 Viagens</span>
        <div className="flex flex-col text-base text-right">
          <div className="text-zinc-950">Next.js</div>
          <div className="text-zinc-600">Desenvolvimento</div>
        </div>
      </div>
    ),
    text: "S2 Viagens",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    index: 1,
    link: "#",
    content: (
      <div className="flex items-center justify-between w-full px-8 sm:px-16 md:px-32 transition-all py-6">
        <span>Access Control</span>
        <div className="flex flex-col text-base text-right">
          <div className="text-zinc-950">React.js & Node</div>
          <div className="text-zinc-600">Design & Desenvolvimento</div>
        </div>
      </div>
    ),
    text: "Access Control",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    index: 2,
    link: "#",
    content: (
      <div className="flex items-center justify-between w-full px-8 sm:px-16 md:px-32 transition-all py-6">
        <span>Monterey</span>
        <div className="flex flex-col text-base text-right">
          <div className="text-zinc-950">Next.js</div>
          <div className="text-zinc-600">Desenvolvimento</div>
        </div>
      </div>
    ),
    text: "Monterey",
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    index: 3,
    link: "#",
    content: (
      <div className="flex items-center justify-between w-full px-8 sm:px-16 md:px-32 transition-all py-6">
        <span>Sequoia</span>
        <div className="flex flex-col text-base text-right">
          <div className="text-zinc-950">Next.js</div>
          <div className="text-zinc-600">Desenvolvimento</div>
        </div>
      </div>
    ),
    text: "Sequoia",
    image: "https://picsum.photos/600/400?random=4",
  },
];

export function MainProjects() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="px-8 sm:px-16 md:px-32 transition-all font-semibold">
        Principais projetos
      </h2>
      <FlowingMenu
        items={demoItems}
        speed={15}
        className="bg-transparent text-black"
        marqueeClassName="bg-white text-black"
        itemClassName="border-b border-zinc-200 first:border-t"
      />

      <MagneticWrapper className="self-center my-20">
        <Button
          variant="outline"
          size="xl"
          className="uppercase flex items-center gap-2 font-semibold tracking-wide"
        >
          Mais trabalhos
          <ArrowRight />
        </Button>
      </MagneticWrapper>
    </section>
  );
}

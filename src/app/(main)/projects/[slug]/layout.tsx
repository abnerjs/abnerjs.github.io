import type { Metadata } from "next";
import { projectsData } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.name === resolvedParams.slug);

  if (!project) {
    return {
      title: "Projeto não encontrado",
    };
  }

  const title = `${project.projectName} — Projeto`;
  const description = `Conheça os detalhes do projeto ${project.projectName}, desenvolvido por Abner J. Silva com ${project.stack.join(", ")}.`;

  return {
    title,
    description,
    openGraph: {
      title: `${project.projectName} • Abner J. Silva`,
      description,
      url: `https://abnerjs.dev/projects/${project.name}`,
    },
    alternates: {
      canonical: `https://abnerjs.dev/projects/${project.name}`,
    },
  };
}

export default function ProjectDetailLayout({ children }: Props) {
  return <>{children}</>;
}

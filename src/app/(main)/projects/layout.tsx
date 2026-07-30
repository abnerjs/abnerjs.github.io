import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Confira os projetos e trabalhos desenvolvidos por Abner J. Silva em desenvolvimento Full-Stack, Web Apps e soluções digitais.",
  openGraph: {
    title: "Projetos • Abner J. Silva",
    description:
      "Confira os projetos e trabalhos desenvolvidos por Abner J. Silva em desenvolvimento Full-Stack, Web Apps e soluções digitais.",
    url: "https://abnerjs.dev/projects",
  },
  alternates: {
    canonical: "https://abnerjs.dev/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

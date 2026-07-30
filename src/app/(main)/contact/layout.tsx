import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com Abner J. Silva para iniciar um novo projeto, tirar dúvidas ou discutir oportunidades de software.",
  openGraph: {
    title: "Contato • Abner J. Silva",
    description:
      "Entre em contato com Abner J. Silva para iniciar um novo projeto, tirar dúvidas ou discutir oportunidades de software.",
    url: "https://abnerjs.dev/contact",
  },
  alternates: {
    canonical: "https://abnerjs.dev/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

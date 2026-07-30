import type { Metadata, Viewport } from "next";
import { Anton, Lexend } from "next/font/google";
import "./globals.css";
import { CursorProvider } from "@/components/ui/cursor-provider";
import { AppScrollSmoother } from "@/components/ui/scroll-smoother";
import { cn } from "@/lib/utils";

export const lexend = Lexend({ subsets: ["latin"], variable: "--font-sans" });

export const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: { media: "(prefers-color-scheme: light)", color: "white" },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://abnerjs.dev"),
  title: {
    default: "Abner J. Silva • Desenvolvedor Full-Stack",
    template: "%s • Abner J. Silva",
  },
  description:
    "Desenvolvedor Full-Stack especializado em criar aplicações web modernas, de alta performance e experiências visuais marcantes.",
  keywords: [
    "Abner J. Silva",
    "Desenvolvedor Full-Stack",
    "Full-Stack Developer",
    "Desenvolvedor React",
    "Desenvolvedor Next.js",
    "TypeScript",
    "Node.js",
    "Front-end Developer",
    "Back-end Developer",
    "Portfólio",
  ],
  authors: [{ name: "Abner J. Silva", url: "https://abnerjs.dev" }],
  creator: "Abner J. Silva",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    url: "https://abnerjs.dev/",
    title: "Abner J. Silva • Desenvolvedor Full-Stack",
    description:
      "Desenvolvedor Full-Stack especializado em aplicações web modernas, de alta performance e experiências visuais marcantes.",
    siteName: "Abner J. Silva • Dev",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://abnerjs.dev/og/banner.png",
        width: 1200,
        height: 630,
        alt: "Abner J. Silva • Desenvolvedor Full-Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abner J. Silva • Desenvolvedor Full-Stack",
    description:
      "Desenvolvedor Full-Stack especializado em aplicações web modernas, de alta performance e experiências visuais marcantes.",
    images: [
      {
        url: "https://abnerjs.dev/og/banner.png",
        width: 1200,
        height: 630,
        alt: "Abner J. Silva • Desenvolvedor Full-Stack",
      },
    ],
    site: "abnerjs.dev",
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
        sizes: "any",
      },
    ],
    shortcut: "/favicon.svg",
    apple: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
        sizes: "any",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://abnerjs.dev/#person",
      name: "Abner J. Silva",
      jobTitle: "Desenvolvedor Full-Stack",
      url: "https://abnerjs.dev",
      sameAs: [
        "https://www.linkedin.com/in/abnerjsilva/",
        "https://github.com/abnerjs",
      ],
      knowsAbout: [
        "Software Engineering",
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Full-Stack Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://abnerjs.dev/#website",
      url: "https://abnerjs.dev",
      name: "Abner J. Silva • Dev",
      description: "Portfólio de Abner J. Silva — Desenvolvedor Full-Stack",
      publisher: {
        "@id": "https://abnerjs.dev/#person",
      },
      inLanguage: "pt-BR",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn("font-sans no-scrollbar overflow-x-clip", lexend.variable)}
      data-scroll-behavior="smooth"
    >
      <head>
        <link rel="preconnect" href="https://api.iconify.design" crossOrigin="" />
      </head>
      <body
        className={`${lexend.variable} ${anton.variable} overflow-x-clip antialiased bg-zinc-950`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CursorProvider>
          {children}
          <AppScrollSmoother />
        </CursorProvider>
      </body>
    </html>
  );
}

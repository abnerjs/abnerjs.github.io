import type { Metadata } from "next";
import { Figtree, JetBrains_Mono, Oi } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

export const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

export const oi = Oi({
  variable: "--font-oi",
  subsets: ["latin"],
  weight: "400",
});

export const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abner J. Silva • Dev",
  description: "Vamos começar um projeto juntos?",
  openGraph: {
    url: "https://abnerjs.vercel.app/",
    title: "Abner J. Silva • Dev",
    description: "Vamos começar um projeto juntos?",
    siteName: "Abner J. Silva • Dev",
    type: "website",
    images: [
      {
        url: "https://abnerjs.vercel.app/ogImage.png",
        width: 1200,
        height: 630,
        alt: "Abner J. Silva • Dev",
      },
    ],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn("font-sans", figtree.variable)}>
      <body
        className={`${figtree.variable} ${jetBrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

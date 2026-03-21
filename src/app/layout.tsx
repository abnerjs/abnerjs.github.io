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
  maximumScale: 1,
  themeColor: { media: "(prefers-color-scheme: light)", color: "white" },
};

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
    <html
      lang="pt-BR"
      className={cn("font-sans no-scrollbar overflow-x-clip", lexend.variable)}
    >
      <body
        className={`${lexend.variable} ${anton.variable} overflow-x-clip antialiased bg-zinc-950`}
      >
        <CursorProvider>
          {children}
          <AppScrollSmoother />
        </CursorProvider>
      </body>
    </html>
  );
}

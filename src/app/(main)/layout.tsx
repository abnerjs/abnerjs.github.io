import { Footer } from "@/components/ui/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <div className="h-40"></div>
      <Footer />
    </>
  );
}

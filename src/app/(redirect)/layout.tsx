import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  robots: { index: false, follow: true },
};

export default function RedirectLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body className="bg-zinc-950 font-sans text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}

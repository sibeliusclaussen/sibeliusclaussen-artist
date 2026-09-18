import type { Metadata } from "next";
import { Inter, Inconsolata } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sibelius Claussen",
  description:
    "Multi-artista que vive de experimentação em Teresópolis, RJ. Fotografia, design, arte e palavra.",
  openGraph: {
    title: "Sibelius Claussen",
    description: "Multi-artista que vive de experimentação.",
    url: "https://sibeliusclaussen.com.br",
    siteName: "Sibelius Claussen",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${inconsolata.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900 min-h-screen flex flex-col relative" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

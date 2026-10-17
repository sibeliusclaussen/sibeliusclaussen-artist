import type { Metadata } from "next";
import { Inter, Inconsolata } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PersonaProvider } from "@/context/PersonaContext";
import { LocaleProvider } from "@/context/LocaleContext";

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
  title: "Sibelius Claussen · Principal & Senior Product Designer",
  description:
    "14+ years designing digital products from discovery to shipped code across SaaS, Fintech, B2B, and Marketplaces.",
  openGraph: {
    title: "Sibelius Claussen · Product Designer",
    description:
      "14+ years designing digital products from discovery to shipped code.",
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
    <html lang="pt-BR" className={`${inter.variable} ${inconsolata.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-white text-gray-900 min-h-screen flex flex-col relative" suppressHydrationWarning>
        <LocaleProvider>
          <PersonaProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </PersonaProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}

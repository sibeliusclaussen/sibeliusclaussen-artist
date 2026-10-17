"use client";

import Link from "next/link";
import { useLocale, UI_TEXT } from "@/context/LocaleContext";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/sibeliusclaussen" },
  { label: "LinkedIn", href: "https://linkedin.com/in/sibeliusclaussen" },
  { label: "Substack", href: "https://sibeliusclaussen.substack.com" },
];

export default function Footer() {
  const { locale } = useLocale();
  const t = UI_TEXT[locale].nav;

  return (
    <footer className="w-full border-t border-gray-100 mt-auto bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-gray-500">
        {/* Left nav */}
        <nav className="flex items-center gap-5">
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-950 transition-colors duration-150"
          >
            {t.home}
          </Link>
          <Link
            href="/sobre"
            className="text-gray-500 hover:text-gray-950 transition-colors duration-150"
          >
            {t.about}
          </Link>
        </nav>

        {/* Center logo / brand */}
        <div className="flex items-center font-medium">
          <span className="text-gray-900 font-semibold tracking-tight">sibelius</span>
          <span className="text-gray-400 font-normal tracking-tight">claussen</span>
          <span className="text-gray-300 mx-2">·</span>
          <span className="text-gray-400 text-[11px] font-mono">Teresópolis, RJ</span>
        </div>

        {/* Right social links */}
        <nav className="flex items-center gap-5">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-950 transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

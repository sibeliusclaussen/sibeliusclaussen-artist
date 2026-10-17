"use client";

import Link from "next/link";
import PersonaSwitcher from "./PersonaSwitcher";
import { useLocale, UI_TEXT, Locale } from "@/context/LocaleContext";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/in/sibeliusclaussen" },
  { label: "Instagram", href: "https://instagram.com/sibeliusclaussen" },
  { label: "Substack", href: "https://sibeliusclaussen.substack.com" },
];

const LOCALES: { code: Locale; label: string }[] = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

export default function Navbar() {
  const { locale, setLocale } = useLocale();
  const t = UI_TEXT[locale].nav;

  return (
    <header className="w-full border-b border-gray-100 bg-white/95 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 h-16 sm:h-18 flex items-center justify-between gap-3">
        {/* Left: Brand identity */}
        <Link
          href="/"
          className="inline-flex items-baseline group py-2 shrink-0"
        >
          <span className="text-base sm:text-lg font-semibold tracking-tight text-gray-900 group-hover:text-black transition-colors">
            sibelius
          </span>
          <span className="text-base sm:text-lg font-normal tracking-tight text-gray-400 group-hover:text-gray-600 transition-colors">
            claussen
          </span>
        </Link>

        {/* Center: Tactile Product/Art Mode Switcher */}
        <div className="flex items-center justify-center">
          <PersonaSwitcher />
        </div>

        {/* Right: Navigation, Social & Language selector */}
        <nav aria-label="Main navigation" className="flex items-center gap-3 sm:gap-5 shrink-0">
          <Link
            href="/sobre"
            className="text-xs sm:text-sm font-medium text-gray-600 hover:text-gray-950 transition-colors duration-150"
          >
            {t.about}
          </Link>

          <span className="h-3 w-[1px] bg-gray-200 hidden lg:block" aria-hidden="true" />

          <div className="hidden lg:flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-gray-500 hover:text-gray-950 transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          <span className="h-3 w-[1px] bg-gray-200" aria-hidden="true" />

          {/* Discreet Language Switcher (PT / EN / ES) */}
          <div
            role="group"
            aria-label="Language"
            className="flex items-center gap-1 font-mono text-[11px]"
          >
            {LOCALES.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => setLocale(item.code)}
                aria-pressed={locale === item.code}
                className={`px-1 py-0.5 transition-colors cursor-pointer ${
                  locale === item.code
                    ? "text-gray-950 font-semibold underline underline-offset-4"
                    : "text-gray-400 hover:text-gray-700"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

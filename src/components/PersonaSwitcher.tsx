"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { usePersona, PersonaMode } from "@/context/PersonaContext";
import { useLocale, UI_TEXT } from "@/context/LocaleContext";

interface PersonaSwitcherProps {
  variant?: "desktop" | "mobile";
}

export default function PersonaSwitcher({ variant = "desktop" }: PersonaSwitcherProps) {
  const { persona, setPersona } = usePersona();
  const { locale } = useLocale();
  const t = UI_TEXT[locale].nav;
  const pathname = usePathname();
  const router = useRouter();

  const handleSelect = (next: PersonaMode) => {
    setPersona(next);
    if (pathname !== "/" && pathname !== "/sobre") {
      router.push(`/?mode=${next}`);
    }
  };

  useEffect(() => {
    if (variant !== "desktop") return;

    const onKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        (e.target as HTMLElement)?.isContentEditable ||
        e.metaKey ||
        e.ctrlKey ||
        e.altKey
      ) {
        return;
      }
      if (e.key.toLowerCase() === "m") {
        const next: PersonaMode = persona === "product" ? "artist" : "product";
        setPersona(next);
        if (pathname !== "/" && pathname !== "/sobre") {
          router.push(`/?mode=${next}`);
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [persona, pathname, router, setPersona, variant]);

  if (variant === "mobile") {
    return (
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-50 w-max">
        <div
          role="group"
          aria-label={t.switcherTitle}
          className="w-max max-w-[90vw] bg-black/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl p-1.5 flex items-center gap-1.5 overflow-hidden select-none"
        >
          <button
            type="button"
            role="tab"
            aria-selected={persona === "product"}
            onClick={() => handleSelect("product")}
            className={`relative z-10 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs transition-colors duration-200 cursor-pointer ${
              persona === "product"
                ? "text-gray-950 font-medium"
                : "text-white/75 hover:text-white font-normal"
            }`}
          >
            {persona === "product" && (
              <motion.span
                layoutId="persona-active-pill-mobile"
                transition={{ type: "spring", stiffness: 520, damping: 36 }}
                className="absolute inset-0 rounded-full bg-white shadow-sm -z-10"
              />
            )}
            <svg
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="opacity-85 shrink-0"
            >
              <rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
              <rect x="9" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
              <rect x="2" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
              <rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <span>{t.product}</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={persona === "artist"}
            onClick={() => handleSelect("artist")}
            className={`relative z-10 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs transition-colors duration-200 cursor-pointer ${
              persona === "artist"
                ? "text-gray-950 font-medium"
                : "text-white/75 hover:text-white font-normal"
            }`}
          >
            {persona === "artist" && (
              <motion.span
                layoutId="persona-active-pill-mobile"
                transition={{ type: "spring", stiffness: 520, damping: 36 }}
                className="absolute inset-0 rounded-full bg-white shadow-sm -z-10"
              />
            )}
            <svg
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="opacity-85 shrink-0"
            >
              <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="8" cy="8" r="1.5" fill="currentColor" />
            </svg>
            <span>{t.art}</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      role="group"
      aria-label={t.switcherTitle}
      title={t.switcherTitle}
      className="relative inline-flex items-center p-0.5 rounded-full bg-gray-100/90 border border-gray-200/80 text-xs select-none"
    >
      <button
        type="button"
        role="tab"
        aria-selected={persona === "product"}
        onClick={() => handleSelect("product")}
        className={`relative z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full transition-colors duration-200 cursor-pointer ${
          persona === "product"
            ? "text-gray-950 font-medium"
            : "text-gray-500 hover:text-gray-800 font-normal"
        }`}
      >
        {persona === "product" && (
          <motion.span
            layoutId="persona-active-pill-desktop"
            transition={{ type: "spring", stiffness: 520, damping: 36 }}
            className="absolute inset-0 rounded-full bg-white shadow-xs border border-gray-200/60 -z-10"
          />
        )}
        <svg
          width="12"
          height="12"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="opacity-80 shrink-0"
        >
          <rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="9" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="2" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <span>{t.product}</span>
      </button>

      <button
        type="button"
        role="tab"
        aria-selected={persona === "artist"}
        onClick={() => handleSelect("artist")}
        className={`relative z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full transition-colors duration-200 cursor-pointer ${
          persona === "artist"
            ? "text-gray-950 font-medium"
            : "text-gray-500 hover:text-gray-800 font-normal"
        }`}
      >
        {persona === "artist" && (
          <motion.span
            layoutId="persona-active-pill-desktop"
            transition={{ type: "spring", stiffness: 520, damping: 36 }}
            className="absolute inset-0 rounded-full bg-white shadow-xs border border-gray-200/60 -z-10"
          />
        )}
        <svg
          width="12"
          height="12"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="opacity-80 shrink-0"
        >
          <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8" cy="8" r="1.5" fill="currentColor" />
        </svg>
        <span>{t.art}</span>
      </button>
    </div>
  );
}

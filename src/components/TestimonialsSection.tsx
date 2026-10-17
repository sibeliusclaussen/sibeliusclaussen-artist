"use client";

import { getTestimonials } from "@/data/cases";
import { useLocale, UI_TEXT } from "@/context/LocaleContext";

export default function TestimonialsSection() {
  const { locale } = useLocale();
  const t = UI_TEXT[locale].testimonialsSection;
  const items = getTestimonials(locale);

  return (
    <section className="w-full border-t border-gray-100 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight">
            <span className="block text-gray-900">{t.titleMain}</span>
            <span className="block text-gray-400">{t.titleMuted}</span>
          </h2>
          <p className="text-sm text-gray-500 mt-3 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          {items.map((item) => (
            <blockquote
              key={item.author}
              className="flex flex-col justify-between gap-8 border-l border-gray-200 pl-6 py-1"
            >
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                &ldquo;{item.quote}&rdquo;
              </p>

              <footer className="flex flex-col pt-2 border-t border-gray-100">
                <cite className="text-sm font-medium text-gray-900 not-italic">
                  {item.author}
                </cite>
                <span className="text-xs text-gray-400 mt-0.5">
                  {item.role}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

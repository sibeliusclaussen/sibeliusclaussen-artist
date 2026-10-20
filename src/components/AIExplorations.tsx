"use client";

import Image from "next/image";
import { getAIExplorations } from "@/data/cases";
import { useLocale, UI_TEXT } from "@/context/LocaleContext";
import GitHubContributions from "./GitHubContributions";

export default function AIExplorations() {
  const { locale } = useLocale();
  const t = UI_TEXT[locale].initiativesSection;
  const items = getAIExplorations(locale);

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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item) => {
            const CardWrapper = item.link ? "a" : "div";
            const wrapperProps = item.link
              ? {
                  href: item.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <CardWrapper
                key={item.slug}
                {...wrapperProps}
                className="flex flex-col gap-3 group cursor-pointer"
              >
                <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col gap-1 pt-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                      {item.title}
                    </p>
                    {item.link && (
                      <span
                        className="text-xs text-gray-400 group-hover:text-gray-900 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      >
                        ↗
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                  <p className="text-[11px] text-gray-400 font-mono mt-1.5">
                    {item.tools.join(" · ")}
                  </p>
                </div>
              </CardWrapper>
            );
          })}
        </div>

        <GitHubContributions />
      </div>
    </section>
  );
}

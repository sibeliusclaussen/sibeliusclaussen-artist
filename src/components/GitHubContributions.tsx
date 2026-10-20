"use client";

import { useEffect, useState } from "react";
import { useLocale, UI_TEXT } from "@/context/LocaleContext";
import type { GitHubContribution } from "@/app/api/github/contributions/route";

function formatRelativeTime(dateString: string, locale: string = "pt"): string {
  try {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.round((date.getTime() - now.getTime()) / 1000);

    const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });

    const diffInMinutes = Math.round(diffInSeconds / 60);
    const diffInHours = Math.round(diffInSeconds / 3600);
    const diffInDays = Math.round(diffInSeconds / 86400);

    if (Math.abs(diffInDays) >= 30) {
      const diffInMonths = Math.round(diffInDays / 30);
      return rtf.format(diffInMonths, "month");
    }
    if (Math.abs(diffInHours) >= 24) {
      return rtf.format(diffInDays, "day");
    }
    if (Math.abs(diffInMinutes) >= 60) {
      return rtf.format(diffInHours, "hour");
    }
    if (Math.abs(diffInSeconds) >= 60) {
      return rtf.format(diffInMinutes, "minute");
    }
    return rtf.format(diffInSeconds, "second");
  } catch {
    return dateString;
  }
}

export default function GitHubContributions() {
  const { locale } = useLocale();
  const t = UI_TEXT[locale].initiativesSection;
  const [contributions, setContributions] = useState<GitHubContribution[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function loadContributions() {
      try {
        const res = await fetch("/api/github/contributions");
        if (res.ok) {
          const data = await res.json();
          if (isMounted && Array.isArray(data.contributions)) {
            setContributions(data.contributions);
          }
        }
      } catch (err) {
        console.error("Falha ao carregar contribuições do GitHub:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadContributions();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="mt-14 pt-10 border-t border-gray-100 flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <h3 className="text-sm font-semibold tracking-tight text-gray-900">
            {t.githubContributionsTitle}
          </h3>
          <span className="text-[11px] font-mono text-gray-400 border border-gray-200 rounded px-1.5 py-0.5">
            {t.githubLiveBadge}
          </span>
        </div>

        <a
          href="https://github.com/sibeliusclaussen"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-gray-500 hover:text-gray-950 transition-colors inline-flex items-center gap-1 group"
        >
          <span>{t.githubViewAll}</span>
          <span
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          >
            ↗
          </span>
        </a>
      </div>

      <div className="divide-y divide-gray-100 border border-gray-100 rounded-lg bg-gray-50/40 overflow-hidden">
        {loading ? (
          <div className="p-6 space-y-4">
            <div className="h-4 bg-gray-200/60 rounded animate-pulse w-3/4"></div>
            <div className="h-4 bg-gray-200/60 rounded animate-pulse w-1/2"></div>
            <div className="h-4 bg-gray-200/60 rounded animate-pulse w-2/3"></div>
          </div>
        ) : contributions.length > 0 ? (
          contributions.map((item) => (
            <a
              key={item.id + item.date}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 sm:px-5 hover:bg-white transition-colors duration-150 group"
            >
              <div className="flex items-start gap-3 min-w-0">
                <span
                  className="text-gray-400 group-hover:text-gray-950 transition-colors shrink-0 mt-0.5 text-xs font-mono"
                  aria-hidden="true"
                >
                  ⚡
                </span>
                <div className="flex flex-col min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-gray-900 group-hover:text-gray-600 transition-colors truncate">
                    {item.message}
                  </p>
                  <div className="flex items-center gap-2 mt-1 text-[11px] text-gray-400 font-mono">
                    <span className="text-gray-500 font-medium">{item.repo}</span>
                    <span>·</span>
                    <span className="text-gray-400">#{item.sha}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3 text-xs text-gray-400 font-mono shrink-0 pl-6 sm:pl-0">
                <span className="capitalize">{formatRelativeTime(item.date, locale)}</span>
                <span
                  className="text-gray-400 group-hover:text-gray-900 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>
            </a>
          ))
        ) : null}
      </div>
    </div>
  );
}

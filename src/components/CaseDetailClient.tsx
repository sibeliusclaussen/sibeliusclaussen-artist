"use client";

import Image from "next/image";
import Link from "next/link";
import { getCaseBySlug, getCaseStudies } from "@/data/cases";
import { useLocale, UI_TEXT } from "@/context/LocaleContext";

interface CaseDetailClientProps {
  slug: string;
}

export default function CaseDetailClient({ slug }: CaseDetailClientProps) {
  const { locale } = useLocale();
  const t = UI_TEXT[locale].caseDetail;

  const caseStudy = getCaseBySlug(slug, locale);
  const allCases = getCaseStudies(locale);

  if (!caseStudy) {
    return null;
  }

  const currentIndex = allCases.findIndex((c) => c.slug === slug);
  const nextCase = allCases[(currentIndex + 1) % allCases.length];

  return (
    <article className="min-h-screen bg-white">
      {/* ─── BREADCRUMB / BACK ───────────────────────────────────────── */}
      <nav aria-label="Secondary navigation" className="w-full border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 py-5 flex items-center justify-between text-xs text-gray-500">
          <Link
            href="/?mode=product"
            className="hover:text-gray-950 transition-colors inline-flex items-center gap-1.5 font-medium py-1"
          >
            <span aria-hidden="true">←</span>
            <span>{t.back}</span>
          </Link>
          <div className="font-mono text-gray-400 hidden sm:block">
            {caseStudy.client} · {caseStudy.year}
          </div>
        </div>
      </nav>

      {/* ─── CASE HEADER ────────────────────────────────────────────── */}
      <header className="w-full pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="max-w-4xl">
            <div className="text-xs text-gray-400 font-mono tracking-wider uppercase mb-5">
              {caseStudy.tags.join(" · ")}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.12] mb-6">
              {caseStudy.title}
            </h1>

            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-3xl">
              {caseStudy.subtitle}
            </p>
          </div>

          {/* Minimal Meta Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12 mt-12 border-t border-gray-100 text-xs">
            <div>
              <p className="text-gray-400 uppercase font-mono tracking-wider text-[11px]">
                {t.role}
              </p>
              <p className="font-medium text-gray-900 mt-1 text-sm">{caseStudy.role}</p>
            </div>
            <div>
              <p className="text-gray-400 uppercase font-mono tracking-wider text-[11px]">
                {t.duration}
              </p>
              <p className="font-medium text-gray-900 mt-1 text-sm">{caseStudy.duration}</p>
            </div>
            <div>
              <p className="text-gray-400 uppercase font-mono tracking-wider text-[11px]">
                {t.client}
              </p>
              <p className="font-medium text-gray-900 mt-1 text-sm">{caseStudy.client}</p>
            </div>
            <div>
              <p className="text-gray-400 uppercase font-mono tracking-wider text-[11px]">
                {t.year}
              </p>
              <p className="font-medium text-gray-900 mt-1 text-sm">{caseStudy.year}</p>
            </div>
          </div>
        </div>
      </header>

      {/* ─── HERO COVER IMAGE ───────────────────────────────────────── */}
      <section className="w-full mb-16 md:mb-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-gray-100 overflow-hidden">
            <Image
              src={caseStudy.coverImage}
              alt={caseStudy.title}
              fill
              priority
              sizes="(max-width: 1400px) 100vw, 1200px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* ─── EXECUTIVE SUMMARY (TL;DR PARA RECRUTADORES) ─────────── */}
      <section className="w-full mb-16 md:mb-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="p-8 md:p-10 bg-gray-50/80 border border-gray-100 flex flex-col lg:flex-row gap-8 justify-between">
            <div className="space-y-4 max-w-3xl">
              <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block">
                {t.tldrBadge}
              </span>
              <div className="space-y-2.5 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p>
                  <strong className="font-semibold text-gray-900">{t.problemLabel}</strong>
                  {caseStudy.tldr.problem}
                </p>
                <p>
                  <strong className="font-semibold text-gray-900">{t.actionLabel}</strong>
                  {caseStudy.tldr.action}
                </p>
                <p>
                  <strong className="font-semibold text-gray-900">{t.resultLabel}</strong>
                  {caseStudy.tldr.result}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-gray-200/80 pt-6 lg:pt-0 lg:pl-10 shrink-0">
              <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                {t.keyMetricLabel}
              </span>
              <span className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-1">
                {caseStudy.keyMetric.value}
              </span>
              <span className="text-xs text-gray-500 mt-0.5 max-w-[200px]">
                {caseStudy.keyMetric.label}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── KEY METRICS ROW ────────────────────────────────────────── */}
      <section className="w-full mb-20 md:mb-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="border-t border-b border-gray-200 py-10 md:py-14 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {caseStudy.metrics.map((m) => (
              <div key={m.label} className="flex flex-col">
                <span className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight">
                  {m.value}
                </span>
                <span className="text-xs sm:text-sm text-gray-500 mt-2 leading-snug">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EDITORIAL BODY NARRATIVE ───────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 pb-24 md:pb-32">
        <div className="max-w-3xl space-y-16 md:space-y-20">
          {/* Context & Problem */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
              {t.contextHeading}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              {caseStudy.problem}
            </p>
          </section>

          {/* The Challenge & Trade-offs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-l-2 border-gray-900 pl-6 py-1 my-10">
            <section className="space-y-2">
              <h3 className="text-base font-semibold text-gray-900">
                {t.challengeHeading}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </section>
            <section className="space-y-2">
              <h3 className="text-base font-semibold text-gray-900">
                {t.tradeoffsHeading}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {caseStudy.tradeoffs}
              </p>
            </section>
          </div>

          {/* Approach & Process */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
              {t.processHeading}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              {caseStudy.approach}
            </p>

            <div className="space-y-8 pt-4">
              {caseStudy.process.map((step) => (
                <div key={step.phase} className="space-y-2 border-t border-gray-100 pt-6">
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                    {step.phase}
                  </span>
                  <h4 className="text-base sm:text-lg font-medium text-gray-900">
                    {step.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  {step.items && step.items.length > 0 && (
                    <ul className="list-disc list-inside text-xs sm:text-sm text-gray-500 space-y-1.5 pt-2">
                      {step.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* High Resolution Gallery */}
          {caseStudy.galleryImages && caseStudy.galleryImages.length > 0 && (
            <section className="space-y-10 pt-4">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
                {t.galleryHeading}
              </h2>
              <div className="space-y-12">
                {caseStudy.galleryImages.map((img) => (
                  <figure key={img.url} className="space-y-3">
                    <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden">
                      <Image
                        src={img.url}
                        alt={img.caption}
                        fill
                        sizes="(max-width: 1000px) 100vw, 800px"
                        className="object-cover object-top"
                      />
                    </div>
                    <figcaption className="text-xs text-gray-500 leading-relaxed">
                      {img.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}

          {/* Results */}
          <section className="space-y-6 pt-6 border-t border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
              {t.resultsHeading}
            </h2>
            <ul className="space-y-3 text-base text-gray-600">
              {caseStudy.keyResults.map((res) => (
                <li key={res} className="flex items-start gap-3">
                  <span className="text-gray-400 select-none">—</span>
                  <span>{res}</span>
                </li>
              ))}
            </ul>

            {caseStudy.takeaways && (
              <div className="pt-8 mt-8 border-t border-gray-100">
                <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                  {t.takeawaysBadge}
                </p>
                <p className="text-base sm:text-lg text-gray-800 italic leading-relaxed">
                  &ldquo;{caseStudy.takeaways}&rdquo;
                </p>
              </div>
            )}
          </section>

          {/* Testimonial if present */}
          {caseStudy.testimonial && (
            <div className="p-8 bg-gray-50/80 border-l-2 border-gray-900 space-y-4">
              <p className="text-base text-gray-700 italic leading-relaxed">
                &ldquo;{caseStudy.testimonial.quote}&rdquo;
              </p>
              <p className="text-xs sm:text-sm text-gray-900 font-medium">
                {caseStudy.testimonial.author} —{" "}
                <span className="text-gray-500 font-normal">{caseStudy.testimonial.role}</span>
              </p>
            </div>
          )}

          {/* External links: Live URL and/or Figma */}
          {(caseStudy.liveUrl || caseStudy.figmaUrl) && (
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-gray-100">
              {caseStudy.liveUrl && (
                <a
                  href={caseStudy.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-gray-950 hover:text-gray-600 inline-flex items-center gap-1.5 font-medium transition-colors"
                >
                  <span>
                    {t.liveLink} ({caseStudy.liveUrl.replace(/^https?:\/\//, "")})
                  </span>
                  <span aria-hidden="true">↗</span>
                </a>
              )}
              {caseStudy.figmaUrl && (
                <a
                  href={caseStudy.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-gray-600 hover:text-gray-950 inline-flex items-center gap-1.5 font-medium transition-colors"
                >
                  <span>{t.figmaLink}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ─── NEXT CASE TEASER ───────────────────────────────────────── */}
      <footer className="w-full border-t border-gray-100 py-16 md:py-24 bg-gray-50/40">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="max-w-2xl">
            <p className="text-xs text-gray-400 font-mono uppercase tracking-wider mb-3">
              {t.nextCaseBadge}
            </p>
            <Link href={`/cases/${nextCase.slug}`} className="group block">
              <h3 className="text-2xl sm:text-3xl font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                {nextCase.title}{" "}
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-2">
                  →
                </span>
              </h3>
              <p className="text-sm sm:text-base text-gray-500 mt-2 leading-relaxed">
                {nextCase.subtitle}
              </p>
            </Link>
          </div>
        </div>
      </footer>
    </article>
  );
}

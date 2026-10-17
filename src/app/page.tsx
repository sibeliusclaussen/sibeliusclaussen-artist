"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePersona } from "@/context/PersonaContext";
import { useLocale, UI_TEXT } from "@/context/LocaleContext";
import PhotoGrid from "@/components/PhotoGrid";
import ProjectCard from "@/components/ProjectCard";
import { getProjectsBySection } from "@/data/projects";
import { getCaseStudies } from "@/data/cases";
import CaseCard from "@/components/CaseCard";
import CompanyLogos from "@/components/CompanyLogos";
import AIExplorations from "@/components/AIExplorations";
import TestimonialsSection from "@/components/TestimonialsSection";

const ARTIST_COPY = {
  pt: {
    heroMain: "Sou Sibelius,",
    heroMuted: "um multi-artista que vive de experimentação em Teresópolis, RJ.",
    div1Main: "Tudo surge da mão com observação,",
    div1Muted: "de fragmentos despercebidos e de resíduos que questionam o consumo.",
    div2Main: "Entre arte, design e palavra,",
    div2Muted: "exploro processos como linguagem e reinvento técnicas para descobrir novos sentidos.",
    ctaMain: "Crio para capturar o agora",
    ctaMuted: "conectando consciência e matéria.",
  },
  en: {
    heroMain: "I'm Sibelius,",
    heroMuted: "a multidisciplinary artist & material researcher based in Teresópolis, Brazil.",
    div1Main: "Everything begins with the hand and observation,",
    div1Muted: "from overlooked fragments and upcycled waste that question consumption.",
    div2Main: "Between art, design, and the written word,",
    div2Muted: "I explore processes as language and reinvent techniques to uncover new meanings.",
    ctaMain: "I create to capture the present",
    ctaMuted: "connecting awareness and matter.",
  },
  es: {
    heroMain: "Soy Sibelius,",
    heroMuted: "un multiartista que vive de la experimentación en Teresópolis, RJ.",
    div1Main: "Todo surge de la mano y la observación,",
    div1Muted: "de fragmentos desapercibidos y residuos que cuestionan el consumo.",
    div2Main: "Entre arte, diseño y palabra,",
    div2Muted: "exploro procesos como lenguaje y reinvento técnicas para descubrir nuevos sentidos.",
    ctaMain: "Creo para capturar el ahora",
    ctaMuted: "conectando consciencia y materia.",
  },
} as const;

export default function HomePage() {
  const { persona } = usePersona();
  const { locale } = useLocale();
  const t = UI_TEXT[locale];
  const art = ARTIST_COPY[locale];

  const localizedCases = getCaseStudies(locale);

  const section1 = getProjectsBySection(1);
  const section2 = getProjectsBySection(2);
  const section3 = getProjectsBySection(3);

  return (
    <div className="flex flex-col min-h-screen">
      <AnimatePresence mode="wait">
        {persona === "product" ? (
          <motion.div
            key="product-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col"
          >
            {/* ─── PRODUCT HERO ────────────────────────────────────────── */}
            <section className="w-full pt-16 md:pt-24 pb-14 md:pb-20">
              <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-gray-500 uppercase tracking-wider mb-5">
                    <span>{t.hero.role}</span>
                    <span>·</span>
                    <span>{t.hero.years}</span>
                    <span>·</span>
                    <span>{t.hero.domains}</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.12] tracking-tight">
                    <span className="block text-gray-900">{t.hero.titleMain}</span>
                    <span className="block text-gray-400">{t.hero.titleMuted}</span>
                  </h1>

                  <p className="text-base sm:text-lg text-gray-500 mt-6 leading-relaxed max-w-2xl">
                    {t.hero.subtitle}
                  </p>

                  {/* Recruiter Quick Actions */}
                  <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-gray-100 text-xs sm:text-sm">
                    <a
                      href="mailto:contact@sibeliusclaussen.com"
                      className="text-gray-950 font-medium hover:text-gray-600 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>contact@sibeliusclaussen.com</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/sibeliusclaussen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-950 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>LinkedIn</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                    <a
                      href="https://www.figma.com/deck/IiCwf07g7U5hNEsfYYK6Hg/SibeliusClaussenPortfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-950 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>{t.hero.deck}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                    <a
                      href="/Sibelius-Claussen-Resume.pdf"
                      download="Sibelius-Claussen-Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-950 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>{t.hero.resume}</span>
                      <span aria-hidden="true">↓</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* ─── CLIENT & PARTNER LOGOS ─────────────────────────────── */}
            <CompanyLogos />

            {/* ─── CASES SECTION ──────────────────────────────────────── */}
            <section className="w-full py-16 md:py-24">
              <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
                <div className="max-w-2xl mb-14 md:mb-16">
                  <h2 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight">
                    <span className="block text-gray-900">{t.casesSection.titleMain}</span>
                    <span className="block text-gray-400">{t.casesSection.titleMuted}</span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
                  {localizedCases.map((caseStudy) => (
                    <CaseCard key={caseStudy.slug} caseStudy={caseStudy} />
                  ))}
                </div>
              </div>
            </section>

            {/* ─── SELF-INITIATED PRODUCTS & PROTOTYPING ──────────────── */}
            <AIExplorations />

            {/* ─── TESTIMONIALS ───────────────────────────────────────── */}
            <TestimonialsSection />

            {/* ─── FINAL STATEMENT & CONTACT ──────────────────────────── */}
            <section className="w-full border-t border-gray-100 py-20 md:py-28">
              <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
                <div className="max-w-2xl">
                  <h2 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight">
                    <span className="block text-gray-900">{t.closing.titleMain}</span>
                    <span className="block text-gray-400">{t.closing.titleMuted}</span>
                  </h2>
                  <p className="text-base text-gray-500 mt-5 max-w-xl leading-relaxed">
                    {t.closing.subtitle}
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-gray-400">
                    <a
                      href="mailto:contact@sibeliusclaussen.com"
                      className="text-gray-900 hover:text-gray-500 font-medium transition-colors"
                    >
                      contact@sibeliusclaussen.com
                    </a>
                    <span aria-hidden="true">·</span>
                    <a
                      href="https://linkedin.com/in/sibeliusclaussen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-900 transition-colors"
                    >
                      LinkedIn
                    </a>
                    <span aria-hidden="true">·</span>
                    <a
                      href="https://www.figma.com/deck/IiCwf07g7U5hNEsfYYK6Hg/SibeliusClaussenPortfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-900 transition-colors"
                    >
                      Figma Deck
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="artist-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col"
          >
            {/* ─── ARTIST HERO ─────────────────────────────────────────── */}
            <section className="w-full pt-16 md:pt-24 pb-14 md:pb-20">
              <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
                <div className="max-w-2xl">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.12] tracking-tight">
                    <span className="block text-gray-900">{art.heroMain}</span>
                    <span className="block text-gray-400">{art.heroMuted}</span>
                  </h1>
                </div>
              </div>
            </section>

            {/* ─── SEÇÃO 1 — Grid 2x2 (Fluxos desviados) ───────────────── */}
            <section className="w-full pb-16 md:pb-24">
              <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
                {section1.map((project) => (
                  <PhotoGrid key={project.slug} project={project} />
                ))}
              </div>
            </section>

            {/* ─── DIVIDER TEXT 1 ───────────────────────────────────────── */}
            <section className="w-full py-12 md:py-20">
              <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
                <div className="max-w-2xl">
                  <h2 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight">
                    <span className="block text-gray-900">{art.div1Main}</span>
                    <span className="block text-gray-400">{art.div1Muted}</span>
                  </h2>
                </div>
              </div>
            </section>

            {/* ─── SEÇÃO 2 — 5 experimentos (horizontal) ────────────────── */}
            <section className="w-full pb-16 md:pb-24">
              <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8">
                  {section2.map((project) => (
                    <ProjectCard
                      key={project.slug}
                      project={project}
                      layout="horizontal"
                      showCta={true}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* ─── DIVIDER TEXT 2 ───────────────────────────────────────── */}
            <section className="w-full py-12 md:py-20">
              <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
                <div className="max-w-2xl">
                  <h2 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight">
                    <span className="block text-gray-900">{art.div2Main}</span>
                    <span className="block text-gray-400">{art.div2Muted}</span>
                  </h2>
                </div>
              </div>
            </section>

            {/* ─── SEÇÃO 3 — Galeria assimétrica de fotos ───────────────── */}
            <section className="w-full pb-16 md:pb-24">
              <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                  {section3.map((project) => (
                    <ProjectCard
                      key={project.slug}
                      project={project}
                      layout="vertical"
                      showCta={false}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* ─── CTA FINAL ────────────────────────────────────────────── */}
            <section className="w-full border-t border-gray-100 py-20 md:py-28">
              <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
                <div className="max-w-2xl">
                  <h2 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight">
                    <span className="block text-gray-900">{art.ctaMain}</span>
                    <span className="block text-gray-400">{art.ctaMuted}</span>
                  </h2>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

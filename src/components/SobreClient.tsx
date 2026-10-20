"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale, UI_TEXT } from "@/context/LocaleContext";
import { usePersona } from "@/context/PersonaContext";

const ARTIST_ABOUT = {
  pt: {
    titleMain: "Sou Sibelius,",
    titleMuted: "criador multidisciplinar movido pela experimentação.",
    p1: "Fotografo mínimos fragmentos do cotidiano e transformo descartes em matéria-prima para novos sentidos. Entre arte, design e texto, cada processo é laboratório de descoberta: escolher materiais, testar técnicas e aceitar falhas como caminho.",
    p2: "A urgência de experimentar guia meu trabalho, conectando o instante à responsabilidade humana.",
    p3: "Aqui, revelo minha essência: um artista múltiplo, curioso e comprometido com a criação que questiona, transforma e conecta.",
    focusLabel: "Foco de pesquisa",
    focusValue: "Fotografia macro, upcycling, bioplásticos e sistemas circulares",
  },
  en: {
    titleMain: "I'm Sibelius,",
    titleMuted: "a multidisciplinary creator driven by experimentation.",
    p1: "I photograph tiny fragments of everyday life and turn discarded materials into raw matter for new meanings. Across art, design, and writing, every process is a laboratory of discovery: choosing materials, testing techniques, and embracing failure as part of the path.",
    p2: "The urgency to experiment guides my practice, connecting the present moment with human and material responsibility.",
    p3: "Here I share my essence: a curious, multifaceted artist committed to creation that questions, transforms, and connects.",
    focusLabel: "Research focus",
    focusValue: "Macro photography, upcycling, bioplastics & circular systems",
  },
  es: {
    titleMain: "Soy Sibelius,",
    titleMuted: "creador multidisciplinario movido por la experimentación.",
    p1: "Fotografío mínimos fragmentos de lo cotidiano y transformo descartes en materia prima para nuevos sentidos. Entre arte, diseño y texto, cada proceso es un laboratorio de descubrimiento: elegir materiales, probar técnicas y aceptar los fallos como camino.",
    p2: "La urgencia de experimentar guía mi trabajo, conectando el instante con la responsabilidad humana.",
    p3: "Aquí revelo mi esencia: un artista múltiple, curioso y comprometido con la creación que cuestiona, transforma y conecta.",
    focusLabel: "Foco de investigación",
    focusValue: "Fotografía macro, upcycling, bioplásticos y sistemas circulares",
  },
} as const;

export default function SobreClient() {
  const { locale } = useLocale();
  const { persona, setPersona } = usePersona();
  const t = UI_TEXT[locale].about;
  const art = ARTIST_ABOUT[locale];

  const isProduct = persona === "product";
  const portraitSrc = isProduct
    ? "/images/retrato-produto.jpg"
    : "/images/retrato.jpg";

  return (
    <div className="w-full py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 lg:gap-20 items-start">
          {/* Left — portrait & info */}
          <aside className="md:col-span-5 flex flex-col gap-8">
            <div className="relative w-full aspect-square md:aspect-[4/5] overflow-hidden bg-gray-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={portraitSrc}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={portraitSrc}
                    alt="Sibelius Claussen"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex flex-col gap-5 text-xs text-gray-500 pt-2 border-t border-gray-100">
              <div>
                <p className="font-mono text-gray-400 uppercase tracking-wider text-[11px]">
                  {t.locationLabel}
                </p>
                <p className="text-gray-900 mt-1 text-sm font-medium">
                  {t.locationValue}
                </p>
              </div>

              {isProduct ? (
                <>
                  <div>
                    <p className="font-mono text-gray-400 uppercase tracking-wider text-[11px]">
                      {t.roleLabel}
                    </p>
                    <p className="text-gray-900 mt-1 text-sm font-medium">
                      {t.roleValue}
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5">{t.roleSub}</p>
                  </div>
                  <div>
                    <p className="font-mono text-gray-400 uppercase tracking-wider text-[11px]">
                      {t.educationLabel}
                    </p>
                    <p className="text-gray-900 mt-1 text-sm font-medium">
                      {t.educationValue}
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5">{t.educationSub1}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{t.educationSub2}</p>
                  </div>
                  <div>
                    <p className="font-mono text-gray-400 uppercase tracking-wider text-[11px]">
                      {t.languagesLabel}
                    </p>
                    <p className="text-gray-900 mt-1 text-sm font-medium">
                      {t.languagesValue}
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5">{t.languagesSub}</p>
                  </div>
                  <div>
                    <p className="font-mono text-gray-400 uppercase tracking-wider text-[11px]">
                      {t.awardsLabel}
                    </p>
                    <p className="text-gray-900 mt-1 text-sm font-medium">
                      {t.awardsValue}
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5">{t.awardsSub}</p>
                  </div>
                </>
              ) : (
                <div>
                  <p className="font-mono text-gray-400 uppercase tracking-wider text-[11px]">
                    {art.focusLabel}
                  </p>
                  <p className="text-gray-900 mt-1 text-sm font-medium">
                    {art.focusValue}
                  </p>
                </div>
              )}

              <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
                <a
                  href="mailto:contact@sibeliusclaussen.com"
                  className="text-gray-900 hover:text-gray-500 font-medium transition-colors inline-flex items-center justify-between py-0.5"
                >
                  <span>contact@sibeliusclaussen.com</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://linkedin.com/in/sibeliusclaussen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-950 transition-colors inline-flex items-center justify-between py-0.5"
                >
                  <span>LinkedIn</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://github.com/sibeliusclaussen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-950 transition-colors inline-flex items-center justify-between py-0.5"
                >
                  <span>GitHub</span>
                  <span aria-hidden="true">↗</span>
                </a>
                {isProduct && (
                  <>
                    <a
                      href="https://www.figma.com/deck/IiCwf07g7U5hNEsfYYK6Hg/SibeliusClaussenPortfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-950 transition-colors inline-flex items-center justify-between py-0.5"
                    >
                      <span>{t.deckLink}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                    <a
                      href="/Sibelius-Claussen-Resume.pdf"
                      download="Sibelius-Claussen-Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-950 transition-colors inline-flex items-center justify-between py-0.5"
                    >
                      <span>{t.resumeLink}</span>
                      <span aria-hidden="true">↓</span>
                    </a>
                  </>
                )}
              </div>
            </div>
          </aside>

          {/* Right — narrative */}
          <main className="md:col-span-7 flex flex-col gap-8">
            <AnimatePresence mode="wait">
              {isProduct ? (
                <motion.div
                  key="about-product"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-8"
                >
                  <h1 className="text-4xl sm:text-5xl font-semibold leading-[1.15] tracking-tight">
                    <span className="block text-gray-900">{t.titleMain}</span>
                    <span className="block text-gray-400">{t.titleMuted}</span>
                  </h1>

                  <div className="space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
                    <p>{t.p1}</p>

                    <p>{t.p2}</p>

                    <blockquote className="border-l-2 border-gray-900 pl-6 py-2 my-4 text-gray-800 italic leading-relaxed">
                      {t.quote}
                    </blockquote>

                    <p>{t.p3}</p>

                    <p className="text-gray-800 font-medium pt-2">{t.closing}</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="about-artist"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-8"
                >
                  <h1 className="text-4xl sm:text-5xl font-semibold leading-[1.15] tracking-tight">
                    <span className="block text-gray-900">{art.titleMain}</span>
                    <span className="block text-gray-400">{art.titleMuted}</span>
                  </h1>

                  <div className="space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
                    <p>{art.p1}</p>
                    <p>{art.p2}</p>
                    <p className="text-gray-800 font-medium pt-2">{art.p3}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="pt-8 border-t border-gray-100 flex flex-wrap items-center gap-8 text-sm">
              <Link
                href="/?mode=product"
                onClick={() => setPersona("product")}
                className="text-gray-900 hover:text-gray-500 font-medium transition-colors inline-flex items-center gap-1.5"
              >
                <span>{t.ctaCases}</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/?mode=artist"
                onClick={() => setPersona("artist")}
                className="text-gray-500 hover:text-gray-900 transition-colors inline-flex items-center gap-1.5"
              >
                <span>{t.ctaArt}</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

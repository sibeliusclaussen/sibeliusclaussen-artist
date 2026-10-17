"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clientLogos } from "@/data/cases";
import { useLocale, UI_TEXT } from "@/context/LocaleContext";

export default function CompanyLogos() {
  const { locale } = useLocale();
  const t = UI_TEXT[locale].logos;

  // Duplicamos a lista para criar o loop contínuo perfeito sem saltos
  const marqueeItems = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="w-full border-t border-b border-gray-100 py-10 md:py-14 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="flex flex-col gap-7">
          {/* Legenda em linha própria acima do slider */}
          <p className="text-xs text-gray-400 font-mono tracking-tight">
            {t.caption}
          </p>

          {/* Slider contínuo em linha única com máscara suave nas bordas */}
          <div
            className="relative w-full overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
          >
            <motion.div
              className="flex items-center gap-14 sm:gap-20 w-max"
              animate={{ x: ["0%", "-33.333%"] }}
              transition={{
                duration: 26,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {marqueeItems.map((client, idx) => (
                <div
                  key={`${client.name}-${idx}`}
                  className="relative h-6 w-28 shrink-0 flex items-center justify-center opacity-55 hover:opacity-100 grayscale hover:grayscale-0 transition-opacity duration-200"
                  title={client.name}
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    sizes="112px"
                    className="object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { CaseStudy } from "@/data/cases";
import { useLocale, UI_TEXT } from "@/context/LocaleContext";

interface CaseCardProps {
  caseStudy: CaseStudy;
  featured?: boolean;
}

export default function CaseCard({ caseStudy }: CaseCardProps) {
  const { locale } = useLocale();
  const t = UI_TEXT[locale].casesSection;
  const href = `/cases/${caseStudy.slug}`;

  return (
    <article className="flex flex-col gap-4 group">
      <Link
        href={href}
        className="block relative w-full aspect-[16/10] bg-gray-100 overflow-hidden"
      >
        <Image
          src={caseStudy.coverImage}
          alt={caseStudy.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
          <span className="font-sans font-medium text-gray-900 uppercase tracking-wider text-[11px]">
            {caseStudy.client}
          </span>
          <span className="text-gray-900 font-semibold bg-gray-100/90 px-2 py-0.5 rounded-xs text-[11px]">
            {caseStudy.keyMetric.value}
          </span>
        </div>

        <h3 className="text-xl font-medium tracking-tight text-gray-900 leading-snug group-hover:text-gray-600 transition-colors">
          <Link href={href} className="focus:outline-hidden">
            {caseStudy.title}
          </Link>
        </h3>

        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
          {caseStudy.subtitle}
        </p>

        <div className="pt-2">
          <Link
            href={href}
            className="text-xs font-medium text-gray-900 hover:text-gray-500 transition-colors inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
          >
            <span>{t.readCase}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

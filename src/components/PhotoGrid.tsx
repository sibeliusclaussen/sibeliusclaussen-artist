"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

/**
 * Grid 2×2 de fotos quadradas para o destaque de uma coleção.
 * Exibe as primeiras 4 imagens do projeto lado a lado.
 */
export default function PhotoGrid({ project }: { project: Project }) {
  const href = `/experimentos/${project.category}/${project.slug}`;
  const images = project.images.slice(0, 4);

  return (
    <div className="flex flex-col gap-3">
      {/* 2x2 grid */}
      <Link href={href} className="block group">
        <div className="grid grid-cols-2 gap-1">
          {images.map((src, i) => (
            <div key={i} className="relative aspect-square overflow-hidden bg-gray-100">
              <Image
                src={src}
                alt={`${project.title} — imagem ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 50vw, 33vw"
                priority={i < 2}
              />
            </div>
          ))}
        </div>
      </Link>

      {/* Caption */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-0.5">
          <p className="text-sm font-medium text-gray-900">
            {project.title}, {project.year}
          </p>
          <p className="text-xs text-gray-400">
            {project.tags.map((t) => `#${t}`).join(" ")}
          </p>
        </div>
        <Link
          href={href}
          className="text-xs text-gray-900 hover:text-gray-500 transition-colors whitespace-nowrap inline-flex items-center gap-1 shrink-0"
        >
          {project.cta} <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}

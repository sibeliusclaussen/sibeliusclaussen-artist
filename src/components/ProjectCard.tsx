import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  /**
   * "horizontal" — imagem pequena acima, texto abaixo (4-col grid da home)
   * "vertical" — imagem tall, texto abaixo (grid assimétrico)
   */
  layout?: "horizontal" | "vertical";
  showCta?: boolean;
};

export default function ProjectCard({
  project,
  layout = "horizontal",
  showCta = true,
}: ProjectCardProps) {
  const href = `/experimentos/${project.category}/${project.slug}`;

  return (
    <div className="flex flex-col gap-2">
      {/* Image */}
      <Link href={href} className="block overflow-hidden group">
        <div
          className={`relative w-full bg-gray-100 overflow-hidden ${
            layout === "vertical" ? "aspect-[3/4]" : "aspect-square"
          }`}
        >
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
      </Link>

      {/* Metadata */}
      <div className="flex flex-col gap-0.5">
        <p className="text-sm font-medium text-gray-900">
          {project.title}
          {layout === "horizontal" && (
            <span className="text-gray-400">, {project.year}</span>
          )}
        </p>
        <p className="text-xs text-gray-400">
          {project.tags.map((t) => `#${t}`).join(" ")}
        </p>
        {showCta && (
          <Link
            href={href}
            className="text-xs text-gray-900 hover:text-gray-500 transition-colors mt-0.5 inline-flex items-center gap-1"
          >
            {project.cta} <span aria-hidden>→</span>
          </Link>
        )}
      </div>
    </div>
  );
}

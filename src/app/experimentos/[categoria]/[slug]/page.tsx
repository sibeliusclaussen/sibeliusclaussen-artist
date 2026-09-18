import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Carousel from "@/components/Carousel";
import { projects, getProjectBySlug } from "@/data/projects";

type Props = {
  params: Promise<{ categoria: string; slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({
    categoria: p.category,
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title}, ${project.year} | Sibelius Claussen`,
    description: `${project.title} — ${project.tags.map((t) => `#${t}`).join(" ")}`,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <div className="flex flex-col items-center px-8 py-16">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
          <span className="text-gray-900">{project.title},</span>{" "}
          <span className="text-gray-400">{project.year}</span>
        </h1>
        <p className="mt-3 text-base text-gray-400">
          {project.tags.map((t) => `#${t}`).join(" ")}
        </p>
      </div>

      {/* Carousel */}
      <div className="w-full max-w-2xl">
        <Carousel images={project.images} title={project.title} />
      </div>
    </div>
  );
}

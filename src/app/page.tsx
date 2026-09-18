import PhotoGrid from "@/components/PhotoGrid";
import ProjectCard from "@/components/ProjectCard";
import { getProjectsBySection } from "@/data/projects";

export default function HomePage() {
  const section1 = getProjectsBySection(1); // Fluxos desviados (grid 2x2)
  const section2 = getProjectsBySection(2); // 4 experimentos horizontais
  const section3 = getProjectsBySection(3); // galeria de fotos assimétrica

  return (
    <div className="flex flex-col">
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="px-8 pt-12 pb-10 max-w-lg">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
          <span className="text-gray-900">Sou Sibelius,</span>{" "}
          <span className="text-gray-400">
            um multi-artista que vive de experimentação em Teresópolis, RJ.
          </span>
        </h1>
      </section>

      {/* ─── SEÇÃO 1 — Grid 2x2 (Fluxos desviados) ───────────────── */}
      <section className="px-8 pb-16">
        {section1.map((project) => (
          <PhotoGrid key={project.slug} project={project} />
        ))}
      </section>

      {/* ─── DIVIDER TEXT 1 ───────────────────────────────────────── */}
      <section className="px-8 py-10 max-w-xl">
        <h2 className="text-3xl md:text-4xl font-semibold leading-snug tracking-tight">
          <span className="text-gray-900">
            Tudo surge da mão com observação,
          </span>{" "}
          <span className="text-gray-400">
            de fragmentos despercebidos e de resíduos que questionam o consumo.
          </span>
        </h2>
      </section>

      {/* ─── SEÇÃO 2 — 4 experimentos (horizontal) ────────────────── */}
      <section className="px-8 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {section2.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              layout="horizontal"
              showCta={true}
            />
          ))}
        </div>
      </section>

      {/* ─── DIVIDER TEXT 2 ───────────────────────────────────────── */}
      <section className="px-8 py-10 max-w-xl">
        <h2 className="text-3xl md:text-4xl font-semibold leading-snug tracking-tight">
          <span className="text-gray-900">Entre arte, design e palavra,</span>{" "}
          <span className="text-gray-400">
            exploro processos como linguagem e reinvento técnicas para descobrir
            novos sentidos.
          </span>
        </h2>
      </section>

      {/* ─── SEÇÃO 3 — Galeria assimétrica de fotos ───────────────── */}
      <section className="px-8 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {section3.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              layout="vertical"
              showCta={
                project.slug === "conchoza-2025" ||
                project.slug === "reflexo-fit-2025"
                  ? false
                  : false
              }
            />
          ))}
        </div>
      </section>

      {/* ─── CTA FINAL ────────────────────────────────────────────── */}
      <section className="px-8 py-16 text-center max-w-lg mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold leading-snug tracking-tight">
          <span className="text-gray-900">Crio para capturar o agora</span>
          <br />
          <span className="text-gray-400">
            conectando consciência e matéria.
          </span>
        </h2>
      </section>
    </div>
  );
}

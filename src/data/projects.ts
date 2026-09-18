// Projetos do Sibelius Claussen

export type Project = {
  slug: string;
  title: string;
  year: string;
  tags: string[];
  category: "fotografia" | "experimental" | "produto" | "material";
  images: string[];
  cta: "Acessar coleção" | "Acessar experimento";
  featured?: boolean; // aparece na home como destaque
  homeSectionIndex?: 1 | 2 | 3; // qual seção da home
};

export const projects: Project[] = [
  {
    slug: "fluxos-desviados-2025",
    title: "Fluxos desviados",
    year: "2025",
    tags: ["fotografia", "arteurbana"],
    category: "fotografia",
    images: [
      "/images/fluxos-01.jpg",
      "/images/fluxos-02.jpg",
      "/images/fluxos-03.jpg",
      "/images/fluxos-04.jpg",
    ],
    cta: "Acessar coleção",
    featured: true,
    homeSectionIndex: 1,
  },
  {
    slug: "petlastic-2021",
    title: "Petlastic",
    year: "2021",
    tags: ["experimental", "processos"],
    category: "experimental",
    images: ["/images/petlastic.jpg"],
    cta: "Acessar experimento",
    featured: true,
    homeSectionIndex: 2,
  },
  {
    slug: "folha-de-palmeira-2020",
    title: "Folha de palmeira",
    year: "2020",
    tags: ["material", "produto"],
    category: "material",
    images: ["/images/folha-palmeira.jpg"],
    cta: "Acessar experimento",
    featured: true,
    homeSectionIndex: 2,
  },
  {
    slug: "rupex-2020",
    title: "Rupex",
    year: "2020",
    tags: ["produto", "economiacircular"],
    category: "produto",
    images: ["/images/rupex.jpg"],
    cta: "Acessar experimento",
    featured: true,
    homeSectionIndex: 2,
  },
  {
    slug: "bended-cup-2019",
    title: "Bended Cup",
    year: "2019",
    tags: ["experimental", "estudos"],
    category: "experimental",
    images: ["/images/bended-cup.jpg"],
    cta: "Acessar experimento",
    featured: true,
    homeSectionIndex: 2,
  },
  {
    slug: "reflexo-fit-2025",
    title: "Reflexo Fit",
    year: "2025",
    tags: ["fotografia", "macro"],
    category: "fotografia",
    images: ["/images/reflexo-fit.jpg"],
    cta: "Acessar coleção",
    featured: true,
    homeSectionIndex: 3,
  },
  {
    slug: "conchoza-2025",
    title: "Conchoza",
    year: "2025",
    tags: ["fotografia", "macro"],
    category: "fotografia",
    images: ["/images/conchoza.jpg"],
    cta: "Acessar coleção",
    featured: true,
    homeSectionIndex: 3,
  },
  {
    slug: "ledluziando-2025",
    title: "Ledluziando",
    year: "2025",
    tags: ["fotografia", "arteurbana", "macro"],
    category: "fotografia",
    images: ["/images/ledluziando.jpg"],
    cta: "Acessar coleção",
    featured: true,
    homeSectionIndex: 3,
  },
  {
    slug: "quadrantes-quadraticos-2024",
    title: "Quadrantes quadráticos",
    year: "2024",
    tags: ["fotografia", "arteurbana"],
    category: "fotografia",
    images: ["/images/quadrantes.jpg"],
    cta: "Acessar coleção",
    featured: true,
    homeSectionIndex: 3,
  },
  {
    slug: "por-do-ceu-2023",
    title: "Pôr do Céu",
    year: "2023",
    tags: ["fotografia", "paisagem", "natureza"],
    category: "fotografia",
    images: ["/images/por-do-ceu.jpg"],
    cta: "Acessar coleção",
    featured: true,
    homeSectionIndex: 3,
  },
  {
    slug: "cano-de-luz-2023",
    title: "Cano de luz",
    year: "2023",
    tags: ["fotografia", "macro"],
    category: "fotografia",
    images: ["/images/cano-de-luz.jpg"],
    cta: "Acessar coleção",
    featured: true,
    homeSectionIndex: 3,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsBySection(section: 1 | 2 | 3): Project[] {
  return projects.filter((p) => p.homeSectionIndex === section);
}

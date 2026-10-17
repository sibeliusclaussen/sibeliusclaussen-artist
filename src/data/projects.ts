// Projetos do Sibelius Claussen

export type ProjectContent = {
  summary: string;
  paragraphs: string[];
};

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
  content?: {
    pt: ProjectContent;
    en: ProjectContent;
    es: ProjectContent;
  };
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
    slug: "relupa-2020",
    title: "Relupa",
    year: "2020",
    tags: ["produto", "economiacircular"],
    category: "produto",
    images: [
      "/images/rupex.jpg",
      "/images/relupa/relupa-07.png",
      "/images/relupa/relupa-06.png",
      "/images/relupa/relupa-04.png",
      "/images/relupa/relupa-05.png",
      "/images/relupa/relupa-02.png",
      "/images/relupa/relupa-01.png",
    ],
    cta: "Acessar experimento",
    featured: true,
    homeSectionIndex: 2,
    content: {
      pt: {
        summary:
          "Sistema de encaixe easy-to-fix para reviver armações de óculos quebradas, facilitando a montagem pelo próprio usuário com materiais acessíveis e reaproveitados.",
        paragraphs: [
          "Em conversas com diferentes pessoas, ficou evidente um padrão recorrente: armações de óculos descartadas por quebras exatamente no mesmo ponto — a charneira (o sistema metálico de abrir e fechar). Eu mesmo tinha 4 armações paradas que haviam quebrado nesse mesmo local.",
          "O projeto começou com pesquisa desk sobre sistemas de encaixe e rotação (living hinges e snap-fits) e modelagem 3D para impressão em uma Creality CR10. Quando os testes de impressão mostraram limitações mecânicas para a charneira em escala reduzida, decidi sair do ambiente digital e voltar para a bancada física com os materiais disponíveis ao redor.",
          "Explorando alternativas cilíndricas que se conectassem diretamente à furação original da armação, encontrei no hashi de bambu a geometria ideal para travar a haste sem parafusos. Para criar a curvatura ergonômica e flexível atrás das orelhas, reaproveitei molas retiradas de uma impressora desmontada.",
          "Além do artefato físico, o Relupa foi pensado como um sistema circular: o usuário fornece sua armação quebrada para reajuste manual ou troca por outra armação recuperada a um custo acessível.",
        ],
      },
      en: {
        summary:
          "An easy-to-fix snap-fit system designed to revive broken eyeglass frames, enabling self-assembly using accessible and upcycled materials.",
        paragraphs: [
          "Through conversations with multiple eyeglass wearers, a clear pattern emerged: frames were constantly discarded due to breaking at the exact same point — the metal hinge. I personally had 4 frames sitting in a drawer, all broken at the hinge.",
          "The project began with desk research into living hinges and rotational snap-fit joints, followed by 3D modeling and printing tests on a Creality CR10. When 3D-printed micro-hinges proved mechanically fragile, I stepped away from the screen and returned to physical bench prototyping using everyday materials around me.",
          "Looking for a cylindrical profile that could lock directly into the frame's existing hinge hole without screws, I tested bamboo chopsticks and found a natural friction fit. To create the flexible ear hook at the end of the temple, I upcycled tension springs salvaged from a disassembled printer.",
          "Beyond the physical object, Relupa was conceived as a circular service model: users can send in broken frames for custom refitting or trade them in for another recovered frame at an accessible price.",
        ],
      },
      es: {
        summary:
          "Sistema de encaje easy-to-fix para revivir monturas de gafas rotas, facilitando el ensamblaje por el propio usuario con materiales accesibles y reutilizados.",
        paragraphs: [
          "Al conversar con varias personas, surgió un patrón claro: monturas descartadas por romperse exactamente en el mismo punto — la bisagra metálica. Yo mismo tenía 4 monturas guardadas que se habían roto en ese mismo lugar.",
          "El proyecto comenzó con investigación desk sobre sistemas de encaje y rotación (living hinges) y modelado 3D para impresión en una Creality CR10. Cuando las pruebas de impresión mostraron limitaciones mecánicas, decidí salir del entorno digital y volver al taller físico con los materiales disponibles a mi alrededor.",
          "Buscando una forma cilíndrica que se conectara directamente al orificio original de la montura, encontré en los palillos de bambú (hashi) el ajuste perfecto de unión. Para lograr la curvatura flexible detrás de las orejas, reutilicé resortes recuperados de una impresora desmontada.",
          "Más allá del objeto físico, Relupa fue pensado como un modelo circular: el usuario entrega su montura rota para reajuste o la intercambia por otra montura recuperada a un precio accesible.",
        ],
      },
    },
  },
  {
    slug: "bended-cup-2019",
    title: "Bended Cup",
    year: "2019",
    tags: ["experimental", "estudos"],
    category: "experimental",
    images: [
      "/images/bended-cup.jpg",
      "/images/bended-cup/bended-cup-02.png",
      "/images/bended-cup/bended-cup-01.png",
    ],
    cta: "Acessar experimento",
    featured: true,
    homeSectionIndex: 2,
    content: {
      pt: {
        summary:
          "Estudo de tensão, vinco e recontextualização formal a partir da deformação mecânica de um copo descartável, gerando movimento pendular contínuo.",
        paragraphs: [
          "Durante a apresentação de um projeto de pesquisa, dobrei um copo descartável da mesma forma que sempre faço, mas observando o gesto sob a ótica de recontextualização e limites de força e dobra do material.",
          "Ao dobrar o copo em apenas uma de suas partes, a tensão do vinco deforma a estrutura e arredonda suas extremidades superior e inferior. Apoiado sobre uma superfície lisa e estimulado com força lateral, o objeto passa a executar o movimento natural de um pêndulo.",
          "O balanço e a silhueta gerada ativaram imediatamente memórias de infância — o hábito de dormir em redes e a história da minha mãe usando uma poltrona como berço de ninar. A partir dessa cena, enxerguei o potencial de um artefato simples de reconhecimento imediato.",
          "Ao abrir o experimento para associação livre com outras pessoas, surgiram novos caminhos para desdobrar o mesmo princípio físico e formal em diferentes escalas e materiais: berço de ninar, banquinho dinâmico, misturador e timer mecânico de cozinha.",
        ],
      },
      en: {
        summary:
          "A study on tension, creasing, and formal recontextualization through the mechanical deformation of a disposable cup, generating continuous pendulum motion.",
        paragraphs: [
          "During a research presentation, I found myself folding a disposable plastic cup in my hand as I often do — but this time observing it through the lens of material limits, tension, and formal recontextualization.",
          "By creasing the cup along a single axis, the structural tension rounds out both its top and bottom edges. When placed on a flat surface and nudged from the side, the deformed geometry naturally acts as a pendulum.",
          "Both the rocking motion and the resulting silhouette triggered a childhood memory of sleeping in hammocks, along with my mother's story of using an armchair as a rocking crib. That association revealed how a minimal fold could immediately suggest a recognizable function.",
          "When I shared the prototype with others to gather open associations, new product directions emerged from the same kinetic principle: a rocking crib, a dynamic stool, a mixer, and a mechanical kitchen timer.",
        ],
      },
      es: {
        summary:
          "Estudio de tensión, pliegue y recontextualización formal a partir de la deformación mecánica de un vaso descartable, generando un movimiento pendular continuo.",
        paragraphs: [
          "Durante la presentación de un proyecto de investigación, doblé un vaso descartable en mi mano como suelo hacer, pero observándolo desde la perspectiva de la recontextualización y los límites de fuerza y pliegue del material.",
          "Al doblar el vaso en solo una de sus partes, la tensión del pliegue deforma la estructura y redondea sus extremos superior e inferior. Al apoyarlo sobre una superficie lisa y aplicar fuerza lateral, el objeto describe el movimiento natural de un péndulo.",
          "El balanceo y la forma generada activaron recuerdos de infancia — dormir en hamacas y la historia de mi madre usando un sillón como cuna mecedora — revelando la posibilidad de crear un producto simple y de reconocimiento inmediato.",
          "Al compartir el experimento con otras personas para explorar nuevas asociaciones, surgieron distintos caminos de aplicación para el mismo principio formal y cinético: cuna mecedora, taburete dinámico, mezclador y temporizador de cocina.",
        ],
      },
    },
  },
  {
    slug: "dumix-2017",
    title: "Dumix",
    year: "2017",
    tags: ["produto", "pesquisa"],
    category: "produto",
    images: [
      "/images/dumix/dumix-01.jpg",
      "/images/dumix/dumix-02.jpg",
      "/images/dumix/dumix-05.jpg",
      "/images/dumix/dumix-03.jpg",
      "/images/dumix/dumix-04.jpg",
      "/images/dumix/dumix-06.jpg",
      "/images/dumix/dumix-07.jpg",
    ],
    cta: "Acessar experimento",
    featured: true,
    homeSectionIndex: 2,
    content: {
      pt: {
        summary:
          "Coqueteleira acessível projetada para ajudar iniciantes a prepararem drinks em casa com facilidade, mesmo sem prática prévia.",
        paragraphs: [
          "O projeto nasceu de uma pesquisa de mercado no universo de coquetelaria, onde identificamos uma lacuna clara: os utensílios existentes eram desenhados para profissionais, sem foco na curva de aprendizado de amadores.",
          "Para traduzir a técnica profissional em passos simples, observamos e entrevistamos 5 bartenders especialistas durante o preparo de coquetéis, mapeando métodos, ferramentas e análise de tarefa. Essa investigação revelou 5 ações recorrentes responsáveis pela execução de pelo menos 10 dos drinks mais conhecidos do mundo.",
          "A Dumix materializa essas 5 ações em um único objeto intuitivo: copo dosador graduado (ml e oz), socador (muddler) em madeira integrado ao eixo central e coador acoplado com vedação em rosca, guiando o usuário iniciante do preparo à finalização.",
        ],
      },
      en: {
        summary:
          "An accessible cocktail shaker designed to help beginners easily prepare drinks at home, even without prior bartending practice.",
        paragraphs: [
          "The project started with desk research across the cocktail equipment market, revealing that existing tools were built for seasoned bartenders rather than amateurs learning at home.",
          "To bridge that gap, I observed and interviewed five expert bartenders in action, conducting a task analysis of their methods and tools. This research uncovered 5 core actions that consistently appeared across the preparation of at least 10 of the world's classic cocktails.",
          "Dumix translates those 5 actions into an intuitive, all-in-one physical system: a graduated measuring base (ml and oz), a wooden muddler integrated into the central core, and a built-in strainer ring — making home mixology approachable step by step.",
        ],
      },
      es: {
        summary:
          "Coctelera accesible diseñada para ayudar a principiantes a preparar cócteles en casa de forma sencilla, incluso sin práctica previa.",
        paragraphs: [
          "El proyecto comenzó con una investigación en el mercado de la coctelería, identificando que las herramientas existentes estaban pensadas para profesionales y no para principiantes en casa.",
          "Para traducir la técnica experta en pasos accesibles, observamos y entrevistamos a 5 bartenders profesionales mientras preparaban bebidas. El análisis de tareas reveló 5 acciones recurrentes responsables de producir al menos 10 de los mejores cócteles del mundo.",
          "Dumix convierte esas 5 acciones en un sistema físico intuitivo todo en uno: vaso medidor graduado (ml y oz), mortero de madera integrado en el eje central y colador acoplado.",
        ],
      },
    },
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
  const normalizedSlug = slug === "rupex-2020" ? "relupa-2020" : slug;
  return projects.find((p) => p.slug === normalizedSlug);
}

export function getProjectsBySection(section: 1 | 2 | 3): Project[] {
  return projects.filter((p) => p.homeSectionIndex === section);
}

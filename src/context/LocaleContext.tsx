"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Locale = "pt" | "en" | "es";

interface LocaleContextType {
  locale: Locale;
  setLocale: (lang: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

function detectBrowserLocale(): Locale {
  if (typeof window === "undefined") return "pt";
  const languages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  for (const raw of languages) {
    const code = (raw || "").toLowerCase();
    if (code.startsWith("pt")) return "pt";
    if (code.startsWith("es")) return "es";
    if (code.startsWith("en")) return "en";
  }
  return "en";
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get("lang")?.toLowerCase();

    let resolved: Locale;
    if (langParam === "pt" || langParam === "en" || langParam === "es") {
      resolved = langParam;
      localStorage.setItem("sibelius_locale", resolved);
    } else {
      const saved = localStorage.getItem("sibelius_locale") as Locale | null;
      if (saved === "pt" || saved === "en" || saved === "es") {
        resolved = saved;
      } else {
        resolved = detectBrowserLocale();
      }
    }

    setLocaleState(resolved);
    document.documentElement.lang =
      resolved === "pt" ? "pt-BR" : resolved === "en" ? "en-US" : "es";
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    localStorage.setItem("sibelius_locale", next);
    document.documentElement.lang =
      next === "pt" ? "pt-BR" : next === "en" ? "en-US" : "es";

    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.history.replaceState({}, "", url.toString());
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}

export const UI_TEXT = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      product: "Produto",
      art: "Arte & Lab",
      switcherTitle: "Alternar entre Produto e Arte & Lab (Atalho: tecla M)",
    },
    hero: {
      role: "Principal & Senior Product Designer",
      years: "14+ anos",
      domains: "SaaS, B2B, Fintech & Growth",
      titleMain: "14 anos desenhando produtos digitais",
      titleMuted: "que destravam receita e eliminam atrito operacional.",
      subtitle:
        "Liderança de design do diagnóstico ao código em produção. Histórico comprovado escalando conversão, retenção e sistemas de design em startups e empresas de tecnologia.",
      deck: "Figma Slide Deck",
      resume: "Currículo (PDF)",
      heatmapTitle: "350 contribuições no último ano",
      heatmapSubtitle: "Atividade no GitHub",
      heatmapNoContrib: "Nenhuma contribuição em",
      heatmapOneContrib: "1 contribuição em",
      heatmapMultiContrib: "contribuições em",
      heatmapLess: "Menos",
      heatmapMore: "Mais",
      heatmapLearnMore: "Ver repositórios & atividade no GitHub",
      puzzleHarmony: "harmonia",
      puzzleHint: "troque as cores fora do lugar",
      puzzleLevel: "nível",
      puzzleComplete: "em harmonia",
      puzzleNextLevel: "jogar nível",
      puzzleSolve: "alinhar",
      puzzleTrigger: "modo game",
      puzzleClose: "fechar",
    },
    logos: {
      caption: "Parcerias e produtos desenvolvidos em mais de 14 anos:",
    },
    casesSection: {
      titleMain: "Estudos de caso selecionados,",
      titleMuted: "do diagnóstico de negócio ao impacto mensurável em produção.",
      readCase: "Ver estudo de caso",
    },
    initiativesSection: {
      titleMain: "Iniciativas próprias & prototipagem,",
      titleMuted: "projetos autorais tirados do papel do zero ao código.",
      subtitle:
        "Produtos independentes, ferramentas internas e explorações que construo por conta própria para testar novas arquiteturas e resolver problemas reais.",
      githubCta: "Ver repositórios e contribuições no GitHub",
      githubContributionsTitle: "Últimas contribuições de código",
      githubLiveBadge: "Atividade recente",
      githubViewAll: "Ver perfil e repositórios no GitHub",
    },
    testimonialsSection: {
      titleMain: "Encontros & parcerias,",
      titleMuted: "o que dizem as pessoas que dividiram a trincheira de produto lado a lado.",
      subtitle:
        "Relações de confiança construídas com fundadores, lideranças de produto e engenharia ao longo dos projetos.",
    },
    closing: {
      titleMain: "Talvez o design seja menos sobre preencher o espaço",
      titleMuted: "e mais sobre entender o que já está vivo ali.",
      subtitle:
        "Se você tem um problema complexo que precisa de clareza antes do clique, a conversa começa aqui.",
    },
    caseDetail: {
      back: "Voltar aos estudos de caso",
      role: "Papel",
      duration: "Duração",
      client: "Cliente",
      year: "Ano",
      tldrBadge: "Resumo Executivo · Leitura em 15s",
      problemLabel: "Problema: ",
      actionLabel: "Atuação: ",
      resultLabel: "Resultado: ",
      keyMetricLabel: "Principal Indicador",
      contextHeading: "Contexto & Problema",
      challengeHeading: "O Desafio",
      tradeoffsHeading: "Decisão & Trade-off de Produto",
      processHeading: "Processo & Descoberta",
      galleryHeading: "Arquitetura de Telas & Interfaces",
      resultsHeading: "Impacto & Resultados",
      takeawaysBadge: "Aprendizado",
      liveLink: "Acessar plataforma no ar",
      figmaLink: "Ver documentação no Figma",
      nextCaseBadge: "Próximo estudo de caso",
    },
    about: {
      locationLabel: "Localização",
      locationValue: "Teresópolis, Serra dos Órgãos, RJ",
      roleLabel: "Atuação & Direção",
      roleValue: "Diretor Criativo & de Inovação na Redesenhe",
      roleSub: "Principal Product Designer · 14+ anos em produto",
      educationLabel: "Formação & Raízes",
      educationValue: "Desenho Industrial — PUC-Rio (2012–2017)",
      educationSub1: "20 anos de teatro e dramaturgia no palco",
      educationSub2: "Travessia Brasil e Uruguai em Kombi",
      languagesLabel: "Idiomas",
      languagesValue: "Português · Inglês · Espanhol",
      languagesSub: "Fluência profissional completa",
      awardsLabel: "Reconhecimentos",
      awardsValue: "Selo Iniciativa Jovem Shell",
      awardsSub: "Mentoria Camila Farani (Shark Tank)",
      deckLink: "Apresentação no Figma Deck",
      resumeLink: "Currículo (PDF)",
      titleMain: "A pesquisa revisita,",
      titleMuted: "o design constrói.",
      p1: "Sou graduado em Desenho Industrial pela PUC-Rio, Diretor Criativo e de Inovação na Redesenhe e atuo há mais de 14 anos desenhando produtos digitais em SaaS, Fintech, Educação e Big Data. Ao longo dessa trajetória, liderei projetos que destravaram resultados diretos de negócio — como reduzir em 80% o abandono de campanhas na APOIA.se e expandir em 52% a receita B2B da Quaddro.",
      p2: "Mas quase tudo o que aplico em arquitetura de software veio de dois lugares fora da tela: vinte anos de palco no teatro e a oficina física. No teatro, aprendi que se você tenta impor um texto sem escutar a respiração da sala, a atenção quebra. Num produto digital, acontece o mesmo: quem senta diante de um fluxo complexo de pagamento ou gestão traz a pressa e o cansaço do dia. Design não é enfeitar o botão; é preparar o solo para que a pessoa não trave no meio do caminho.",
      quote:
        "Viajar pelo Brasil e pelo Uruguai numa Kombi me ensinou sobre o que é palpável. Na estrada de terra, o que não funciona na prática quebra na primeira curva. Não cabe defender uma hipótese bonita no Figma se ela não aguenta o atrito do uso real.",
      p3: "Hoje, em Teresópolis, mantenho meu laboratório de pesquisa material e fabricação digital — trabalho reconhecido com o Selo Iniciativa Jovem da Shell e mentoria de Camila Farani — enquanto estudo relações harmônicas no violão de nylon pelo sistema CAGED. Para mim, a física dos materiais e a lógica das interfaces respondem à mesma pergunta.",
      closing:
        "Talvez o bom design seja justamente aquele que resolve a complexidade nos bastidores e sabe a hora de sair do caminho para deixar a ação acontecer.",
      ctaCases: "Ver projetos & estudos de caso",
      ctaArt: "Conhecer a pesquisa material & lab",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      product: "Product",
      art: "Art & Lab",
      switcherTitle: "Switch between Product and Art & Lab (Shortcut: M key)",
    },
    hero: {
      role: "Principal & Senior Product Designer",
      years: "14+ years",
      domains: "SaaS, B2B, Fintech & Growth",
      titleMain: "14 years designing digital products",
      titleMuted: "that unlock revenue and eliminate operational friction.",
      subtitle:
        "End-to-end design leadership from discovery to shipped code. Proven track record scaling conversion, retention, and multi-squad design systems across startups and scale-ups.",
      deck: "Figma Slide Deck",
      resume: "Resume (PDF)",
      heatmapTitle: "350 contributions in the last year",
      heatmapSubtitle: "GitHub Activity",
      heatmapNoContrib: "No contributions on",
      heatmapOneContrib: "1 contribution on",
      heatmapMultiContrib: "contributions on",
      heatmapLess: "Less",
      heatmapMore: "More",
      heatmapLearnMore: "Learn how we count contributions",
      puzzleHarmony: "harmony",
      puzzleHint: "swap misplaced colors",
      puzzleLevel: "level",
      puzzleComplete: "in harmony",
      puzzleNextLevel: "play level",
      puzzleSolve: "align",
      puzzleTrigger: "game mode",
      puzzleClose: "close",
    },
    logos: {
      caption: "Partnerships and products shipped over 14+ years:",
    },
    casesSection: {
      titleMain: "Selected case studies,",
      titleMuted: "from business diagnosis to measurable impact in production.",
      readCase: "Read case study",
    },
    initiativesSection: {
      titleMain: "Self-initiated products & prototyping,",
      titleMuted: "authorial projects built from scratch to production code.",
      subtitle:
        "Independent products, internal workflows, and explorations I build to test new architectures and solve real-world problems.",
      githubCta: "Explore repositories & code contributions on GitHub",
      githubContributionsTitle: "Latest code contributions",
      githubLiveBadge: "Recent activity",
      githubViewAll: "View profile & repositories on GitHub",
    },
    testimonialsSection: {
      titleMain: "Partnerships & perspectives,",
      titleMuted: "words from founders, PMs, and leaders who built products alongside me.",
      subtitle:
        "Trust built with founders, product leaders, and cross-functional engineering squads.",
    },
    closing: {
      titleMain: "Perhaps design is less about filling space",
      titleMuted: "and more about understanding what is already alive there.",
      subtitle:
        "If you have an ambiguous, high-stakes product problem that needs clarity before the click, let's talk.",
    },
    caseDetail: {
      back: "Back to case studies",
      role: "Role",
      duration: "Timeline",
      client: "Client",
      year: "Year",
      tldrBadge: "Executive Summary · 15s Read",
      problemLabel: "Problem: ",
      actionLabel: "Action & Scope: ",
      resultLabel: "Outcome: ",
      keyMetricLabel: "Primary Metric",
      contextHeading: "Context & Problem",
      challengeHeading: "The Challenge",
      tradeoffsHeading: "Product Decision & Trade-offs",
      processHeading: "Process & Discovery",
      galleryHeading: "Interface Architecture & Screens",
      resultsHeading: "Impact & Outcomes",
      takeawaysBadge: "Key Takeaway",
      liveLink: "Visit live platform",
      figmaLink: "View Figma documentation",
      nextCaseBadge: "Next case study",
    },
    about: {
      locationLabel: "Location",
      locationValue: "Teresópolis, Rio de Janeiro, Brazil",
      roleLabel: "Role & Leadership",
      roleValue: "Creative & Innovation Director at Redesenhe",
      roleSub: "Principal Product Designer · 14+ years in product",
      educationLabel: "Education & Roots",
      educationValue: "B.A. Industrial & Product Design — PUC-Rio (2012–2017)",
      educationSub1: "20 years of theatre & stage dramaturgy",
      educationSub2: "Road trip across Brazil & Uruguay in a VW Kombi",
      languagesLabel: "Languages",
      languagesValue: "Portuguese · English · Spanish",
      languagesSub: "Full professional proficiency",
      awardsLabel: "Recognition",
      awardsValue: "Shell Youth Initiative Award",
      awardsSub: "Mentored by Camila Farani (Shark Tank)",
      deckLink: "Figma Presentation Deck",
      resumeLink: "Resume (PDF)",
      titleMain: "Research revisits,",
      titleMuted: "design builds.",
      p1: "I hold a degree in Industrial and Product Design from PUC-Rio, serve as Creative & Innovation Director at Redesenhe, and have spent 14+ years designing digital products across SaaS, Fintech, Education, and Big Data. Along the way, I have led end-to-end initiatives that unlocked direct business growth — such as cutting campaign creation drop-off by 80% at APOIA.se and driving a 52% B2B revenue expansion at Quaddro.",
      p2: "Yet almost everything I apply to software architecture comes from two places outside the screen: twenty years on the theatre stage and the physical workshop. On stage, you learn early that if you force your lines without listening to the room's breathing, attention breaks. Digital products work under the same gravity: users sitting in front of a complex checkout or scheduling tool bring the rush and fatigue of their day. Design isn't decorating buttons; it's preparing the ground so people don't stall mid-journey.",
      quote:
        "Traveling across Brazil and Uruguay in a VW Kombi taught me what is tangible. On a dirt road, any makeshift fix that doesn't hold up in practice breaks on the first turn. There's no point defending a pretty hypothesis in Figma if it can't survive real-world friction.",
      p3: "Today, based in the mountains of Teresópolis, I run my material research and digital fabrication lab — work recognized with the Shell Youth Initiative Seal and mentorship from Camila Farani — while studying harmonic patterns on the nylon-string guitar through the CAGED system. To me, material physics and interface logic answer the exact same question.",
      closing:
        "Perhaps good design is simply the one that resolves complexity backstage and knows when to step out of the way so life can happen.",
      ctaCases: "View product case studies",
      ctaArt: "Explore material research & lab",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      product: "Producto",
      art: "Arte & Lab",
      switcherTitle: "Alternar entre Producto y Arte & Lab (Atajo: tecla M)",
    },
    hero: {
      role: "Principal & Senior Product Designer",
      years: "14+ años",
      domains: "SaaS, B2B, Fintech & Growth",
      titleMain: "14 años diseñando productos digitales",
      titleMuted: "que desbloquean ingresos y eliminan la fricción operativa.",
      subtitle:
        "Liderazgo de diseño de punta a punta, desde el diagnóstico hasta el código en producción. Trayectoria comprobada escalando conversión, retención y sistemas de diseño en startups y empresas tecnológicas.",
      deck: "Figma Slide Deck",
      resume: "Currículum (PDF)",
      heatmapTitle: "350 contribuciones en el último año",
      heatmapSubtitle: "Actividad en GitHub",
      heatmapNoContrib: "Ninguna contribución el",
      heatmapOneContrib: "1 contribución el",
      heatmapMultiContrib: "contribuciones el",
      heatmapLess: "Menos",
      heatmapMore: "Más",
      heatmapLearnMore: "Ver actividad y repositorios en GitHub",
      puzzleHarmony: "armonía",
      puzzleHint: "intercambia los colores",
      puzzleLevel: "nivel",
      puzzleComplete: "en armonía",
      puzzleNextLevel: "jugar nivel",
      puzzleSolve: "alinear",
      puzzleTrigger: "modo juego",
      puzzleClose: "cerrar",
    },
    logos: {
      caption: "Alianzas y productos desarrollados en más de 14 años:",
    },
    casesSection: {
      titleMain: "Casos de estudio seleccionados,",
      titleMuted: "del diagnóstico de negocio al impacto medible en producción.",
      readCase: "Ver caso de estudio",
    },
    initiativesSection: {
      titleMain: "Iniciativas propias y prototipado,",
      titleMuted: "proyectos de autor llevados de cero a código en producción.",
      subtitle:
        "Productos independientes, herramientas internas y exploraciones que construyo por cuenta propia para probar nuevas arquitecturas y resolver problemas reales.",
      githubCta: "Ver repositorios y contribuciones de código en GitHub",
      githubContributionsTitle: "Últimas contribuciones de código",
      githubLiveBadge: "Actividad reciente",
      githubViewAll: "Ver perfil y repositorios en GitHub",
    },
    testimonialsSection: {
      titleMain: "Encuentros y alianzas,",
      titleMuted: "lo que dicen quienes compartieron la trinchera de producto codo a codo.",
      subtitle:
        "Relaciones de confianza construidas con fundadores, líderes de producto e ingeniería a lo largo de los proyectos.",
    },
    closing: {
      titleMain: "Tal vez el diseño trate menos sobre llenar el espacio",
      titleMuted: "y más sobre comprender lo que ya está vivo allí.",
      subtitle:
        "Si tienes un problema complejo que necesita claridad antes del clic, la conversación empieza aquí.",
    },
    caseDetail: {
      back: "Volver a los casos de estudio",
      role: "Rol",
      duration: "Duración",
      client: "Cliente",
      year: "Año",
      tldrBadge: "Resumen Ejecutivo · Lectura en 15s",
      problemLabel: "Problema: ",
      actionLabel: "Actuación: ",
      resultLabel: "Resultado: ",
      keyMetricLabel: "Indicador Principal",
      contextHeading: "Contexto y Problema",
      challengeHeading: "El Desafío",
      tradeoffsHeading: "Decisión y Trade-off de Producto",
      processHeading: "Proceso y Descubrimiento",
      galleryHeading: "Arquitectura de Pantallas e Interfaces",
      resultsHeading: "Impacto y Resultados",
      takeawaysBadge: "Aprendizaje",
      liveLink: "Acceder a la plataforma en vivo",
      figmaLink: "Ver documentación en Figma",
      nextCaseBadge: "Siguiente caso de estudio",
    },
    about: {
      locationLabel: "Ubicación",
      locationValue: "Teresópolis, Río de Janeiro, Brasil",
      roleLabel: "Rol y Dirección",
      roleValue: "Director Creativo y de Innovación en Redesenhe",
      roleSub: "Principal Product Designer · 14+ años en producto",
      educationLabel: "Formación y Raíces",
      educationValue: "Diseño Industrial — PUC-Rio (2012–2017)",
      educationSub1: "20 años de teatro y dramaturgia en escena",
      educationSub2: "Travesía por Brasil y Uruguay en Kombi",
      languagesLabel: "Idiomas",
      languagesValue: "Portugués · Inglés · Español",
      languagesSub: "Fluidez profesional completa",
      awardsLabel: "Reconocimientos",
      awardsValue: "Sello Iniciativa Joven Shell",
      awardsSub: "Mentoría con Camila Farani (Shark Tank)",
      deckLink: "Presentación en Figma Deck",
      resumeLink: "Currículum (PDF)",
      titleMain: "La investigación revisita,",
      titleMuted: "el diseño construye.",
      p1: "Soy graduado en Diseño Industrial por la PUC-Rio, Director Creativo y de Innovación en Redesenhe y cuento con más de 14 años diseñando productos digitales en SaaS, Fintech, Educación y Big Data. A lo largo de este recorrido, lideré proyectos con impacto directo en el negocio — como reducir en un 80% el abandono de campañas en APOIA.se y expandir en un 52% los ingresos B2B de Quaddro.",
      p2: "Sin embargo, casi todo lo que aplico en arquitectura de software proviene de dos lugares fuera de la pantalla: veinte años de escenario en el teatro y el taller físico. En el teatro aprendí que si intentas imponer un texto sin escuchar la respiración de la sala, la atención se rompe. En un producto digital ocurre lo mismo: quien se sienta frente a un flujo complejo de pago o gestión trae la prisa y el cansancio del día. Diseñar no es adornar el botón; es preparar el suelo para que la persona no se bloquee a mitad de camino.",
      quote:
        "Viajar por Brasil y Uruguay en una Kombi me enseñó sobre lo tangible. En el camino de tierra, lo que no funciona en la práctica se rompe en la primera curva. No tiene sentido defender una hipótesis bonita en Figma si no soporta la fricción del uso real.",
      p3: "Hoy, en Teresópolis, mantengo mi laboratorio de investigación de materiales y fabricación digital — trabajo reconocido con el Sello Iniciativa Joven de Shell y la mentoría de Camila Farani — mientras estudio relaciones armónicas en la guitarra de nylon mediante el sistema CAGED. Para mí, la física de los materiales y la lógica de las interfaces responden a la misma pregunta.",
      closing:
        "Tal vez el buen diseño sea justamente aquel que resuelve la complejidad detrás de escena y sabe cuándo apartarse del camino para dejar que la acción suceda.",
      ctaCases: "Ver proyectos y casos de estudio",
      ctaArt: "Conocer la investigación material y lab",
    },
  },
} as const;

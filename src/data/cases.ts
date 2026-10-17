import type { Locale } from "@/context/LocaleContext";

export type Metric = {
  label: string;
  value: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  role: string;
  duration: string;
  year: string;
  tags: string[];
  summary: string;
  tldr: {
    problem: string;
    action: string;
    result: string;
  };
  keyMetric: Metric;
  metrics: Metric[];
  problem: string;
  approach: string;
  challenge: string;
  tradeoffs: string;
  process: {
    phase: string;
    title: string;
    description: string;
    items?: string[];
  }[];
  keyResults: string[];
  takeaways?: string;
  coverImage: string;
  galleryImages?: {
    url: string;
    caption: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    avatar?: string;
  };
  figmaUrl?: string;
  liveUrl?: string;
};

export type AIExploration = {
  slug: string;
  title: string;
  tools: string[];
  category: string;
  description: string;
  image: string;
  link?: string;
};

export type TestimonialItem = {
  quote: string;
  author: string;
  role: string;
  avatar: string;
};

const CASE_STUDIES_BY_LOCALE: Record<Locale, CaseStudy[]> = {
  pt: [
    {
      slug: "apoiase-dropoff",
      title: "APOIA.se: Reduzindo em 80% o abandono na criação de campanhas",
      subtitle: "Redesenho da homepage (B2B/B2C) e arquitetura guiada em 6 etapas em uma plataforma com 100k+ campanhas e R$ 150M+ transacionados.",
      client: "APOIA.se · Crowdfunding & Creator Economy",
      role: "Design Lead / Principal Product Designer (parceria com Laís Toledo e 1 PM)",
      duration: "2021–Presente",
      year: "2022–2025",
      tags: ["Product Design", "CRO & Ativação", "Design System", "B2B & B2C", "User Research"],
      summary:
        "Mais de 80% dos criadores desistiam de lançar suas campanhas logo após clicar no CTA principal, travados por um formulário único com mais de 40 campos burocráticos. Reestruturamos a homepage e criamos um fluxo modular em 6 etapas com preview em tempo real.",
      tldr: {
        problem: "80%+ de abandono no funil de criação de campanhas devido a um formulário único extenso, moldado por regras jurídicas e sem feedback visual.",
        action: "Liderança de design na reestruturação da homepage (segmentando B2B e B2C), criação do fluxo guiado em 6 etapas com live preview e implantação do primeiro Design System da empresa.",
        result: "Eliminação do gargalo histórico de abandono, aceleração do handoff entre squads e suporte direto a um ecossistema de 100k+ campanhas e R$ 150M+ em transações.",
      },
      keyMetric: {
        value: "-80% drop-off",
        label: "Redução no abandono do funil de criação",
      },
      metrics: [
        { value: "-80%", label: "Redução no abandono de criação de campanhas" },
        { value: "R$ 150M+", label: "Transacionados na plataforma em 100k+ campanhas" },
        { value: "06 etapas", label: "Fluxo modular guiado com preview em tempo real" },
        { value: "Design System", label: "Arquitetura multi-squad implantada do zero" },
      ],
      problem:
        "Ao longo dos anos, o cadastro de campanhas acumulou dezenas de campos obrigatórios exigidos pelo jurídico e financeiro. Quem chegava com uma ideia na cabeça dava de cara com um paredão cinzento de perguntas técnicas. O criador não sabia quanto faltava para terminar nem como aquelas informações ficariam na página final.",
      challenge:
        "Manter 100% dos requisitos legais e de compliance de pagamentos recorrentes, mas transformar a experiência em um percurso leve para criadores de primeira viagem.",
      tradeoffs:
        "Não podíamos simplesmente cortar campos obrigatórios por exigência regulatória do Banco Central e parceiros de pagamento. A decisão estratégica foi adiar dados bancários complexos para o momento pós-rascunho e dar retorno visual imediato (live preview) a cada campo preenchido.",
      approach:
        "Estruturamos a primeira prática formal de pesquisa da APOIA.se, cruzando funil do Google Analytics com gravações de sessão no Hotjar e entrevistas com usuários que abandonaram o cadastro. Ficou claro que o problema não era falta de interesse na home, mas sobrecarga cognitiva no formulário.",
      process: [
        {
          phase: "01 · Diagnóstico com Dados",
          title: "Onde o clique parava",
          description:
            "Mapeamento completo do fluxo no Figma cruzado com mapas de calor e auditoria de tickets de suporte. Provamos para os stakeholders que otimizar apenas o botão da home não resolveria a retenção.",
          items: [
            "Auditoria de funil quantitativo (GA) e qualitativo (Hotjar)",
            "Entrevistas com criadores ativos e desistentes",
            "Alinhamento de restrições técnicas com engenharia e jurídico",
          ],
        },
        {
          phase: "02 · Nova Homepage (B2B + B2C)",
          title: "Clareza de proposta antes do cadastro",
          description:
            "Redesenhamos a porta de entrada para explicar sem rodeios a diferença entre financiamento contínuo e pontual, criando caminhos distintos para produtores independentes e marcas parceiras.",
        },
        {
          phase: "03 · Fluxo em 6 Etapas & Live Preview",
          title: "Ver a página nascer enquanto preenche",
          description:
            "Dividimos o formulário monolítico em 6 passos curtos. Ao lado dos campos, inserimos um espelho em tempo real: cada título, foto ou meta digitada já montava a vitrine pública da campanha na hora.",
          items: [
            "Preview interativo em tempo real ao lado do formulário",
            "Dashboard de progresso claro com salvamento automático de rascunho",
            "Dicas contextuais inline substituindo blocos longos de instrução",
          ],
        },
        {
          phase: "04 · Validação & Design System Multi-Squad",
          title: "Componentização para mobile e desktop",
          description:
            "Construção e evolução do Design System da APOIA.se no Figma (componentes, tokens e padrões de acessibilidade), acelerando a entrega consistente entre múltiplos times de engenharia.",
        },
      ],
      keyResults: [
        "Queda drástica no abandono histórico de 80% na criação de campanhas",
        "Implantação do primeiro Design System e prática de User Research da empresa",
        "Simplificação da jornada em um produto que suporta 100k+ campanhas e R$ 150M+ em transações",
        "Redução de chamados básicos de suporte durante o onboarding de criadores",
      ],
      takeaways:
        "Não adianta desenhar uma tela bonita se a sequência inteira exaure quem está usando. Quando a pessoa vê o próprio trabalho ganhando forma em tempo real, o formulário deixa de ser burocracia e vira construção.",
      coverImage: "/images/cases/apoiase/header-band.webp",
      galleryImages: [
        {
          url: "/images/cases/apoiase/desktop-home.webp",
          caption: "Homepage em produção (Desktop): hierarquia direta separando modalidades de financiamento e perfis de criadores.",
        },
        {
          url: "/images/cases/apoiase/mobile-home.webp",
          caption: "Homepage em produção (Mobile): leitura rápida e acesso desimpedido ao início de campanha.",
        },
      ],
      liveUrl: "https://apoia.se",
    },
    {
      slug: "quaddro-growth",
      title: "Quaddro B2B: +52% de crescimento de receita com arquitetura multi-profissional",
      subtitle: "Desenho de ponta a ponta do modelo de equipes, permissões e agendas compartilhadas, expandindo o SaaS de autônomos para clínicas e estúdios.",
      client: "Quaddro (SaaS · Google for Startups & Valor Capital)",
      role: "Sole Senior Product Designer",
      duration: "3 meses",
      year: "2024",
      tags: ["Product Design", "SaaS B2B", "Monetização", "Design System", "Arquitetura de Sistema"],
      summary:
        "A Quaddro atendia bem autônomos, mas perdia clientes quando eles cresciam e precisavam gerenciar equipes. Liderei o design da arquitetura multi-profissional e do novo modelo de cobrança por assento, gerando +52% de aumento de receita.",
      tldr: {
        problem: "O produto funcionava apenas para contas individuais. Clínicas e salões precisavam criar contas separadas na gambiarra ou cancelavam a assinatura ao contratar equipe.",
        action: "Como único Senior Product Designer, conduzi discovery com donos de negócios, defini a arquitetura de 3 níveis de permissão, desenhei o calendário multi-raias e estruturei o fluxo de expansão por assento.",
        result: "+52% de crescimento de receita recorrente, +45% de adoção de funcionalidades e redução de 75% em inconsistências visuais com o novo Design System.",
      },
      keyMetric: {
        value: "+52% receita",
        label: "Crescimento via monetização por membros",
      },
      metrics: [
        { value: "+52%", label: "Crescimento de receita com planos para equipes" },
        { value: "+45%", label: "Aumento na adoção de funcionalidades-chave" },
        { value: "-75%", label: "Redução de inconsistências com o 1º Design System" },
        { value: "100+", label: "Solicitações reprimidas de clientes resolvidas" },
      ],
      problem:
        "O cliente fiel da Quaddro era punido quando o seu negócio dava certo: se um estúdio contratasse mais dois profissionais, o sistema não comportava. Os donos mantinham cadernos de papel ou abas anônimas abertas com logins diferentes para cruzar agendas, fragmentando o caixa e a experiência do cliente final.",
      challenge:
        "Introduzir gestão de múltiplos profissionais, permissões de acesso e agendas paralelas sem transformar um aplicativo ágil em um ERP pesado e difícil de configurar.",
      tradeoffs:
        "A tentação inicial era criar uma matriz complexa de permissões customizáveis (com dezenas de checkboxes). Em alinhamento com engenharia e PM, cortamos a complexidade para apenas 3 papéis fixos baseados na realidade de 90% das clínicas (1 a 4 membros), reduzindo o tempo de desenvolvimento pela metade.",
      approach:
        "Mergulhamos na rotina real de recepcionistas e donos de clínicas, cruzando mais de 100 pedidos históricos do suporte com benchmarks de ferramentas globais (Calendly, Zenklub, Notion).",
      process: [
        {
          phase: "01 · Discovery & Rotina Real",
          title: "Entendendo o balcão e a sala de atendimento",
          description:
            "Quem atende o telefone na recepção precisa ver a grade inteira do dia; quem está atendendo na sala ao lado só quer saber do seu próximo horário. Mapeamos esses dois ritmos de uso.",
          items: [
            "Análise de 100+ chamados e entrevistas com donos de clínicas e estúdios",
            "Mapeamento das gambiarras operacionais que causavam churn",
            "Definição de escopo mínimo viável junto à liderança técnica",
          ],
        },
        {
          phase: "02 · Arquitetura de Permissões",
          title: "Três papéis claros, zero configuração difícil",
          description:
            "Estruturamos os perfis em Administrador (visão financeira e controle total), Assistente (operação de agenda de todos) e Colaborador (acesso restrito à própria rotina e comissões).",
        },
        {
          phase: "03 · Calendário Multi-raias & Agendamento",
          title: "Leitura rápida sem sobreposição",
          description:
            "Desenhamos a agenda com colunas paralelas e diferenciação cromática por membro, além de atualizar a página pública para que o cliente final pudesse escolher com qual profissional desejava agendar.",
          items: [
            "Onboarding de convite por e-mail com opção de pular etapas",
            "Grade de calendário diária e semanal com filtros rápidos por equipe",
            "Atribuição de serviços específicos por profissional",
          ],
        },
        {
          phase: "04 · Monetização & Design System",
          title: "Expansão de receita por assento e eficiência técnica",
          description:
            "Desenho dos gatilhos de upgrade dentro do produto e criação do primeiro Design System da Quaddro, melhorando a eficiência entre design e engenharia em ~50%.",
        },
      ],
      keyResults: [
        "+52% de crescimento de receita com o novo modelo comercial de equipes",
        "Redução de ~75% nas inconsistências de UI e ganho de ~50% em velocidade entre times",
        "Mais de 100 demandas históricas da comunidade resolvidas em produção",
        "Redução direta do churn entre clientes de maior faturamento",
      ],
      takeaways:
        "Simplicidade em B2B vem de assumir decisões pelo usuário. Ao substituir uma tela de permissões infinitas por três papéis que espelham a vida real de uma clínica, entregamos mais rápido e sem atrito de adoção.",
      coverImage: "/images/cases/quaddro-growth-cover.png",
      galleryImages: [
        {
          url: "/images/cases/quaddro-growth-onboarding.png",
          caption: "Fluxo de convite e setup: entrada de novos membros sem travar o uso imediato.",
        },
        {
          url: "/images/cases/quaddro-growth-team.png",
          caption: "Gestão de equipe: atribuição direta entre Administrador, Assistente e Colaborador.",
        },
        {
          url: "/images/cases/quaddro/agenda-equipe.jpg",
          caption: "Interface em produção: visão diária com raias paralelas por profissional.",
        },
        {
          url: "/images/cases/quaddro/agenda-semana.jpg",
          caption: "Interface em produção: calendário semanal com distinção cromática clara.",
        },
        {
          url: "/images/cases/quaddro/agendamento-detalhe.jpg",
          caption: "Detalhe do agendamento: profissional responsável, status e pagamento integrados.",
        },
      ],
      figmaUrl: "https://www.figma.com/design/D3NmRH8kABNcPfgzWpVW31/Quaddro-Staff-Member-2023-2024-Case-Study?node-id=6809-20124",
      testimonial: {
        quote: "O projeto trouxe para a empresa resultados sólidos e clareza para os usuários. Com toda a pesquisa e o planejamento cuidadoso, alcançamos um patamar muito mais alto para o produto.",
        author: "Jéssica Cabrera",
        role: "Product Manager na Quaddro",
        avatar: "/images/testimonials/jessica.jpeg",
      },
    },
    {
      slug: "quaddro-sales-page",
      title: "Quaddro Checkout: +25% de conversão na página pública de agendamentos",
      subtitle: "Reestruturação mobile-first da vitrine de serviços e fluxo de reserva, reduzindo dúvidas no WhatsApp e aumentando agendamentos pagos.",
      client: "Quaddro",
      role: "Senior Product Designer",
      duration: "3 meses",
      year: "2024",
      tags: ["UX/UI", "CRO & Checkout", "Mobile First", "Design System", "Testes de Usabilidade"],
      summary:
        "A página pública onde clientes finais agendavam horários apresentava alto abandono e gerava dúvidas constantes no suporte. O redesign baseado em dados do Mixpanel e testes com usuários elevou a conversão em 25%.",
      tldr: {
        problem: "Alto abandono no fluxo de reserva online; clientes finais não entendiam os pacotes de serviço nem os horários livres e desistiam para chamar no WhatsApp.",
        action: "Análise de funil no Mixpanel, co-autoria do PRD com PM, redesign mobile-first da vitrine/checkout e validação em 8 sessões de teste de usabilidade.",
        result: "+25% de conversão em agendamentos concluídos, +42% de compreensão da oferta e queda de 40% nos tickets de suporte.",
      },
      keyMetric: {
        value: "+25% conversão",
        label: "Aumento em agendamentos e vendas concluídas",
      },
      metrics: [
        { value: "+25%", label: "Aumento na conversão direta de agendamentos" },
        { value: "+42%", label: "Clareza da oferta medida em testes com usuários" },
        { value: "-40%", label: "Redução em chamados de suporte sobre agendamentos" },
        { value: "08", label: "Testes de usabilidade moderados antes do deploy" },
      ],
      problem:
        "Para um profissional autônomo, o link na bio do Instagram é sua vitrine comercial. Porém, a página antiga parecia um formulário frio: descrições de serviços truncadas, preços confusos e uma grade de horários difícil de tocar no celular. O cliente final travava e ia perguntar no WhatsApp o que a tela deveria ter respondido.",
      challenge:
        "Criar uma página padronizada e rápida de carregar em conexões móveis, mas que desse autonomia para cada profissional exibir sua identidade, pacotes, fotos e regras de atendimento.",
      tradeoffs:
        "Profissionais pediam liberdade total de layout (fontes e cores livres), o que quebraria a acessibilidade e a conversão mobile. Mantivemos uma estrutura fixa de alta conversão com áreas controladas de personalização (banner, avatar, destaques e prova social).",
      approach:
        "Mapeamos o funil de queda no Mixpanel, escrevemos o PRD junto ao PM e CPO, e testamos protótipos de alta fidelidade com 8 usuários reais antes de escrever uma linha de código.",
      process: [
        {
          phase: "01 · Diagnóstico no Mixpanel",
          title: "Localizando a perda de conversão",
          description:
            "Os dados mostravam que a maior desistência acontecia na transição entre ler os detalhes do serviço e tentar encontrar um horário disponível na agenda semanal.",
        },
        {
          phase: "02 · PRD & Arquitetura Mobile-First",
          title: "Respondendo às 3 perguntas do cliente",
          description:
            "Reorganizamos a hierarquia para responder imediatamente: 1) Quem é o profissional; 2) O que está incluso no serviço e quanto custa; 3) Qual horário está livre hoje.",
        },
        {
          phase: "03 · Testes com 8 Usuários",
          title: "Refinando o fluxo de escolha",
          description:
            "Sessões práticas de usabilidade revelaram atritos na leitura de pacotes recorrentes vs. sessões avulsas, corrigidos ainda no protótipo.",
        },
        {
          phase: "04 · Handoff & Design Tokens",
          title: "Especificação para time de 14 engenheiros",
          description:
            "Documentação detalhada de estados de carregamento, erro, responsividade e tokens visuais para garantir fidelidade na implementação.",
        },
      ],
      keyResults: [
        "+25% de aumento comprovado na conversão de agendamentos e pagamentos",
        "+42% de melhoria na compreensão das informações da página pelos usuários",
        "Queda de 40% em chamados de suporte relacionados a dúvidas de agenda",
        "Componentes reaproveitados em novas frentes do Design System da empresa",
      ],
      takeaways:
        "Conversão alta não depende de gatilhos artificiais de urgência. Depende de tirar a dúvida do caminho no exato segundo em que a pessoa decide contratar.",
      coverImage: "/images/cases/quaddro-sales-cover.png",
      galleryImages: [
        {
          url: "/images/cases/quaddro/site-agendamento.jpg",
          caption: "Vitrine em produção: apresentação clara de serviços, duração, valores e avaliações.",
        },
        {
          url: "/images/cases/quaddro/site-horarios.jpg",
          caption: "Seleção de horários: visualização direta de disponibilidade com reserva em poucos toques.",
        },
        {
          url: "/images/cases/quaddro/site-config.jpg",
          caption: "Painel do profissional: configuração simples da página pública sem depender de código.",
        },
      ],
      testimonial: {
        quote: "O redesign trouxe resultados mensuráveis para o negócio e facilidade genuína para os profissionais autônomos. A entrega foi impecável do discovery ao handoff.",
        author: "Jéssica Cabrera",
        role: "PM na Quaddro",
        avatar: "/images/testimonials/jessica.jpeg",
      },
    },
    {
      slug: "crossboard",
      title: "Crossboard: App mobile e sistema de gestão para boxes de CrossFit",
      subtitle: "Pesquisa de campo presencial traduzida em uma interface de alto contraste para check-in rápido, marcação de WODs e engajamento de atletas.",
      client: "Crossboard",
      role: "Lead Product Designer & UX Researcher",
      duration: "Outubro 2024",
      year: "2024",
      tags: ["Mobile App", "Field Research", "UX/UI", "Fitness Tech", "Design System"],
      summary:
        "Sistemas tradicionais de gestão de academias falham no ambiente dinâmico do CrossFit. Através de pesquisa observacional presencial nos boxes, projetamos um aplicativo focado na ergonomia real do atleta durante o treino.",
      tldr: {
        problem: "Apps de gestão existentes eram burocráticos e lentos, ignorando que o atleta usa o celular cansado, com suor e pó de magnésio nas mãos durante o treino.",
        action: "Conduzi pesquisa observacional in-loco em boxes de Goiânia, mapeei os 3 momentos exatos de uso do aparelho e desenhei a identidade, arquitetura e UI do app.",
        result: "Adoção imediata pelos atletas e coaches, substituição de aplicativos terceiros de cronômetro e controle de lotação de turmas em tempo real.",
      },
      keyMetric: {
        value: "03 cliques",
        label: "Check-in e registro de treino sob fadiga física",
      },
      metrics: [
        { value: "03 momentos", label: "Gatilhos físicos de uso mapeados em campo" },
        { value: "Timer Nativo", label: "Cronômetro de WOD integrado dispensando apps extras" },
        { value: "Alto Contraste", label: "UI legível à distância no chão do box" },
        { value: "End-to-End", label: "Da pesquisa de campo e marca ao Design System" },
      ],
      problem:
        "A rotina de um box de CrossFit é intensa e barulhenta. Os sistemas disponíveis no mercado focavam apenas na cobrança de mensalidades e obrigavam o aluno a navegar por menus pequenos e confusos para reservar vaga ou anotar sua carga (PR), gerando filas na recepção e quadros brancos apagados com o suor.",
      challenge:
        "Projetar uma interface mobile que pudesse ser operada em segundos por alguém com a frequência cardíaca alta, mãos sujas de magnésio e pouca paciência para telas administrativas.",
      tradeoffs:
        "Descartamos feeds sociais complexos dentro do app para priorizar velocidade bruta: botões amplos na zona do polegar, modo escuro nativo para leitura no galpão e o timer de treino acessível na primeira tela.",
      approach:
        "Em vez de rodar apenas formulários online, fui para dentro dos boxes acompanhar turmas das 6h às 20h. Observando o comportamento real, descobrimos que o atleta só toca no celular em três momentos: colocar música, responder mensagem rápida e ligar o cronômetro do WOD.",
      process: [
        {
          phase: "01 · Imersão Presencial",
          title: "Observação no ambiente real de treino",
          description:
            "Mapeamento da distância entre o atleta, os equipamentos e o celular deixado no chão, identificando os erros de toque mais comuns sob fadiga.",
        },
        {
          phase: "02 · Arquitetura & Timer Integrado",
          title: "O cronômetro como centro da experiência",
          description:
            "Unificamos o check-in da aula, a visualização do treino do dia (WOD) e o cronômetro regressivo (AMRAP, EMOM, For Time) em um único fluxo contínuo.",
        },
        {
          phase: "03 · Identidade Visual & UI",
          title: "Tipografia de impacto e ergonomia",
          description:
            "Construção de sistema visual com alto contraste, números grandes legíveis a dois metros de distância e componentes reutilizáveis para iOS e Android.",
        },
      ],
      keyResults: [
        "Eliminação do uso de aplicativos paralelos de cronômetro pelos alunos",
        "Redução de atrito no controle de presença e limite de vagas por turma",
        "Aumento no registro histórico de cargas e tempos (WODs) pelos atletas",
        "Produto entregue do zero ao protótipo validado e documentado para engenharia",
      ],
      takeaways:
        "O contexto físico dita a interface. Observar uma pessoa tentando usar um app com a mão suada de treino ensina mais sobre tamanho de botão e hierarquia do que qualquer guia teórico.",
      coverImage: "/images/cases/crossboard-cover.png",
      testimonial: {
        quote: "O projeto teve uma execução muito além do esperado. A interação foi feita totalmente à distância, mas com um produto com estética muito bem definida e a experiência pensada ponto a ponto.",
        author: "Wagner Caixeta",
        role: "CEO na Crossboard",
        avatar: "/images/testimonials/wagner.png",
      },
    },
  ],
  en: [
    {
      slug: "apoiase-dropoff",
      title: "APOIA.se: Cutting campaign creation drop-off by 80%",
      subtitle: "Redesigning the B2B/B2C homepage and architecting a 6-step guided creation flow across a platform supporting 100k+ campaigns and R$ 150M+ in transactions.",
      client: "APOIA.se · Crowdfunding & Creator Economy",
      role: "Design Lead / Principal Product Designer (with Laís Toledo & 1 PM)",
      duration: "2021–Present",
      year: "2022–2025",
      tags: ["Product Design", "CRO & Activation", "Design System", "B2B & B2C", "User Research"],
      summary:
        "Over 80% of creators abandoned campaign setup right after clicking the primary CTA, overwhelmed by a monolithic 40-field bureaucratic form. We redesigned the homepage and built a 6-step modular flow with real-time live preview.",
      tldr: {
        problem: "80%+ drop-off rate in the campaign creation funnel caused by an intimidating, single-page legal and financial form with zero visual feedback.",
        action: "Led design for the new B2B/B2C homepage, architected a 6-step guided onboarding with real-time live preview, and deployed the company's first multi-squad Design System.",
        result: "Eliminated the historical activation bottleneck, accelerated cross-squad engineering handoff, and scaled journeys supporting 100k+ campaigns and R$ 150M+ in transactions.",
      },
      keyMetric: {
        value: "-80% drop-off",
        label: "Reduction in campaign creation funnel abandonment",
      },
      metrics: [
        { value: "-80%", label: "Drop-off reduction in campaign creation" },
        { value: "R$ 150M+", label: "Transacted across 100k+ platform campaigns" },
        { value: "06 steps", label: "Modular guided flow with real-time live preview" },
        { value: "Design System", label: "Multi-squad Figma library built from zero" },
      ],
      problem:
        "Over the years, the campaign creation flow had accumulated dozens of mandatory legal and banking fields. First-time creators arriving with a fresh idea hit a gray wall of technical questions. Users had no sense of progress or how their inputs would look on their live public page.",
      challenge:
        "Preserve 100% of recurring payment compliance and regulatory requirements while transforming the onboarding into a clear, encouraging journey for both beginner and seasoned creators.",
      tradeoffs:
        "We couldn't remove mandatory Central Bank and payment partner compliance fields. Our key product trade-off was deferring heavy banking verification until after the campaign draft was built, while providing instant visual gratification (live preview) on every step.",
      approach:
        "We established APOIA.se's first formal user research practice — triangulating Google Analytics funnel drops with Hotjar session recordings and interviews with churned creators. The bottleneck wasn't homepage interest; it was cognitive overload inside the form.",
      process: [
        {
          phase: "01 · Data-Driven Diagnosis",
          title: "Pinpointing where creators stalled",
          description:
            "End-to-end flow audit in Figma paired with heatmaps and support ticket categorization. We proved to stakeholders that tweaking homepage CTAs wouldn't fix activation without overhauling the form.",
          items: [
            "Quantitative funnel audit (GA) and qualitative session review (Hotjar)",
            "In-depth interviews with active and churned creators",
            "Technical and legal constraint mapping with engineering and compliance",
          ],
        },
        {
          phase: "02 · Educativa Homepage (B2B + B2C)",
          title: "Building clarity before asking for commitment",
          description:
            "Redesigned the entry experience to clearly distinguish continuous monthly support from goal-based crowdfunding, serving both independent creators (B2C) and corporate partners (B2B).",
        },
        {
          phase: "03 · 6-Step Architecture & Live Preview",
          title: "Watching the campaign come alive in real time",
          description:
            "We broke the monolithic form into 6 digestible stages paired with an interactive mirror: every title, cover photo, or reward tier typed immediately rendered the public campaign page side-by-side.",
          items: [
            "Real-time interactive preview alongside form inputs",
            "Clear progress dashboard with automatic draft saving",
            "Inline contextual guidance replacing intrusive error modals",
          ],
        },
        {
          phase: "04 · Usability Testing & Multi-Squad Design System",
          title: "Responsive components for mobile and desktop",
          description:
            "Built and governed APOIA.se's first Design System in Figma (tokens, components, a11y patterns), ensuring seamless mobile-to-desktop responsiveness where half of creators started their drafts.",
        },
      ],
      keyResults: [
        "Eliminated the historical 80% drop-off bottleneck in campaign creation",
        "Deployed the company's first Design System and continuous User Research practice",
        "Simplified core journeys across a platform handling 100k+ campaigns and R$ 150M+ in volume",
        "Significantly reduced repetitive customer support tickets during creator onboarding",
      ],
      takeaways:
        "Designing an isolated pretty screen means nothing if the end-to-end sequence exhausts the user. When people watch their work take shape in real time, a form stops feeling like bureaucracy and starts feeling like ownership.",
      coverImage: "/images/cases/apoiase/header-band.webp",
      galleryImages: [
        {
          url: "/images/cases/apoiase/desktop-home.webp",
          caption: "Shipped Homepage (Desktop): clear hierarchy separating funding models and creator profiles.",
        },
        {
          url: "/images/cases/apoiase/mobile-home.webp",
          caption: "Shipped Homepage (Mobile): fast scanning and frictionless entry into campaign creation.",
        },
      ],
      liveUrl: "https://apoia.se",
    },
    {
      slug: "quaddro-growth",
      title: "Quaddro B2B: Unlocking +52% revenue growth with multi-professional architecture",
      subtitle: "End-to-end UX for team permissions, parallel calendars, and seat-based monetization — expanding a solo-professional SaaS into clinics and studios.",
      client: "Quaddro (SaaS · Google for Startups & Valor Capital)",
      role: "Sole Senior Product Designer",
      duration: "3 months",
      year: "2024",
      tags: ["Product Design", "B2B SaaS", "Monetization", "Design System", "Systems Architecture"],
      summary:
        "Quaddro served solo professionals well, but churned accounts as soon as they grew into multi-staff clinics or studios. As sole Senior Product Designer, I led the team architecture and seat-based monetization model, driving +52% revenue growth.",
      tldr: {
        problem: "The platform only supported single-user accounts. Growing clinics and salons had to juggle multiple separate logins or churned when hiring staff.",
        action: "Led discovery with business owners, defined a streamlined 3-tier permission model, designed the multi-lane staff calendar, and structured seat-based expansion.",
        result: "+52% recurring revenue growth, +45% feature adoption, and a 75% reduction in UI inconsistencies via the company's first Design System.",
      },
      keyMetric: {
        value: "+52% revenue",
        label: "Growth unlocked via seat-based team plans",
      },
      metrics: [
        { value: "+52%", label: "Revenue growth from multi-professional team plans" },
        { value: "+45%", label: "Increase in core feature adoption" },
        { value: "-75%", label: "Reduction in UI inconsistencies with 1st Design System" },
        { value: "100+", label: "Backlogged customer requests resolved" },
      ],
      problem:
        "Quaddro's most loyal customers were penalized for succeeding: when a solo studio hired two more specialists, the software couldn't scale with them. Owners kept paper notebooks or incognito browser tabs open with separate accounts just to cross-check schedules, fragmenting billing and client booking.",
      challenge:
        "Introduce multi-staff management, role permissions, and parallel calendars without turning a lightweight scheduling app into a bloated enterprise ERP.",
      tradeoffs:
        "Stakeholders initially considered a granular permission matrix with dozens of toggles. Partnering with PM and engineering, we scoped it down to 3 fixed roles that matched 90% of real clinics (1–4 staff members), cutting engineering delivery time in half.",
      approach:
        "We studied the daily floor routine of receptionists and clinic owners, combining 100+ historical feature requests with competitive benchmarks (Calendly, Zenklub, Notion).",
      process: [
        {
          phase: "01 · Discovery & Floor Routine",
          title: "Understanding the front desk vs. the treatment room",
          description:
            "A receptionist answering phones needs a bird's-eye view of the entire day; a specialist in the treatment room only cares about their next appointment. We designed for both rhythms.",
          items: [
            "Synthesized 100+ support requests and interviewed clinic/studio owners",
            "Mapped operational workarounds that were driving B2B churn",
            "Defined MVP technical scope early with engineering leadership",
          ],
        },
        {
          phase: "02 · Permission Architecture",
          title: "Three clear roles, zero configuration headache",
          description:
            "Structured permissions into Admin (full financial and system control), Assistant (operational calendar management across staff), and Collaborator (own schedule and commission view).",
        },
        {
          phase: "03 · Multi-Lane Calendar & Public Booking",
          title: "Instant visual scanning without overlap",
          description:
            "Designed parallel staff columns with subtle color coding, and updated the public booking storefront so end clients could choose their preferred specialist.",
          items: [
            "Frictionless email invite onboarding with skippable setup steps",
            "Daily and weekly multi-staff calendar views with quick filters",
            "Service-to-specialist assignment and automated commission tracking",
          ],
        },
        {
          phase: "04 · Seat Monetization & Design System",
          title: "In-product upgrade triggers and cross-team velocity",
          description:
            "Designed self-serve seat expansion flows and built Quaddro's first Design System from scratch, improving design-to-engineering efficiency by ~50%.",
        },
      ],
      keyResults: [
        "+52% revenue growth driven by the new seat-based team subscription tier",
        "~75% reduction in UI inconsistencies and ~50% faster cross-team delivery",
        "100+ long-standing community feature requests shipped to production",
        "Eliminated duplicate account workarounds and reduced churn among high-LTV accounts",
      ],
      takeaways:
        "Simplicity in B2B comes from making opinionated decisions on behalf of the user. Replacing an endless permission matrix with three roles that mirror real clinic operations allowed us to ship faster with zero adoption friction.",
      coverImage: "/images/cases/quaddro-growth-cover.png",
      galleryImages: [
        {
          url: "/images/cases/quaddro-growth-onboarding.png",
          caption: "Invite & setup flow: adding team members without blocking immediate usage.",
        },
        {
          url: "/images/cases/quaddro-growth-team.png",
          caption: "Team management: clear role assignment between Admin, Assistant, and Collaborator.",
        },
        {
          url: "/images/cases/quaddro/agenda-equipe.jpg",
          caption: "Production UI: daily schedule view with parallel lanes per professional.",
        },
        {
          url: "/images/cases/quaddro/agenda-semana.jpg",
          caption: "Production UI: weekly calendar with clear chromatic distinction per team member.",
        },
        {
          url: "/images/cases/quaddro/agendamento-detalhe.jpg",
          caption: "Booking detail: assigned professional, appointment status, and integrated billing.",
        },
      ],
      figmaUrl: "https://www.figma.com/design/D3NmRH8kABNcPfgzWpVW31/Quaddro-Staff-Member-2023-2024-Case-Study?node-id=6809-20124",
      testimonial: {
        quote: "The project brought solid business results to the company and genuine clarity for users. Through thorough research and careful planning, we elevated the product to a much higher standard.",
        author: "Jéssica Cabrera",
        role: "Product Manager at Quaddro",
        avatar: "/images/testimonials/jessica.jpeg",
      },
    },
    {
      slug: "quaddro-sales-page",
      title: "Quaddro Checkout: +25% conversion on the public booking storefront",
      subtitle: "Mobile-first overhaul of the customer-facing service storefront and booking checkout, cutting support tickets by 40% and lifting paid bookings.",
      client: "Quaddro",
      role: "Senior Product Designer",
      duration: "3 months",
      year: "2024",
      tags: ["UX/UI", "CRO & Checkout", "Mobile First", "Design System", "Usability Testing"],
      summary:
        "The public booking page where end customers scheduled appointments suffered from high drop-off and flooded support with questions. A Mixpanel-driven redesign validated with usability testing increased conversion by 25%.",
      tldr: {
        problem: "High checkout drop-off; end clients couldn't understand service packages or available slots on mobile and abandoned the page to ask questions on WhatsApp.",
        action: "Analyzed Mixpanel funnel drops, co-authored the PRD with PM, redesigned the mobile-first storefront/checkout, and validated prototypes across 8 usability test sessions.",
        result: "+25% increase in completed bookings, +42% improvement in offer comprehension, and a 40% drop in booking-related support tickets.",
      },
      keyMetric: {
        value: "+25% conversion",
        label: "Increase in completed bookings and sales",
      },
      metrics: [
        { value: "+25%", label: "Increase in direct booking conversion" },
        { value: "+42%", label: "Offer comprehension score in user testing" },
        { value: "-40%", label: "Reduction in scheduling support tickets" },
        { value: "08", label: "Moderated usability test sessions prior to release" },
      ],
      problem:
        "For service professionals, the link in their Instagram bio is their primary storefront. Yet Quaddro's legacy booking page felt like a cold bank form: truncated service descriptions, confusing package pricing, and a time-slot picker that was painful to tap on mobile.",
      challenge:
        "Design a fast, standardized mobile-first page that still gave each professional enough autonomy to showcase their brand, service packages, photos, and booking policies.",
      tradeoffs:
        "Professionals often asked for unrestricted layout customization (custom fonts and arbitrary colors), which broke contrast and hurt mobile conversion. We enforced a high-converting structural grid with curated customization zones (banner, avatar, highlights, and reviews).",
      approach:
        "We pinpointed funnel drop-offs in Mixpanel, co-wrote the PRD with the PM and CPO, and ran 8 moderated usability tests with high-fidelity prototypes before engineering implementation.",
      process: [
        {
          phase: "01 · Mixpanel Funnel Diagnosis",
          title: "Locating where customers dropped off",
          description:
            "Funnel telemetry showed the steepest drop occurred right between reading service details and trying to find an open time slot on the weekly grid.",
        },
        {
          phase: "02 · PRD & Mobile-First Architecture",
          title: "Answering the customer's 3 core questions",
          description:
            "Restructured the visual hierarchy to immediately answer: 1) Who is the professional; 2) What is included and how much it costs; 3) What time slots are open today.",
        },
        {
          phase: "03 · Testing with 8 Active Users",
          title: "Refining package selection vs. single sessions",
          description:
            "Hands-on usability sessions uncovered friction in how recurring packages were compared against single appointments, which we resolved in the prototype before handoff.",
        },
        {
          phase: "04 · Precision Handoff & Design Tokens",
          title: "Specification for a 14-engineer squad",
          description:
            "Delivered thoroughly documented components, loading/error states, responsive breakpoints, and design tokens to ensure pixel-accurate execution.",
        },
      ],
      keyResults: [
        "+25% verified increase in booking and checkout conversion",
        "+42% improvement in page comprehension measured with end users",
        "40% reduction in support tickets and manual WhatsApp scheduling back-and-forth",
        "Reusable storefront components integrated into the core Design System",
      ],
      takeaways:
        "High conversion doesn't require artificial urgency tricks. It comes from removing ambiguity at the exact second a customer decides to book.",
      coverImage: "/images/cases/quaddro-sales-cover.png",
      galleryImages: [
        {
          url: "/images/cases/quaddro/site-agendamento.jpg",
          caption: "Production Storefront: clear presentation of services, duration, pricing, and client reviews.",
        },
        {
          url: "/images/cases/quaddro/site-horarios.jpg",
          caption: "Time-slot selection: frictionless mobile availability picker.",
        },
        {
          url: "/images/cases/quaddro/site-config.jpg",
          caption: "Professional dashboard: no-code storefront customization.",
        },
      ],
      testimonial: {
        quote: "The redesign delivered measurable business results and genuine ease of use for independent professionals. Execution was seamless from discovery to handoff.",
        author: "Jéssica Cabrera",
        role: "PM at Quaddro",
        avatar: "/images/testimonials/jessica.jpeg",
      },
    },
    {
      slug: "crossboard",
      title: "Crossboard: Mobile app and management system for CrossFit boxes",
      subtitle: "In-person field research translated into a high-contrast mobile interface for fast check-ins, WOD tracking, and athlete engagement.",
      client: "Crossboard",
      role: "Lead Product Designer & UX Researcher",
      duration: "October 2024",
      year: "2024",
      tags: ["Mobile App", "Field Research", "UX/UI", "Fitness Tech", "Design System"],
      summary:
        "Traditional gym management software fails inside the high-intensity environment of a CrossFit box. Through in-loco observational research, we designed a mobile experience tailored to athletes' physical ergonomics mid-workout.",
      tldr: {
        problem: "Existing gym apps were slow and administrative, ignoring that athletes interact with their phones exhausted, sweaty, and with chalk on their hands.",
        action: "Conducted in-person observational research inside CrossFit boxes, mapped the 3 exact moments athletes touch their phones, and designed the brand, architecture, and UI.",
        result: "Immediate adoption by athletes and coaches, replacing third-party timer apps and streamlining real-time class capacity management.",
      },
      keyMetric: {
        value: "03 taps",
        label: "Class check-in and WOD logging under physical fatigue",
      },
      metrics: [
        { value: "03 moments", label: "Physical phone interaction triggers mapped in the field" },
        { value: "Native Timer", label: "Integrated WOD timer replacing third-party apps" },
        { value: "High Contrast", label: "UI legible from across the gym floor" },
        { value: "End-to-End", label: "From field research and branding to Design System" },
      ],
      problem:
        "CrossFit boxes are loud, fast-paced environments. Legacy management tools focused only on back-office billing and forced athletes to navigate tiny dropdown menus to book classes or log personal records (PRs), causing front-desk bottlenecks and chalk-smudged whiteboards.",
      challenge:
        "Design a mobile interface operable in seconds by someone with a 170 bpm heart rate, chalk-covered hands, and zero patience for complex navigation.",
      tradeoffs:
        "We cut complex social feed features to prioritize raw speed: oversized thumb-zone tap targets, native dark mode for gym floor glare, and one-tap access to the workout timer right from the home screen.",
      approach:
        "Instead of relying on online surveys, I spent days inside CrossFit boxes observing classes from 6 AM to 8 PM. Field observation revealed athletes only touch their phones at three specific moments: playing music, sending a quick reply, and starting the WOD timer.",
      process: [
        {
          phase: "01 · Field Immersion",
          title: "Observing the real training floor",
          description:
            "Mapped the physical distance between athletes, barbells, and phones left on the rubber floor, identifying common mis-taps caused by fatigue.",
        },
        {
          phase: "02 · Architecture & Native WOD Timer",
          title: "Making the stopwatch the heart of the app",
          description:
            "Unified class check-in, daily workout (WOD) visualization, and countdown timers (AMRAP, EMOM, For Time) into a single continuous flow.",
        },
        {
          phase: "03 · Visual Identity & UI System",
          title: "High-impact typography and ergonomics",
          description:
            "Built a high-contrast visual system with oversized numerals legible from two meters away and reusable iOS/Android components.",
        },
      ],
      keyResults: [
        "Eliminated athletes' reliance on separate third-party stopwatch apps",
        "Removed friction in class attendance tracking and spot reservation limits",
        "Increased consistent logging of workout weights and times (PRs)",
        "Delivered complete brand identity, validated prototype, and component library",
      ],
      takeaways:
        "Physical context dictates interface design. Watching someone try to tap a screen with sweaty, chalky hands after a set of thrusters teaches you more about touch targets and visual hierarchy than any style guide.",
      coverImage: "/images/cases/crossboard-cover.png",
      testimonial: {
        quote: "The project was executed far beyond expectations. Collaboration was 100% remote, yet resulted in a product with a sharp aesthetic and a user experience thought out point by point.",
        author: "Wagner Caixeta",
        role: "CEO at Crossboard",
        avatar: "/images/testimonials/wagner.png",
      },
    },
  ],
  es: [
    {
      slug: "apoiase-dropoff",
      title: "APOIA.se: Reduciendo en un 80% el abandono en la creación de campañas",
      subtitle: "Rediseño de la homepage (B2B/B2C) y arquitectura guiada en 6 etapas en una plataforma con 100k+ campañas y R$ 150M+ transaccionados.",
      client: "APOIA.se · Crowdfunding & Creator Economy",
      role: "Design Lead / Principal Product Designer (junto a Laís Toledo y 1 PM)",
      duration: "2021–Presente",
      year: "2022–2025",
      tags: ["Product Design", "CRO y Activación", "Design System", "B2B y B2C", "User Research"],
      summary:
        "Más del 80% de los creadores desistían de lanzar sus campañas justo después del clic inicial, bloqueados por un formulario único con más de 40 campos burocráticos. Reestructuramos la homepage y creamos un flujo modular en 6 etapas con vista previa en tiempo real.",
      tldr: {
        problem: "80%+ de abandono en el embudo de creación de campañas debido a un formulario único extenso, moldeado por reglas legales y sin respuesta visual.",
        action: "Liderazgo de diseño en la reestructuración de la homepage (segmentando B2B y B2C), creación del flujo guiado en 6 etapas con live preview e implementación del primer Design System de la empresa.",
        result: "Eliminación del cuello de botella histórico de abandono, aceleración del handoff entre squads y soporte directo a un ecosistema de 100k+ campañas y R$ 150M+ en transacciones.",
      },
      keyMetric: {
        value: "-80% abandono",
        label: "Reducción de caída en el embudo de creación",
      },
      metrics: [
        { value: "-80%", label: "Reducción en el abandono de creación de campañas" },
        { value: "R$ 150M+", label: "Transaccionados en la plataforma en 100k+ campañas" },
        { value: "06 etapas", label: "Flujo modular guiado con vista previa en tiempo real" },
        { value: "Design System", label: "Arquitectura multi-squad implementada desde cero" },
      ],
      problem:
        "Con el paso de los años, el registro de campañas acumuló decenas de campos obligatorios exigidos por las áreas legal y financiera. Quien llegaba con una idea se encontraba con un muro gris de preguntas técnicas, sin saber cuánto faltaba ni cómo se vería su página pública.",
      challenge:
        "Mantener el 100% de los requisitos legales y de compliance de pagos recurrentes, transformando la experiencia en un recorrido claro y ligero para creadores primerizos.",
      tradeoffs:
        "No podíamos eliminar campos obligatorios por exigencias regulatorias del Banco Central. La decisión estratégica fue posponer los datos bancarios complejos para después del borrador inicial y ofrecer retorno visual inmediato (live preview) en cada paso.",
      approach:
        "Estructuramos la primera práctica formal de investigación de APOIA.se, cruzando el embudo de Google Analytics con grabaciones de Hotjar y entrevistas a usuarios que abandonaron el registro. El problema no era la falta de interés en la home, sino la sobrecarga cognitiva en el formulario.",
      process: [
        {
          phase: "01 · Diagnóstico con Datos",
          title: "Dónde se detenía el clic",
          description:
            "Mapeo completo del flujo en Figma cruzado con mapas de calor y auditoría de tickets de soporte. Demostramos a los stakeholders que optimizar solo el botón de la home no resolvería la activación.",
          items: [
            "Auditoría cuantitativa de embudo (GA) y cualitativa (Hotjar)",
            "Entrevistas con creadores activos y usuarios que abandonaron el flujo",
            "Alineación de restricciones técnicas con ingeniería y legales",
          ],
        },
        {
          phase: "02 · Nueva Homepage (B2B + B2C)",
          title: "Claridad de propuesta antes del registro",
          description:
            "Rediseñamos la puerta de entrada para explicar sin rodeos la diferencia entre financiamiento continuo y puntual, creando caminos claros para creadores independientes y marcas aliadas.",
        },
        {
          phase: "03 · Flujo en 6 Etapas y Live Preview",
          title: "Ver nacer la página mientras se completa",
          description:
            "Dividimos el formulario monolítico en 6 pasos breves. Junto a los campos, incluimos un espejo en tiempo real: cada título, foto o meta ingresada construía al instante la vitrina pública de la campaña.",
          items: [
            "Vista previa interactiva en tiempo real junto al formulario",
            "Panel de progreso claro con guardado automático de borrador",
            "Guía contextual integrada reemplazando bloques largos de texto",
          ],
        },
        {
          phase: "04 · Validación y Design System Multi-Squad",
          title: "Componentes responsivos para móvil y escritorio",
          description:
            "Construcción y evolución del Design System de APOIA.se en Figma (componentes, tokens y accesibilidad), acelerando la entrega entre múltiples equipos de ingeniería.",
        },
      ],
      keyResults: [
        "Caída drástica del abandono histórico del 80% en la creación de campañas",
        "Implementación del primer Design System y práctica de User Research de la empresa",
        "Simplificación de la experiencia en un producto que soporta 100k+ campañas y R$ 150M+ en transacciones",
        "Reducción de consultas básicas de soporte durante el onboarding de creadores",
      ],
      takeaways:
        "De nada sirve diseñar una pantalla bonita si la secuencia completa agota a quien la usa. Cuando la persona ve su propio trabajo tomando forma en tiempo real, el formulario deja de ser burocracia y se convierte en construcción.",
      coverImage: "/images/cases/apoiase/header-band.webp",
      galleryImages: [
        {
          url: "/images/cases/apoiase/desktop-home.webp",
          caption: "Homepage en producción (Desktop): jerarquía clara separando modalidades de financiamiento y perfiles.",
        },
        {
          url: "/images/cases/apoiase/mobile-home.webp",
          caption: "Homepage en producción (Mobile): lectura ágil y acceso directo al inicio de campaña.",
        },
      ],
      liveUrl: "https://apoia.se",
    },
    {
      slug: "quaddro-growth",
      title: "Quaddro B2B: +52% de crecimiento en ingresos con arquitectura multiprofesional",
      subtitle: "Diseño de punta a punta del modelo de equipos, permisos y agendas compartidas, expandiendo el SaaS de autónomos hacia clínicas y estudios.",
      client: "Quaddro (SaaS · Google for Startups & Valor Capital)",
      role: "Sole Senior Product Designer",
      duration: "3 meses",
      year: "2024",
      tags: ["Product Design", "SaaS B2B", "Monetización", "Design System", "Arquitectura de Sistema"],
      summary:
        "Quaddro atendía bien a profesionales independientes, pero perdía clientes cuando crecían y necesitaban gestionar equipos. Lideré el diseño de la arquitectura multiprofesional y el cobro por asiento, logrando un +52% en ingresos.",
      tldr: {
        problem: "El producto solo admitía cuentas individuales. Clínicas y salones debían crear cuentas separadas o cancelaban su suscripción al contratar personal.",
        action: "Como único Senior Product Designer, lideré el discovery con dueños de negocios, definí la arquitectura de 3 niveles de permisos, diseñé el calendario multicarril y estructuré la monetización por asiento.",
        result: "+52% de crecimiento en ingresos recurrentes, +45% en adopción de funcionalidades y reducción del 75% en inconsistencias visuales con el nuevo Design System.",
      },
      keyMetric: {
        value: "+52% ingresos",
        label: "Crecimiento mediante monetización por miembros",
      },
      metrics: [
        { value: "+52%", label: "Crecimiento de ingresos con planes para equipos" },
        { value: "+45%", label: "Aumento en adopción de funcionalidades clave" },
        { value: "-75%", label: "Reducción de inconsistencias con el 1º Design System" },
        { value: "100+", label: "Solicitudes históricas de clientes resueltas" },
      ],
      problem:
        "El cliente fiel de Quaddro era penalizado cuando su negocio crecía: si un estudio contrataba a dos profesionales más, el sistema no lo soportaba. Los dueños usaban cuadernos de papel o pestañas de incógnito con distintos logins para cruzar agendas, fragmentando la caja y la reserva del cliente final.",
      challenge:
        "Introducir gestión de múltiples profesionales, permisos de acceso y agendas paralelas sin convertir una aplicación ágil en un ERP pesado y difícil de configurar.",
      tradeoffs:
        "La tentación inicial era crear una matriz compleja de permisos personalizables. En alineación con ingeniería y PM, simplificamos la arquitectura a solo 3 roles fijos basados en la realidad del 90% de las clínicas (1 a 4 miembros), reduciendo el tiempo de desarrollo a la mitad.",
      approach:
        "Nos sumergimos en la rutina real de recepcionistas y dueños de clínicas, cruzando más de 100 pedidos históricos de soporte con benchmarks globales (Calendly, Zenklub, Notion).",
      process: [
        {
          phase: "01 · Discovery y Rutina Real",
          title: "Entendiendo la recepción y el consultorio",
          description:
            "Quien atiende el teléfono en recepción necesita ver la agenda completa del día; quien está atendiendo en la sala contigua solo quiere ver su próximo turno. Diseñamos para ambos ritmos.",
          items: [
            "Análisis de 100+ tickets y entrevistas con dueños de clínicas y estudios",
            "Mapeo de soluciones improvisadas que causaban cancelaciones (churn)",
            "Definición temprana de alcance técnico viable junto a ingeniería",
          ],
        },
        {
          phase: "02 · Arquitectura de Permisos",
          title: "Tres roles claros, cero configuración compleja",
          description:
            "Estructuramos los perfiles en Administrador (control financiero y total), Asistente (operación de agenda de todo el equipo) y Colaborador (acceso a su propia rutina y comisiones).",
        },
        {
          phase: "03 · Calendario Multicarril y Reserva Pública",
          title: "Lectura rápida sin superposición",
          description:
            "Diseñamos la agenda con columnas paralelas y distinción cromática por miembro, actualizando además la página pública para que el cliente final elija con qué profesional agendar.",
          items: [
            "Onboarding de invitación por correo con pasos opcionales",
            "Vista de calendario diaria y semanal con filtros rápidos por equipo",
            "Asignación de servicios específicos por profesional",
          ],
        },
        {
          phase: "04 · Monetización y Design System",
          title: "Expansión de ingresos por asiento y eficiencia técnica",
          description:
            "Diseño de flujos de upgrade dentro del producto y creación del primer Design System de Quaddro, mejorando la eficiencia entre diseño e ingeniería en ~50%.",
        },
      ],
      keyResults: [
        "+52% de crecimiento en ingresos con el nuevo modelo comercial para equipos",
        "Reducción de ~75% en inconsistencias de UI y ~50% más velocidad entre equipos",
        "Más de 100 demandas históricas de la comunidad resueltas en producción",
        "Reducción directa del churn entre las cuentas de mayor facturación",
      ],
      takeaways:
        "La simplicidad en B2B surge de tomar decisiones claras por el usuario. Al reemplazar una pantalla infinita de permisos por tres roles que reflejan la vida real de una clínica, entregamos más rápido y sin fricción de adopción.",
      coverImage: "/images/cases/quaddro-growth-cover.png",
      galleryImages: [
        {
          url: "/images/cases/quaddro-growth-onboarding.png",
          caption: "Flujo de invitación y configuración: incorporación de miembros sin bloquear el uso.",
        },
        {
          url: "/images/cases/quaddro-growth-team.png",
          caption: "Gestión de equipo: asignación directa entre Administrador, Asistente y Colaborador.",
        },
        {
          url: "/images/cases/quaddro/agenda-equipe.jpg",
          caption: "Interfaz en producción: vista diaria con carriles paralelos por profesional.",
        },
        {
          url: "/images/cases/quaddro/agenda-semana.jpg",
          caption: "Interfaz en producción: calendario semanal con distinción cromática clara.",
        },
        {
          url: "/images/cases/quaddro/agendamento-detalhe.jpg",
          caption: "Detalle de cita: profesional asignado, estado y cobro integrados.",
        },
      ],
      figmaUrl: "https://www.figma.com/design/D3NmRH8kABNcPfgzWpVW31/Quaddro-Staff-Member-2023-2024-Case-Study?node-id=6809-20124",
      testimonial: {
        quote: "El proyecto trajo resultados sólidos para la empresa y claridad para los usuarios. Con toda la investigación y planificación cuidadosa, alcanzamos un nivel mucho más alto para el producto.",
        author: "Jéssica Cabrera",
        role: "Product Manager en Quaddro",
        avatar: "/images/testimonials/jessica.jpeg",
      },
    },
    {
      slug: "quaddro-sales-page",
      title: "Quaddro Checkout: +25% de conversión en la página pública de reservas",
      subtitle: "Reestructuración mobile-first de la vitrina de servicios y flujo de pago, reduciendo dudas por WhatsApp y aumentando reservas pagadas.",
      client: "Quaddro",
      role: "Senior Product Designer",
      duration: "3 meses",
      year: "2024",
      tags: ["UX/UI", "CRO y Checkout", "Mobile First", "Design System", "Pruebas de Usabilidad"],
      summary:
        "La página pública donde los clientes finales agendaban citas presentaba alto abandono y generaba dudas constantes en soporte. El rediseño basado en datos de Mixpanel y pruebas con usuarios elevó la conversión en un 25%.",
      tldr: {
        problem: "Alto abandono en el flujo de reserva online; los clientes finales no comprendían los paquetes de servicios ni los horarios libres y salían a preguntar por WhatsApp.",
        action: "Análisis de embudo en Mixpanel, coautoría del PRD con PM, rediseño mobile-first de la vitrina/checkout y validación en 8 sesiones de prueba de usabilidad.",
        result: "+25% de conversión en citas completadas, +42% de comprensión de la oferta y caída del 40% en tickets de soporte.",
      },
      keyMetric: {
        value: "+25% conversión",
        label: "Aumento en reservas y ventas completadas",
      },
      metrics: [
        { value: "+25%", label: "Aumento en la conversión directa de reservas" },
        { value: "+42%", label: "Claridad de la oferta medida en pruebas con usuarios" },
        { value: "-40%", label: "Reducción en tickets de soporte sobre agenda" },
        { value: "08", label: "Pruebas de usabilidad moderadas antes del lanzamiento" },
      ],
      problem:
        "Para un profesional autónomo, el enlace en su biografía de Instagram es su vitrina comercial. Sin embargo, la página antigua parecía un formulario frío: descripciones cortadas, precios confusos y una grilla de horarios difícil de usar en el móvil.",
      challenge:
        "Crear una página estandarizada y veloz en conexiones móviles, pero con autonomía para que cada profesional muestre su identidad, paquetes, fotos y reglas.",
      tradeoffs:
        "Los profesionales pedían libertad total de diseño (fuentes y colores libres), lo que rompía la accesibilidad y la conversión móvil. Mantuvimos una estructura fija de alta conversión con zonas controladas de personalización.",
      approach:
        "Mapeamos las caídas del embudo en Mixpanel, redactamos el PRD junto al PM y CPO, y probamos prototipos de alta fidelidad con 8 usuarios reales antes de pasar a código.",
      process: [
        {
          phase: "01 · Diagnóstico en Mixpanel",
          title: "Localizando la pérdida de conversión",
          description:
            "Los datos mostraban que la mayor caída ocurría en la transición entre leer los detalles del servicio e intentar encontrar un horario libre en la agenda semanal.",
        },
        {
          phase: "02 · PRD y Arquitectura Mobile-First",
          title: "Respondiendo a las 3 preguntas del cliente",
          description:
            "Reorganizamos la jerarquía para responder de inmediato: 1) Quién es el profesional; 2) Qué incluye el servicio y cuánto cuesta; 3) Qué horario está disponible hoy.",
        },
        {
          phase: "03 · Pruebas con 8 Usuarios",
          title: "Refinando el flujo de elección",
          description:
            "Sesiones prácticas de usabilidad revelaron fricciones al comparar paquetes recurrentes frente a sesiones individuales, corregidas aún en el prototipo.",
        },
        {
          phase: "04 · Handoff y Design Tokens",
          title: "Especificación para equipo de 14 ingenieros",
          description:
            "Documentación detallada de estados de carga, error, responsividad y tokens visuales para asegurar fidelidad en la implementación.",
        },
      ],
      keyResults: [
        "+25% de aumento comprobado en la conversión de reservas y pagos",
        "+42% de mejora en la comprensión de la página por los usuarios finales",
        "Caída del 40% en consultas de soporte relacionadas con dudas de agenda",
        "Componentes reutilizados en nuevas áreas del Design System de la empresa",
      ],
      takeaways:
        "Una conversión alta no depende de trucos artificiales de urgencia. Depende de despejar las dudas en el segundo exacto en que la persona decide contratar.",
      coverImage: "/images/cases/quaddro-sales-cover.png",
      galleryImages: [
        {
          url: "/images/cases/quaddro/site-agendamento.jpg",
          caption: "Vitrina en producción: presentación clara de servicios, duración, precios y reseñas.",
        },
        {
          url: "/images/cases/quaddro/site-horarios.jpg",
          caption: "Selección de horarios: visualización directa de disponibilidad en pocos toques.",
        },
        {
          url: "/images/cases/quaddro/site-config.jpg",
          caption: "Panel del profesional: configuración sencilla de la página pública sin código.",
        },
      ],
      testimonial: {
        quote: "El rediseño trajo resultados medibles para el negocio y facilidad genuina para los profesionales. La entrega fue impecable desde el discovery hasta el handoff.",
        author: "Jéssica Cabrera",
        role: "PM en Quaddro",
        avatar: "/images/testimonials/jessica.jpeg",
      },
    },
    {
      slug: "crossboard",
      title: "Crossboard: App móvil y sistema de gestión para boxes de CrossFit",
      subtitle: "Investigación de campo presencial traducida en una interfaz de alto contraste para check-in rápido, registro de WODs y comunidad.",
      client: "Crossboard",
      role: "Lead Product Designer & UX Researcher",
      duration: "Octubre 2024",
      year: "2024",
      tags: ["Mobile App", "Field Research", "UX/UI", "Fitness Tech", "Design System"],
      summary:
        "Los sistemas tradicionales de gestión de gimnasios fallan en el entorno intenso del CrossFit. Mediante investigación observacional presencial en los boxes, diseñamos una aplicación enfocada en la ergonomía real del atleta durante el entrenamiento.",
      tldr: {
        problem: "Las apps de gestión existentes eran lentas y burocráticas, ignorando que el atleta usa el móvil cansado, con sudor y magnesio en las manos.",
        action: "Realicé investigación observacional in-situ en boxes, mapeé los 3 momentos exactos de uso del teléfono y diseñé la identidad, arquitectura y UI de la app.",
        result: "Adopción inmediata por atletas y coaches, sustitución de apps externas de cronómetro y control de cupos por clase en tiempo real.",
      },
      keyMetric: {
        value: "03 toques",
        label: "Check-in y registro de entrenamiento bajo fatiga física",
      },
      metrics: [
        { value: "03 momentos", label: "Disparadores físicos de uso mapeados en campo" },
        { value: "Timer Nativo", label: "Cronómetro de WOD integrado sin apps externas" },
        { value: "Alto Contraste", label: "UI legible a distancia en el suelo del box" },
        { value: "End-to-End", label: "De la investigación de campo y marca al Design System" },
      ],
      problem:
        "La rutina de un box de CrossFit es intensa y ruidosa. Los sistemas disponibles se enfocaban solo en el cobro de mensualidades y obligaban al alumno a navegar menús diminutos para reservar cupo o anotar sus marcas (PR), generando filas y pizarras borradas por el sudor.",
      challenge:
        "Diseñar una interfaz móvil operable en segundos por alguien con el pulso a 170 latidos por minuto, manos con magnesio y poca paciencia para pantallas administrativas.",
      tradeoffs:
        "Descartamos feeds sociales complejos dentro de la app para priorizar velocidad pura: botones amplios en la zona del pulgar, modo oscuro nativo y el cronómetro de entrenamiento accesible en la primera pantalla.",
      approach:
        "En lugar de limitarnos a encuestas online, fuimos dentro de los boxes a observar clases de 6h a 20h. Descubrimos que el atleta solo toca el móvil en tres momentos: poner música, responder un mensaje rápido y activar el cronómetro del WOD.",
      process: [
        {
          phase: "01 · Inmersión Presencial",
          title: "Observación en el entorno real de entrenamiento",
          description:
            "Mapeo de la distancia entre el atleta, las barras y el teléfono dejado en el suelo, identificando los errores táctiles más comunes bajo fatiga.",
        },
        {
          phase: "02 · Arquitectura y Timer Integrado",
          title: "El cronómetro como corazón de la experiencia",
          description:
            "Unificamos el check-in de la clase, la visualización del entrenamiento del día (WOD) y el cronómetro regresivo (AMRAP, EMOM, For Time) en un flujo continuo.",
        },
        {
          phase: "03 · Identidad Visual y UI",
          title: "Tipografía de impacto y ergonomía",
          description:
            "Construcción de un sistema visual de alto contraste, números grandes legibles a dos metros de distancia y componentes reutilizables para iOS y Android.",
        },
      ],
      keyResults: [
        "Eliminación del uso de aplicaciones externas de cronómetro por parte de los alumnos",
        "Reducción de fricción en el control de asistencia y límite de cupos por clase",
        "Aumento en el registro histórico de pesos y tiempos (WODs) por los atletas",
        "Producto entregado desde cero hasta prototipo validado y documentado para ingeniería",
      ],
      takeaways:
        "El contexto físico dicta la interfaz. Observar a una persona intentando usar una app con la mano sudada de entrenamiento enseña más sobre tamaño de botones y jerarquía que cualquier guía teórica.",
      coverImage: "/images/cases/crossboard-cover.png",
      testimonial: {
        quote: "El proyecto tuvo una ejecución muy por encima de lo esperado. La interacción fue 100% remota, logrando un producto con estética muy bien definida y la experiencia pensada punto por punto.",
        author: "Wagner Caixeta",
        role: "CEO en Crossboard",
        avatar: "/images/testimonials/wagner.png",
      },
    },
  ],
};

const INITIATIVES_BY_LOCALE: Record<Locale, AIExploration[]> = {
  pt: [
    {
      slug: "mapa-cultural",
      title: "CultureMap · Mapa Cultural",
      tools: ["Next.js", "Supabase", "Geolocalização", "Iniciativa Própria"],
      category: "Iniciativa Autoral · Civic Tech",
      description:
        "Plataforma aberta criada do zero para mapear eventos culturais independentes, artistas e espaços em tempo real.",
      image: "/images/cases/mapa-cultural-cover.jpg",
      link: "https://mapaculturalbr.vercel.app/",
    },
    {
      slug: "uprompt",
      title: "UPrompt",
      tools: ["Figma", "Antigravity", "Gemini", "macOS"],
      category: "Workflow & AI Tooling",
      description:
        "Ferramenta de orquestração de contexto e prompts para acelerar a transição entre especificação de design e código.",
      image: "/images/cases/ai-uprompt.png",
    },
    {
      slug: "redesenhe",
      title: "Redesenhe Studio",
      tools: ["Design Strategy", "Research", "Design Systems"],
      category: "Estúdio & Consultoria",
      description:
        "Estúdio estratégico de design de produto focado em ajudar SaaS, fintechs e marketplaces a saírem de problemas ambíguos para soluções em produção.",
      image: "/images/cases/quaddro-sales-cover.png",
    },
    {
      slug: "sib-os",
      title: "SIB OS",
      tools: ["Next.js", "Agentes de IA", "Web System"],
      category: "Interface Experimental",
      description:
        "Ambiente operacional minimalista para organização de pesquisa, documentação de produto e síntese criativa.",
      image: "/images/cases/crossboard-cover.png",
    },
  ],
  en: [
    {
      slug: "mapa-cultural",
      title: "CultureMap · Cultural Map",
      tools: ["Next.js", "Supabase", "Geolocation", "Self-Initiated"],
      category: "Authorial Initiative · Civic Tech",
      description:
        "Open platform built from scratch to map independent cultural events, local artists, and venues in real time.",
      image: "/images/cases/mapa-cultural-cover.jpg",
      link: "https://mapaculturalbr.vercel.app/",
    },
    {
      slug: "uprompt",
      title: "UPrompt",
      tools: ["Figma", "Antigravity", "Gemini", "macOS"],
      category: "Workflow & AI Tooling",
      description:
        "Context and prompt orchestration tool built to accelerate the handoff between design specification and production code.",
      image: "/images/cases/ai-uprompt.png",
    },
    {
      slug: "redesenhe",
      title: "Redesenhe Studio",
      tools: ["Design Strategy", "Research", "Design Systems"],
      category: "Product Design Studio",
      description:
        "Strategic product design studio helping SaaS, fintech, and marketplace teams move from ambiguous problems to shipped solutions.",
      image: "/images/cases/quaddro-sales-cover.png",
    },
    {
      slug: "sib-os",
      title: "SIB OS",
      tools: ["Next.js", "AI Agents", "Web System"],
      category: "Experimental Interface",
      description:
        "Minimalist operating environment designed for research synthesis, product documentation, and creative workflows.",
      image: "/images/cases/crossboard-cover.png",
    },
  ],
  es: [
    {
      slug: "mapa-cultural",
      title: "CultureMap · Mapa Cultural",
      tools: ["Next.js", "Supabase", "Geolocalización", "Iniciativa Propia"],
      category: "Iniciativa de Autor · Civic Tech",
      description:
        "Plataforma abierta creada desde cero para mapear eventos culturales independientes, artistas y espacios en tiempo real.",
      image: "/images/cases/mapa-cultural-cover.jpg",
      link: "https://mapaculturalbr.vercel.app/",
    },
    {
      slug: "uprompt",
      title: "UPrompt",
      tools: ["Figma", "Antigravity", "Gemini", "macOS"],
      category: "Workflow y AI Tooling",
      description:
        "Herramienta de orquestación de contexto y prompts para acelerar la transición entre especificación de diseño y código.",
      image: "/images/cases/ai-uprompt.png",
    },
    {
      slug: "redesenhe",
      title: "Redesenhe Studio",
      tools: ["Design Strategy", "Research", "Design Systems"],
      category: "Estudio y Consultoría",
      description:
        "Estudio estratégico de diseño de producto enfocado en ayudar a SaaS, fintechs y marketplaces a pasar de problemas ambiguos a soluciones en producción.",
      image: "/images/cases/quaddro-sales-cover.png",
    },
    {
      slug: "sib-os",
      title: "SIB OS",
      tools: ["Next.js", "Agentes de IA", "Web System"],
      category: "Interfaz Experimental",
      description:
        "Entorno operativo minimalista para la organización de investigación, documentación de producto y síntesis creativa.",
      image: "/images/cases/crossboard-cover.png",
    },
  ],
};

const TESTIMONIALS_BY_LOCALE: Record<Locale, TestimonialItem[]> = {
  pt: [
    {
      quote:
        "O projeto teve uma execução muito além do esperado. A interação foi feita totalmente à distância, mas com um produto com estética muito bem definida e a experiência pensada ponto a ponto.",
      author: "Wagner Caixeta",
      role: "CEO na Crossboard",
      avatar: "/images/testimonials/wagner.png",
    },
    {
      quote:
        "O Sibelius foi sempre muito pontual e comprometido, entregou tudo no prazo e conseguiu entender minhas necessidades e ideias, dando um toque agradável e sofisticado aos produtos finais.",
      author: "Daniela Garcia",
      role: "CEO na EV Women",
      avatar: "/images/testimonials/daniela.jpeg",
    },
    {
      quote:
        "O Sibelius eleva a equipe com criatividade e soluções antenadas à tecnologia. Seu olhar enriquece nosso trabalho com resultados sólidos, deixando a entrega em outro patamar.",
      author: "Jéssica Cabrera",
      role: "Product Manager na Cloudwalk & Quaddro",
      avatar: "/images/testimonials/jessica.jpeg",
    },
  ],
  en: [
    {
      quote:
        "The project was executed far beyond what was expected. Collaboration was done entirely remotely, resulting in a product with a sharp aesthetic and a user experience thought out point by point.",
      author: "Wagner Caixeta",
      role: "CEO at Crossboard",
      avatar: "/images/testimonials/wagner.png",
    },
    {
      quote:
        "Sibelius was always punctual and deeply committed. He delivered everything on schedule and understood our business needs, bringing a refined, sophisticated craft to the final product.",
      author: "Daniela Garcia",
      role: "CEO at EV Women",
      avatar: "/images/testimonials/daniela.jpeg",
    },
    {
      quote:
        "Sibelius elevates the team with creativity and tech-savvy product solutions. His research-driven approach enriches our work and consistently delivers measurable business outcomes.",
      author: "Jéssica Cabrera",
      role: "Product Manager at Cloudwalk & Quaddro",
      avatar: "/images/testimonials/jessica.jpeg",
    },
  ],
  es: [
    {
      quote:
        "El proyecto tuvo una ejecución muy por encima de lo esperado. La colaboración fue totalmente remota, logrando un producto con una estética muy bien definida y una experiencia pensada punto por punto.",
      author: "Wagner Caixeta",
      role: "CEO en Crossboard",
      avatar: "/images/testimonials/wagner.png",
    },
    {
      quote:
        "Sibelius fue siempre muy puntual y comprometido; entregó todo en plazo y comprendió a fondo nuestras necesidades e ideas, dándole un toque sofisticado y claro a los productos finales.",
      author: "Daniela Garcia",
      role: "CEO en EV Women",
      avatar: "/images/testimonials/daniela.jpeg",
    },
    {
      quote:
        "Sibelius eleva al equipo con creatividad y soluciones conectadas con la tecnología. Su mirada enriquece nuestro trabajo con resultados sólidos, llevando la entrega a otro nivel.",
      author: "Jéssica Cabrera",
      role: "Product Manager en Cloudwalk & Quaddro",
      avatar: "/images/testimonials/jessica.jpeg",
    },
  ],
};

export const clientLogos = [
  { name: "Autodesk", logo: "/images/logos/autodesk.svg" },
  { name: "Quaddro", logo: "/images/logos/quaddro.svg" },
  { name: "APOIA.se", logo: "/images/logos/apoia-se.svg" },
  { name: "Semantix", logo: "/images/logos/semantix.svg" },
  { name: "Senac", logo: "/images/logos/senac.svg" },
  { name: "Crossboard", logo: "/images/logos/crossboard.svg" },
];

export const caseStudies: CaseStudy[] = CASE_STUDIES_BY_LOCALE.pt;
export const aiExplorations: AIExploration[] = INITIATIVES_BY_LOCALE.pt;
export const testimonials: TestimonialItem[] = TESTIMONIALS_BY_LOCALE.pt;

export function getCaseStudies(locale: Locale = "pt"): CaseStudy[] {
  return CASE_STUDIES_BY_LOCALE[locale] || CASE_STUDIES_BY_LOCALE.pt;
}

export function getAIExplorations(locale: Locale = "pt"): AIExploration[] {
  return INITIATIVES_BY_LOCALE[locale] || INITIATIVES_BY_LOCALE.pt;
}

export function getTestimonials(locale: Locale = "pt"): TestimonialItem[] {
  return TESTIMONIALS_BY_LOCALE[locale] || TESTIMONIALS_BY_LOCALE.pt;
}

export function getCaseBySlug(slug: string, locale: Locale = "pt"): CaseStudy | undefined {
  const list = getCaseStudies(locale);
  return list.find((c) => c.slug === slug);
}

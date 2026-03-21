export interface TextContent {
  title?: string;
  paragraph?: string;
}

export interface ImageContent {
  src: string;
  text?: TextContent;
  type?: "desktop" | "mobile";
  scrollable?: boolean;
  theme?: "dark" | "light";
}

export interface Source {
  url: string;
  from: "GitHub" | "Figma" | "other";
}

export interface Project {
  name: string;
  projectName: string;
  type: "desktop" | "mobile" | "both" | string;
  year: string;
  content: (TextContent | ImageContent)[];
  className: string;
  roles: string[];
  sources: Source[];
  stack: string[];
  starred?: boolean;
}

export const projectsData: Project[] = [
  {
    name: "s2-viagens",
    projectName: "Agência de Viagens",
    type: "both",
    year: "2026",
    content: [
      {
        src: "/works/s2viagens/dashboard.png",
        type: "desktop",
        scrollable: true,
        text: {
          title: "Agência de viagens com foco em SEO e performance.",
          paragraph:
            "Site pensado para ser leve e rápido, com otimizações de SEO para melhor ranqueamento nos motores de busca.",
        },
      },
      {
        src: "/works/s2viagens/room.png",
        type: "mobile",
        scrollable: true,
        text: {
          title:
            "Agência de viagens com foco em experiências personalizadas e atendimento humanizado.",
          paragraph:
            "Site 100% responsivo com design moderno e intuitivo, desenvolvido para proporcionar uma experiência de navegação fluida e agradável em qualquer dispositivo.",
        },
      },
    ],
    className: "bg-red-100 dark:bg-yellow-900/30",
    roles: ["Desenvolvimento"],
    sources: [],
    stack: ["Next.js"],
    starred: true,
  },
  {
    name: "market-flask",
    projectName: "Market Flask",
    type: "desktop",
    year: "2025",
    content: [
      {
        src: "/works/market-flask/dash.png",
        type: "desktop",
        scrollable: false,
        text: {
          title:
            "Sistema em Flask para gerenciamento de compra e venda de carros.",
          paragraph:
            "Construido com o intuito de desbravar outros horizontes, com o desenvolvimento web com Python.",
        },
        theme: "dark",
      },
      {
        src: "/works/market-flask/list.png",
        type: "desktop",
        scrollable: false,
        text: {
          title: "Listagem",
          paragraph: "Visualização e controle de todos os produtos do mercado.",
        },
        theme: "dark",
      },
    ],
    className: "bg-gray-200 dark:bg-zinc-800",
    roles: ["Design", "Desenvolvimento"],
    sources: [
      { url: "https://github.com/ProjetosIFSP/market-flask", from: "GitHub" },
    ],
    stack: ["Flask"],
  },
  {
    name: "react-course-2025",
    projectName: "Gestão de Eventos",
    type: "desktop",
    year: "2025",
    content: [
      {
        src: "/works/react-course-2025/list.png",
        type: "desktop",
        scrollable: false,
        text: {
          title: "Listagem de Eventos",
          paragraph: "Interface para gerenciar e listar eventos futuros.",
        },
        theme: "dark",
      },
    ],
    className: "bg-green-100 dark:bg-green-900/30",
    roles: ["Design", "Desenvolvimento"],
    sources: [
      {
        url: "https://github.com/abnerjs/reactcourse-sec-2025",
        from: "GitHub",
      },
    ],
    stack: ["React", "Node.js", "PostgreSQL"],
    starred: true,
  },
  {
    name: "conselho",
    projectName: "Conselho deliberativo",
    type: "desktop",
    year: "2024",
    content: [
      {
        src: "/works/conselho/dashboard.png",
        type: "desktop",
        scrollable: false,
        text: {
          title: "Visão Geral",
          paragraph:
            "Dashboard de análise gerencial para visualizar status do conselho deliberativo.",
        },
      },
      {
        src: "/works/conselho/users.png",
        type: "desktop",
        scrollable: false,
        text: {
          title: "Usuários",
          paragraph:
            "Página com o controle e gerenciamento de permissões de usuários.",
        },
      },
    ],
    className: "bg-red-100 dark:bg-red-900/30",
    roles: ["Design", "Desenvolvimento"],
    sources: [
      {
        url: "https://github.com/Fabrica-de-Software-Academica-IFSP-PEP/2024-2-ConselhoDeliberativo",
        from: "GitHub",
      },
    ],
    stack: ["Angular", "Node.js", "PostgreSQL"],
    starred: true,
  },
  {
    name: "react-course-2024",
    projectName: "React Course - SNCT",
    type: "desktop",
    year: "2024",
    content: [
      {
        src: "/works/react-course/create-goal.png",
        type: "desktop",
        scrollable: false,
        text: {
          title: "Criação de Meta",
          paragraph: "Tela para criação de metas e acompanhamento.",
        },
        theme: "dark",
      },
      {
        src: "/works/react-course/summary.png",
        type: "desktop",
        scrollable: false,
        text: {
          title: "Resumo",
          paragraph:
            "Página principal com o resumo e métricas das metas cadastradas.",
        },
        theme: "dark",
      },
    ],
    className: "bg-blue-100 dark:bg-blue-900/30",
    roles: ["Design", "Desenvolvimento"],
    sources: [
      {
        url: "https://github.com/abnerjs/reactcourse-sec-2024",
        from: "GitHub",
      },
    ],
    stack: ["React"],
  },
  {
    name: "shopping",
    projectName: "AJS Shopping",
    type: "desktop",
    year: "2023",
    content: [
      {
        src: "/works/shopping/cart.png",
        type: "desktop",
        scrollable: false,
        text: {
          title: "Meu Carrinho",
          paragraph:
            "Página apresentando o resumo dos itens antes da finalização.",
        },
      },
      {
        src: "/works/shopping/dashboard.png",
        type: "desktop",
        scrollable: false,
        text: {
          title: "Produtos",
          paragraph: "Visualização rápida dos produtos do shopping.",
        },
      },
    ],
    className: "bg-teal-100 dark:bg-teal-900/30",
    roles: ["Desenvolvimento"],
    sources: [
      { url: "https://github.com/abnerjs/shopping-list", from: "GitHub" },
    ],
    stack: ["React"],
  },
  {
    name: "viacep",
    projectName: "Localizador pelo CEP",
    type: "mobile",
    year: "2023",
    content: [
      {
        src: "/works/viacep/form.png",
        type: "mobile",
        scrollable: false,
        text: {
          title: "Nova pesquisa",
          paragraph: "Interface inicial de digitação do CEP.",
        },
      },
      {
        src: "/works/viacep/list.png",
        type: "mobile",
        scrollable: false,
        text: {
          title: "Histórico",
          paragraph: "Página com todas as consultas armazenadas.",
        },
      },
      {
        src: "/works/viacep/main.png",
        type: "mobile",
        scrollable: false,
        text: {
          title: "Resultado",
          paragraph:
            "Página com a visualização completa do endereço resultante.",
        },
      },
    ],
    className: "bg-cyan-100 dark:bg-cyan-900/30",
    roles: ["Design", "Desenvolvimento"],
    sources: [{ url: "https://github.com/abnerjs/viacep", from: "GitHub" }],
    stack: ["Flutter"],
  },
  {
    name: "tasks",
    projectName: "Tasks em Flutter",
    type: "mobile",
    year: "2023",
    content: [
      {
        src: "/works/tasks/home.gif",
        type: "mobile",
        scrollable: false,
        text: {
          title: "Home",
          paragraph: "Navegação mostrando interações dentro das tarefas.",
        },
      },
      {
        src: "/works/tasks/menu.png",
        type: "mobile",
        scrollable: false,
        text: {
          title: "Menu",
          paragraph: "Layout do menu lateral e itens de configuração.",
        },
      },
      {
        src: "/works/tasks/profile.png",
        type: "mobile",
        scrollable: false,
        text: {
          title: "Perfil",
          paragraph: "Uma tela mostrando os detalhes e atividades do usuário.",
        },
      },
    ],
    className: "bg-sky-100 dark:bg-sky-900/30",
    roles: ["Design", "Desenvolvimento"],
    sources: [
      { url: "https://github.com/abnerjs/bc-flutter-app", from: "GitHub" },
    ],
    stack: ["Flutter"],
  },
  {
    name: "portal-relatorios",
    projectName: "Portal de Relatórios",
    type: "both",
    year: "2022",
    content: [
      {
        src: "/works/portal-relatorios/dashboard.png",
        type: "desktop",
        scrollable: false,
        text: {
          title: "Painel Geral",
          paragraph: "Painel de exibição de dados combinados e gráficos.",
        },
      },
      {
        src: "/works/portal-relatorios/users.png",
        type: "mobile",
        scrollable: false,
        text: {
          title: "Equipe",
          paragraph:
            "Visualização e controle de todos os funcionários e suas permissões.",
        },
      },
    ],
    className: "bg-indigo-100 dark:bg-indigo-900/30",
    roles: ["Design", "Desenvolvimento"],
    sources: [
      { url: "https://github.com/abnerjs/PortalRelatorios", from: "GitHub" },
    ],
    stack: ["React"],
  },
  {
    name: "ponto",
    projectName: "Sistema de Ponto",
    type: "both",
    year: "2022",
    content: [
      {
        src: "/works/ponto/desktop.png",
        type: "desktop",
        scrollable: false,
        text: {
          title: "Desktop",
          paragraph: "Interface web de marcação do ponto para PC.",
        },
      },
      {
        src: "/works/ponto/mobile.png",
        type: "mobile",
        scrollable: false,
        text: {
          title: "Mobile",
          paragraph:
            "Aplicativo móvel para gerenciar o espelho de ponto diário.",
        },
      },
    ],
    className: "bg-violet-100 dark:bg-violet-900/30",
    roles: ["Design", "Interação"],
    sources: [
      {
        url: "https://www.figma.com/design/QkJJWaMoIeOkxN9UcDMWkc/Sistema-de-Ponto?node-id=1942-10750&t=HCxRfooLW5r5Ohwi-1",
        from: "Figma",
      },
    ],
    stack: ["Figma"],
  },
  {
    name: "insumos",
    projectName: "Insumos",
    type: "mobile",
    year: "2022",
    content: [
      {
        src: "/works/insumos/appointments.png",
        type: "mobile",
        scrollable: false,
        text: {
          title: "Agendamentos",
          paragraph: "Controle e visão em lista de agendamentos e status.",
        },
      },
      {
        src: "/works/insumos/fichas.png",
        type: "mobile",
        scrollable: false,
        text: {
          title: "Fichas",
          paragraph: "Uma tela simplificada de fichas de manutenção.",
        },
      },
      {
        src: "/works/insumos/machines.png",
        type: "mobile",
        scrollable: false,
        text: {
          title: "Equipamentos",
          paragraph: "Registro das máquinas que serão inspecionadas.",
        },
      },
    ],
    className: "bg-purple-100 dark:bg-purple-900/30",
    roles: ["Design", "Interação"],
    sources: [
      {
        url: "https://www.figma.com/file/EiV65w3Y2q1hC4HoilnL2m/Insumos?node-id=0%3A1&t=RLXFk325dwOK6C88-1",
        from: "Figma",
      },
    ],
    stack: ["Figma"],
  },
  {
    name: "iworkoff",
    projectName: "iWorkOff",
    type: "desktop",
    year: "2021",
    content: [
      {
        src: "/works/iworkoff/dashboard.gif",
        type: "desktop",
        scrollable: false,
        text: {
          title: "Plataforma de Relatórios",
          paragraph:
            "Utilização do dashboard de relatórios onde os recursos em tempo real são demonstrados.",
        },
      },
      {
        src: "/works/iworkoff/login.png",
        type: "desktop",
        scrollable: false,
        text: {
          title: "Login",
          paragraph: "A tela inicial de acesso ao sistema.",
        },
      },
    ],
    className: "bg-fuchsia-100 dark:bg-fuchsia-900/30",
    roles: ["Design", "Desenvolvimento"],
    sources: [{ url: "https://github.com/abnerjs/iworkoff", from: "GitHub" }],
    stack: ["React"],
  },
];

export const allStacks = Array.from(
  new Set(projectsData.flatMap((p) => p.stack[0])),
);

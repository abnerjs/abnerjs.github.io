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
  reverseStack?: boolean;
}

export const projectsData: Project[] = [
  {
    name: "access-control",
    projectName: "Controle de Acesso IoT",
    type: "both",
    year: "2026",
    reverseStack: true,
    content: [
      {
        src: "/works/access-control/dash.png",
        type: "mobile",
        scrollable: false,
        text: {
          title: "Controle de Acesso",
          paragraph:
            "Sistema para gerenciar e controlar o acesso a salas e laboratórios de uma instituição.",
        },
      },
      {
        src: "/works/access-control/userform.mp4",
        type: "desktop",
        scrollable: false,
        text: {
          title: "Formulário de Usuário",
          paragraph:
            "Interface para cadastro e gerenciamento de usuários do sistema.",
        },
      },
    ],
    className: "bg-blue-100 dark:bg-blue-900/30",
    roles: ["Design", "Desenvolvimento"],
    sources: [
      { url: "https://github.com/ProjetosIFSP/access-control", from: "GitHub" },
    ],
    stack: ["React", "Node.js", "PostgreSQL"],
    starred: true,
  },
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
    projectName: "Loja de Carros",
    type: "desktop",
    year: "2025",
    content: [
      {
        src: "/works/market-flask/dash.png",
        type: "desktop",
        scrollable: false,
        text: {
          title:
            "Sistema em Flask para gerenciamento de compra e venda de carros",
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
          title: "Gestão de itens",
          paragraph:
            "Funcionalidades para manutenção de veículos, prestadores de serviços, serviços e clientes.",
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
          paragraph:
            "Interface para gerenciar e listar eventos e participantes de uma instituição.",
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
    projectName: "Gestão de reuniões",
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
            "Dashboard de análise gerencial para visualizar status de atas dos conselhos do IFSP-PEP.",
        },
      },
      {
        src: "/works/conselho/users.png",
        type: "desktop",
        scrollable: false,
        text: {
          title: "Usuários",
          paragraph:
            "Página com o controle e gerenciamento de usuários com importação de dados direto do Suap.",
        },
      },
    ],
    className: "bg-red-100 dark:bg-red-900/30",
    roles: ["Design", "Desenvolvimento"],
    sources: [
      {
        url: "https://www.figma.com/design/FeCMj2bctDqeliwbiuLQSX/ConselhoDeliberativo?node-id=140-1506&t=LxI8A7OLFkoQNAOZ-1",
        from: "Figma",
      },
    ],
    stack: ["Angular", "Node.js", "PostgreSQL"],
    starred: true,
  },
  {
    name: "react-course-2024",
    projectName: "Controle de metas semanais",
    type: "desktop",
    year: "2024",
    content: [
      {
        src: "/works/react-course/create-goal.png",
        type: "desktop",
        scrollable: false,
        text: {
          title: "Gestão de metas semanais",
          paragraph:
            "Um ToDo list, só que permite que visualize suas metas semanalmente e em quantidades variáveis.",
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
            "Página principal com o resumo e métricas das metas realizadas na semana.",
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
          title: "Verifica o cep",
          paragraph:
            "Você digita seu cep e ele já aparece no mapa! Projeto criado a fim de desbravar Flutter com uso de APIs externas.",
        },
      },
      {
        src: "/works/viacep/list.png",
        type: "mobile",
        scrollable: false,
        text: {
          title: "Histórico",
          paragraph: "Assim você consegue manter o histórico de consultas.",
        },
      },
      {
        src: "/works/viacep/main.png",
        type: "mobile",
        scrollable: false,
        text: {
          title: "Resultado",
          paragraph:
            "Página com a visualização dos endereços buscados e salvos recentemente, ótimo para saber suas rotas ou algo do tipo.",
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
          title: "ToDo List",
          paragraph:
            "Um simples todo list, mas um estudo de frontend avançado com Flutter.",
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
      {
        url: "https://www.figma.com/design/3AVOpouhDNUlUjsqSJcFdv/Portal-de-Relat%C3%B3rios?node-id=0-1&t=eCof2y0IXLP119pj-1",
        from: "Figma",
      },
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
          title: "Análise de registros de ponto",
          paragraph: "Gerenciamento de pontos de equipe de uma empresa.",
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
    projectName: "Controle de Insumos",
    type: "mobile",
    year: "2022",
    content: [
      {
        src: "/works/insumos/notation.png",
        type: "mobile",
        scrollable: false,
        text: {
          title: "Apontamentos",
          paragraph:
            "Uma aplicação mobile para registro e manutenção de apontamentos de trabalho.",
        },
      },
      {
        src: "/works/insumos/fichas.png",
        type: "mobile",
        scrollable: false,
        text: {
          title: "Visualização",
          paragraph:
            "Listagem de registros com visualização simples e objetiva.",
        },
      },
      {
        src: "/works/insumos/machines.png",
        type: "mobile",
        scrollable: false,
        text: {
          title: "Formulários",
          paragraph:
            "Um cadastro rápido, sem muita informação na tela para um preenchimento eficiente.",
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
    projectName: "Monitor de atividades no trabalho",
    type: "desktop",
    year: "2021",
    content: [
      {
        src: "/works/iworkoff/dashboard.gif",
        type: "desktop",
        scrollable: false,
        text: {
          title: "Plataforma de Relatórios de Atividades",
          paragraph:
            "Monitora e esclarece as atividades realizadas no ambiente de trabalho, tempo ativo e inativo e softwares utilizados.",
        },
      },
      {
        src: "/works/iworkoff/login.png",
        type: "desktop",
        scrollable: false,
        text: {
          title: "Sistema de autenticação",
          paragraph:
            "A tela inicial de acesso ao sistema. Por meio disso, apenas o colaborador e seus superiores têm acesso aos dados registrados, garantindo a privacidade e segurança das informações.",
        },
      },
    ],
    className: "bg-fuchsia-100 dark:bg-fuchsia-900/30",
    roles: ["Design", "Desenvolvimento"],
    sources: [
      { url: "https://github.com/abnerjs/iworkoff", from: "GitHub" },
      {
        url: "https://www.figma.com/design/2TfY45k5qHg3uvEfy3P7dQ/iWorkOff?node-id=0-1&t=8OEjdKQkJlELjFVO-1",
        from: "Figma",
      },
    ],
    stack: ["React"],
  },
];

export const allStacks = Array.from(
  new Set(projectsData.flatMap((p) => p.stack[0])),
);

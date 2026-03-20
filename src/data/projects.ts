export interface Project {
  name: string;
  projectName: string;
  type: "desktop" | "mobile" | "both" | string;
  year: string;
  images: string[];
  className: string;
  roles: string[];
  stack: string[];
  starred?: boolean;
}

export const projectsData: Project[] = [
  {
    name: "market-flask",
    projectName: "Market Flask",
    type: "desktop",
    year: "2025",
    images: ["/works/market-flask/dash.png", "/works/market-flask/list.png"],
    className: "bg-gray-200 dark:bg-zinc-800",
    roles: ["Design", "Desenvolvimento"],
    stack: ["Flask"],
  },
  {
    name: "react-course-2025",
    projectName: "Gestão de Eventos",
    type: "desktop",
    year: "2025",
    images: ["/works/react-course-2025/list.png"],
    className: "bg-green-100 dark:bg-green-900/30",
    roles: ["Design", "Desenvolvimento"],
    stack: ["React", "Node.js", "PostgreSQL"],
    starred: true,
  },
  {
    name: "conselho",
    projectName: "Conselho deliberativo",
    type: "desktop",
    year: "2024",
    images: ["/works/conselho/dashboard.png", "/works/conselho/users.png"],
    className: "bg-red-100 dark:bg-red-900/30",
    roles: ["Design", "Desenvolvimento"],
    stack: ["Angular"],
    starred: true,
  },
  {
    name: "react-course-2024",
    projectName: "React Course - SNCT",
    type: "desktop",
    year: "2024",
    images: [
      "/works/react-course/create-goal.png",
      "/works/react-course/summary.png",
    ],
    className: "bg-blue-100 dark:bg-blue-900/30",
    roles: ["Design", "Desenvolvimento"],
    stack: ["React"],
  },
  {
    name: "shopping",
    projectName: "AJS Shopping",
    type: "desktop",
    year: "2023",
    images: ["/works/shopping/cart.png", "/works/shopping/dashboard.png"],
    className: "bg-teal-100 dark:bg-teal-900/30",
    roles: ["Desenvolvimento"],
    stack: ["React"],
  },
  {
    name: "viacep",
    projectName: "Localizador pelo CEP",
    type: "mobile",
    year: "2023",
    images: [
      "/works/viacep/form.png",
      "/works/viacep/list.png",
      "/works/viacep/main.png",
    ],
    className: "bg-cyan-100 dark:bg-cyan-900/30",
    roles: ["Design", "Desenvolvimento"],
    stack: ["Flutter"],
  },
  {
    name: "tasks",
    projectName: "Tasks em Flutter",
    type: "mobile",
    year: "2023",
    images: [
      "/works/tasks/home.gif",
      "/works/tasks/menu.png",
      "/works/tasks/profile.png",
    ],
    className: "bg-sky-100 dark:bg-sky-900/30",
    roles: ["Design", "Desenvolvimento"],
    stack: ["Flutter"],
  },
  {
    name: "portal-relatorios",
    projectName: "Portal de Relatórios",
    type: "both",
    year: "2022",
    images: [
      "/works/portal-relatorios/dashboard.png",
      "/works/portal-relatorios/users.png",
    ],
    className: "bg-indigo-100 dark:bg-indigo-900/30",
    roles: ["Design", "Desenvolvimento"],
    stack: ["React"],
  },
  {
    name: "ponto",
    projectName: "Sistema de Ponto",
    type: "both",
    year: "2022",
    images: ["/works/ponto/desktop.png", "/works/ponto/mobile.png"],
    className: "bg-violet-100 dark:bg-violet-900/30",
    roles: ["Design", "Interação"],
    stack: ["Figma"],
  },
  {
    name: "insumos",
    projectName: "Insumos",
    type: "mobile",
    year: "2022",
    images: [
      "/works/insumos/appointments.png",
      "/works/insumos/fichas.png",
      "/works/insumos/machines.png",
    ],
    className: "bg-purple-100 dark:bg-purple-900/30",
    roles: ["Design", "Interação"],
    stack: ["Figma"],
  },
  {
    name: "iworkoff",
    projectName: "iWorkOff",
    type: "desktop",
    year: "2021",
    images: ["/works/iworkoff/dashboard.gif", "/works/iworkoff/login.png"],
    className: "bg-fuchsia-100 dark:bg-fuchsia-900/30",
    roles: ["Design", "Desenvolvimento"],
    stack: ["React"],
  },
];

export const allStacks = Array.from(
  new Set(projectsData.flatMap((p) => p.stack[0])),
);

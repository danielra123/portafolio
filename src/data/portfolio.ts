// Fuente única de contenido del portafolio. Edita aquí, no en los componentes.

export type NavLink = {
  href: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "email" | "phone" | "linkedin" | "github";
};

export type Identity = {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  languages: string;
  availability: string;
  cvHref: string;
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type Project = {
  title: string;
  context: string;
  bullets: string[];
  technologies: string[];
  repository?: string;
  liveUrl?: string;
};

export type ExperienceItem = {
  role: string;
  organization: string;
  location: string;
  period: string;
  bullets: string[];
  technologies: string[];
};

export type EducationItem = {
  degree: string;
  institution: string;
};

export const identity: Identity = {
  name: "Daniel Estiven Ramirez Muñoz",
  title: "Ingeniero de Sistemas",
  email: "danielra1847@gmail.com",
  phone: "+57 324 290 4462",
  linkedin: "https://linkedin.com/in/daniel-ramirez-ab539b35",
  github: "https://github.com/danielra123",
  languages: "Español nativo, Inglés B1",
  availability: "Bogotá, Colombia · Disponibilidad inmediata para trabajo remoto y presencial",
  cvHref: "/CV-Daniel-Ramirez.pdf",
};

export const heroPitch: string[] = [
  "Ingeniero de Sistemas titulado con enfoque Full Stack y experiencia práctica en el análisis, diseño, desarrollo y mantenimiento de aplicaciones de software.",
  "Orientado a construir soluciones funcionales, mantenibles y alineadas con las necesidades del negocio, con capacidad de aprendizaje, adaptación y trabajo colaborativo en equipo.",
];

export const aboutText: string =
  "Ingeniero de Sistemas titulado, con experiencia práctica en el análisis, diseño, desarrollo y mantenimiento de aplicaciones de software, con enfoque Full Stack. Perfil orientado a construir soluciones funcionales, mantenibles y alineadas con las necesidades del negocio, con capacidad de aprendizaje, adaptación a diferentes entornos y arquitecturas, y trabajo colaborativo en equipo. Interés en seguir consolidando mi trayectoria profesional y en la mejora continua de mis competencias técnicas.";

export const navLinks: NavLink[] = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#stack", label: "Stack" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#educacion", label: "Educación" },
  { href: "#juego", label: "Arcade" },
  { href: "#contacto", label: "Contacto" },
];

export const socialLinks: SocialLink[] = [
  { label: identity.email, href: `mailto:${identity.email}`, icon: "email" },
  {
    label: "WhatsApp",
    href: "https://wa.me/573242904462?text=Hola%20Daniel,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar.",
    icon: "phone",
  },
  { label: "LinkedIn", href: identity.linkedin, icon: "linkedin" },
  { label: "GitHub", href: identity.github, icon: "github" },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Lenguajes",
    skills: ["JavaScript/TypeScript", "Java", "Python", "PHP", "C#"],
  },
  {
    title: "Frontend",
    skills: [
      "Angular",
      "HTML5",
      "CSS3",
      "PrimeNG",
      "Bootstrap",
      "Chart.js",
    ],
  },
  {
    title: "Backend y APIs",
    skills: [
      "Node.js",
      "Express.js",
      "Laravel",
      ".NET",
      "REST API",
      "Sequelize ORM",
      "JWT",
    ],
  },
  {
    title: "Bases de datos",
    skills: ["MariaDB", "PostgreSQL", "MySQL", "SQL"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, RDS)", "Docker", "Git/GitHub", "CI/CD (GitHub Actions)"],
  },
  {
    title: "Arquitectura",
    skills: ["MVC", "Arquitectura de tres capas", "REST", "Clean Architecture", "SOLID"],
  },
  {
    title: "Testing",
    skills: ["Jest", "Supertest", "Cypress", "JUnit", "PyTest", "Mocha", "Pruebas unitarias e integración"],
  },
  {
    title: "Metodologías",
    skills: ["Scrum", "Agile", "Git Flow", "Code Review"],
  },
  {
    title: "Herramientas",
    skills: ["VS Code", "Postman", "Swagger", "HeidiSQL", "DBeaver", "Jira", "Trello"],
  },
  {
    title: "IA y productividad",
    skills: ["Claude Code", "Gemini", "GitHub Copilot", "Codex"],
  },
];

export const projects: Project[] = [
  {
    title: "DataInsight Dashboard",
    context: "Aplicación web de análisis y visualización de datos",
    liveUrl: "https://datainsight-dashboard-git-main-daniel-ramirez2.vercel.app/",
    bullets: [
      "Frontend: construí la interfaz de carga y análisis con Angular 19, con visualizaciones de métricas, categorías, series y deducciones sobre los datos.",
      "Backend: desarrollé una API REST con FastAPI y Python para validar archivos CSV, procesarlos con Pandas y entregar resúmenes y datos para las gráficas.",
      "Implementé aislamiento por sesión de navegador para que diferentes usuarios analicen sus propios CSV sin mezclar datasets. El frontend está desplegado en Vercel y la API en Render.",
    ],
    technologies: ["Angular", "FastAPI", "Python", "Pandas", "Render", "Vercel"],
    repository: "https://github.com/danielra123/datainsight-dashboard",
  },
  {
    title: "HRCATCH 2.0 — Gestión de Repuestos e Indicadores",
    context: "Pasantía profesional · Hospital Universitario San Rafael de Tunja (HUSRT)",
    bullets: [
      "Diseñé y desarrollé el módulo de Gestión de Repuestos: 4 tablas relacionales en MariaDB, CRUD, control de stock con alertas automáticas por umbral mínimo, auditoría inmutable de cambios y exportación PDF/CSV.",
      "Desarrollé el módulo de Indicadores de Sistemas: 10+ gráficas interactivas en tiempo real con Chart.js y PrimeNG.",
      "Construí APIs RESTful con Node.js, Express y Sequelize ORM sobre MariaDB, con operaciones transaccionales y rollback automático para garantizar la consistencia del inventario ante fallos.",
      "Desarrollé interfaces en Angular 19 (standalone components, Signals, PrimeNG, Chart.js), con estado reactivo signal()/computed() para un dashboard de más de 10 datasets derivados.",
      "Implementé autenticación JWT y autorización por 4 roles (SuperAdmin, Admin, Técnico, Usuario), con doble validación de reglas de negocio en frontend y backend.",
      "Apliqué pruebas automatizadas con Jest, Supertest y Cypress: 22 pruebas de integración exitosas en 2 suites.",
    ],
    technologies: [
      "Angular 19",
      "Node.js",
      "Express",
      "Sequelize",
      "MariaDB",
      "JWT",
      "Jest",
      "Cypress",
      "Git",
    ],
  },
  {
    title: "Sistema de alertas tempranas de deserción estudiantil",
    context: "Práctica profesional · Bienestar Universitario (UDIES), Universidad Santo Tomás",
    bullets: [
      "Continué el desarrollo y reestructuré un sistema de alertas tempranas de deserción estudiantil, reemplazando el seguimiento manual en hojas de Excel.",
      "Implementé la carga y consolidación de información por estudiante (asistencia a UDIES, materias matriculadas, perdidas y canceladas) para identificar patrones de riesgo académico.",
      "Construí un esquema de semaforización que visualiza en tiempo real el nivel de riesgo de deserción de cada estudiante, facilitando la priorización de casos.",
      "Desarrollé el frontend con ASP.NET (Razor Pages/MVC) integrado al backend .NET, con persistencia en PostgreSQL y PHP en componentes adicionales.",
    ],
    technologies: [".NET", "ASP.NET (Razor Pages/MVC)", "PostgreSQL", "PHP"],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Desarrollador de Software – Pasantía Profesional",
    organization: "Hospital Universitario San Rafael de Tunja (HUSRT)",
    location: "Tunja, Colombia",
    period: "Enero 2026 – Mayo 2026",
    bullets: [
      "Diseñé y desarrollé el módulo de Gestión de Repuestos de HRCATCH 2.0, implementando 4 tablas relacionales en MariaDB, operaciones CRUD, control de inventario con alertas por stock mínimo, auditoría de cambios y exportación de información a PDF y CSV.",
      "Desarrollé APIs RESTful con Node.js, Express y Sequelize ORM, implementando operaciones transaccionales y mecanismos de rollback para garantizar la consistencia de los datos del inventario.",
      "Desarrollé interfaces web con Angular 19, Standalone Components, Signals, PrimeNG y Chart.js, incluyendo dashboards con más de 10 gráficas y conjuntos de datos derivados.",
      "Implementé autenticación mediante JWT y autorización basada en roles, con validación de reglas de negocio en frontend y backend.",
      "Implementé pruebas automatizadas utilizando Jest, Supertest y Cypress, con 22 pruebas de integración ejecutadas exitosamente en 2 suites.",
      "Trabajé bajo metodología Scrum, participando en 4 sprints y entregando incrementos funcionales validados con el equipo de TI y el tutor empresarial.",
      "Utilicé Git para control de versiones y trabajo colaborativo.",
    ],
    technologies: [
      "Angular 19",
      "Node.js",
      "Express",
      "Sequelize",
      "MariaDB",
      "JWT",
      "Jest",
      "Cypress",
      "Git",
    ],
  },
  {
    role: "Desarrollador de Software – Práctica Profesional",
    organization: "Universidad Santo Tomás",
    location: "Tunja, Colombia",
    period: "Enero 2025 – Mayo 2025",
    bullets: [
      "Continué el desarrollo y reestructuré un sistema de alertas tempranas de deserción estudiantil para el área de Bienestar Universitario (UDIES), reemplazando el seguimiento manual realizado mediante hojas de cálculo.",
      "Implementé procesos para la carga y consolidación de información académica por estudiante, incluyendo asistencia a UDIES, materias matriculadas, materias perdidas y materias canceladas.",
      "Desarrollé un sistema de semaforización de riesgo académico para visualizar y priorizar estudiantes según su nivel de riesgo de deserción.",
      "Desarrollé y ajusté funcionalidades del frontend utilizando ASP.NET Razor Pages/MVC, integradas con el backend .NET y una base de datos PostgreSQL.",
      "Participé en la integración y mantenimiento de componentes adicionales desarrollados en PHP.",
    ],
    technologies: [".NET", "ASP.NET (Razor Pages/MVC)", "PostgreSQL", "PHP"],
  },
];

export const education: EducationItem[] = [
  {
    degree: "Ingeniería de Sistemas (2021 – 2026)",
    institution: "Universidad Santo Tomás – Tunja, Boyacá",
  },
];

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
  location: string;
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

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  context: string;
  bullets: string[];
  technologies: string[];
  links: ProjectLink[];
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
  name: "Daniel Estiven Ramírez Muñoz",
  title: "Ingeniero de Sistemas | Full Stack Developer",
  location: "Tunja, Boyacá, Colombia",
  email: "danielra1847@gmail.com",
  phone: "+57 324 290 4462",
  linkedin: "https://linkedin.com/in/daniel-ramirez-ab539b35a",
  github: "https://github.com/danielra123",
  languages: "Español nativo, Inglés B1",
  availability: "Disponibilidad inmediata, remoto o presencial",
  cvHref: "/CV-Daniel-Ramirez.pdf",
};

export const heroPitch: string[] = [
  "Ingeniero de Sistemas con experiencia práctica como Full Stack Developer en los sectores salud y educativo, llevando problemas reales de negocio hasta software que la gente usa todos los días.",
  "Aprendo rápido, me adapto a arquitecturas y equipos ya en marcha, y cuido el código tanto como el resultado.",
];

export const aboutText: string =
  "Ingeniero de Sistemas con experiencia práctica como Full Stack Developer en los sectores salud y educativo: formé parte del equipo de pasantes que desarrolló un sistema de gestión hospitalaria en un hospital universitario, y participé en la continuación y reestructuración de un sistema de alertas de deserción estudiantil para una institución educativa. Disfruto llevar un problema real de negocio hasta software que la gente usa todos los días, cuidando el código tanto como el resultado. Aprendo rápido, me adapto a arquitecturas y equipos ya en marcha, y busco un lugar donde seguir creciendo profesionalmente junto a un equipo que exija buen nivel.";

export const navLinks: NavLink[] = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#stack", label: "Stack" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#educacion", label: "Educación" },
  { href: "#contacto", label: "Contacto" },
];

export const socialLinks: SocialLink[] = [
  { label: identity.email, href: `mailto:${identity.email}`, icon: "email" },
  {
    label: identity.phone,
    href: `tel:${identity.phone.replace(/\s+/g, "")}`,
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
      "Angular (Signals, standalone components)",
      "HTML5",
      "CSS3",
      "PrimeNG",
      "Bootstrap",
      "Chart.js",
    ],
  },
  {
    title: "Backend & APIs",
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
    title: "Bases de Datos",
    skills: ["MariaDB", "PostgreSQL", "MySQL", "SQL"],
  },
  {
    title: "Machine Learning (fundamentos)",
    skills: ["Python", "Pandas", "Scikit-learn", "TensorFlow"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, RDS)", "Docker", "Git/GitHub", "CI/CD (GitHub Actions)"],
  },
  {
    title: "Arquitectura",
    skills: ["MVC", "Tres capas", "REST", "Clean Architecture", "SOLID"],
  },
  {
    title: "Testing",
    skills: ["Jest", "Supertest", "Cypress", "JUnit", "PyTest", "Mocha"],
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
    title: "Herramientas de IA",
    skills: ["GitHub Copilot", "Claude Code", "Gemini", "Claude"],
  },
];

export const projects: Project[] = [
  {
    title: "HRCATCH 2.0 — Gestión de Repuestos e Indicadores",
    context: "Hospital Universitario San Rafael de Tunja (HUSRT)",
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
    links: [
      // TODO: reemplazar "#" por el enlace real del repositorio cuando esté disponible.
      { label: "Repositorio", href: "#" },
    ],
  },
  {
    title: "Sistema de alertas tempranas de deserción estudiantil",
    context: "Bienestar Universitario (UDIES), Universidad Santo Tomás",
    bullets: [
      "Continué el desarrollo y reestructuré un sistema de alertas tempranas de deserción estudiantil, reemplazando el seguimiento manual en hojas de Excel.",
      "Implementé la carga y consolidación de información por estudiante (asistencia a UDIES, materias matriculadas, perdidas y canceladas) para identificar patrones de riesgo académico.",
      "Construí un esquema de semaforización que visualiza en tiempo real el nivel de riesgo de deserción de cada estudiante, facilitando la priorización de casos.",
      "Desarrollé el frontend con ASP.NET (Razor Pages/MVC) integrado al backend .NET, con persistencia en PostgreSQL y PHP en componentes adicionales.",
    ],
    technologies: [".NET", "ASP.NET (Razor Pages/MVC)", "PostgreSQL", "PHP"],
    links: [
      // TODO: reemplazar "#" por el enlace real del repositorio cuando esté disponible.
      { label: "Repositorio", href: "#" },
    ],
  },
  {
    title: "Proyecto de grado — Módulos de sistemas web para el HUSRT",
    context: "Universidad Santo Tomás, Seccional Tunja — Aprobado",
    bullets: [
      "Elaboré el documento SRS (requerimientos funcionales y no funcionales) a partir de entrevistas y observación directa con el tutor empresarial y el equipo de TI.",
      "Detecté y corregí 4 defectos de lógica mediante un ciclo formal de pruebas funcionales, de integración (Jest/Supertest) y de aceptación con el área de TI.",
      "Impacto proyectado: tiempo de respuesta a incidencias de 48 h a menos de 12 h, registro formal de solicitudes del 65% al 100%, y 30% menos recurrencia de incidencias mediante base de conocimiento.",
      "Documenté manuales de usuario diferenciados para 3 perfiles de rol.",
    ],
    technologies: ["SRS", "Jest", "Supertest", "Documentación técnica"],
    links: [
      // TODO: reemplazar "#" por el enlace real del repositorio cuando esté disponible.
      { label: "Repositorio", href: "#" },
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Desarrollador de Software, Pasantía Profesional",
    organization: "Hospital Universitario San Rafael de Tunja (HUSRT)",
    location: "Tunja, Colombia",
    period: "Enero 2026 – Mayo 2026",
    bullets: [
      "Diseñé y desarrollé el módulo de Gestión de Repuestos de HRCATCH 2.0: 4 tablas relacionales en MariaDB, CRUD, control de stock con alertas automáticas por umbral mínimo, auditoría inmutable de cambios y exportación PDF/CSV.",
      "Desarrollé el módulo de Indicadores de Sistemas: 10+ gráficas interactivas en tiempo real con Chart.js y PrimeNG.",
      "Construí APIs RESTful con Node.js, Express y Sequelize ORM sobre MariaDB, con operaciones transaccionales y rollback automático para garantizar la consistencia del inventario ante fallos.",
      "Desarrollé interfaces en Angular 19 (standalone components, Signals, PrimeNG, Chart.js), con estado reactivo signal()/computed() para un dashboard de más de 10 datasets derivados.",
      "Implementé autenticación JWT y autorización por 4 roles (SuperAdmin, Admin, Técnico, Usuario), con doble validación de reglas de negocio en frontend y backend.",
      "Apliqué pruebas automatizadas con Jest, Supertest y Cypress: 22 pruebas de integración exitosas en 2 suites.",
      "Trabajé bajo Scrum en 4 sprints, entregando incrementos funcionales validados con el tutor empresarial y el equipo de TI del hospital.",
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
    role: "Desarrollador de Software, Práctica Profesional",
    organization: "Universidad Santo Tomás",
    location: "Tunja, Colombia",
    period: "Enero 2025 – Junio 2025",
    bullets: [
      "Continué el desarrollo y reestructuré un sistema de alertas tempranas de deserción estudiantil para Bienestar Universitario (UDIES), reemplazando el seguimiento manual en hojas de Excel.",
      "Implementé la carga y consolidación de información por estudiante (asistencia a UDIES, materias matriculadas, perdidas y canceladas) para identificar patrones de riesgo académico.",
      "Construí un esquema de semaforización que visualiza en tiempo real el nivel de riesgo de deserción de cada estudiante, facilitando la priorización de casos.",
      "Desarrollé el frontend con ASP.NET (Razor Pages/MVC) integrado al backend .NET, con persistencia en PostgreSQL y PHP en componentes adicionales.",
    ],
    technologies: [".NET", "ASP.NET (Razor Pages/MVC)", "PostgreSQL", "PHP"],
  },
];

export const education: EducationItem[] = [
  {
    degree: "Ingeniería de Sistemas",
    institution: "Universidad Santo Tomás, Seccional Tunja",
  },
];

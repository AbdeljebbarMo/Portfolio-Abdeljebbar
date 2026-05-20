// 🎨 Contenu personnalisé d'Abdeljebbar Moumou
// Modifie ce fichier pour mettre à jour ton portfolio

export const personal = {
  firstName: "Abdeljebbar",
  lastName: "Moumou",
  name: "Abdeljebbar Moumou",
  role: "Full-Stack Developer",
  tagline: "Développeur web passionné, je conçois des applications modernes avec React, Laravel et WordPress.",
  location: "Echemmaia, Maroc",
  available: true,
  photo: "profile.jpg",
};

export const about = {
  intro: "Développeur web passionné, actuellement à la recherche d'une opportunité au sein d'une entreprise innovante pour enrichir et développer mes compétences techniques.",
  paragraphs: [
    "Avec une solide expérience en HTML, CSS, JavaScript et React, je suis reconnu pour ma rigueur, ma disponibilité et mon dynamisme. Diplômé en Développement Digital option Web Full Stack à l'ISTA Safi (2022-2024), j'ai eu l'opportunité de travailler sur plusieurs projets concrets en entreprise.",
    "Sociable et motivé, je suis toujours à l'écoute du marché et prêt à relever de nouveaux défis professionnels. Je maîtrise aussi bien le front-end (React, JavaScript, Tailwind) que le back-end (Laravel, PHP, MySQL, MongoDB).",
  ],
  stats: [
    { value: "3+", label: "Stages & expériences" },
    { value: "5", label: "Certifications" },
    { value: "3", label: "Langues" },
  ],
};

export const formation = [
  {
    title: "Diplôme de Technicien Spécialisé",
    field: "Développement Digital — option Web Full Stack",
    school: "Institut Spécialisé en Nouvelles Technologies de l'Information et de la Communication (ISTA Safi)",
    period: "2022 — 2024",
  },
  {
    title: "Baccalauréat",
    field: "Sciences de la Vie et de la Terre",
    school: "Lycée AlQods, Echemmaia",
    period: "2019 — 2020",
  },
];

export const experiences = [
  {
    company: "Société Œuf Rehamna",
    role: "Responsable Surveillance & Informatique",
    period: "Février 2025 — Aujourd'hui",
    location: "Rehamna",
    tasks: [
      "Supervision du système de vidéosurveillance (caméras & GPS)",
      "Suivi en temps réel des véhicules via GPS pour optimiser les trajets et la sécurité",
      "Mise en place et gestion des systèmes de pointage",
      "Maintenance informatique : installation de logiciels, dépannage matériel, configuration de postes",
      "Contrôle des bons de livraison et de chargement pour assurer la conformité et la traçabilité",
    ],
  },
  {
    company: "Oriental Group",
    role: "Développeur WordPress (Stage)",
    period: "Août 2024 — Novembre 2024",
    location: "Marrakech",
    tasks: [
      "Développement et optimisation du site WordPress de l'entreprise",
      "Adaptation des thèmes et plugins, amélioration du design UX/UI",
      "Optimisation du SEO pour améliorer le référencement",
      "Renforcement de la sécurité et de la performance du site",
    ],
  },
  {
    company: "DEVOSOFT",
    role: "Développeur Full-Stack (Stage)",
    period: "Avril 2024 — Mai 2024",
    location: "Safi",
    tasks: [
      "Développement d'une plateforme LMS (Learning Management System)",
      "Création, distribution et gestion de cours et formations en ligne",
      "Stack technique : Laravel 10, PHP, MySQL, JavaScript, AJAX, Bootstrap 5",
    ],
  },
];

export const skills = [
  // Back-end
  { name: "PHP", level: "Avancé", category: "Back-end" },
  { name: "Laravel", level: "Avancé", category: "Back-end" },
  { name: "MySQL", level: "Avancé", category: "Back-end" },
  { name: "MongoDB", level: "Intermédiaire", category: "Back-end" },

  // Front-end / UI
  { name: "HTML", level: "Expert", category: "Front-end / UI" },
  { name: "CSS", level: "Expert", category: "Front-end / UI" },
  { name: "JavaScript", level: "Avancé", category: "Front-end / UI" },
  { name: "React", level: "Avancé", category: "Front-end / UI" },
  { name: "Bootstrap", level: "Avancé", category: "Front-end / UI" },
  { name: "WordPress", level: "Avancé", category: "Front-end / UI" },
  { name: "Python", level: "Intermédiaire", category: "Front-end / UI" },
  { name: "Figma", level: "Intermédiaire", category: "Front-end / UI" },

  // Modélisation
  { name: "UML", level: "Avancé", category: "Modélisation" },
  { name: "Merise", level: "Avancé", category: "Modélisation" },
  { name: "Analyse & Conception", level: "Avancé", category: "Modélisation" },

  // Méthodologies & Outils
  { name: "Agile / Scrum", level: "Avancé", category: "Méthodologies & Outils" },
  { name: "Jira", level: "Intermédiaire", category: "Méthodologies & Outils" },
  { name: "Git & GitHub", level: "Avancé", category: "Méthodologies & Outils" },
  { name: "GitLab", level: "Intermédiaire", category: "Méthodologies & Outils" },
];

export const certifications = [
  { name: "Certification React Framework", year: "2023", provider: "Bright Coding", instructor: "Mohamed Idbrahim" },
  { name: "Certification WordPress", year: "2024", provider: "Bright Coding", instructor: "Fouad Boudache" },
  { name: "Certification Git & GitHub", year: "2024", provider: "365 Data Science", instructor: "Giles McMullen-Klein" },
  { name: "Certification Python", year: "2024", provider: "365 Data Science", instructor: "Martin Ganchev" },
  { name: "Certification Microsoft Excel", year: "2024", provider: "365 Data Science", instructor: "Ned Krastev" },
];

export const projects = [
  {
    title: "Gemini AI — Clone Interface",
    year: "2025",
    description: "Clone moderne de l'interface Gemini AI développé avec React et Vite. Interface utilisateur réactive permettant des interactions de type chat avec un design fidèle à l'original.",
    tech: ["React", "Vite", "JavaScript", "CSS"],
    github: "https://github.com/AbdeljebbarMo/Gemini",
    live: "#",
    accent: "#3b82f6",
  },
  {
    title: "XO-Game — Tic Tac Toe React",
    year: "2025",
    description: "Jeu classique de morpion (Tic Tac Toe) développé en React. Interface interactive avec gestion d'état, détection de victoire/égalité et possibilité de rejouer.",
    tech: ["React", "Vite", "JavaScript", "CSS"],
    github: "https://github.com/AbdeljebbarMo/XO-Game",
    live: "#",
    accent: "#10b981",
  },
  {
    title: "Système de Gestion de Bibliothèque",
    year: "2025",
    description: "Application web complète pour gérer une bibliothèque : catalogage des livres, gestion des emprunts et retours, suivi des membres et tableau de bord administrateur.",
    tech: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript"],
    github: "https://github.com/AbdeljebbarMo/bilbiotheque",
    live: "#",
    accent: "#ff5b22",
  },
  {
    title: "Plateforme LMS — Learning Management System",
    year: "2024",
    description: "Développement d'une plateforme en ligne complète permettant de créer, distribuer et gérer des cours et formations. Réalisé lors de mon stage chez DEVOSOFT à Safi.",
    tech: ["Laravel 10", "PHP", "MySQL", "JavaScript", "AJAX", "Bootstrap 5"],
    github: "https://github.com/AbdeljebbarMo",
    live: "#",
    accent: "#a855f7",
  },
  {
    title: "Site Oriental Group — WordPress",
    year: "2024",
    description: "Refonte complète du site WordPress d'Oriental Group à Marrakech : adaptation des thèmes/plugins, amélioration UX/UI, optimisation SEO, sécurité et performance.",
    tech: ["WordPress", "PHP", "CSS", "SEO", "UX/UI"],
    github: "https://github.com/AbdeljebbarMo",
    live: "#",
    accent: "#ec4899",
  },
  
];

export const languages = [
  { name: "Arabe", level: "Langue maternelle" },
  { name: "Français", level: "Courant" },
  { name: "Anglais", level: "Intermédiaire" },
];

export const contact = {
  email: "abdjabrmoumou9@gmail.com",
  phone: "+212 677 705 952",
  socials: [
    { name: "GitHub", url: "https://github.com/AbdeljebbarMo", handle: "@AbdeljebbarMo" },
    { name: "LinkedIn", url: "https://linkedin.com/in/abdeljebbar-moumou", handle: "Abdeljebbar Moumou" },
    { name: "Email", url: "mailto:abdjabrmoumou9@gmail.com", handle: "abdjabrmoumou9@gmail.com" },
  ],
};

export const nav = [
  { label: "Accueil", href: "#home" },
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Expérience", href: "#experience" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

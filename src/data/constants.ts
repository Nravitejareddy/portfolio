export enum SkillNames {
  JAVA = "java",
  SPRINGBOOT = "springboot",
  REACT = "react",
  NODEJS = "nodejs",
  C = "c",
  MYSQL = "mysql",
  JS = "js",
  HTML = "html",
  CSS = "css",
  PYTHON = "python",
  MONGODB = "mongodb",
  PYTORCH = "pytorch",
  GIT = "git",
  NPM = "npm",
  POSTMAN = "postman",
  CSHARP = "csharp",
  VITE = "vite",
  TAILWIND = "tailwind",
  ANDROIDSTUDIO = "androidstudio",
  GITHUB = "github",
  CPP = "cpp",
  FIGMA = "figma",
  VIM = "vim",
  KOTLIN = "kotlin",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JAVA]: {
    id: 1,
    name: "java",
    label: "Java",
    shortDescription:
      "Write once, debug everywhere — powering my backend logic one class at a time ☕🔥",
    color: "#f89820",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },

  [SkillNames.SPRINGBOOT]: {
    id: 2,
    name: "springboot",
    label: "Spring Boot",
    shortDescription:
      "Because configuring Java manually is character development I did not ask for 🌱⚡",
    color: "#6db33f",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },

  [SkillNames.REACT]: {
    id: 3,
    name: "react",
    label: "React",
    shortDescription:
      "Turning components into interfaces and state bugs into life lessons ⚛️😅",
    color: "#61dafb",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },

  [SkillNames.NODEJS]: {
    id: 4,
    name: "nodejs",
    label: "Node.js",
    shortDescription:
      "JavaScript escaped the browser and immediately started building servers 🟢🚀",
    color: "#6cc24a",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },

  [SkillNames.C]: {
    id: 5,
    name: "c",
    label: "C",
    shortDescription:
      "Close enough to the hardware to make every missing semicolon feel personal 💀⚙️",
    color: "#a8b9cc",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },

  [SkillNames.MYSQL]: {
    id: 6,
    name: "mysql",
    label: "MySQL",
    shortDescription:
      "SELECTing the right data and pretending JOINs never hurt my feelings 🐬📊",
    color: "#4479a1",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },

  [SkillNames.JS]: {
    id: 7,
    name: "js",
    label: "JavaScript",
    shortDescription:
      "Making the web interactive since browsers decided static pages were boring ⚡🌐",
    color: "#f0db4f",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },

  [SkillNames.HTML]: {
    id: 8,
    name: "html",
    label: "HTML",
    shortDescription:
      "The skeleton of the web — because even fancy apps need bones 🦴🌐",
    color: "#e34c26",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },

  [SkillNames.CSS]: {
    id: 9,
    name: "css",
    label: "CSS",
    shortDescription:
      "Turning plain boxes into beautiful interfaces and centering divs with confidence 🎨✨",
    color: "#1572b6",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },

  [SkillNames.PYTHON]: {
    id: 10,
    name: "python",
    label: "Python",
    shortDescription:
      "From automation to AI — indentation doing more work than half my semicolons 🐍🤖",
    color: "#3776ab",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },

  [SkillNames.MONGODB]: {
    id: 11,
    name: "mongodb",
    label: "MongoDB",
    shortDescription:
      "When tables feel too organized, documents enter the chat 🍃📦",
    color: "#47a248",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },

  [SkillNames.PYTORCH]: {
    id: 12,
    name: "pytorch",
    label: "PyTorch",
    shortDescription:
      "Training models, tweaking tensors, and respectfully asking the loss to go down 🔥🧠",
    color: "#ee4c2c",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },

  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription:
      "Saving code history so my mistakes can become professionally versioned 🔀😎",
    color: "#f05032",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },

  [SkillNames.NPM]: {
    id: 14,
    name: "npm",
    label: "NPM",
    shortDescription:
      "Installing one package and somehow downloading half the internet 📦😂",
    color: "#cb3837",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },

  [SkillNames.POSTMAN]: {
    id: 15,
    name: "postman",
    label: "Postman",
    shortDescription:
      "Sending requests, hunting bugs, and celebrating every beautiful 200 OK 📮✅",
    color: "#ff6c37",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },

  [SkillNames.CSHARP]: {
    id: 16,
    name: "csharp",
    label: "C#",
    shortDescription:
      "Sharp name, strong types, and absolutely no relation to musical talent 🎵💜",
    color: "#512bd4",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },

  [SkillNames.VITE]: {
    id: 17,
    name: "vite",
    label: "Vite",
    shortDescription:
      "Because waiting forever for the dev server is not part of my career plan ⚡🚀",
    color: "#646cff",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  },

  [SkillNames.TAILWIND]: {
    id: 18,
    name: "tailwind",
    label: "Tailwind CSS",
    shortDescription:
      "Writing class names long enough to count as short stories 🌊🎨",
    color: "#38bdf8",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },

  [SkillNames.ANDROIDSTUDIO]: {
    id: 19,
    name: "androidstudio",
    label: "Android Studio",
    shortDescription:
      "Building Android apps while Gradle quietly tests my patience 🤖📱",
    color: "#3ddc84",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
  },

  [SkillNames.GITHUB]: {
    id: 20,
    name: "github",
    label: "GitHub",
    shortDescription:
      "Where my code lives, my contributions grow, and my README files try to look professional 🐙🚀",
    color: "#ffffff",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },

  [SkillNames.CPP]: {
    id: 21,
    name: "cpp",
    label: "C++",
    shortDescription:
      "C, but with more features and more opportunities to question my life choices ⚙️🔥",
    color: "#00599c",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },

  [SkillNames.FIGMA]: {
    id: 22,
    name: "figma",
    label: "Figma",
    shortDescription:
      "Designing the interface before CSS gets a chance to humble me 🎨🖌️",
    color: "#f24e1e",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },

  [SkillNames.VIM]: {
    id: 23,
    name: "vim",
    label: "Vim",
    shortDescription:
      "Still learning the ancient art of editing at light speed... once I remember how to exit 😭⌨️",
    color: "#019833",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
  },

  [SkillNames.KOTLIN]: {
    id: 24,
    name: "kotlin",
    label: "Kotlin",
    shortDescription:
      "Making Android development cleaner, shorter, and slightly less dramatic 💜📱",
    color: "#7f52ff",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Dec 2025",
    endDate: "Jan 2026",
    title: "Python Development Intern",
    company: "CodeClause",
    description: [
      "Architected and deployed 4 high-concurrency Python applications using Tkinter and Multithreading, reducing application execution time by 30%.",
      "Engineered automated REST API integration and web scraping pipelines, increasing data acquisition efficiency by 40% through robust error handling.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.GIT,
      SkillNames.GITHUB,
    ],
  },

  {
    id: 2,
    startDate: "Dec 2025",
    endDate: "Jan 2026",
    title: "Java Programming Intern",
    company: "CodSoft",
    description: [
      "Developed enterprise-grade Java applications using the Collections Framework and OOP, improving data processing speed by 28% for large-scale student datasets.",
      "Implemented advanced Exception Handling and File I/O architectures, ensuring 99.9% data integrity and system stability across all deployed modules.",
    ],
    skills: [
      SkillNames.JAVA,
      SkillNames.GIT,
      SkillNames.GITHUB,
    ],
  },

  {
    id: 3,
    startDate: "Dec 2025",
    endDate: "Jan 2026",
    title: "Web Development & Designing Intern",
    company: "Oasis Infobyte",
    description: [
      "Built responsive, user-centric web interfaces using React and JavaScript, resulting in a 30% reduction in user-reported navigation and input errors.",
      "Optimized DOM manipulation and form validation workflows, improving page load performance and overall user interaction efficiency by 35%.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.JS,
      SkillNames.HTML,
      SkillNames.CSS,
      SkillNames.GIT,
      SkillNames.GITHUB,
    ],
  },

  {
    id: 4,
    startDate: "Sep 2025",
    endDate: "Oct 2025",
    title: "Python Programming Intern",
    company: "Vault of Codes",
    description: [
      "Spearheaded the development of modular Python applications using advanced Data Structures, enhancing code maintainability and reducing technical debt by 33%.",
      "Integrated automated file-handling and storage solutions, streamlining data management processes and improving system reliability for high-frequency operations.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.GIT,
      SkillNames.GITHUB,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],

  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
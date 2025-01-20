type Project = {
  title: string;
  description: string;
  tags: string[];
  src: string;
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Lifted",
    description:
      "A full-stack web and mobile application for tracking and planning your gym workouts, with customizable routines and progress visualization",
    tags: ["React", "Expo", "Supabase", "TypeScript", "PostgreSQL"],
    src: "/lifted.png",
    link: "#",
  },
  {
    title: "Pyrrhos",
    description:
      "A feature-rich Discord music bot built with the Sapphire framework, enabling high-quality music playback and playlist management",
    tags: ["discord.js", "Javascript", "Typescript"],
    src: "/pyrrhos.png",
    link: "https://github.com/EvanBaron/Pyrrhos",
  },
  {
    title: "This Portfolio",
    description:
      "A responsive portfolio website built with Next.js to showcase my projects and skills",
    tags: ["React", "Next.js", "Typescript"],
    src: "/portfolio.svg",
    link: "https://github.com/EvanBaron/Portfolio",
  },
];

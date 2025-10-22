export type SiteLink = {
  name: string;
  href: string;
  logo?: string | null;
};

export const socialLinks: SiteLink[] = [
  { 
    name: "LinkedIn", 
    href: "https://www.linkedin.com/in/zdenko-abarca-209050355/",
    logo: "/images/linkedin.png" 
  },
  { 
    name: "GitHub", 
    href: "https://github.com/zdenc0de",
    logo: "/images/github.png" 
  },
  { 
    name: "Email", 
    href: "mailto:zdenkocruz04@gmail.com",
    logo: null 
  },
];

export type TechCategory = {
  name: string;
  items: string[];
};

export const techStack: TechCategory[] = [
  { 
    name: "Languages", 
    items: ["Python", "JavaScript", "TypeScript", "SQL", "Java"] 
  },
  { 
    name: "Web & Full-Stack", 
    items: ["React", "Next.js", "Vite", "Supabase", "PostgreSQL", "TailwindCSS", "Zustand", "Framer Motion"] 
  },
  { 
    name: "AI & Robotics", 
    items: ["Scikit-learn", "TensorFlow", "Pandas", "NumPy", "Matplotlib", "ROS (Robot Operating System)"] 
  },
  { 
    name: "Tools", 
    items: ["Git", "GitHub", "Firebase", "Jupyter Notebooks", "VS Code"] 
  },
];
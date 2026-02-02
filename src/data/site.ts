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
    items: ["Python", "JavaScript", "TypeScript", "C#", "PHP", "SQL", "Java"]
  },
  {
    name: "Web & Full-Stack",
    items: ["React", "Next.js", "Angular", ".NET", "Vite", "Supabase", "PostgreSQL", "TailwindCSS"]
  },
  {
    name: "Data & Enterprise",
    items: ["SQL Server", "Power BI", "Pandas", "NumPy", "Matplotlib", "Firebase"]
  },
  {
    name: "AI & Robotics",
    items: ["Scikit-learn", "TensorFlow", "ROS", "Jetson Nano", "LiDAR", "OpenCV"]
  },
  {
    name: "Tools",
    items: ["Git", "GitHub", "VS Code", "Jupyter", "Azure DevOps"]
  },
];
// Definimos un tipo para nuestros enlaces para tener autocompletado y seguridad
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

export const techStack: string[] = [
  "Python", 
  "TypeScript", 
  "React", 
  "Next.js", 
  "Tailwind CSS", 
  "PostgreSQL"
];
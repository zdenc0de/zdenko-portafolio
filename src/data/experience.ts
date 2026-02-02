export type Experience = {
  id: string;
  company: string;
  logo: string;
  role: string;
  location: string;
  period: string;
  type: "internship" | "full-time" | "part-time" | "contract";
  description: string;
  highlights: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    id: "bosch-internship",
    company: "Bosch",
    logo: "/images/bosch-logo.png",
    role: "Automation and Digitization Intern",
    location: "Toluca, México",
    period: "2025 - Present",
    type: "internship",
    description:
      "Driving digital transformation initiatives at one of the world's leading automotive and industrial technology companies. Contributing to automation solutions and internal tooling that streamline manufacturing processes.",
    highlights: [
      "Developed internal web applications using .NET, Angular, and PHP to optimize operational workflows",
      "Built interactive Power BI dashboards for real-time data visualization and decision-making",
      "Collaborated with cross-functional teams to digitize and automate manual processes",
      "Applied SQL Server for database management and reporting solutions",
    ],
    technologies: ["PHP", ".NET", "Angular", "SQL Server", "Power BI"],
  },
];

import { Case } from "@/types/case";

export const cases: Case[] = [
  {
    slug: "lidar-cart",
    title: "LiDAR Autonomous Cart",
    blurb: "2D mapping + obstacle avoidance with ROS on Jetson Nano.",
    cover: "/cards/lidar-yo.jpg",
    video: "/videos/lidar-car.mp4",
    tags: ["ROS", "LiDAR", "Python"],
    impact: "Stable indoor nav demo",
    repoUrl: "https://github.com/zdenc0de/autonomous-cart",
  },
  {
    slug: "divino-desmadre",
    title: "Divino Desmadre",
    blurb: "Social network made in React with tools like Zustand, Suapabase, TailwindCSS and deployed on Firebase.",
    cover: "/cards/dd.png", 
    video: "/videos/dd.mp4",
    tags: ["React", "Zustand", "Firebase"],
    impact: "+50 users in the first deploy day",
    repoUrl: "https://divinodesmadre-1.web.app/",
  },
  {
    slug: "SIC-Final-Project",
    title: "Samsung Innovation Campus 2024 Final Project",
    blurb: "Lung cancer detection using medical imaging.",
    cover: "/cards/image.png", 
    video: "/videos/sic-video.mp4",
    tags: ["Python", "Machine Learning", "AI"],
    impact: "SIC 2024 best final project",
    repoUrl: "https://github.com/HikrisA/Samsung",
  },
];

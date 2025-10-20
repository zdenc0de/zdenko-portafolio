import { Case } from "@/types/case";

export const cases: Case[] = [
  {
    slug: "lidar-car",
    title: "LiDAR Autonomous Car",
    blurb: "2D mapping + obstacle avoidance with ROS on Jetson Nano.",
    cover: "cards/lidar-yo.jpg",
    video: "/videos/lidar-car.mp4",
    tags: ["ROS", "LiDAR", "Python"],
    impact: "Stable indoor nav demo",
  },
  {
    slug: "divino-desmadre",
    title: "Divino Desmadre",
    blurb: "Social network made in React with tools like Zustand, Suapabase, TailwindCSS and deployed on Firebase.",
    cover: "cards/dd.png",
    video: "/videos/dd.mp4",
    tags: ["React", "Zustand", "Firebase"],
    impact: "+50 users in the first deploy day",
  },
  {
    slug: "SIC-Final-Project",
    title: "SIC Final Project",
    blurb: "Lung cancer detection using medical imaging.",
    cover: "/cards/image.png",
    video: "/videos/sic-video.mp4",
    tags: ["Python", "Machine Learning", "Image Processing"],
    impact: "Samsung Innovation Campus 2024 best final project",
  },
];

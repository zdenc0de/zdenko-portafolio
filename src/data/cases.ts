import { Case } from "@/types/case";

export const cases: Case[] = [
  {
    slug: "lidar-cart",
    title: "LiDAR Autonomous Cart",
    blurb: "2D mapping + obstacle avoidance with ROS on Jetson Nano.",
    cover: "/media/cases/lidar-cover.jpg",
    tags: ["ROS", "LiDAR", "Python"],
    impact: "Stable indoor nav demo",
  },
  {
    slug: "movies-app",
    title: "Movies App",
    blurb: "Search and trending with TMDB API. CI/CD + analytics.",
    cover: "/media/cases/movies-cover.jpg",
    tags: ["React", "TMDB", "Firebase"],
    impact: "1.5k monthly visits",
  },
  {
    slug: "kanji-study",
    title: "Kanji Study",
    blurb: "Spaced repetition with KanjiAPI, optimized UX.",
    cover: "/media/cases/kanji-cover.jpg",
    tags: ["Next.js", "TypeScript"],
    impact: "200+ beta users",
  },
];

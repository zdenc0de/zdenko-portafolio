"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/components/motion/variants";

const techStack = [
  "Python", "TypeScript", "React", "Next.js", "Tailwind CSS", "PostgreSQL"
];

export function About() {
  return (
    <section id="about" className="min-h-screen pt-24 md:pt-28 flex items-center justify-center">
      <motion.div
        variants={stagger()}
        initial="hidden"
        whileInView="show" 
        viewport={{ once: true, amount: 0.4 }} 
        className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-2"
      >
        <div className="space-y-6 text-foreground/80 md:text-lg">
          <motion.h2
            variants={fadeUp()}
            className="text-4xl font-black text-foreground md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            A Little About Me
          </motion.h2>

          <motion.p variants={fadeUp()}>
            My journey into computer engineering began with a simple desire: to understand how things work and then build my own. I'm passionate about the entire development lifecycle, from sketching out an idea to deploying a functional, user-friendly product.
          </motion.p>

          <motion.p variants={fadeUp()}>
            Whether it's developing an autonomous system with ROS or building a full-stack web application, I'm driven by the challenge of solving complex problems. I believe in writing clean, efficient code and thrive in collaborative environments where I can both learn from others and contribute with my dedicated, hands-on approach.
          </motion.p>

          {/* === Tech Stack === */}
          <motion.div variants={fadeUp()} className="space-y-3 pt-4">
            <h3 className="text-lg font-semibold text-foreground">My Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span key={tech} className="rounded-md bg-muted px-3 py-1 text-sm font-medium ">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* === Columna de Imagen === */}
        <motion.div
          variants={fadeUp()}
          className="relative mx-auto h-96 w-full max-w-sm"
        >
          <Image
            src="/yo-lidar.jpg"
            alt="Zdenko working on a project"
            fill
            className="rounded-2xl object-cover ring-1 ring-border"
          />

          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl border-2 border-border" />
        </motion.div>
      </motion.div>
    </section>
  );
}
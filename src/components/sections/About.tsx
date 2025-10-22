"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/components/motion/variants";
import { techStack } from "@/data/site"; 

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
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
            My journey into computer engineering began with a simple desire: to understand how things work and then build my own. I&apos;m passionate about the entire development lifecycle, from sketching out an idea to deploying a functional, user-friendly product.
          </motion.p>

          <motion.p variants={fadeUp()}>
            Whether it&apos;s developing an autonomous system with ROS or building a full-stack web application, I&apos;m driven by the challenge of solving complex problems. I believe in writing clean, efficient code and thrive in collaborative environments where I can both learn from others and contribute with my dedicated, hands-on approach.
          </motion.p>

          <motion.div variants={fadeUp()} className="space-y-4 pt-4">
            <h3 className="text-lg font-semibold text-foreground">My Tech Stack</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="rounded-md bg-muted px-3 py-1.5 text-sm font-medium text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto h-96 w-full max-w-sm"
        >
          <Image
            src="/images/yo-samsung.jpg"
            alt="Zdenko at Samsung Innovation Campus"
            fill
            className="rounded-2xl object-cover ring-1 ring-border"
          />
          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl border-2 border-border" />
        </motion.div>
      </motion.div>
    </section>
  );
}
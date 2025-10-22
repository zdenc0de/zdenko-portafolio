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
        {/* Columna texto */}
        <div className="space-y-6 text-foreground/80 md:text-lg">
          <motion.h2
            variants={fadeUp()}
            className="text-4xl font-black text-foreground md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            A Little About Me
          </motion.h2>

          <motion.p variants={fadeUp()}>
            My journey into computer engineering began with a simple desire: to understand
            how things work and then build my own. I&apos;m passionate about the entire development
            lifecycle, from sketching out an idea to deploying a functional, user-friendly product.
          </motion.p>

          <motion.p variants={fadeUp()}>
            Whether it&apos;s developing an autonomous system with ROS or building a full-stack web
            application, I&apos;m driven by the challenge of solving complex problems. I believe in
            writing clean, efficient code and thrive in collaborative environments where I can both
            learn from others and contribute with my dedicated, hands-on approach.
          </motion.p>
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

        <motion.div
          variants={fadeUp()}
          className="md:col-span-2"
        >
          <h3 className="text-2xl font-bold text-foreground">My Tech Stack</h3>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((category) => (
              <div key={category.name} className="min-w-0">
                <p className="text-lg font-semibold text-foreground/90">{category.name}</p>
                <ul className="mt-3 space-y-2 text-foreground/80">
                  {category.items.map((tech: string) => (
                    <li key={tech} className="flex items-start gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-secondary" />
                      <span className="leading-relaxed">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

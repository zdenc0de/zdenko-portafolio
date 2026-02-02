"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/components/motion/variants";
import { experiences } from "@/data/experience";
import { MapPin, Calendar } from "lucide-react";

export function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen pt-24 md:pt-28 flex items-center justify-center"
    >
      <motion.div
        variants={stagger()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-6xl px-6"
      >
        <motion.div variants={fadeUp()} className="mb-12 text-center">
          <h2
            className="text-4xl font-black text-foreground md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Experience
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Where I&apos;ve been building and learning
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={fadeUp()}
              className="group relative rounded-2xl border border-border bg-muted/30 p-6 transition-all duration-300 hover:border-secondary/50 hover:bg-muted/50 md:p-8"
            >
              <div className="flex flex-col gap-6 md:flex-row md:gap-8">
                {/* Company Logo */}
                <div className="flex-shrink-0">
                  <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-white p-2 ring-1 ring-border md:h-20 md:w-20">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  {/* Header */}
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-foreground md:text-2xl">
                        {exp.role}
                      </h3>
                      <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                        {exp.type === "internship" ? "Internship" : exp.type}
                      </span>
                    </div>
                    <p className="mt-1 text-lg font-semibold text-secondary">
                      {exp.company}
                    </p>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/80">{exp.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-foreground/70"
                      >
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timeline connector for future experiences */}
              <div className="absolute -bottom-8 left-8 hidden h-8 w-px bg-border md:left-14 md:block last:hidden" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

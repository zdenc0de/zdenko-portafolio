"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cases } from "@/data/cases";
import { CaseCard } from "@/components/cards/CaseCard";
import { Section } from "@/components/core/Section";
import { fadeUp, stagger } from "@/components/motion/variants";

export function Work() {
  return (
    <Section id="work">
      <motion.div
        variants={stagger()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-4"
      >
        <div className="flex items-end justify-between">
          <motion.h2
            variants={fadeUp()}
            className="text-4xl font-black md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Selected Work
          </motion.h2>
        </div>

        <motion.p
          variants={fadeUp()}
          className="max-w-4xl text-lg text-foreground/80" 
        >
          Here are a few of the projects I've worked on. These include academic,
          personal, and competition work.
        </motion.p>
      </motion.div>

      <motion.div
        variants={stagger()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12 grid gap-6 md:grid-cols-3" 
      >
        {cases.map((c) => (
          <CaseCard key={c.slug} c={c} />
        ))}
      </motion.div>

      <motion.div
        variants={fadeUp()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12 flex justify-center"
      >
        <Link
          href="https://github.com/zdenc0de"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border px-7 py-3 font-semibold text-foreground/80 transition-colors duration-200 hover:bg-muted"
        >
          View All Projects
        </Link>
      </motion.div>
    </Section>
  );
}
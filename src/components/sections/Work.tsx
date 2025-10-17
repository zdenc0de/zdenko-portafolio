"use client";
import { motion } from "framer-motion";
import { cases } from "@/data/cases";
import { CaseCard } from "@/components/cards/CaseCard";
import { Section } from "@/components/core/Section";
import { stagger } from "@/components/motion/variants";

export function Work() {
  return (
    <Section id="work">
      <div className="flex items-end justify-between">
        <h2 className="text-4xl font-black md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
          Selected Work
        </h2>
        <a href="/cv.pdf" className="hidden text-sm text-white/70 underline md:block">Résumé</a>
      </div>
      <motion.div variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
        className="mt-8 grid gap-6 md:grid-cols-3">
        {cases.map(c => <CaseCard key={c.slug} c={c} />)}
      </motion.div>
    </Section>
  );
}

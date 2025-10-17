"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/components/motion/variants";

export function Hero() {
  return (
    <div className="pt-24 md:pt-28"> {/* offset header */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <motion.div variants={stagger()} initial="hidden" animate="show" className="max-w-xl">
          <motion.p variants={fadeUp()} className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
            <span className="inline-block h-2 w-2 rounded-full bg-secondary" /> Available for internships
          </motion.p>

          <motion.h1 variants={fadeUp(0.05)} className="text-5xl font-black leading-[1] md:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}>
            ZDENKO ABARCA
          </motion.h1>

          <motion.h2 variants={fadeUp(0.1)} className="mt-3 text-2xl font-semibold text-white/90 md:text-3xl">
            AI • Computer Vision • Full-Stack
          </motion.h2>

          <motion.p variants={fadeUp(0.15)} className="mt-5 max-w-prose text-white/80">
            I learn fast and ship consistently—turning ideas into working, measurable products
            through curiosity, discipline, and a builder’s mindset.
          </motion.p>

          <motion.div variants={fadeUp(0.2)} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="rounded-xl bg-secondary px-5 py-2.5 font-medium text-black hover:bg-secondary/90">See Work</a>
            <a href="#contact" className="rounded-xl border border-secondary px-5 py-2.5 font-medium text-secondary hover:bg-secondary/10">Contact</a>
          </motion.div>
        </motion.div>

        <div className="relative mx-auto aspect-square w-72 max-w-[22rem] md:w-[30rem]">
          <div className="absolute -inset-8 -z-10 rounded-full bg-secondary/20 blur-3xl" />
          <Image src="/media/hero.jpg" alt="Portrait" fill priority className="rounded-[2rem] object-cover ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,.35)]" />
        </div>
      </section>
    </div>
  );
}

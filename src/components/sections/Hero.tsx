"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/components/motion/variants";
import { useLenis } from "lenis/react";

export function Hero() {
  const lenis = useLenis();

  const scrollTo = (target: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    lenis?.scrollTo(target, { duration: 1.5 });
  };

  return (
    <div className="min-h-screen pt-24 md:pt-28 flex items-center justify-center">
      <section id="home" className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-20 md:grid-cols-2 md:py-0">

        <motion.div
          variants={stagger(0.05)} 
          initial="hidden"
          animate="show"
          className="max-w-xl text-center md:text-left"
        >

          <div className="space-y-6">
            <motion.p
              variants={fadeUp()}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary"></span>
              </span>
              2028 Graduate | Seeking Internship Opportunities
            </motion.p>

            <motion.h1
              variants={fadeUp()}
              className="text-5xl font-extrabold leading-snug tracking-normal md:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="block">Computer Engineering</span>
              <span className="block">Student & Aspiring</span>
              <span className="block">Software Builder</span>
            </motion.h1>

            <motion.p
              variants={fadeUp()}
              className="text-lg text-foreground/80"
            >
              Driven by a deep curiosity, I thrive on turning theory into practice. From mastering new web technologies to exploring AI, my dedication lies in the entire building process—from the first line of code to a functional, impactful product.
            </motion.p>

            <motion.div
              variants={fadeUp()}
              className="flex flex-col items-center gap-4 sm:flex-row"
            >
              {/*
              <a href="#work" onClick={(e) => scrollTo("#work", e)} className="w-full rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.03] sm:w-auto">
                View Projects
              </a>
              <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="w-full rounded-full border border-border px-7 py-3 font-semibold text-foreground/80 transition-colors duration-200 hover:bg-muted sm:w-auto">
                Download CV
              </Link>
              */}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-[4/5] w-72 max-w-[24rem] md:w-[28rem] mt-10 md:mt-0"
        >
          <div className="absolute -inset-10 -z-10 rounded-full bg-secondary/15 blur-[6rem] " />
          <Image
            src="/yo-delfin.jpg"
            alt="Portrait of Zdenko Abarca"
            fill
            priority
            className="rounded-3xl object-cover ring-1 ring-border shadow-2xl "
          />
          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl border-2 border-border" />
        </motion.div>
      </section>
    </div>
  );
}
"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/components/motion/variants";
import Image from "next/image"; 
import { socialLinks } from "@/data/site";

export function Contact() {
  const currentYear = new Date().getFullYear(); 

  return (
    <section id="contact" className="py-24 sm:py-32">
      <motion.div
        variants={stagger()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-6xl px-6 text-center"
      >
        {/* --- Contenido Principal --- */}
        <motion.h2
          variants={fadeUp()}
          className="text-4xl font-black text-foreground md:text-6xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          variants={fadeUp()}
          className="mx-auto mt-6 max-w-xl text-lg text-foreground/80"
        >
          I'm always open to discussing new projects, internship opportunities, or just chatting about tech. Feel free to reach out.
        </motion.p>

        <motion.div variants={fadeUp()} className="mt-10">
          <a
            href={socialLinks.find(l => l.name === "Email")?.href}
            className="inline-block rounded-full bg-primary px-10 py-4 text-lg font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.03]"
          >
            Say Hello
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp()}
          className="mt-12 flex items-center justify-center gap-10"
        >
          {socialLinks.filter(l => l.name !== "Email").map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-foreground/70 transition-colors hover:text-foreground"
            >
              <Image
                src={link.logo!} 
                alt={`${link.name} logo`}
                width={32} 
                height={32}
                className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="font-medium">
                {link.name}
              </span>
            </a>
          ))}
        </motion.div>

        <motion.div 
          variants={fadeUp()}
          className="mt-16 border-t border-border pt-8"
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-foreground/70">
              &copy; {currentYear} Zdenko Abarca. All rights reserved.
            </p>
            <p className="text-sm text-foreground/70">
              Built with Next.js, Tailwind CSS, and Framer Motion.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
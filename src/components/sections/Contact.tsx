"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/components/motion/variants";

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/zdenko-abarca-209050355/" },
  { name: "GitHub", href: "https://github.com/zdenc0de" },
  { name: "Email", href: "mailto:zdenkocruz04@gmail.com" },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <motion.div
        variants={stagger()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto max-w-6xl px-6 text-center"
      >
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

        {/* === Botón de Email Principal === */}
        <motion.div variants={fadeUp()} className="mt-10">
          <a
            href={socialLinks.find(l => l.name === "Email")?.href}
            className="inline-block rounded-full bg-primary px-10 py-4 text-lg font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.03]"
          >
            Say Hello
          </a>
        </motion.div>

        {/* === Enlaces Sociales Secundarios === */}
        <motion.div
          variants={fadeUp()}
          className="mt-12 flex items-center justify-center gap-6"
        >
          {socialLinks.filter(l => l.name !== "Email").map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
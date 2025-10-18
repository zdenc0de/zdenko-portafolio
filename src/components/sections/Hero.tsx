"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/components/motion/variants";

export function Hero() {
  return (
    // Aseguramos que el Hero ocupe la mayor parte de la pantalla para el impacto inicial.
    // Usamos 'min-h-screen' y ajustamos el padding para el header.
    <div className="min-h-screen pt-24 md:pt-28 flex items-center justify-center"> 
      <section className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-20 md:grid-cols-2 md:py-0">
        
        {/* === COLUMNA DE TEXTO Y ANIMACIONES === */}
        <motion.div 
          variants={stagger(0.08, 0.1)} // Aumentamos el stagger para un efecto más dramático
          initial="hidden" 
          animate="show" 
          className="max-w-xl"
        >
          
          {/* Tag de Disponibilidad: Más visible y con efecto de cristalizado sutil */}
          <motion.p 
            variants={fadeUp()} 
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm shadow-md"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-secondary animate-pulse" /> Available for internships
          </motion.p>

          {/* Título Principal: Aumentamos el tamaño para mayor impacto y añadimos degradado */}
          <motion.h1 
            variants={fadeUp(0.05)} 
            className="text-6xl font-extrabold leading-tight md:text-8xl lg:text-[6.5rem] tracking-tighter"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className=" bg-clip-text bg-gradient-to-r to-secondary/80">
              ZDENKO ABARCA
            </span>
          </motion.h1>

          {/* Subtítulo de Habilidades: Estilo más limpio */}
          <motion.h2 
            variants={fadeUp(0.15)} 
            className="mt-4 text-2xl font-semibold  md:text-3xl"
          >
            AI • Computer Vision • Full-Stack
          </motion.h2>

          {/* Párrafo de Descripción */}
          <motion.p 
            variants={fadeUp(0.25)} 
            className="mt-6 max-w-prose text-lg "
          >
            I learn fast and ship consistently—turning ideas into working, measurable products
            through curiosity, discipline, and a builder’s mindset.
          </motion.p>

          {/* Botones de Acción: Más grandes y con estilo refinado */}
          <motion.div 
            variants={fadeUp(0.35)} 
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#work" className="rounded-full bg-secondary px-7 py-3 font-semibold text-black transition-transform duration-200 hover:scale-[1.03] shadow-lg">
              See Work
            </a>
            <a href="#contact" className="rounded-full border border-secondary px-7 py-3 font-semibold text-secondary transition-colors duration-200 hover:bg-secondary/10 hover:border-secondary/80">
              Contact
            </a>
          </motion.div>
        </motion.div>

        {/* === COLUMNA DE IMAGEN === */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-[4/5] w-72 max-w-[24rem] md:w-[28rem] mt-10 md:mt-0"
        >
          {/* Efecto de brillo de fondo borroso (igual al original) */}
          <div className="absolute -inset-10 -z-10 rounded-full bg-secondary/15 blur-[6rem]" />
          
          {/* Imagen con bordes redondeados y sombra suave */}
          <Image 
            src="/yo-delfin.jpg" 
            alt="Portrait of Zdenko Abarca" 
            fill 
            priority 
            className="rounded-3xl object-cover ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,.5)]" 
          />
        </motion.div>

      </section>
    </div>
  );
}
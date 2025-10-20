"use client";

import Link from "next/link";
import { useState, useEffect } from "react"; // ✨ 1. Importa useEffect
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/cn";

const navItems = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(["#home", "#work", "#about", "#contact"]);
  const lenis = useLenis();

  // ✨ 2. MEJORA: Hook para bloquear el scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      lenis?.stop(); // Detiene el scroll de Lenis
    } else {
      lenis?.start(); // Reanuda el scroll de Lenis
    }
  }, [isMenuOpen, lenis]);

  const scrollTo = (target: string, e?: React.MouseEvent<HTMLAnchorElement>) => {
    e?.preventDefault();
    lenis?.scrollTo(target, { duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    setIsMenuOpen(false); // Siempre cierra el menú después de la navegación
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed inset-x-0 top-4 z-50 px-4"
      >
        <div className="container mx-auto flex max-w-6xl items-center justify-between rounded-full border border-border bg-background/80 p-2 backdrop-blur-sm">
          <a href="#home" onClick={(e) => scrollTo("#home", e)} className="group inline-flex items-center gap-3 px-3">
            <img className="h-5 w-auto" src="/logoy2k.png" alt="Zdencode Logo" />
            <span className="text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              ZDENCODE
            </span>
          </a>

          {/* --- Navegación de Escritorio --- */}
          <nav className="relative hidden items-center gap-1 rounded-full border border-border bg-muted/50 p-1 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={(e) => scrollTo(item.href, e)} className={cn("relative rounded-full px-4 py-2 text-sm font-medium transition-colors", activeSection === item.href ? "text-primary-foreground" : "text-foreground/70 hover:text-foreground")}>
                {activeSection === item.href && (
                  <motion.span layoutId="active-pill" className="absolute inset-0 z-0 rounded-full bg-primary" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </nav>
          
          {/* --- Botón de CV para Escritorio --- */}
          <div className="hidden items-center pr-2 md:flex">
             <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full border border-secondary px-4 py-2 text-sm font-medium text-secondary transition-colors hover:bg-secondary/10">
               Download CV
             </Link>
          </div>

          {/* --- Botón de Menú Móvil --- */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 md:hidden">
            <motion.div animate={isMenuOpen ? "open" : "closed"} className="relative h-5 w-5">
              <motion.span variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 5 } }} className="absolute h-0.5 w-full bg-foreground" style={{top: '20%'}} />
              <motion.span variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }} className="absolute h-0.5 w-full bg-foreground" style={{top: '50%'}} />
              <motion.span variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -5 } }} className="absolute h-0.5 w-full bg-foreground" style={{bottom: '20%'}}/>
            </motion.div>
          </button>
        </div>
      </motion.header>

      {/* --- Overlay de Menú Móvil (sin cambios) --- */}
      <MobileNav isOpen={isMenuOpen} scrollTo={scrollTo} />
    </>
  );
}

// El componente MobileNav se mantiene igual, ya está perfecto.
function MobileNav({ isOpen, scrollTo }: { isOpen: boolean; scrollTo: (target: string, e?: React.MouseEvent<HTMLAnchorElement>) => void }) {
  const menuVariants = {
    open: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 25, staggerChildren: 0.1 } },
    closed: { opacity: 0, y: "-100%", transition: { type: "spring", stiffness: 200, damping: 25, when: "afterChildren" } },
  };

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: 20 },
  };

  return (
    <motion.div variants={menuVariants} initial="closed" animate={isOpen ? "open" : "closed"} className="fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 bg-background md:hidden">
      {navItems.map((item) => (
        <motion.a key={item.href} href={item.href} variants={itemVariants} onClick={(e) => scrollTo(item.href, e)} className="text-3xl font-semibold">
          {item.label}
        </motion.a>
      ))}
      <motion.div variants={itemVariants}>
        <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full border border-secondary px-6 py-3 text-lg font-medium text-secondary">
          Download CV
        </Link>
      </motion.div>
    </motion.div>
  );
}
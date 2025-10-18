"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/cn";
// Importar Lenis si la quieres usar directamente para TypeScript
// import Lenis from '@studio-freight/lenis'; 

const navItems = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

// Asumiendo que has expuesto la instancia de Lenis en 'window.lenis'
declare global {
  interface Window {
    lenis: any; // Define la propiedad lenis en el objeto window
  }
}

export function Header() {
  const [activeSection, setActiveSection] = useState<string>("work");

  // El Hook de detección de scroll (useEffect) NO CAMBIA, 
  // ya que sigue dependiendo de las posiciones nativas de la ventana para detectar la sección activa.
  useEffect(() => {
    const handleScroll = () => {
      let currentActive = "";
      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Lenis gestiona el scroll, pero esta detección nativa sigue siendo fiable
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentActive = item.href;
          }
        }
      });
      if (currentActive) {
        setActiveSection(currentActive);
      }
    };

    // Para Lenis, usamos el evento 'scroll' global, pero también podemos escuchar un evento 
    // personalizado de Lenis si lo configuraste. Mantendremos el nativo por simplicidad.
    window.addEventListener("useLenis", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("useLenis", handleScroll);
  }, []);


  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-white/5 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">

        <Link href="/" className="group inline-flex items-center gap-2" scroll={false}>
          <img className="h-8 w-8 rounded-lg bg-secondary/90 shadow-lg border border-white/10" src="/logoy2k.png" alt="Logo" />
          <span className="text-xl font-bold tracking-tight ">
            <span style={{ fontFamily: "var(--font-display)" }}>ZDENCODE</span>
          </span>
        </Link>

        <nav className="hidden gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md md:flex">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition duration-200",
                activeSection === n.href
                  ? "bg-white text-black shadow-md" 
                  : "text-white/80 hover:bg-white/10 hover:text-white" 
              )}

              onClick={(e) => {
                e.preventDefault();

                if (window.lenis) {
                    window.lenis.scrollTo(n.href, { duration: 1.0, easing: (t: number) => t * t });
                } else {

                    document.querySelector(n.href)?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <Link 
          href="/cv.pdf" 
          className="hidden rounded-full border border-secondary px-4 py-2 text-sm font-medium text-secondary/90 hover:bg-secondary/10 transition-colors duration-200 md:inline-block"
        >
          Download CV
        </Link>
      </div>
    </header>
  );
}
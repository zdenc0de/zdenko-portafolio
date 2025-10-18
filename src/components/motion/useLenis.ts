"use client";

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'; 

/**
 * Hook para inicializar y gestionar la instancia de Lenis para el scroll suave.
 * @param root 
 */
export function useLenis(root: boolean = true) {
  useEffect(() => {
    // 1. Inicializar Lenis
    const lenis = new Lenis({
      duration: 1.2, // Duración del desplazamiento
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva de easing
      direction: 'vertical', // o 'horizontal'
      gestureDirection: 'vertical', // Dirección para gestos táctiles
      smooth: true,
      mouseMultiplier: 1, // Multiplicador para la velocidad del mouse
      smoothTouch: false, // Desactivar smooth touch para mejor rendimiento en móviles si es necesario
      touchMultiplier: 2,
      infinite: false,
      wrapper: root ? window : undefined, // Si es root, usa la ventana
      content: root ? document.documentElement : undefined, // Contenido a desplazar
    });

    // 2. Definir la función de renderizado (loop)
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // 3. Iniciar el loop de animación
    requestAnimationFrame(raf);

    // 4. Cleanup function 
    return () => {
      lenis.destroy();
    };
  }, [root]);
}

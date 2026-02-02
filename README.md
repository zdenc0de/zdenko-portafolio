# Zdencode - Portfolio Personal 

Mi portafolio personal rediseñado, construido con Next.js, TypeScript y Tailwind CSS. Creado como una experiencia de página única (`one-pager`) para mostrar mis proyectos, habilidades y trayectoria como estudiante de Ingeniería en Computación.

**Demo en Vivo:** https://zdenko-abarca-portafolio.vercel.app/ 

---

## Características Principales

* **Diseño de Página Única:** Navegación fluida y sin recargas entre secciones.
* **Scroll Suave:** Experiencia de desplazamiento elegante gracias a Lenis (`lenis/react`).
* **Animaciones Atractivas:** Interacciones y apariciones sutiles implementadas con Framer Motion.
* **Totalmente Responsivo:** Diseño adaptado para una visualización perfecta en computadoras, tabletas y móviles.
* **Stack Tecnológico Moderno:** Construido con las herramientas más actuales del ecosistema React/Next.js.
* **Optimizado para SEO (Básico):** Configuración inicial de metadatos en el layout principal.

---

##  Stack Tecnológico

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
* **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
* **Animación:** [Framer Motion](https://www.framer.com/motion/)
* **Scroll Suave:** [Lenis](https://lenis.studiofreight.com/) (`lenis/react`)
* **Utilidades:** `clsx`, `tailwind-merge`
* **Gestor de Paquetes:** [pnpm](https://pnpm.io/)

---

##  Cómo Empezar (Desarrollo Local)

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/zdenc0de/zdenko-portafolio.git](https://github.com/zdenc0de/zdenko-portafolio.git)
    cd zdenko-portafolio
    ```

2.  **Instala las dependencias:**
    ```bash
    pnpm install
    ```

3.  **Ejecuta el servidor de desarrollo:**
    ```bash
    pnpm dev
    ```

4.  Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

---

## Estructura del Proyecto

El proyecto sigue una estructura organizada para facilitar la mantenibilidad:
/src
├── app/         # Rutas y Layouts principales (App Router)
│   └── (site)/  # Grupo de rutas para la página principal
├── components/  # Componentes reutilizables de React
│   ├── cards/   # Tarjetas específicas (CaseCard)
│   ├── core/    # Componentes base (Header, Section, Footer)
│   ├── motion/  # Lógica de animación y scroll (LenisProvider, variants)
│   └── sections/# Componentes de secciones principales (Hero, Work, About, Contact)
├── data/        # Datos estáticos del sitio (proyectos, enlaces, stack)
├── hooks/       # Hooks personalizados (useActiveSection)
├── lib/         # Funciones de utilidad (cn)
└── types/       # Definiciones de TypeScript

---

## Despliegue

Este proyecto está configurado para un despliegue sencillo en [Vercel](https://vercel.com/). El despliegue continuo está habilitado en la rama `main`.

---

##  Contacto

¡Conéctate conmigo!

* **LinkedIn:** [Tu Perfil de LinkedIn](https://www.linkedin.com/in/zdenko-abarca-209050355/)
* **GitHub:** [@zdenc0de](https://github.com/zdenc0de)

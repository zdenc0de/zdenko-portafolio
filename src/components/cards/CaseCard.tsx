import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/components/motion/variants";
import { Case } from "@/types/case";
import { useRef } from "react"; // ✨ 1. Importa useRef

export function CaseCard({ c }: { c: Case }) {
  // ✨ 2. Crea una referencia para el elemento de video
  const videoRef = useRef<HTMLVideoElement>(null);

  // ✨ 3. Crea funciones para manejar el hover
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    // ✨ 4. Añade los manejadores de eventos al article
    <motion.article
      variants={fadeUp()}
      className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={`/projects/${c.slug}`} className="block">
        <div className="relative mb-4 aspect-[16/10] w-full overflow-hidden rounded-xl ring-1 ring-white/10">
          {/* ✨ 5. Renderizado Condicional: Muestra video si existe, si no, la imagen */}
          {c.video ? (
            <video
              ref={videoRef}
              src={c.video}
              poster={c.cover} // Muestra la imagen de cover mientras el video no se reproduce
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              muted    // Esencial para el autoplay en la mayoría de los navegadores
              loop     // Para que el video se repita
              playsInline // Necesario para iOS
            />
          ) : (
            <Image
              src={c.cover}
              alt={c.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          )}
        </div>
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-xl font-semibold">{c.title}</h3>
          {c.impact && <span className="text-sm font-medium text-secondary">{c.impact}</span>}
        </div>
        <p className="mt-2 text-white/80">{c.blurb}</p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/70">
          {c.tags.map((t) => <span key={t} className="rounded-md bg-white/10 px-2 py-1">{t}</span>)}
        </div>
      </Link>
    </motion.article>
  );
}
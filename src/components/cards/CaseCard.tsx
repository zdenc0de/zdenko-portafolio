import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/components/motion/variants";
import { Case } from "@/types/case";
import { useRef } from "react";

export function CaseCard({ c }: { c: Case }) {
  const videoRef = useRef<HTMLVideoElement>(null);

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
    <motion.article
      variants={fadeUp()}
      className="group flex flex-col rounded-2xl border border-border bg-muted/30 p-4 transition-colors hover:bg-muted/50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >

      <Link 
        href={c.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col flex-1"
      >

        <div>
          <div className="relative mb-4 aspect-[16/10] w-full overflow-hidden rounded-xl ring-1 ring-border">
            {c.video && c.video.trim() !== "" ? (
              <video
                ref={videoRef}
                src={c.video}
                poster={c.cover}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                muted
                loop
                playsInline
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
            <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>
            {c.impact && (
              <span className="shrink-0 text-sm font-medium text-secondary">
                {c.impact}
              </span>
            )}
          </div>
          <p className="mt-2 text-foreground/80">{c.blurb}</p>
        </div>

        <div className="flex-grow" />

        <div className="mt-4 flex flex-wrap gap-2 text-sm text-muted-foreground">
          {c.tags.map((t) => (
            <span key={t} className="rounded-md bg-muted px-2.5 py-1 font-medium">
              {t}
            </span>
          ))}
        </div>
      </Link>
    </motion.article>
  );
}
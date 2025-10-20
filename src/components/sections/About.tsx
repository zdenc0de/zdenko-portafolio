"use client";

export function About() {
  return (
    <section>
      <div className="flex items-end justify-between">
        <h2 className="text-4xl font-black md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
          About
        </h2>
        <a href="/cv.pdf" className="hidden text-sm text-white/70 underline md:block">Résumé</a>
      </div>
    </section>
  );
}
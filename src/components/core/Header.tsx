"use client";
import Link from "next/link";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[rgb(10,15,40)/0.5] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="group inline-flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-secondary font-bold text-black">Z</span>
          <span className="text-xl font-bold tracking-tight">
            <span style={{ fontFamily: "var(--font-display)" }}>ZDENCODE</span>
          </span>
        </Link>
        <nav className="hidden gap-1 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href}
               className="rounded-lg px-3 py-2 text-white/80 transition hover:bg-white/5 hover:text-white">
              {n.label}
            </a>
          ))}
        </nav>
        <Link href="/cv.pdf" className="hidden rounded-xl border border-secondary px-3 py-2 text-sm text-secondary hover:bg-secondary/10 md:inline-block">
          Download CV
        </Link>
      </div>
    </header>
  );
}

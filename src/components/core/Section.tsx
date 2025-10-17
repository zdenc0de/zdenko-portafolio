import { cn } from "@/lib/cn";

export function Section({ id, className, children }:{
  id?: string; className?: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}

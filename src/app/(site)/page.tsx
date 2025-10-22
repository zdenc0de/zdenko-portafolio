import { Header } from "@/components/core/Header";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
    </>
  );
}

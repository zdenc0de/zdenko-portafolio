import { Header } from "@/components/core/Header";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { About } from "@/components/sections/About";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <About />
        {/* <Services /> */}
        {/* <Contact /> */}
      </main>
    </>
  );
}

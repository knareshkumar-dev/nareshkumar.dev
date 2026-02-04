import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Certificates } from "@/components/certificates";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { SectionBackground } from "@/components/section-background";

export default function Home() {
  return (
    <SectionBackground>
      <main className="min-h-screen pt-14 sm:pt-16">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
      </main>
    </SectionBackground>
  );
}

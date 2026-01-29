import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Certificates } from "@/components/certificates";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { SectionBackground } from "@/components/section-background";

export default function Home() {
  return (
    <SectionBackground>
      <main className="min-h-screen pt-14 sm:pt-16">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certificates />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </SectionBackground>
  );
}

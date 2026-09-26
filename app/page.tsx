import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/shell/Navbar";

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}

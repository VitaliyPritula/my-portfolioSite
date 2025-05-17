"use client";
import Hero from "@/components/section/Hero";
import About from "@/components/section/About";
import Skills from '@/components/section/Skills';
import Projects from '@/components/section/Projects';
import Experience from '@/components/section//Experience';
import ScrollBtnt from "@/components/ui/ScrollBtn";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <ScrollBtnt />
      </div>
  );
}

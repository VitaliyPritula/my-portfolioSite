"use client";
import Hero from "@/components/section/Hero";
import About from "@/components/section/About";
import Skills from '@/components/section/Skills';
import Projects from '@/components/section/Projects';
import Experience from '@/components/section//Experience';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience/>
      </>
  );
}

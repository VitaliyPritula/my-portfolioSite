"use client";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  // Animation on mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 ">
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div
            className={`flex-1 z-10 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gradient">
              <span className="block">Vitalii Prytula</span>
              <span className="block"></span>
            </h1>

            <h2 className="text-xl md:text-[30px] font-medium mb-4 text-acces font-extrabold">
              Frontend Developer
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Building responsive and modern user interfaces with React,
              TypeScript, and Tailwind CSS.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-btn hover:bg-accent/90 rounded-full px-8"
                asChild>
                <a href="#contact">
                  Get in touch
                  {/* <ArrowRight className="ml-2" size={16} /> */}
                </a>
              </Button>

              <Button
                variant="outline"
                className="rounded-full px-8 border-btn text-accent hover:bg-accent/10"
                asChild>
                <a href="#projects">My Projects</a>
              </Button>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/VitaliyPritula"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors rounded-full border-2 p-2 hover:text-acces  duration-300">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/vitaliiprytula/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors rounded-full border-2 p-2 hover:text-acces  duration-300">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>

              <a
                href="mailto:pritula.vitaly94@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors rounded-full border-2 p-2 hover:text-acces  duration-300">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div
            className={`flex-1 lg:flex hidden justify-center relative transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
            {/* Geometric shapes */}
            <div className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full bg-acces -scale-z-50 right-8 top-0 animate-pulse duration-4000"></div>
            <div className="absolute w-16 h-16 md:w-24 md:h-24 transform rotate-45 border border-accent left-16 bottom-16 animate-pulse duration-5000 delay-1000"></div>
            <div className="absolute w-40 h-40 md:w-56 md:h-56 rounded-full bg-dd/15 border-dd border-2 backdrop-blur-xl animate-pulse duration-6000"></div>

            {/* Triangle shape - similar to image */}
            <div className="absolute w-32 h-32 md:w-40 md:h-40 bottom-8 right-8">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon
                  points="50,0 100,100 0,100"
                  fill="transparent"
                  stroke="rgba(77, 100, 224, 0.3)"
                  strokeWidth="1"
                  className="animate-pulse duration-3000"
                />
              </svg>
            </div>

            {/* Blue circle - similar to image */}
            <div className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full bg-dd/25 from-accent/40 to-accent/5 backdrop-blur-md top-4 right-8 animate-pulse duration-4000"></div>

            {/* Small dot */}
            <div className="absolute w-2 h-2 rounded-full bg-accent top-8 right-4 md:right-24 bg-dd"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

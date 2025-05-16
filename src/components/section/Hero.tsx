"use client";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  // Animation on mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen relative flex items-center lg:pt-[64px] pt-[30px] xl:mb-20">
      <div className="lg:container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-2 md:gap-12 items-center">
          <div
            className={`flex-1 z-10 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
            <h1 className="text-4xl lg:text-6xl font-bold lg:mb-4 mb-2 text-gradient">
              <span className="block">Vitalii Prytula</span>
            </h1>
            <h2 className="text-[30px] lg:text-3xl xl:text-4xl font-medium lg:mb-4 mb-2 text-acces font-extrabold">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "React Expert",
                  "UI/UX Enthusiast",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Building responsive and modern user interfaces with React,
              TypeScript, Next.js, and Tailwind CSS.
            </p>

            <div className="flex flex-col lg:flex-row gap-4">
              <Button
                className="bg-btn hover:bg-acces border-btn rounded-full px-8"
                asChild>
                <a href="#contact" className="scroll-smooth">
                  Get in touch
                  {/* <ArrowRight className="ml-2" size={16} /> */}
                </a>
              </Button>

              <Button
                variant="outline"
                className="rounded-full px-8 border-btn hover:bg-auto text-accent"
                asChild>
                <a href="#projects">My Projects</a>
              </Button>
            </div>
              {/* social */}
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
              <a
                href="https://t.me/vitaliy_pritula"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-muted-foreground hover:text-accent hover:border-acces transition-colors rounded-full border-2 p-2 duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-gray-400 group-hover:fill-acces transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M9.95 16.57l-0.38 3.78c0.55 0 0.79-0.23 1.09-0.5l2.62-2.4 5.45 3.98c1 0.55 1.71 0.26 1.96-0.91l3.56-16.7c0.35-1.64-0.62-2.29-1.66-1.87L1.59 9.12c-1.61 0.63-1.6 1.52-0.29 1.92l5.57 1.74 12.94-8.14c0.61-0.37 1.17-0.17 0.71 0.21l-10.44 9.72z" />
                </svg>
                <span className="sr-only">Telegram</span>
              </a>
            </div>
          </div>
          <div
            className={`flex-1 lg:flex hidden justify-center relative transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
            {/* Geometric shapes */}
            <div className="fixed w-24 h-24 md:w-32 md:h-32 rounded-full bg-acces -scale-z-50 right-8 top-0 animate-pulse duration-4000"></div>
            <div className="fixed w-16 h-16 md:w-24 md:h-24 transform rotate-45 border border-accent left-16 bottom-16 animate-pulse duration-5000 delay-1000"></div>
            <div className="fixed w-40 h-40 md:w-56 md:h-56 rounded-full bg-dd/15 border-dd border-2 backdrop-blur-xl animate-pulse duration-6000"></div>

            {/* Triangle shape - similar to image */}
            <div className="fixed w-32 h-32 md:w-40 md:h-40 bottom-8 right-8">
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
            <div className="fixed w-32 h-32 md:w-48 md:h-48 rounded-full bg-dd/25 from-accent/40 to-accent/5 backdrop-blur-md top-4 right-8 animate-pulse duration-4000"></div>

            {/* Small dot */}
            <div className="fixed w-2 h-2 rounded-full bg-accent top-8 right-4 md:right-24 bg-dd"></div>
          </div>
        </div>
      </div>
      <button   onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="absolute xl:bottom-20 bottom-8 left-1/2 transform cursor-pointer -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      
    </section>
  );
};

export default Hero;

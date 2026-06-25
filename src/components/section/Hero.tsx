"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (!section) return;

    const offset = -160;
    const top = section.offsetTop + offset;

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section className="min-h-screen relative flex items-center lg:pt-[64px] py-[100px]">
      <div className="lg:container mx-auto px-4">

        <div className="flex flex-col md:flex-row gap-2 md:gap-12 items-center">

          {/* LEFT */}
          <div
            className={`flex-1 z-10 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-2 text-gradient">
              Vitalii Prytula
            </h1>
            <h3 className="text-[26px] lg:text-3xl font-extrabold text-acces mb-4">
              <Typewriter
                words={[
                  "Frontend Engineer",
                  "React & TypeScript",
                  "SaaS & Dashboard Systems",
                  "Frontend Team Lead",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Frontend Engineer with 4+ years building React and TypeScript applications
              for SaaS products, dashboards, and internal tools.
              <br />
              <br />
              I focus on scalable UI architecture, reusable component systems,
              and clean codebases — built to grow with the product, not just look good on launch day.
              <br />
              <br />
              Available for full-time roles and freelance projects.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col lg:flex-row gap-4">
              <Button asChild className="rounded-full px-8">
                <a href="#contact">Get in touch</a>
              </Button>

              <Button
                variant="outline"
                className="rounded-full px-8"
                onClick={scrollToProjects}
              >
                My Projects
              </Button>
            </div>

            {/* SOCIAL */}
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
                className="text-muted-foreground hover:text-accent transition-colors rounded-full border-2 p-2 hover:text-acces flex items-center duration-300">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
              <a
                href="https://t.me/vitaliy_pritula"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-muted-foreground hover:text-accent hover:border-acces transition-colors rounded-full border-2 p-2 duration-300 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 transform translate-y-0.5 -translate-x-0.5 fill-gray-400 group-hover:fill-acces transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M9.95 16.57l-0.38 3.78c0.55 0 0.79-0.23 1.09-0.5l2.62-2.4 5.45 3.98c1 0.55 1.71 0.26 1.96-0.91l3.56-16.7c0.35-1.64-0.62-2.29-1.66-1.87L1.59 9.12c-1.61 0.63-1.6 1.52-0.29 1.92l5.57 1.74 12.94-8.14c0.61-0.37 1.17-0.17 0.71 0.21l-10.44 9.72z" />
                </svg>
                <span className="sr-only">Telegram</span>
              </a>
            </div>
          </div>

        </div>

        <button
          onClick={() => {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
              const offset = -170; // наприклад, прокрути на 100px вище елемента
              const top = aboutSection.offsetTop + offset;

              window.scrollTo({ top, behavior: "smooth" });
            }
          }}
          className="absolute xl:bottom-20 bottom-8 left-1/2 transform cursor-pointer -translate-x-1/2 animate-bounce focus:outline-none">
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

      </div>
    </section>
  );
};

export default Hero;
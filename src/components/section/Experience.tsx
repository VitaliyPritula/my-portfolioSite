"use client";
import React from "react";
// 1. Імпортуємо стилі як об'єкт styles
import styles from './style.module.css';

const experiences = [
  {
    position: "Lead Frontend Engineer",
    company: "BazaTrainee (volunteer)",
    period: "Feb 2024 – Feb 2026",
    location: "Remote",

    description:
      "Led frontend development of scalable volunteer and educational platforms built with React ecosystem. Focused on architecture consistency, performance, and maintainable UI systems across multiple projects.",

    challenge:
      "Early-stage volunteer platforms often suffer from inconsistent UI structure and lack of scalable frontend architecture.",

    solution:
      "Introduced reusable component patterns, standardized UI architecture, and improved development workflow using TypeScript and Tailwind CSS. Provided code reviews and technical guidance for junior developers.",

    impact:
      "Improved code consistency, faster feature delivery, and better maintainability across multiple frontend projects.",

    techStack: ["React", "TypeScript", "Tailwind", "Vite", "GitHub"],
  },

  {
    position: "Frontend Developer",
    company: "Freelance",
    period: "Feb 2022 – Present",
    location: "Remote",

    description:
      "Delivered production-ready websites, landing pages, and web applications for clients with a focus on performance, responsiveness, and modern UI experiences.",

    challenge:
      "Many client projects required fast delivery while maintaining high UI quality and cross-device responsiveness.",

    solution:
      "Built responsive interfaces using React and modern CSS practices, integrating animations and motion design to improve user engagement and visual clarity.",

    impact:
      "Improved user experience, faster delivery cycles, and higher client satisfaction through consistent UI quality.",

    techStack: ["HTML", "CSS", "JavaScript", "React", "Framer Motion"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 xl:mb-20 relative">
      <div className="lg:container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl uppercase mb-4 font-bold text-gradient">
            Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A quick overview of my professional and volunteer journey
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-sm hover:shadow-md transition-all relative duration-300 ${styles['border-animated']}`}
            >
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <h3 className="text-xl font-semibold">
                  {exp.position}{" "}
                  <span className="text-muted-foreground">– {exp.company}</span>
                </h3>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <div className="text-sm text-muted-foreground mb-2 italic">
                {exp.location}
              </div>
              <p className="text-base mb-3">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-muted text-sm px-3 py-1 rounded-full text-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

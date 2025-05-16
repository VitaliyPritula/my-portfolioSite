"use client";
import React from "react";
import  './style.css'
const experiences = [
  {
    position: "Lead Frontend Engineer",
    company: "BazaTrainee (volunteer)",
    period: "Feb 2024 – Present",
    location: "Remote",
    description:
      "Leading frontend development of volunteer platforms. Focused on scalable architecture using React, TypeScript, Tailwind CSS. Mentoring junior developers and conducting code reviews.",
    techStack: ["React", "TypeScript", "Tailwind", "Vite", "GitHub"],
  },
  {
    position: "Frontend Developer",
    company: "Freelance",
    period: "Feb 2022 – Present",
    location: "Remote",
    description:
      "Developed responsive websites, landing pages, and web applications for clients. Worked closely with designers and used animations and motion libraries for rich UI.",
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
                  className="p-6 rounded-xl border-animated shadow-sm hover:shadow-md transition-all relative duration-300">
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

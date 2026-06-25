"use client";
import React from "react";
import styles from './style.module.css';

const experiences = [
  {
    position: "Lead Frontend Engineer",
    company: "BazaTrainee",
    period: "Feb 2024 – Feb 2026",
    location: "Remote · Volunteer",

    description:
      "Led frontend across multiple volunteer platforms — from architecture decisions to code reviews and junior mentoring. Responsible for keeping the codebase consistent as the team and product scope grew.",

    challenge:
      "Each new project started from scratch with different conventions. Junior developers had no shared standards to follow, which slowed delivery and created inconsistencies across the codebase.",

    solution:
      "Introduced a shared component library, established TypeScript and Tailwind conventions, and ran regular code reviews. Mentored junior developers through pull request feedback and 1:1 guidance.",

    impact:
      "Team onboarding time dropped. New features shipped without breaking existing UI. Juniors started contributing independently within weeks instead of months.",

    techStack: ["React", "TypeScript", "Tailwind", "Vite", "GitHub"],
  },

  {
    position: "Frontend Developer",
    company: "Freelance",
    period: "Feb 2022 – Present",
    location: "Remote",

    description:
      "Built websites, landing pages, and web applications for clients across different industries. Handled full frontend delivery — from first layout to production deploy.",

    challenge:
      "Clients needed fast turnaround without sacrificing quality. Most had no technical background, so requirements were often vague and needed translation into concrete UI decisions.",

    solution:
      "Developed a personal delivery workflow: clarify goals first, build a focused MVP, iterate on feedback. Used React, modern CSS, and Framer Motion to deliver responsive, polished interfaces quickly.",

    impact:
      "Clients received production-ready interfaces on schedule. Several returned for follow-up projects.",

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
            2+ years leading frontend teams. 4+ years shipping production interfaces.
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

              <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <p className="text-muted-foreground font-medium mb-1">Challenge</p>
                  <p>{exp.challenge}</p>
                </div>
                <div>
                  <p className="text-muted-foreground font-medium mb-1">Impact</p>
                  <p>{exp.impact}</p>
                </div>
              </div>

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
"use client";

import React from "react";
import { Code, Layers, Rocket, Users } from "lucide-react";

type SkillLevel = "core" | "advanced" | "practical";

type Skill = {
  name: string;
  level: SkillLevel;
};

type SkillCategory = {
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Architecture",
    description:
      "React systems with focus on structure, scalability and predictable UI behavior.",
    icon: <Code className="w-5 h-5" />,
    skills: [
      { name: "React & Next.js architecture", level: "core" },
      { name: "TypeScript for scalable systems", level: "core" },
      { name: "Reusable component design", level: "core" },
      { name: "State management patterns", level: "advanced" },
      { name: "Performance optimization", level: "advanced" },
      { name: "Modern JavaScript", level: "practical" },
    ],
  },
  {
    title: "UI Systems",
    description:
      "Consistent interfaces built with reusable design patterns.",
    icon: <Layers className="w-5 h-5" />,
    skills: [
      { name: "Design systems", level: "core" },
      { name: "Responsive layouts", level: "core" },
      { name: "UI consistency", level: "core" },
      { name: "UX-driven logic", level: "advanced" },
      { name: "Accessibility basics", level: "practical" },
    ],
  },
  {
    title: "Product Engineering",
    description:
      "SaaS products, dashboards and production-ready interfaces.",
    icon: <Rocket className="w-5 h-5" />,
    skills: [
      { name: "SaaS development", level: "core" },
      { name: "Dashboard systems", level: "core" },
      { name: "API integration", level: "core" },
      { name: "Feature planning", level: "advanced" },
      { name: "Code quality standards", level: "advanced" },
    ],
  },
  {
    title: "Collaboration",
    description:
      "Team workflows, mentoring and ownership in delivery.",
    icon: <Users className="w-5 h-5" />,
    skills: [
      { name: "Team collaboration", level: "core" },
      { name: "Code reviews", level: "advanced" },
      { name: "Mentoring juniors", level: "advanced" },
      { name: "Ownership mindset", level: "core" },
    ],
  },
];

const levelStyles: Record<SkillLevel, string> = {
  core: "text-primary font-semibold",
  advanced: "text-foreground",
  practical: "text-muted-foreground",
};

const levelDot: Record<SkillLevel, string> = {
  core: "bg-primary",
  advanced: "bg-primary/60",
  practical: "bg-muted-foreground",
};

export default function Skills() {
  return (
    <section className="py-24 relative" id="skills">
      <div className="lg:container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Technical Expertise
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto mt-5 text-lg">
            Focused on building React-based systems with strong architecture,
            reusable UI patterns and performance-oriented frontend solutions.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border/50 bg-card/30 p-6 hover:shadow-lg transition"
            >

              {/* HEADER */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-muted text-primary">
                  {category.icon}
                </div>

                <h3 className="text-xl font-semibold">
                  {category.title}
                </h3>
              </div>

              {/* DESCRIPTION */}
              <p className="text-sm text-muted-foreground mb-6">
                {category.description}
              </p>

              {/* SKILLS */}
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between px-3 py-2 rounded-lg bg-muted/40 border border-border/40"
                  >
                    {/* name */}
                    <span className="text-sm text-foreground">
                      {skill.name}
                    </span>

                    {/* level */}
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${levelDot[skill.level]}`}
                      />
                      <span className={`text-xs ${levelStyles[skill.level]}`}>
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
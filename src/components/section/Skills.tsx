"use client";
import React from "react";
import { Code, Pen, Briefcase, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Сard";

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: <Code className="w-8 h-8 text-primary" />,
    skills: [
      "React & Next.js applications",
      "TypeScript for scalable codebases",
      "Component architecture & reusability",
      "Performance-oriented UI development",
      "Modern JavaScript (ES6+)",
      "HTML/CSS (semantic & structured)"
    ],
  },
  {
    title: "UI Systems & Experience",
    icon: <Pen className="w-8 h-8 text-primary" />,
    skills: [
      "Responsive & adaptive interfaces",
      "Design system implementation",
      "UI consistency & scalability",
      "UX optimization through frontend logic",
      "Accessibility best practices"
    ],
  },
  {
    title: "Product & Delivery",
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    skills: [
      "SaaS & dashboard development",
      "Agile / Scrum workflows",
      "Feature estimation & planning",
      "Cross-functional collaboration",
      "Code review & quality standards"
    ],
  },
  {
    title: "Collaboration",
    icon: <User className="w-8 h-8 text-primary" />,
    skills: [
      "Team communication",
      "Mentoring junior developers",
      "Problem solving in real projects",
      "Ownership mindset"
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/30 relative">
      <div className="lg:container mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-4xl uppercase mb-4 font-bold text-gradient">
            Skills
          </h2>

          <p className="text-muted-foreground max-w-2xl text-[24px] mx-auto">
            My expertise is focused on building scalable frontend systems and high-quality user interfaces for modern web products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card hover:scale-[1.02] transition-transform duration-300"
            >
              <CardContent className="p-6">

                <div className="flex flex-col items-center text-center">

                  <div className="mb-4 p-3 rounded-full">
                    {category.icon}
                  </div>

                  <h3 className="text-xl font-semibold mb-4">
                    {category.title}
                  </h3>

                  <ul className="space-y-2 w-full text-left">
                    {category.skills.map((skill, idx) => (
                      <li
                        key={idx}
                        className="py-1 px-3 bg-muted rounded-md text-sm text-muted-foreground"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>

                </div>

              </CardContent>
            </Card>
          ))}

        </div>
      </div>
    </section>
  );
}
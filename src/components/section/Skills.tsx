"use client";
import React from "react";
import { Code, Pen, Briefcase, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Сard";

const skillCategories = [
  {
    title: "Technologies",
    icon: <Code className="w-8 h-8 text-primary" />,
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "HTML/CSS",
    ],
  },
  {
    title: "Design",
    icon: <Pen className="w-8 h-8 text-primary" />,
    skills: [
      "Responsive design",
      "UI/UX optimization",
      "Responsive layout",
      "Accessibility",
    ],
  },
  {
    title: "Management",
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    skills: [
      "Team leadership",
      "Scrum/Agile",
      "Priority setting",
      "Task estimation",
    ],
  },
  {
    title: "Soft Skills",
    icon: <User className="w-8 h-8 text-primary" />,
    skills: ["Teamwork", "Mentoring", "Communication", "Problem solving"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24  bg-muted/30 relative">
      <div className="lg:container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl uppercase mb-4 font-bold text-gradient">Skills</h2>
          <p className="text-muted-foreground max-w-2xl text-[24px] mx-auto">
            My technical and soft skills set
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden bg-card">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full ">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-4">{category.title}</h3>
                  <ul className="space-y-2 w-full">
                    {category.skills.map((skill, idx) => (
                      <li
                        key={idx}
                        className="py-1 px-3 bg-muted rounded-md text-sm">
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

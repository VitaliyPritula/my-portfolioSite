"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/Сard";

export default function About() {
  return (
    <section id="about" className="relative xl:mb-20">
      <div className="lg:container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl uppercase mb-8 font-bold text-gradient">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl text-[24px] mx-auto">
            Frontend Engineer with 4+ years of experience building scalable React applications, SaaS platforms, and dashboard systems used in production environments.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="glass-card overflow-hidden">
            <CardContent className="p-8">
              <p className="mb-4 text-gray-200">
                I’m a Frontend Engineer with experience building production React applications, including SaaS platforms, dashboards, and client projects.
                <br />
                <br />
                My main focus is frontend architecture — how components are structured, how data flows through the UI, and how to keep codebases consistent as they grow.
                <br />
                <br />
                I work with React, TypeScript, and modern frontend tooling, and I care about writing code that is not only functional but also easy for other developers to work with.
                <br />
                <br />
               I have experience in both freelance work and team environments, including collaboration, code reviews, and mentoring in volunteer projects.
              </p>
              <p className="mb-2 text-muted-foreground">
                My core skills:
              </p>
              <ul className="lg:grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 font-bold ">
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-dd rounded-full"></span>
                  <span>UI architecture & component design</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-dd rounded-full"></span>
                  <span>Responsive layout & modern CSS (Tailwind)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-dd rounded-full"></span>
                  <span>Performance optimization basics</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-dd rounded-full"></span>
                  <span>Team collaboration & code quality practices</span>
                </li>
              </ul>
              <p className="text-muted-foreground">
                I&apos;m continuously improving my engineering skills and looking for opportunities where I can contribute to real products and grow as a developer in a strong team.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

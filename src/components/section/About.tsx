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
            Frontend Engineer with 4+ years building React applications
            that teams maintain and products scale on.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="glass-card overflow-hidden">
            <CardContent className="p-8">
               <p className="mb-4 text-gray-200">
                I build frontend systems, not just interfaces.
                <br />
                <br />
                My focus is on how components are structured, how data flows
                through the UI, and how to keep a codebase consistent as the
                team and product grow.
                <br />
                <br />
                I’ve worked in both freelance and team environments — leading
                frontend on volunteer platforms, doing code reviews, and
                mentoring junior developers.
                <br />
                <br />
                I write code that the next developer can read without asking
                questions.
              </p>
              <p className="mb-2 text-muted-foreground">
                My core skills:
              </p>
              <ul className="lg:grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 font-bold">
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-dd rounded-full"></span>
                  <span>UI architecture & scalable component systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-dd rounded-full"></span>
                  <span>React, TypeScript, Tailwind CSS</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-dd rounded-full"></span>
                  <span>State management & data flow patterns</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-dd rounded-full"></span>
                  <span>Code reviews & team standards</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-dd rounded-full"></span>
                  <span>Performance optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-dd rounded-full"></span>
                  <span>Mentoring & async collaboration</span>
                </li>
              </ul>
              <p className="text-muted-foreground">
                Currently open to full-time roles and freelance projects
                where I can contribute to a real product from day one.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/Сard";

export default function About() {
  return (
    <section id="about" className="relative xl:mb-20">
      <div className="lg:container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl uppercase mb-8 font-bold text-gradient">About Me</h2>
          <p className="text-muted-foreground max-w-2xl text-[24px] mx-auto">
            Frontend developer with 4+ years of experience in building
            responsive and user-friendly interfaces using React, TypeScript, and
            Next.js.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="glass-card overflow-hidden">
            <CardContent className="p-8">
              <p className="mb-4 text-muted-foreground">
                I&apos;m have over 4 years of frontend experience. Worked both as a
                developer and a team lead, focusing on creating clean UI,
                improving UX, and collaborating effectively within
                cross-functional teams.
              </p>
              <p className="mb-2 text-muted-foreground">My core skills include:</p>

              <ul className="lg:grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 font-bold ">
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-dd rounded-full"></span>
                  <span>React / TypeScript / Next.js</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-dd rounded-full"></span>
                  <span>Tailwind CSS, responsive design</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-dd rounded-full"></span>
                  <span>UI/UX optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-dd rounded-full"></span>
                  <span>Team collaboration, mentoring</span>
                </li>
              </ul>
              <p className="text-muted-foreground">
                I&apos;m passionate about clean code, continuous learning, and
                contributing to meaningful products. Looking for a project where
                I can bring value — technically and as a reliable teammate.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

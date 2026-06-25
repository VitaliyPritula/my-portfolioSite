"use client";
import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Vitalii joined as a volunteer frontend developer and consistently took on more complex projects. He worked on a military fundraising landing, a site with user registration, and a CRM system. Reliable, never let the team down. Recommended without hesitation.",
    name: "Olha Ivanova",
    role: "Founder",
    company: "Baza Educat / Baza Skill",
  },
  {
    text: "I had the opportunity to work with Vitalii on volunteer projects where he served as both team lead and frontend developer. He sees processes through to the end, stays open to new ideas, and is always ready to help the team solve problems. A valuable asset to any project.",
    name: "Natalia Mahera",
    role: "Frontend Developer",
    company: "BazaTrainee",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 xl:mb-20 relative">
      <div className="lg:container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl uppercase mb-4 font-bold text-gradient">
            What People Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feedback from people I’ve worked with directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-muted/30 border border-border/40 hover:border-border/80 transition-all duration-300 flex flex-col justify-between gap-6"
            >
              <div>
                <Quote className="w-6 h-6 text-primary mb-4 opacity-60" />
                <p className="text-base leading-7 text-foreground">
                  {t.text}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
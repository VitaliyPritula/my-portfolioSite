"use client";
import { Button } from "@/components/ui/button";
import { Linkedin, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    text: "Vitalii joined social project development as a volunteer frontend developer and gradually took on more complex tasks. He contributed to a military fundraising landing page, a complex user registration site, and a CRM system project. He learns quickly and accurately, and will be a confident specialist in any company.",
    name: "Olha Ivanova",
    role: "Founder",
    company: "Baza Educat / Baza Skill",
    linkedin: "https://www.linkedin.com/in/ivolga-kyiv/",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQEu9auGgKdfOA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1618975366513?e=1784160000&v=beta&t=gQAx8OW8v-pZl_xRHuwRkKGembuYP-n_BheVQgIZYMo",
  },
  {
    text: "I had the opportunity to work with Vitalii on volunteer projects where he served as both team lead and frontend developer. Vitalii proved himself as a responsible and professional specialist who brings all processes to completion. He is always open to new ideas and ready to help solve team challenges. Working with Vitalii is comfortable and clear, and I am confident he will become a valuable asset to any project or organization.",
    name: "Natalia Mahera",
    role: "Frontend Developer",
    company: "BazaTrainee",
    linkedin: "https://www.linkedin.com/in/natalia-mahera/",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEVvEePPmfKtg/profile-displayphoto-crop_800_800/B56ZtMyHIVJoAI-/0/1766519765354?e=1784160000&v=beta&t=e_3xs85FSHVsS8sESucvzm4aJreqSAq8aTpkvBiG6Ck",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 xl:mb-20 relative">
      <div className="lg:container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="lg:text-4xl text-2xl uppercase mb-4 font-bold text-gradient">
            What People Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feedback from people who worked with me directly — not just colleagues, but a founder and a teammate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
                <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                  {t.image ? (
                    <Image
                      src={t.image}
                      alt={`${t.name} profile photo`}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    t.name.charAt(0)
                  )}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                    {t.linkedin ? (
                      <Link
                        href={t.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 hover:text-purple-400"
                      >
                        {t.name}
                        <Linkedin size={14} />
                      </Link>
                    ) : (
                      t.name
                    )}
                  </p>
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
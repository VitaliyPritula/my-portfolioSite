"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Analytics Dashboard System",
    context: "High-density data that nobody could read at a glance.",
    type: "Dashboard",
    difficulty: "Medium complexity",
    stack: ["React", "TypeScript", "Tailwind"],
    problem:
      "The existing dashboard mixed unrelated metrics on a single screen. Operators spent time searching for data instead of acting on it.",
    solution:
      "Rebuilt the layout with a modular component system — each widget independent, composable, and easy to extend without breaking others.",
    impact:
      "Data-heavy screens became scannable. New widgets added by the team without touching existing layout.",
    image: "/Projects/Dashbord.png",
    demoLink: "https://dashbord-sepia-omega.vercel.app/",
    githubLink: "https://github.com/VitaliyPritula/Dashbord",
    featured: true,
  },
  {
    title: "Chat SaaS Landing Platform",
    context: "Users left before understanding what the product does.",
    type: "SaaS",
    image: "/Projects/Chat Application.webp",
    difficulty: "High complexity",
    stack: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    problem:
      "The landing had no clear hierarchy. Users couldn't identify the core value within the first 10 seconds — the most critical window for SaaS activation.",
    solution:
      "Redesigned the page around an onboarding-first flow: headline → value proof → single CTA. Added motion feedback to guide attention without distraction.",
    impact:
      "Cleaner first impression, reduced decision friction, and a layout that guides users toward activation instead of confusion.",
    featuredNote: "Most complete system design case",
    demoLink: "https://chat-application-one-wine.vercel.app/",
    githubLink: "https://github.com/VitaliyPritula/Chat-Application",
    featured: true,
  },
  {
    title: "Motion-first E-commerce Experience",
    context: "Static product pages that felt lifeless and drove low engagement.",
    type: "E-commerce",
    difficulty: "Medium complexity",
    stack: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
    problem:
      "Product cards had no interaction depth — users scrolled past without engaging.",
    solution:
      "Introduced motion-driven interactions: hover states, entrance animations, and dynamic product transitions that reward exploration.",
    impact:
      "Users spend more time interacting with product cards. Built as part of BazaTrainee's internal design system.",
    image: "/Projects/Animation.png",
    demoLink: "https://baza-everything-can-move.vercel.app/",
    githubLink: "https://github.com/baza-trainee/baza-everything-can-move",
  },
  {
    title: "Mobile Media Platform",
    context: "Content-heavy layout that collapsed on small screens.",
    type: "Mobile",
    difficulty: "Medium complexity",
    stack: ["React", "TypeScript", "Vite"],
    problem:
      "The desktop layout ported to mobile without adaptation — content was dense, hierarchy unclear, and navigation hard to use one-handed.",
    solution:
      "Rebuilt from a mobile-first perspective: simplified content blocks, larger tap targets, and a reading flow optimized for small screens.",
    impact:
      "Mobile users can navigate and consume content without zooming or horizontal scrolling.",
    image: "/Projects/Zack Snyder's Justice League.png",
    demoLink: "https://zack-justice-league.vercel.app/",
    githubLink: "",
  },
  {
    title: "Commercial Landing for Local Business",
    context: "A local business with no digital presence and zero conversion flow.",
    type: "Landing",
    difficulty: "Medium complexity",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    problem:
      "The client had no website. Potential customers couldn't find them, verify credibility, or take action online.",
    solution:
      "Built a trust-focused landing page with clear service hierarchy, social proof placement, and a single primary CTA above the fold.",
    impact:
      "Client established a professional online presence with a clear path to contact and booking.",
    image: "/Projects/vlasnaPasika.png",
    demoLink: "https://family-apiary-website.vercel.app/",
    githubLink: "",
  },
  {
    title: "Service Booking Interface",
    context: "Mobile users couldn't book fast enough to stay on the page.",
    type: "Service",
    difficulty: "Low complexity",
    stack: ["HTML", "CSS"],
    problem:
      "The booking flow had too many steps on mobile. Users dropped off before completing contact.",
    solution:
      "Built a minimal mobile-first UI: one screen, one action, instant access to key booking details.",
    impact:
      "Reduced steps to contact from 4 to 1. Optimized for thumb navigation.",
    image: "/Projects/auto-instructor.webp",
    demoLink: "https://auto-instructor.vercel.app/",
    githubLink: "",
  },
  {
    title: "Mission-driven Web Platform",
    context: "Dense information architecture serving broad, non-technical audiences.",
    type: "Platform",
    difficulty: "Medium complexity",
    stack: ["React", "TypeScript", "Next.js", "Tailwind"],
    problem:
      "Content was organized for editors, not users. Key actions were buried and first-time visitors didn't know where to start.",
    solution:
      "Restructured UI hierarchy by user intent — separated primary actions from supporting content, added clear section landmarks.",
    impact:
      "Users reach their first action faster. Content sections are independently navigable without scrolling the full page.",
    image: "/Projects/woin.webp",
    demoLink: "https://peaceful-warrior-foundation.vercel.app/ua",
    githubLink: "",
  },
  {
    title: "Donation & Fundraising Platform",
    context: "A donation flow that felt transactional instead of meaningful.",
    type: "Fundraising",
    difficulty: "Medium complexity",
    stack: ["React", "TypeScript", "SCSS", "Material UI"],
    problem:
      "The donation form lacked emotional context. Users didn't understand the impact of their contribution before being asked to give.",
    solution:
      "Designed an emotionally-driven UI: impact statements before the form, simplified flow, and clear confirmation feedback.",
    impact:
      "Donation flow feels purposeful. Users understand where their money goes before they commit.",
    image: "/Projects/127-brig.webp",
    demoLink: "https://127-zbir.vercel.app/",
    githubLink: "",
  },
  {
    title: "Analytics Visualization Platform",
    context: "Raw datasets with no visual structure — impossible to interpret quickly.",
    type: "Visualization",
    difficulty: "Medium complexity",
    stack: ["React", "TypeScript", "SCSS"],
    problem:
      "Data was displayed as tables. Patterns and trends were invisible without manual analysis.",
    solution:
      "Built structured visualization components with consistent data hierarchy — charts, summaries, and drill-down views in a unified system.",
    impact:
      "Key trends visible at a glance. No manual data parsing required.",
    image: "/Projects/44-brig.png",
    demoLink: "https://zbir-44-brigada.vercel.app/",
    githubLink: "",
  },
  {
    title: "Defense Support Platform",
    context: "Critical frontline information buried under unclear navigation.",
    type: "Platform",
    difficulty: "High complexity",
    stack: ["React", "TypeScript", "Tailwind"],
    problem:
      "Users needed fast access to specific, time-sensitive information. The existing structure made navigation slow and error-prone.",
    solution:
      "Built a clear navigation system with accessible information architecture — prioritized frequently accessed content and reduced click depth.",
    impact:
      "Critical information reachable in fewer steps. Usable under time pressure.",
    image: "/Projects/wart.jpeg",
    demoLink: "https://baza-frontline.vercel.app/",
    githubLink: "",
  },
];

export default function ProjectsSectionWithFilters() {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [loading, setLoading] = useState(true);

  const featuredProjects = projects.filter((project) => project.featured);
  const mainFeatured = featuredProjects[0] ?? projects[0];
  const secondaryFeatured = featuredProjects[1] ?? projects[1];
  const rest = projects.filter(
    (project) => project !== mainFeatured && project !== secondaryFeatured
  );

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="lg:container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.24em] text-white/50 mb-4">
            Engineering case studies
          </p>
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-white">
            Real problems. Real solutions.
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-base text-white/60">
            Each project starts with a problem worth solving — and ends with a frontend that makes it easier for users to do what they came to do.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_1.4fr] mb-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="group grid gap-6 overflow-hidden rounded-[2rem] bg-white/[0.015] hover:bg-gradient-to-b hover:from-white/[0.04] hover:to-transparent transition-all duration-700"
          >
            <Link href={mainFeatured.demoLink} target="_blank" rel="noreferrer" className="block overflow-hidden h-full">
              <div className="aspect-[16/11] overflow-hidden bg-black/5">
                <img
                  src={mainFeatured.image}
                  alt={mainFeatured.title}
                  className="w-full h-full object-cover transition duration-[700ms] group-hover:scale-105"
                />
              </div>
            </Link>
            <div className="p-8 md:p-10 flex flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/40 mb-3">
                  {mainFeatured.type} · {mainFeatured.difficulty}
                </p>
                <p className="text-sm text-white/50 leading-7 max-w-xl mb-5">
                  {mainFeatured.context}
                </p>
                <h3 className="text-4xl md:text-[2rem] font-semibold text-white tracking-tight mb-4">
                  {mainFeatured.title}
                </h3>
                <p className="text-xs uppercase tracking-[0.28em] text-white/50 mb-6">
                  {mainFeatured.featuredNote}
                </p>
                <p className="text-white/60 mb-8 max-w-xl leading-7">
                  {mainFeatured.problem}
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 text-sm text-white/70">
                <div>
                  <p className="text-white font-medium mb-2">Solution</p>
                  <p className="leading-7 text-white/70">{mainFeatured.solution}</p>
                </div>
                <div>
                  <p className="text-white font-medium mb-2">Impact</p>
                  <p className="leading-7 text-white">{mainFeatured.impact}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {mainFeatured.stack.map((stackItem) => (
                  <span
                    key={stackItem}
                    className="px-3 py-1 text-xs rounded-full border border-white/10 bg-white/[0.03] text-white/80"
                  >
                    {stackItem}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.a
            href={secondaryFeatured.demoLink}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="group block overflow-hidden rounded-[2rem] bg-white/[0.015] hover:bg-gradient-to-b hover:from-white/[0.04] hover:to-transparent transition-all duration-700"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={secondaryFeatured.image}
                alt={secondaryFeatured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
            </div>
            <div className="p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-white/40 mb-3">
                {secondaryFeatured.type} · {secondaryFeatured.difficulty}
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                {secondaryFeatured.title}
              </h3>
              <p className="text-sm text-white/50 leading-6 mb-5">
                {secondaryFeatured.context}
              </p>
              <p className="text-white/60 mb-5 leading-7">
                {secondaryFeatured.problem}
              </p>
              <div className="mb-5">
                <p className="text-xs uppercase tracking-[0.28em] text-white/50 mb-2">Solution</p>
                <p className="text-sm text-white/70 leading-6">
                  {secondaryFeatured.solution}
                </p>
              </div>
              <p className="text-white/70 text-sm leading-6 mb-5">
                {secondaryFeatured.impact}
              </p>
              <div className="flex flex-wrap gap-2">
                {secondaryFeatured.stack.map((stackItem) => (
                  <span
                    key={stackItem}
                    className="text-[11px] px-2 py-1 rounded-full border border-white/10 bg-white/[0.02] text-white/70"
                  >
                    {stackItem}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        </div>

        <div className="h-px bg-white/5 my-4" />

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="h-96 rounded-[1.5rem] bg-white/5 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence>
              {rest.slice(0, visibleProjects).map((project) => (
                <motion.div
                  key={project.title}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="group block overflow-hidden rounded-[2rem] bg-white/[0.012] hover:bg-gradient-to-b hover:from-white/[0.03] hover:to-transparent transition-all duration-700"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>
                    <div className="p-6 md:p-7">
                      <p className="text-xs uppercase tracking-[0.24em] text-white/40 mb-3">
                        {project.type} · {project.difficulty}
                      </p>
                      <h3 className="font-semibold text-lg md:text-xl text-white mb-3">
                        {project.title}
                      </h3>
                      {project.featuredNote ? (
                        <p className="text-xs uppercase tracking-[0.28em] text-white/50 mb-2">
                          {project.featuredNote}
                        </p>
                      ) : (
                        <p className="text-xs uppercase text-white/30 mb-2">Case focus</p>
                      )}
                      <p className="text-sm text-white/50 leading-6">{project.problem}</p>
                      <div className="mt-4">
                        <p className="text-xs uppercase tracking-[0.28em] text-white/50 mb-2">Solution</p>
                        <p className="text-sm text-white/70 leading-6">{project.solution}</p>
                      </div>
                      <p className="text-xs text-white/70 mt-4">
                        <span className="text-white font-medium">Impact:</span> {project.impact}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-5">
                        {project.stack.map((stackItem) => (
                          <span
                            key={stackItem}
                            className="text-[11px] px-2 py-1 rounded-full border border-white/10 bg-white/[0.02] text-white/70"
                          >
                            {stackItem}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {!loading && visibleProjects < rest.length && (
          <div className="flex justify-center mt-12">
            <button
              className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-white transition hover:bg-white/[0.06]"
              onClick={() => setVisibleProjects((prev) => prev + 3)}
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
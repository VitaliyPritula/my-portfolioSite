"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Сard";
import { AnimatePresence, motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Chat SaaS Landing Platform",
    description:
      "This is a fully responsive landing page for a conditional chat application. The project was implemented from scratch — from the structure to the smallest details of the interface. The main goal is to create a modern, lightweight and animated web interface that looks equally good on all devices and emphasizes the value of the product for the user.",
    challenge:
      "SaaS landing pages often struggle to communicate product value clearly while maintaining a lightweight and engaging user experience across devices.",

    solution:
      "Built a responsive and animation-driven interface with strong visual hierarchy, reusable UI sections, and optimized interaction flow focused on onboarding clarity.",

    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Animation",
    ],
    image: "/Projects/Chat Application.webp",
    githubLink: "https://github.com/VitaliyPritula/Chat-Application",
    demoLink: "https://chat-application-one-wine.vercel.app/",
    role: "Frontend Engineer",
    impact: "Improved product clarity & onboarding UX flow",
  },

  {
    title: "Analytics Dashboard System",
    description:
      "Scalable admin dashboard for real-time analytics with focus on structure, readability, and reusable UI architecture.",

    challenge:
      "Analytics dashboards can quickly become difficult to navigate and maintain as the amount of displayed data grows.",

    solution:
      "Designed a scalable dashboard architecture with reusable UI components, structured layouts, and clear data visualization patterns.",

    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: "/Projects/dashbord-ui.png",
    githubLink: "https://github.com/VitaliyPritula/Dashbord",
    demoLink: "https://dashbord-sepia-omega.vercel.app/",
    role: "Frontend Engineer",
    impact: "Optimized data visualization structure",
  },

  {
    title: "Motion-first E-commerce Experience",
    description:
      "Interactive UI built around motion design principles to increase engagement and improve user interaction flow.",

    challenge:
      "Traditional e-commerce interfaces often lack interactive feedback and engaging browsing experiences.",

    solution:
      "Implemented motion-driven UI interactions and animated transitions to create a more immersive and dynamic shopping experience.",

    tags: ["React", "TypeScript", "Next.js", "Framer Motion", "Tailwind CSS", "Material UI"],
    image: "/Projects/Animation.png",
    githubLink: "https://github.com/baza-trainee/baza-everything-can-move",
    demoLink: "https://baza-everything-can-move.vercel.app/",
    role: "Frontend Developer",
    impact: "Higher engagement through motion UX",
  },

  {
    title: "Zack Snyder's Justice League Fan Page",
    description:
      "Mobile-first media platform with strong visual hierarchy and structured content delivery.",

    challenge:
      "Media-heavy interfaces often become cluttered and difficult to navigate on smaller devices.",

    solution:
      "Created a mobile-first interface with structured content sections, optimized readability, and visually balanced layouts.",

    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    image: "/Projects/Zack Snyder's Justice League.png",
    demoLink: "https://zack-justice-league.vercel.app/",
    githubLink: "",
    role: "Frontend Developer",
    impact: "Improved mobile UX clarity",
  },

  {
    title: "Commercial Landing for Local Business",
    description:
      "Conversion-focused landing page designed for trust building and lead generation.",

    challenge:
      "Local businesses often need a stronger online presence to improve credibility and convert visitors into customers.",

    solution:
      "Developed a responsive landing page with trust-oriented UI sections, clear service presentation, and conversion-focused structure.",

    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/Projects/vlasnaPasika.png",
    demoLink: "https://family-apiary-website.vercel.app/",
    githubLink: "",
    role: "Frontend Developer",
    impact: "Increased conversion readiness",
  },

  {
    title: "Service Booking Landing Interface",
    description:
      "Minimal mobile-first interface optimized for fast decision making and clarity.",

    challenge:
      "Users booking services on mobile devices need quick access to information without unnecessary complexity.",

    solution:
      "Built a lightweight and responsive booking interface focused on usability, accessibility, and simplified navigation flow.",

    tags: ["HTML", "CSS"],
    image: "/Projects/auto-instructor.webp",
    demoLink: "https://auto-instructor.vercel.app/",
    githubLink: "",
    role: "Frontend Developer",
    impact: "Improved usability on mobile devices",
  },

  {
    title: "Mission-driven Web Platform UI",
    description:
      "Structured informational platform focused on clarity, trust, and readability.",

    challenge:
      "Informational platforms often struggle with content structure and clear communication across different user groups.",

    solution:
      "Designed a structured UI architecture with strong visual hierarchy and improved content readability for easier navigation.",

    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    image: "/Projects/woin.webp",
    demoLink: "https://peaceful-warrior-foundation.vercel.app/ua",
    githubLink: "",
    role: "Frontend Developer",
    impact: "Better content structure & readability",
  },

  {
    title: "Donation & Fundraising System UI",
    description:
      "Emotion-driven landing page optimized for engagement and fundraising conversion.",

    challenge:
      "Fundraising platforms need to emotionally engage users while keeping the donation process simple and intuitive.",

    solution:
      "Built a focused donation interface with emotionally-driven design elements, clear call-to-actions, and streamlined user flow.",

    tags: ["React", "TypeScript", "SCSS", "Material UI"],
    image: "/Projects/127-brig.webp",
    demoLink: "https://127-zbir.vercel.app/",
    githubLink: "",
    role: "Frontend Developer",
    impact: "Improved donation flow clarity",
  },

  {
    title: "Analytics Visualization Platform",
    description:
      "Data visualization UI with focus on clarity, structure, and performance.",

    challenge:
      "Complex analytics data can become difficult to interpret without structured visualization and optimized layouts.",

    solution:
      "Implemented structured data visualization components with performance-focused rendering and readable UI patterns.",

    tags: ["React", "TypeScript", "SCSS"],
    image: "/Projects/44-brig.png",
    demoLink: "https://zbir-44-brigada.vercel.app/",
    githubLink: "",
    role: "Frontend Developer",
    impact: "Better insight presentation",
  },

  {
    title: "Defense Support Web Platform",
    description:
      "Baza Frontline - a platform for supporting the Ukrainian military. Assistance to the 44th OABr and the 100th OMBr. Together to victory!",

    challenge:
      "Military support platforms require fast access to information, clear communication, and reliable content structure for users.",

    solution:
      "Developed a structured frontend platform with clear navigation, responsive layouts, and accessible information delivery.",

    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: "/Projects/wart.jpeg",
    demoLink: "https://baza-frontline.vercel.app/",
    githubLink: "",
    role: "Frontend Developer",
    impact: "Improved information accessibility",
  },
];
export default function ProjectsSectionWithFilters() {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timeout);
  }, []);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredProjects = projects.filter((project) => {
    const q = searchQuery.toLowerCase();

    return (
      (selectedTags.length === 0 ||
        project.tags.some((tag) => selectedTags.includes(tag))) &&
      (project.title.toLowerCase().includes(q) ||
        project.tags.some((tag) => tag.toLowerCase().includes(q)))
    );
  });

  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );


  return (
    <section id="projects" className="relative xl:mb-20">
      <div className="lg:container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl uppercase font-bold text-gradient mb-4">
            Engineering Case Studies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Production-grade frontend work focused on UI systems, scalability, and real product impact.
          </p>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {allTags.map((tag) => {
            const active = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`
    px-5 py-3 rounded-2xl
    border
    backdrop-blur-sm
    cursor-pointer
    text-sm md:text-base
    font-medium
    shadow-lg
    transition-all duration-300
    hover:-translate-y-1

    ${active
                    ? "bg-acces text-black border-acces"
                    : "border-white/10 bg-white/[0.03] text-white hover:border-acces"
                  }
  `}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* SEARCH */}
        <div className="flex justify-center mb-10">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search case studies..."
            className="w-full max-w-md px-5 py-3 rounded-full bg-transparent border border-muted text-sm focus:border-acces outline-none"
          />
        </div>

        {/* GRID */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-80 bg-muted animate-pulse rounded-xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.slice(0, visibleProjects).map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="overflow-hidden flex flex-col h-full hover:scale-[1.01] transition">

                    <a href={project.demoLink} target="_blank">
                      <div className="aspect-video overflow-hidden bg-gray-900">
                        <img
                          src={project.image}
                          className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                      </div>
                    </a>

                    <CardHeader>
                      <CardTitle className="text-lg">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {project.description}
                      </CardDescription>
                      <CardDescription className="space-y-3 mt-2">
                        <span className="font-semibold text-white">Challenge:</span>{" "}
                        {project.challenge}
                          <br />
                          <br />
                          <span className="font-semibold text-white">Solution:</span>{" "}
                          {project.solution}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-xs text-white">
                        <span className="font-semibold">Role:</span> {project.role}
                      </p>

                      <p className="text-xs text-white">
                        <span className="font-semibold">Impact:</span> {project.impact}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="flex justify-between mt-auto">
                      <Button asChild variant="outline" size="sm">
                        <a href={project.demoLink} target="_blank">
                          Live <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>

                      {project.githubLink && (
                        <Button asChild variant="outline" size="icon">
                          <a href={project.githubLink} target="_blank">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* LOAD MORE */}
        {!loading && visibleProjects < filteredProjects.length && (
          <div className="flex justify-center mt-10">
            <Button
              variant="outline"
              onClick={() => setVisibleProjects((p) => p + 3)}
            >
              Load more
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
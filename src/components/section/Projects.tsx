"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Сard";
const projects = [
  {
    title: "Everything Сan Move",
    description:
      "Development of a responsive and animated interface for an online store using React, TypeScript, and Next.js. Focused on smooth motion effects and interactive UI using Tailwind CSS and Framer Motion.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Animation",
    ],
    image: "/Projects/Animation.png",
    githubLink: "https://github.com/baza-trainee/baza-everything-can-move",
    demoLink: "https://baza-everything-can-move.vercel.app/",
  },
  {
    title: "Автоінструкторка в Києві",
    description:
      "Responsive landing page for a driving instructor in Kyiv. Focused on clean layout, mobile accessibility, and clear presentation of services and contact information.",
    tags: ["Html", "Css"],
    image: "/Projects/auto-instructor.webp",
    demoLink: "https://auto-instructor.vercel.app/",
    githubLink: "",
  },
  {
    title: "Peaceful Warrior Foundation",
    description:
      "Development of a responsive and animated interface for an online store using React, TypeScript, and Next.js. Focused on smooth motion effects and interactive UI using Tailwind CSS and Framer Motion.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    image: "/Projects/woin.webp",
    demoLink: "https://peaceful-warrior-foundation.vercel.app/ua",
    githubLink: "",
  },
  {
    title:
      "Drone collection for the 127th Brigade of the Armed Forces of Ukraine",
    description:
      "Development of a landing page to support fundraising for drones for the 127th Territorial Defense Brigade of the Armed Forces of Ukraine.",
    tags: ["React", "TypeScript", "Scss", "Material UI"],
    image: "/Projects/127-brig.webp",
    demoLink: "https://127-zbir.vercel.app/",
    githubLink: "",
  },
  {
    title: "Analytics Web Application. Dashboard for donation stats ",
    description:
      "Data visualization using interactive charts and diagrams for business analytics.",
    tags: ["React", "TypeScript", "Scss"],
    image: "/Projects/44-brig.png",
    demoLink: "https://zbir-44-brigada.vercel.app/",
    githubLink: "",
  },
  {
    title: "Frontline Base - Support for the Ukrainian military",
    description:
      "Baza Frontline - a platform for supporting the Ukrainian military. Assistance to the 44th OABr and the 100th OMBr. Together to victory!",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: "/Projects/wart.jpeg",
    demoLink: "https://baza-frontline.vercel.app/",
    githubLink: "",
  },
];

export default function ProjectsSectionWithFilters() {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };
  const filteredProjects = projects.filter((project) => {
    const matchesTags =
      selectedTags.length === 0 ||
      project.tags.some((tag) => selectedTags.includes(tag));

    const lowerQuery = searchQuery.toLowerCase();

    // Шукаємо у назві АБО у тегах
    const matchesSearch =
      project.title.toLowerCase().includes(lowerQuery) ||
      project.tags.some((tag) => tag.toLowerCase().includes(lowerQuery));

    return matchesTags && matchesSearch;
  });

  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );
  const visibleFilteredProjects = filteredProjects.slice(0, visibleProjects);

  return (
    <section id="projects" className="relative xl:mb-20">
      <div className="lg:container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl uppercase mb-4 font-bold text-gradient">
            My Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out some of my recent work
          </p>
        </div>

        {/* Теги для фільтрації */}
        <div className="mb-6 flex flex-wrap gap-2 justify-center">
          {allTags.map((tag) => {
            const isActive = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-4 py-2 rounded-md border transition-all duration-200 cursor-pointer
          ${
            isActive
              ? "bg-blue-600 text-acces border-blue-600"
              : "text-gray-700 border-gray-300 hover:bg-muted"
          }`}>
                {tag}
              </button>
            );
          })}
        </div>

        {/* Поле пошуку */}
        <div className="mb-8 text-center">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md w-full max-w-md"
          />
        </div>

        {/* Проекти / Skeleton */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, idx) => (
              <div
                key={idx}
                className="h-80 bg-muted animate-pulse rounded-xl"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <AnimatePresence>
              {visibleFilteredProjects.map((project, index) => (
                <motion.div
                  className=" dark:bg-zinc-900 rounded-xl shadow"
                  key={project.title}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  layout>
                  <Card
                    key={index}
                    className="overflow-hidden flex flex-col h-full">
                    <div className="aspect-video overflow-hidden bg-gray-800 relative">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://placehold.co/600x400/111827/FFFFFF?text=Project+Image";
                          }}
                        />
                      </a>
                    </div>
                    <CardHeader>
                      <CardTitle>
                        {project.title
                          .split(new RegExp(`(${searchQuery})`, "gi"))
                          .map((part, i) => (
                            <a
                              href={project.demoLink}
                              key={i}
                              target="_blank"
                              rel="noopener noreferrer">
                              <span
                                className={
                                  part.toLowerCase() ===
                                  searchQuery.toLowerCase()
                                    ? "bg-acces"
                                    : ""
                                }>
                                {part}
                              </span>
                            </a>
                          ))}
                      </CardTitle>

                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => {
                          const isSelected = selectedTags.includes(tag);
                          return (
                            <span
                              key={idx}
                              className={`px-2 py-1 text-xs rounded-md transition-all duration-200 ${
                                isSelected
                                  ? "bg-blue-600 text-white"
                                  : "bg-muted"
                              }`}>
                              {tag}
                              
                            </span>
                          );
                        })}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between mt-auto">
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer">
                          Demo
                        </a>
                      </Button>
                      {project.githubLink && (
                        <Button variant="outline" size="icon" asChild>
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer">
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

        {!loading && visibleProjects < filteredProjects.length && (
          <div className="flex justify-center mt-10">
            <Button
              onClick={() => setVisibleProjects((prev) => prev + 3)}
              variant="outline"
              className="gap-2 px-6 py-4 cursor-pointer">
              Show more
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

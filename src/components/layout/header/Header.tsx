"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const links = [
    { title: "About", sectionId: "about" },
    { title: "Skills", sectionId: "skills" },
    { title: "Projects", sectionId: "projects" },
    { title: "Experience", sectionId: "experience" },
    { title: "Contact", sectionId: "contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleButtonClick = (sectionId: string) => {
    const header = document.querySelector("header");
    const element = document.getElementById(sectionId);
    const offset = header?.clientHeight ?? 0;
    const extraOffset = -40;

    if (element) {
      window.scrollTo({
        top: element.offsetTop - offset + extraOffset,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  // Активна секція тільки на клієнті
  useEffect(() => {
    const handleScroll = () => {
      const scrollY =
        window.scrollY +
        (document.querySelector("header")?.clientHeight ?? 0) +
        10;

      for (let i = links.length - 1; i >= 0; i--) {
        const section = document.getElementById(links[i].sectionId);
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(links[i].sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // одразу після mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full h-18 z-20 shadow-lg shadow-[#0067BB]/50 bg-[#030014]">
      <div className="flex justify-between items-center 2xl:px-16 px-5 py-3 relative">
        <Link href="/">
          <Image
            className="h-10 w-10 lg:h-12 lg:w-12"
            src="/LOGO.svg"
            alt="Logo Baza Trainee Ukraine"
            width={48}
            height={48}
            priority
          />
        </Link>

        <div
          className={`lg:relative absolute top-16 lg:top-0 right-0 p-0 h-auto lg:bg-transparent bg-[#030014] w-full lg:w-auto transition-all duration-500 ease-in-out
            ${
              isOpen
                ? "translate-x-0 opacity-100 lg:h-8 h-screen overflow-y-scroll px-7"
                : "lg:translate-x-0 translate-x-full lg:opacity-100 opacity-0"
            }
          `}>
          <ul className="flex lg:flex-row flex-col gap-6">
            {links.map((link) => (
              <li key={link.sectionId}>
                <a
                  href={`#${link.sectionId}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleButtonClick(link.sectionId);
                  }}
                  className={`text-lg font-semibold transition-colors relative group ${
                    activeSection === link.sectionId
                      ? "text-purple-500"
                      : "hover:text-purple-500"
                  }`}>
                  {link.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dd group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Burger Icon */}
        <div
          className="absolute right-5 flex flex-col justify-between w-6 h-4 lg:hidden cursor-pointer z-20"
          onClick={toggleMenu}>
          <span
            className={`block h-[2px] bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1" : ""
            }`}></span>
          <span
            className={`block h-[2px] bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}></span>
          <span
            className={`block h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[11px]" : ""
            }`}></span>
        </div>
      </div>
    </header>
  );
};

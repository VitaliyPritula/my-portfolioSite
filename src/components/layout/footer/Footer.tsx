"use client";
import { Github, Linkedin } from "lucide-react";
import Contact from "@/components/section/Contact";
export default function Footer() {
  return (
    <footer
      id="contact"
      className="text-sm text-gray-400 py-6 text-center border-t border-gray-700 mt-16 text-white relative">
      <Contact/>
      <div className="flex justify-center gap-4 text-lg mb-5">
        {/* social */}
        <div className="flex gap-4 mt-8">
          <a
            href="https://github.com/VitaliyPritula"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors rounded-full border-2 p-2 hover:text-acces  duration-300">
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/vitaliiprytula/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors rounded-full border-2 p-2 hover:text-acces  duration-300">
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          
          <a
            href="https://t.me/vitaliy_pritula"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-muted-foreground hover:text-accent hover:border-acces transition-colors rounded-full border-2 p-2 duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 fill-gray-400 group-hover:fill-acces transition-colors duration-300"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path d="M9.95 16.57l-0.38 3.78c0.55 0 0.79-0.23 1.09-0.5l2.62-2.4 5.45 3.98c1 0.55 1.71 0.26 1.96-0.91l3.56-16.7c0.35-1.64-0.62-2.29-1.66-1.87L1.59 9.12c-1.61 0.63-1.6 1.52-0.29 1.92l5.57 1.74 12.94-8.14c0.61-0.37 1.17-0.17 0.71 0.21l-10.44 9.72z" />
            </svg>
            <span className="sr-only">Telegram</span>
          </a>
        </div>
      </div>
      <div className="mb-2 leading-6">
        © {new Date().getFullYear()} Vitalii Prytula <br/> Frontend Developer
      </div>
    </footer>
  );
}

"use client";
import { useEffect, useState } from "react";

const ScrollBtn = () => {
  const [visible, setVisible] = useState(false);
  const offset = 100;

  useEffect(() => {
    const onScroll = () => {
      const footer = document.getElementById("footer");
      const scrollY = window.scrollY;
      const scrollBottom = scrollY + window.innerHeight;
      const shouldShow = scrollY > 300;

      let shouldHide = false;

      if (footer) {
        const footerTop = footer.getBoundingClientRect().top + scrollY;
        shouldHide = scrollBottom >= footerTop && scrollY >= footerTop - offset;
      }

      setVisible(shouldShow && !shouldHide);
    };

    const handleScroll = () => requestAnimationFrame(onScroll);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      className={`scrollBtn ${
        visible ? "transform translate-x-0" : "transform translate-x-20"
      } fixed bottom-5 right-10 z-20 cursor-pointer`}
      onClick={scrollToTop}>
      <svg
        className="w-7 h-7 text-gray-400 rotate-180 border-acces rounded-full border-2 animate-pulse duration-3000"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          fill="border-acces"
          strokeLinejoin="round"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  );
};

export default ScrollBtn;

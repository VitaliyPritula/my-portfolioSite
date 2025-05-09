"use client";

import React, { useEffect, useState } from "react";

const CodeBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="top-0 absolute left-0 w-full h-full overflow-hidden bg-background z-0 pointer-events-none">
      {/* Darker gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0A0A1B] to-black/90" />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,...')]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:50px_50px] opacity-[0.01]" />

      {/* Blue glowing circle - right side */}
      <div
        className={`absolute w-48 h-48 md:w-64 md:h-64 rounded-full bg-[#2146FF] blur-3xl transition-all duration-1000 animate-spin-slow ${
          mounted
            ? "opacity-20 right-[20%] top-[25%]"
            : "opacity-0 right-[10%] top-[20%]"
        }`}
      />

      {/* Small blue dot */}
      <div
        className={`absolute w-4 h-4 rounded-full bg-[#4169FF] animate-pulse duration-1000  ${
          mounted
            ? "opacity-100 right-[35%] top-[20%]"
            : "opacity-0 right-[30%] top-[15%]"
        }`}
      />

      {/* Blue triangle */}
      <div
        className={`absolute transition-all duration-1000 rotate-45 rounded-sm animate-spin-slow transition-all ${
          mounted
            ? "opacity-100 right-[30%] top-[50%]"
            : "opacity-0 right-[25%] top-[45%]"
        }`}>
        <svg
          width="100"
          height="90"
          viewBox="0 0 100 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50 0L93.3013 75H6.69873L50 0Z"
            stroke="#4D64E0"
            strokeWidth="1.5"
            fill="transparent"
            className="animate-pulse duration-4000"
          />
        </svg>
      </div>

      {/* 🔵 Glowing blue circle bottom-right */}
      <div
        className={`absolute w-64 h-64 rounded-full  bg-[#2146FF] blur-3xl transition-all duration-1000 ${
          mounted
            ? "opacity-10 right-[10%] bottom-[10%]"
            : "opacity-0 -[5%] bottom-[5%]"
        }`}
      />

      {/* ⬜ Square outline center-right */}
      <div
        className={`absolute border border-[#3A5CCC] rounded-md w-20 h-20 md:w-24 md:h-24 transition-all duration-1000 ${
          mounted
            ? "opacity-60 right-[5%] top-[40%]"
            : "opacity-0 right-[2%] top-[35%]"
        }`}
      />

      🟢 Dot matrix top-right
      {/* {mounted && (
        <div className="absolute top-[5%] left-[5%] grid grid-cols-4 gap-2 opacity-5">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-[#4180FF]" />
          ))}
        </div>
      )} */}

      {/* 🔻 Rotating diamond */}
      <div
        className={`absolute w-16 h-16 border-2 border-[#2D57FF] rotate-45 rounded-sm animate-spin-slow transition-all duration-1000 ${
          mounted
            ? "opacity-30 left-[40%] top-[30%]"
            : "opacity-0 left-[35%] top-[25%]"
        }`}
      />

      {/* ✴️ Cross lines */}
      <div
        className={`absolute w-48 h-48 opacity-5   ${
          mounted ? "left-[20%] bottom-[20%]" : "opacity-0"
        }`}>
        <svg width="100%" height="100%">
          <line
            x1="0"
            y1="0"
            x2="100%"
            y2="100%"
            stroke="#3C6FFF"
            strokeWidth="1"
          />
          <line
            x1="100%"
            y1="0"
            x2="0"
            y2="100%"
            stroke="#3C6FFF"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* ⚡ Wavy electric line */}
      {/* <div
        className={`absolute opacity-10 transition-all duration-1000 ${
          mounted ? "top-[10%] right-[50%]" : "opacity-0 top-[5%] right-[45%]"
        }`}>
        <svg
          width="150"
          height="50"
          viewBox="0 0 150 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 25 Q25 0, 50 25 T100 25 T150 25"
            stroke="#3C82FF"
            strokeWidth="1.5"
            fill="transparent">
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="100"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div> */}
      {/* 🌀 Rotating ring */}
      <div
        className={`absolute w-24 h-24 border-2 border-[#3050FF] rotate-45 rounded-sm animate-spin-slow transition-all duration-1000 rounded-full animate-spin-slow opacity-10 ${
          mounted ? "top-[60%] right-[40%]" : "opacity-0 top-[55%] right-[15%]"
        }`}
      />
    </div>
  );
};

export default CodeBackground;

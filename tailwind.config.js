module.exports = {
  // tailwind.config.js
  darkMode: "class", // або "media", залежно від логіки

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      dd: "#0067BB",
      white: "#fff",
      btn: "rgb(29, 79, 215)",
      acces: "rgb(49, 78, 201)",
      card: "hsl(240, 10%, 3.9%)",
    },
    screens: {
      sm: "320px",
      // => @media (min-width: 320px) { ... }
      md: "530px",
      // => @media (min-width: 375px) { ... }
      lg: "767px",
      // => @media (min-width: 768px) { ... }
      xl: "1024px",
      // => @media (min-width: 1024px) { ... }
      "2xl": "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
    },
  },
  plugins: [],
};

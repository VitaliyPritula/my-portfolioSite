module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      dd: "#0067BB",
      btn: "rgb(29, 79, 215)",
      acces: "rgb(49, 78, 201)",
    },
    screens: {
      sm: "320px",
      // => @media (min-width: 320px) { ... }
      md: "375px",
      // => @media (min-width: 375px) { ... }
      lg: "768px",
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

const { fontFamily, screens } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xl: "1.25rem",
        "2xl": "6.25rem",
      },
      screens: {
        ...screens,
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        primary: "#466BF3",
        secondary: "#3258E8",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", ...fontFamily.sans],
      },
      backgroundImage: {
        "footer-logo": "url(/background.svg)",
        "earth-map": "url(/earth-map.svg)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

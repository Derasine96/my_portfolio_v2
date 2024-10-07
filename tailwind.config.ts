/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      // fontFamily: {
      //   sans: "var(--font-sans)",
      //   serif: "var(--font-serif)", 
      // },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        calistoga: ['Calistoga', 'cursive'],
      },
      colors: {
        primary: {
          DEFAULT: "#771010",
          foreground: "#FF4500",
          darkRed: "#370609",
          orangeBrown: "#A85A32",
          lightBeige: "#D1B89B",
          brightCoral: "#FE6B59",
          offWhite: "#F5F5F5",
          darkSlateGray: "#2F4F4F",
          lightRed: "#771010",
        },
      },
      animation: {
        "ping-large": "ping-large 1s ease-in-out infinite",
        "move-left": "move-left 1s linear infinite",
        "move-right": "move-right 1s linear infinite",
      },
      keyframes: {
        "ping-large": {
          "75%, 100%": {
            transform: "scale(3)",
            opacity: "0",
          },
        },
        "move-left": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        "move-right": {
          "0%": {
            transform: "translateX(-50%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [],
};

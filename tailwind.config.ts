import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        primaryColor: "#262523",
        secondaryColor: "#FFF7F0",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "dotted-pattern": "radial-gradient(currentColor 1px, transparent 1px)",
        'whatsapp-pattern': 'radial-gradient(currentColor 1px, transparent 1px)',
      },
      backgroundSize: {
        "dotted-pattern": "20px 20px",
        "whatsapp-pattern":"20px 20px",
      },

      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      perspective: {
        "1000": "1000px",
      },
      translate: {
        "z-10": "10px",
      },
      animation: {
        scroll: "scroll 20s linear infinite",
        "spin-slow": "spin 20s linear infinite",
        blob: "blob 7s infinite",
        fadeIn: "fadeIn 1s ease-out forwards",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
    variants: {
      extend: {
        scale: ["active", "group-hover"],
        opacity: ["group-hover"],
        blur: ["group-hover"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;

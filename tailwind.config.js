import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    "/app/componentes/**",
  ],
  theme: {
    extend: {
      colors: {
        'blue-k': '#142C68',
        'blue-d': '#04264C',
        'green-l': '#BFE05F',
        'black-d': '#222222'
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("flowbite/plugin")],
};

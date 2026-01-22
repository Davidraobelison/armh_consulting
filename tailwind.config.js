/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-josefin)", "ui-sans-serif", "system-ui"],
      },
      fontWeight: {
        ultra: "950",
      },
    },
  },
  plugins: [],
};

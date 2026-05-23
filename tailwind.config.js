/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        primary: "#1a1a2e",
        accent: "#e94560",
        surface: "#16213e",
        muted: "#0f3460",
      },
    },
  },
  plugins: [],
};

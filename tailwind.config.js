/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        destructive: "#ef4444", // 红色
        "destructive-foreground": "#ffffff",
      },
    },
  },
  plugins: [],
}
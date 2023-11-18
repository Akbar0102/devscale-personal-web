/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      borderWidth: {
        1.5: "1.5px",
      },
      colors: {
        primary: "#2563eb",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};

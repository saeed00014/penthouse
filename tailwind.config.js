/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-orange": "rgb(240, 142, 62)",
        "bg-blue": "rgb(10, 190, 190)",
        "bg-blue-hover": "rgb(82, 145, 255)",
      },
      backgroundImage: {
        "home-bg": "url('/home-img.jpg')",
      },
      screens: {
        sm: "320px",
        md: "640px",
        lg: "960px",
        xl: "1280px",
        xxl: "1780px",
      },
    },
  },
  plugins: [],
};

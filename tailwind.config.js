/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // daisyui: {
  //   themes: [
  //     {
  //       dashboardtheme: {
  //         primary: "#f44336",
  //         secondary: "#674ea7",
  //         accent: "#3A4256",
  //         neutral: "#3D4451",
  //         "base-100": "#FFFFFF",
  //       },
  //     },
  //   ],
  // },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};

/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
import themes from "daisyui/src/theming/themes.js";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["coffee"],
  },
}

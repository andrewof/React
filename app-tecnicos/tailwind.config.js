// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      secondary: '#1a2c38',
    },
  },
  plugins: [
    flowbite.plugin()
  ],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      screens: {
        mobile: { max: "620px" },
      },
      fontFamily: {
        old: ["Vintage"],
      },
    },
  },
  plugins: [],
};

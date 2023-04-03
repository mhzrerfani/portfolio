import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    files: {
      assets: "./static",
    },
    adapter: adapter(),
    prerender: { default: true },
  },
};

export default config;

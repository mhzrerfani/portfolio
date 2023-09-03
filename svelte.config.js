import { vitePreprocess } from "@sveltejs/kit/vite";
import vercel from "@sveltejs/adapter-vercel";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: vercel(),
  },

  preprocess: vitePreprocess(),
};

export default config;

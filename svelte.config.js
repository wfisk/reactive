const sveltePreprocess = require("svelte-preprocess");
const { scss, globalStyle } = require("svelte-preprocess");
module.exports = {
  preprocess: sveltePreprocess({
    scss: {
      includePaths: ["node_modules", "src"],
    },
  }),
};

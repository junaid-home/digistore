const babel = require("rollup-plugin-babel");
const typescript = require("rollup-plugin-typescript2");
const { terser } = require("rollup-plugin-terser");
const autoprefixer = require("autoprefixer");
const postcss = require("rollup-plugin-postcss");

module.exports = {
  input: ["src/index.ts"],
  output: {
    dir: "lib",
    format: "esm",
    sourcemap: true,
    preserveModules: true,
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
    typescript({
      tsconfigOverride: {
        exclude: ["**/__tests__", "**/*.spec.ts", "**/*.spec.tsx"],
      },
    }),
    postcss({
      plugins: [autoprefixer()],
      sourceMap: true,
      extract: true,
      minimize: true,
    }),
    terser(), // minifies generated bundles
  ],
  external: ["react"],
};

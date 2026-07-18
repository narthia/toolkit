import { defineConfig } from "vite-plus";
import { platformOxfmtConfig } from "./src/oxc-config/oxfmt.base.ts";
import { platformOxlintConfig } from "./src/oxc-config/oxlint.base.ts";

export default defineConfig({
  staged: {
    "*": "vp check",
  },
  pack: {
    entry: ["src/index.ts", "src/*/index.ts"],
    dts: {
      tsgo: true,
    },
    deps: {
      neverBundle: ["oxfmt", "oxlint"],
      dts: {
        neverBundle: ["oxfmt", "oxlint"],
      },
    },
    exports: true,
  },
  lint: {
    ...platformOxlintConfig,
  },
  fmt: {
    ...platformOxfmtConfig,
  },
});

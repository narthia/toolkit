import { defineConfig } from "vite-plus";
import { oxfmtConfig } from "./src/oxc-config/oxfmt.base.ts";
import { oxlintConfig } from "./src/oxc-config/oxlint.base.ts";

export default defineConfig({
  staged: {
    // Allow non-lintable staged files such as README.md and package.json.
    "*": "vp check --fix --no-error-on-unmatched-pattern",
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
    ...oxlintConfig,
  },
  fmt: {
    ...oxfmtConfig,
  },
});

import type { OxlintConfig } from "oxlint";

export const oxlintConfig: OxlintConfig = {
  categories: {
    correctness: "warn",
  },
  plugins: [
    "react",
    "oxc",
    "import",
    "typescript",
    "node",
    "promise",
    "eslint",
    "unicorn",
    "vitest",
    "nextjs",
  ],
  jsPlugins: ["eslint-plugin-check-file"],
  rules: {
    "eslint/no-unused-vars": "error",
    "prefer-template": "error",
    "unicorn/prefer-node-protocol": "error",
    "check-file/filename-naming-convention": [
      "error",
      {
        "**/*.{ts,tsx}": "KEBAB_CASE",
      },
      {
        ignoreMiddleExtensions: true,
      },
    ],
    "check-file/folder-naming-convention": [
      "error",
      {
        "src/**": "KEBAB_CASE",
      },
    ],
    "eslint/no-console": "warn",
    "node/no-process-env": "error",
    "typescript/no-explicit-any": "error",
  },
  options: {
    typeAware: true,
    typeCheck: true,
  },
};

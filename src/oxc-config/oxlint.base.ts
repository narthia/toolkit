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
    "eslint/no-unused-vars": ["error"],
    "prefer-template": "error",
    "unicorn/prefer-node-protocol": "error",
    "check-file/filename-naming-convention": [
      "error",
      {
        "**/*.{ts,tsx}": "KEBAB_CASE",
      },
      { ignoreMiddleExtensions: true },
    ],
    "check-file/folder-naming-convention": [
      "error",
      {
        "src/**": "KEBAB_CASE",
      },
    ],
    "eslint/no-console": "warn",
    "eslint/prefer-rest-params": "error",
    "eslint/no-case-declarations": "error",
    "eslint/no-var": "error",
    "node/no-process-env": "error",
    "import/no-unassigned-import": [
      "error",
      {
        allow: ["**/*.css"],
      },
    ],
    "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
    "typescript/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
        fixStyle: "separate-type-imports",
      },
    ],
    "typescript/no-explicit-any": "error",
    "typescript/ban-ts-comment": "warn",
    "typescript/no-require-imports": "error",
    "typescript/no-unnecessary-type-constraint": "warn",
    "typescript/require-await": "warn",
  },
  options: {
    typeAware: true,
    typeCheck: true,
  },
};

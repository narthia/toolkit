# Oxc configuration

[← Back to the main README](https://github.com/narthia/toolkit/blob/main/README.md)

Shared Oxfmt and Oxlint configuration for JavaScript and TypeScript projects.

## Installation

Install the toolkit with your preferred package manager:

```bash
# npm
npm install @narthia/toolkit

# pnpm
pnpm add @narthia/toolkit

# bun
bun add @narthia/toolkit

# yarn
yarn add @narthia/toolkit
```

> **Note:** To use this configuration, your project must also have `oxfmt`,
> `oxlint`, `oxlint-tsgolint`, and `eslint-plugin-check-file` installed as
> dev dependencies.

## Oxfmt

Create `oxfmt.config.ts` and export the shared formatter configuration:

```ts
import { oxfmtConfig } from "@narthia/toolkit/oxc-config";

export default oxfmtConfig;
```

## Oxlint

Create `oxlint.config.ts` and extend the shared lint configuration:

```ts
import { defineConfig } from "oxlint";
import { oxlintConfig } from "@narthia/toolkit/oxc-config";

export default defineConfig({
  extends: [oxlintConfig],
});
```

## Vite+

If you use Vite+:

Use the shared objects in `vite.config.ts`:

```ts
import { defineConfig } from "vite-plus";
import { oxfmtConfig, oxlintConfig } from "@narthia/toolkit/oxc-config";

export default defineConfig({
  lint: {
    ...oxlintConfig,
  },
  fmt: {
    ...oxfmtConfig,
  },
});
```

Vite+ documentation is available at [viteplus.dev/guide](https://viteplus.dev/guide/).

## Overriding settings

The shared configurations are regular JavaScript objects. Add project-specific
settings after the shared configuration.

Override Oxlint rules in `oxlint.config.ts`:

```ts
import { defineConfig } from "oxlint";
import { oxlintConfig } from "@narthia/toolkit/oxc-config";

export default defineConfig({
  extends: [oxlintConfig],
  rules: {
    "eslint/no-console": "error",
    "typescript/require-await": "off",
    "unicorn/prefer-number-properties": "warn",
  },
});
```

Override Oxfmt settings in `oxfmt.config.ts`:

```ts
import { oxfmtConfig } from "@narthia/toolkit/oxc-config";

export default {
  ...oxfmtConfig,
  singleQuote: true,
  tabWidth: 4,
  sortPackageJson: {
    ...oxfmtConfig.sortPackageJson,
    sortScripts: false,
  },
};
```

For nested settings, spread the shared nested object first when you want to
preserve its other values. The same pattern applies to Vite+:

```ts
import { defineConfig } from "vite-plus";
import { oxfmtConfig, oxlintConfig } from "@narthia/toolkit/oxc-config";

export default defineConfig({
  lint: {
    ...oxlintConfig,
    rules: {
      ...oxlintConfig.rules,
      "eslint/no-console": "error",
    },
  },
  fmt: {
    ...oxfmtConfig,
    singleQuote: true,
  },
});
```

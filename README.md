# @narthia/toolkit

Reusable tooling, configuration, and utilities for JavaScript and TypeScript
projects.

More shared utilities, configurations, and integrations will be added over
time.

## Installation

```bash
bun add @narthia/toolkit
```

## Usage

### Oxc configuration

The shared Oxc configuration can be used directly with Oxfmt and Oxlint, or
through Vite+. Install the toolkit and the tools referenced by the shared
configuration:

```bash
bun add @narthia/toolkit
bun add -D oxfmt oxlint oxlint-tsgolint eslint-plugin-check-file
```

`eslint-plugin-check-file` is required because the shared Oxlint configuration
loads it as a JavaScript plugin.

The `oxc-config` subpath exports the shared Oxfmt and Oxlint configuration
objects:

```ts
import { oxfmtConfig, oxlintConfig } from "@narthia/toolkit/oxc-config";
```

#### Oxfmt and Oxlint

For Oxfmt, export the shared object from your `oxfmt.config.ts`:

```ts
import { oxfmtConfig } from "@narthia/toolkit/oxc-config";

export default oxfmtConfig;
```

For Oxlint, extend the shared object from your `oxlint.config.ts`:

```ts
import { defineConfig } from "oxlint";
import { oxlintConfig } from "@narthia/toolkit/oxc-config";

export default defineConfig({
  extends: [oxlintConfig],
});
```

#### Vite+

If you use Vite+, also install it:

```bash
bun add -D vite-plus
```

Then use the exported objects in your `vite.config.ts`:

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

The exported objects provide Narthia’s shared defaults, plugins, and rules while
remaining available for project-specific extension.

### Toolkit check

The package also exports a small `poke()` helper:

```ts
import { poke } from "@narthia/toolkit";

console.log(poke());
```

`poke()` returns a short toolkit-related message and can be used as a simple
installation or package-resolution check.

## Public exports

| Import                        | Exports                           |
| ----------------------------- | --------------------------------- |
| `@narthia/toolkit`            | `packageName`, `subpaths`, `poke` |
| `@narthia/toolkit/oxc-config` | `oxfmtConfig`, `oxlintConfig`     |

## Development

This project uses [Vite+](https://viteplus.dev/guide/) for package management,
formatting, linting, type checking, and builds. If `vp` is not installed, see
the [Vite+ installation guide](https://viteplus.dev/guide/#install-vp).

Install dependencies:

```bash
vp install
```

Run formatting, linting, and type checks:

```bash
vp check
```

Build the package:

```bash
vp run build
```

Run the test suite, when tests are present:

```bash
vp test
```

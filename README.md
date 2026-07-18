# @narthia/toolkit

Reusable tooling, configuration, and utilities for JavaScript and TypeScript
projects.

More shared utilities, configurations, and integrations will be added over
time.

## Installation

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

## Usage

### Oxc configuration

The Oxc configuration documentation is maintained separately in the
[Oxc configuration README](https://github.com/narthia/toolkit/blob/main/src/oxc-config/README.md).
It covers installation, Oxfmt, Oxlint, Vite+, and project-level overrides.

### Toolkit check

The package exports a small `poke()` helper:

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

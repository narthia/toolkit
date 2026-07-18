# @narthia/toolkit

Shared tooling and configuration for Narthia projects.

## Installation

```bash
bun add -D @narthia/toolkit
```

## Usage

### Oxc configuration

The `oxc-config` subpath exports the shared Oxfmt and Oxlint configuration
objects:

```ts
import { oxfmtConfig, oxlintConfig } from "@narthia/toolkit/oxc-config";
```

Use the configuration that matches the tool in your project’s configuration
file. The exported objects provide Narthia’s shared defaults, plugins, and
rules while remaining available for project-specific extension.

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

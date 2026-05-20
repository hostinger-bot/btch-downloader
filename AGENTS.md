# AGENTS.md — btch-downloader

> Last verified: **May 20, 2026** · Latest stable version: **6.0.32**

This file provides guidance for AI agents (e.g. Codex, GitHub Copilot, autonomous coding agents) working inside the **btch-downloader** repository.

---

## Project Overview

**btch-downloader** is a lightweight TypeScript/JavaScript library that acts as a typed client SDK for downloading videos, images, and audio from social media platforms. It does **not** scrape platforms directly — all platform-specific logic is handled by the backend service at `backend1.tioo.eu.org`.

| Field          | Value                                                    |
|----------------|----------------------------------------------------------|
| npm package    | `btch-downloader`                                        |
| Latest version | `6.0.32` (published ~May 20, 2026)                        |
| Repository     | https://github.com/hostinger-bot/btch-downloader         |
| License        | MIT                                                      |
| Author         | BOTCAHX / @prm2.0                                        |
| Documentation  | https://btch.foo.ng/                                     |
| Backend API    | https://backend1.tioo.eu.org                             |
| Dependents     | 10 packages on npm                                       |

---

## Prerequisites

| Requirement | Minimum Version                                   |
|-------------|---------------------------------------------------|
| Node.js     | **v20.18.1** (enforced via `preinstall` hook)     |
| npm         | 10+                                               |
| yarn        | 4.10.3+                                           |
| pnpm        | 10.18.3+                                          |
| bun         | 1.3.0+                                            |

> The Node.js version is **strictly enforced** at install time by `engine-requirements.js` via the `preinstall` hook in `package.json`.

---

## Installation

```bash
# npm
npm install btch-downloader

# yarn
yarn add btch-downloader

# pnpm
pnpm add btch-downloader

# bun
bun add btch-downloader
```

---

## Supported Platforms (18 functions)

| Platform        | Function       | Input Type   |
|-----------------|----------------|--------------|
| Instagram       | `igdl`         | URL          |
| TikTok          | `ttdl`         | URL          |
| Facebook        | `fbdown`       | URL          |
| Twitter / X     | `twitter`      | URL          |
| YouTube         | `youtube`      | URL          |
| CapCut          | `capcut`       | URL          |
| Pinterest       | `pinterest`    | URL or query |
| Google Drive    | `gdrive`       | URL          |
| MediaFire ⚠️    | `mediafire`    | URL          |
| All-In-One ⚠️    | `aio`    | URL          |
| Douyin          | `douyin`       | URL          |
| Xiaohongshu     | `xiaohongshu`  | URL          |
| SnackVideo      | `snackvideo`   | URL          |
| Cocofun         | `cocofun`      | URL          |
| Spotify         | `spotify`      | URL          |
| SoundCloud      | `soundcloud`   | URL          |
| Threads         | `threads`      | URL          |
| Kuaishou        | `kuaishou`     | URL          |
| YouTube Search  | `yts`          | Text query   |

> ⚠️ **MediaFire** (`mediafire`) is no longer actively maintained.
> 
> ⚠️ **All-In-One** (`aio`) is no longer actively maintained.

---

## Repository Structure

```
btch-downloader/
├── src/                    # TypeScript source files
├── lib/Browser/            # Browser CDN build output (auto-generated, do not edit)
├── docs/                   # JSDoc-generated documentation
├── test/                   # Unit tests
├── scripts/                # Build and utility scripts
├── engine-requirements.js  # Enforces Node.js >= 20.18.1 at install time
├── tsup.config.ts          # Bundler configuration (tsup)
├── tsconfig.json           # TypeScript configuration
├── package.json            # Package manifest with conditional exports
└── README.md
```

---

## Module Export Paths

Three export paths are defined in `package.json`:

| Export Path | Types File                  | Purpose                                  |
|-------------|-----------------------------|------------------------------------------|
| `"."`       | `./dist/index.d.ts`         | All 18 platform download functions       |
| `"./Site"`  | `./dist/Defaults/site.d.ts` | Platform configuration and metadata      |
| `"./Types"` | `./dist/Types/index.d.ts`   | TypeScript response types and parameters |

Both **ESM** and **CJS** are supported via conditional exports.

---

## Response Structure

All functions return `Promise<object>` with the following general shape:

```typescript
{
  status: boolean,    // true = success
  developer: string,  // "@prm2.0"
  data: object        // platform-specific media payload
}
```

Platform-specific types can be imported from:

```typescript
import type { IgdlResponse } from 'btch-downloader/Types';
```

---

## Coding Rules for Agents

- **Language:** All new code must be **TypeScript** (`.ts` files only).
- **Module support:** Both ESM and CJS must work — build with `tsup`.
- **Error handling:** Every function must fail gracefully with a meaningful error message.
- **No heavy dependencies:** Keep the library lightweight.
- **No breaking changes:** Preserve the existing public API surface.
- **Do NOT manually edit** `lib/Browser/` — auto-generated by the build pipeline.
- **Do NOT add scraping logic** — all platform calls are delegated to `backend1.tioo.eu.org`.
- **Node.js compat:** All code must be compatible with Node.js v20.18.1+.

---

## Adding a New Platform

1. Create `src/<platform>.ts` and export `async function <platform>(url: string): Promise<object>`.
2. Re-export the function from `src/index.ts`.
3. Add the response type to `src/Types/`.
4. Write a unit test in `test/<platform>.test.ts`.
5. Update `README.md` with both ESM and CJS usage examples.

---

## Build

```bash
pnpm build
# or
npm run build
```

The bundler is **tsup** (`tsup.config.ts`). It outputs to `dist/` and generates the browser bundle at `dist/browser/index.min.js`.

---

## Testing

```bash
pnpm test
# or
npm test
```

Tests live in `test/`. Each platform should have a dedicated test file.

---

## CDN (Browser)

```html
<!-- Always latest -->
<script src="https://cdn.jsdelivr.net/npm/btch-downloader/dist/browser/index.min.js"></script>

<!-- Pinned to 6.0.32 -->
<script src="https://cdn.jsdelivr.net/npm/btch-downloader@6.0.32/dist/browser/index.min.js"></script>

<!-- unpkg alternative -->
<script src="https://unpkg.com/btch-downloader/dist/browser/index.min.js"></script>
```

In the browser all functions are accessible via `window.btch`.

---

## Important Notes

- This library is **only for publicly accessible content**.
- It is **not affiliated** with any platform.
- Ensure you have **permission or copyright clearance** before downloading any content.

The following libraries are no longer maintained — do not extend them:
- **MediaFire**
- **All-In-One**

**License:** MIT

---

## References

| Resource        | URL                                                        |
|-----------------|------------------------------------------------------------|
| GitHub          | https://github.com/hostinger-bot/btch-downloader           |
| npm             | https://www.npmjs.com/package/btch-downloader              |
| Documentation   | https://btch.foo.ng/                                       |
| API Reference   | https://backend1.tioo.eu.org/docs/api-reference            |
| Live Playground | https://btch.foo.ng/example.html                           |
| DeepWiki        | https://deepwiki.com/hostinger-bot/btch-downloader         |
| Report Issues   | https://github.com/hostinger-bot/btch-downloader/issues    |
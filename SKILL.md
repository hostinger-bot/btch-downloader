---
name: btch-downloader
description: "Use this skill whenever the user wants to download media (videos, images, audio) from social media platforms using the btch-downloader npm library. Triggers include: downloading from Instagram, TikTok, YouTube, Facebook, Twitter/X, Pinterest, Spotify, SoundCloud, Threads, CapCut, Google Drive, MediaFire, Douyin, SnackVideo, Xiaohongshu, Cocofun, or Kuaishou using JavaScript/TypeScript; using the igdl, ttdl, fbdown, youtube, twitter, or aio functions; building a media downloader bot or app in Node.js. Do NOT use for Python-based downloaders or for platforms not listed above."
license: MIT
---

# btch-downloader

## Overview

`btch-downloader` is a lightweight TypeScript/JavaScript library by [@BOTCAHX](https://github.com/hostinger-bot) for fetching downloadable media links from social media platforms. It does **not** directly scrape platforms — all resolution is handled by the backend service at `backend1.tioo.eu.org`. Each function returns a Promise resolving to a JSON object with media URLs and metadata.

- **npm:** `btch-downloader`
- **GitHub:** `hostinger-bot/btch-downloader`
- **Docs:** `http://btch.foo.ng/module-btch-downloader`
- **Live playground:** `https://btch.foo.ng/example.html`

## Prerequisites

| Requirement | Version |
|-------------|---------|
| Node.js | v20+ |
| Package manager | npm, pnpm 10.18.3+, yarn 4.10.3+, or bun 1.3.0+ |

## Installation

```bash
npm install btch-downloader
# or
pnpm add btch-downloader
# or
yarn add btch-downloader
# or
bun add btch-downloader
```

## Quick Reference — All Functions

| Function | Platform | Input |
|----------|----------|-------|
| `igdl` | Instagram | Post/reel URL |
| `ttdl` | TikTok | Video URL |
| `fbdown` | Facebook | Video/watch URL |
| `twitter` | Twitter / X | Tweet URL |
| `youtube` | YouTube | Video URL |
| `mediafire` | MediaFire | File URL |
| `capcut` | CapCut | Template URL |
| `gdrive` | Google Drive | Share URL |
| `pinterest` | Pinterest | Pin URL or search query |
| `douyin` | Douyin (抖音) | Video URL |
| `xiaohongshu` | Xiaohongshu (小红书) | Post URL |
| `snackvideo` | SnackVideo | Video URL |
| `cocofun` | Cocofun | Post URL |
| `spotify` | Spotify | Track URL |
| `yts` | YouTube Search | Search query string |
| `soundcloud` | SoundCloud | Track URL |
| `threads` | Threads | Post URL |
| `aio` | Auto-detect | Any supported URL |

---

## Usage

All functions share the same signature: `fn(url: string): Promise<object>`

### ESM (import)

```ts
import { igdl, ttdl, fbdown, twitter, youtube, aio } from 'btch-downloader';
```

### CJS (require)

```js
const { igdl, ttdl, fbdown, twitter, youtube, aio } = require('btch-downloader');
```

---

### Instagram

```ts
import { igdl } from 'btch-downloader';

const url = 'https://www.instagram.com/p/ByxKbUSnubS/';
const data = await igdl(url);
console.log(data); // JSON with download links
```

### TikTok

```ts
import { ttdl } from 'btch-downloader';

const url = 'https://www.tiktok.com/@omagadsus/video/7025456384175017243';
const data = await ttdl(url);
console.log(data);
```

### Facebook

```ts
import { fbdown } from 'btch-downloader';

const url = 'https://www.facebook.com/watch/?v=1393572814172251';
const data = await fbdown(url);
console.log(data);
```

### Twitter / X

```ts
import { twitter } from 'btch-downloader';

const url = 'https://twitter.com/gofoodindonesia/status/1229369819511709697';
const data = await twitter(url);
console.log(data);
```

### YouTube

```ts
import { youtube } from 'btch-downloader';

const url = 'https://youtube.com/watch?v=C8mJ8943X80';
const data = await youtube(url);
console.log(data);
```

### Pinterest (URL or search query)

```ts
import { pinterest } from 'btch-downloader';

// From a pin URL
const data = await pinterest('https://pin.it/4CVodSq');

// From a search query
const results = await pinterest('Zhao Lusi');
console.log(results);
```

### Google Drive

```ts
import { gdrive } from 'btch-downloader';

const url = 'https://drive.google.com/file/d/1thDYWcS5p5FFhzTpTev7RUv0VFnNQyZ4/view';
const data = await gdrive(url);
console.log(data);
```

### Spotify

```ts
import { spotify } from 'btch-downloader';

const url = 'https://open.spotify.com/track/3zakx7RAwdkUQlOoQ7SJRt';
const data = await spotify(url);
console.log(data);
```

### YouTube Search (yts)

```ts
import { yts } from 'btch-downloader';

const data = await yts('Somewhere Only We Know');
console.log(data);
```

### SoundCloud

```ts
import { soundcloud } from 'btch-downloader';

const url = 'https://soundcloud.com/issabella-marchelina/sisa-rasa-mahalini-official-audio';
const data = await soundcloud(url);
console.log(data);
```

### Threads

```ts
import { threads } from 'btch-downloader';

const url = 'https://www.threads.net/@cindyyuvia/post/C_Nqx3khgkI/';
const data = await threads(url);
console.log(data);
```

### AIO — Auto-detect any platform

Use `aio` when you don't know the platform in advance or want a single universal entry point.

```ts
import { aio } from 'btch-downloader';

const url = 'https://vt.tiktok.com/ZSkGPK9Kj/';
const data = await aio(url);
console.log(data);
```

---

## TypeScript Types

Import types via the `./Types` export path:

```ts
import type { IgdlResult, TtdlResult, YoutubeResult } from 'btch-downloader/Types';
```

---

## Browser / CDN Usage

The library ships a browser bundle. Load it via CDN and access all functions through `window.btch`:

```html
<!-- Latest version -->
<script src="https://cdn.jsdelivr.net/npm/btch-downloader/dist/browser/index.min.js"></script>

<!-- Specific version -->
<script src="https://cdn.jsdelivr.net/npm/btch-downloader@6.0.33/dist/browser/index.min.js"></script>

<script>
  const { igdl, ttdl, aio } = window.btch;

  igdl('https://www.instagram.com/p/ByxKbUSnubS/')
    .then(data => console.log(data))
    .catch(err => console.error(err));
</script>
```

---

## Error Handling

Always wrap calls in try/catch — the library throws on invalid URLs or network failures:

```ts
import { ttdl } from 'btch-downloader';

try {
  const data = await ttdl('https://www.tiktok.com/@user/video/123');
  if (!data) throw new Error('Empty response');
  // use data
} catch (err) {
  console.error('Download failed:', err.message);
}
```

---

## Building a Multi-platform Downloader

A common pattern for bots or apps that accept arbitrary URLs:

```ts
import { igdl, ttdl, fbdown, twitter, youtube, aio } from 'btch-downloader';

type DownloaderFn = (url: string) => Promise<unknown>;

const platformMap: Record<string, DownloaderFn> = {
  'instagram.com': igdl,
  'tiktok.com':    ttdl,
  'facebook.com':  fbdown,
  'twitter.com':   twitter,
  'x.com':         twitter,
  'youtube.com':   youtube,
  'youtu.be':      youtube,
};

async function download(url: string): Promise<unknown> {
  const hostname = new URL(url).hostname.replace('www.', '');
  const fn = platformMap[hostname] ?? aio; // fall back to aio for unknown platforms
  return fn(url);
}

// Usage
const result = await download('https://www.tiktok.com/@user/video/123');
console.log(result);
```

---

## Important Notes

- Only public media can be downloaded. Private content is not accessible.
- This library is not affiliated with or endorsed by any of the supported platforms.
- Always ensure you have the right to download and use the media before doing so.
- `mediafire` support is **no longer maintained**.
- `aio` support is **no longer maintained**.
- The backend (`backend1.tioo.eu.org`) must be reachable; all actual resolution happens there.



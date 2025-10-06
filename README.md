<div align="center">
  <h1><b5>btch-downloader</b5></h1>
  <p>
    <img src="https://img.shields.io/npm/v/btch-downloader.svg?style=flat&color=blue" alt="Version">
    <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License">
    <img src="https://img.shields.io/github/stars/hostinger-bot/btch-downloader?style=social" alt="GitHub Stars">
    <img src="https://img.shields.io/github/issues/hostinger-bot/btch-downloader" alt="Issues">
    <img src="https://img.shields.io/badge/TypeScript-Ready-3178c6.svg?logo=typescript&logoColor=white" alt="TypeScript">
    <img src="https://img.shields.io/npm/dm/btch-downloader.svg?color=orange" alt="Download">
  </p>
</div>
<div align="center">
  <img src="https://github.com/hostinger-bot/btch-downloader/actions/workflows/npm-publish.yml/badge.svg" alt="Node.js Package">
</div>

<div align="center">
<p>A lightweight TypeScript/JavaScript library for downloading videos, images, and audio from Instagram, TikTok, YouTube, Capcut, Pinterest, Twitter, X, Google Drive, MediaFire, Douyin, SnackVideo, Xiaohongshu, Cocofun and Facebook.</p>
</div>

<div align="center">
  <a href="https://www.npmjs.com/package/btch-downloader" title="npm">
    <img src="https://nodei.co/npm/btch-downloader.png?downloads=true&downloadRank=true&stars=true" alt="npm badge">
  </a>
</div>

## Project Prerequisites

To ensure this project runs smoothly, make sure you have the following tools installed.

| Prerequisite       | Version                     |
|-------------------|-----------------------------|
| Node.js           | v20+                       |
| Package Manager   | pnpm 10.18+, Yarn 1.22+, or Bun 1.2+ |

Alternatively, you can include btch-downloader by getting it from [npm](https://www.npmjs.com/package/btch-downloader), downloading it from [GitHub releases](https://github.com/hostinger-bot/btch-downloader/releases) or by including it via [unpkg](https://unpkg.com) or another JavaScript CDN, like jsDelivr.

```html
<!-- unpkg : use the latest version of btch-downloader -->
<script src="https://unpkg.com/btch-downloader/dist/browser/index.min.js"></script>

<!-- unpkg : use a specific version of btch-downloader (change the version numbers as necessary) -->
<script src="https://unpkg.com/btch-downloader@6.0.4/dist/browser/index.min.js"></script>

<!-- jsDelivr : use a specific version of btch-downloader (change the version numbers as necessary) -->
<script src="https://cdn.jsdelivr.net/npm/btch-downloader@6.0.4/dist/browser/index.min.js"></script>
````

---

<details>
<summary style="font-size:1.3em; font-weight:bold; cursor:pointer;">
📘 Click here to see how to implement this downloader using CDN (HTML Example)
  </summary>


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Downloader</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f9f9fb;
      color: #222;
      max-width: 900px;
      margin: 40px auto;
      padding: 25px;
    }
    h1 {
      color: #0078ff;
      text-align: center;
    }
    input {
      width: 80%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 15px;
    }
    button {
      padding: 10px 20px;
      border: none;
      border-radius: 6px;
      background: #0078ff;
      color: white;
      cursor: pointer;
    }
    button:hover {
      background: #005ecc;
    }
    pre {
      text-align: left;
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 6px;
      padding: 10px;
      overflow-x: auto;
      white-space: pre-wrap;
    }
    hr {
      margin: 30px 0;
    }
    ul {
      text-align: left;
      background: #fff;
      border-radius: 6px;
      padding: 15px;
      border: 1px solid #ddd;
    }
    li {
      margin-bottom: 6px;
    }
    a {
      color: #0078ff;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    .info {
      text-align: center;
      margin-top: 10px;
      font-size: 14px;
      color: #555;
    }
  </style>
</head>
<body>
  <h1>Downloader</h1>
  <p align="center">A single-page downloader for all supported platforms.</p>

  <div align="center">
    <input id="urlInput" placeholder="Paste any supported URL here..." />
    <button id="downloadBtn">Fetch</button>
  </div>

  <div class="info">
    Developer: <strong>@prm2.0</strong> — 
    <a href="https://github.com/hostinger-bot/btch-downloader/issues" target="_blank">Report Issues</a>
  </div>

  <h3>Result:</h3>
  <pre id="output">No data yet...</pre>

  <hr>
  <h3>Example URLs</h3>
  <ul>
    <li>Instagram: <a href="https://www.instagram.com/p/ByxKbUSnubS/" target="_blank">https://www.instagram.com/p/ByxKbUSnubS/</a></li>
    <li>TikTok: <a href="https://www.tiktok.com/@omagadsus/video/7025456384175017243" target="_blank">https://www.tiktok.com/@omagadsus/video/7025456384175017243</a></li>
    <li>Facebook: <a href="https://www.facebook.com/watch/?v=1393572814172251" target="_blank">https://www.facebook.com/watch/?v=1393572814172251</a></li>
    <li>Twitter: <a href="https://twitter.com/gofoodindonesia/status/1229369819511709697" target="_blank">https://twitter.com/gofoodindonesia/status/1229369819511709697</a></li>
    <li>YouTube: <a href="https://youtu.be/C8mJ8943X80" target="_blank">https://youtu.be/C8mJ8943X80</a></li>
    <li>MediaFire: <a href="https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk/file" target="_blank">https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk/file</a></li>
    <li>CapCut: <a href="https://www.capcut.com/template-detail/7299286607478181121" target="_blank">https://www.capcut.com/template-detail/7299286607478181121</a></li>
    <li>Google Drive: <a href="https://drive.google.com/file/d/1thDYWcS5p5FFhzTpTev7RUv0VFnNQyZ4/view" target="_blank">https://drive.google.com/file/d/1thDYWcS5p5FFhzTpTev7RUv0VFnNQyZ4/view</a></li>
    <li>Pinterest: <a href="https://pin.it/4CVodSq" target="_blank">https://pin.it/4CVodSq</a></li>
    <li>Douyin: <a href="https://v.douyin.com/ikq8axJ/" target="_blank">https://v.douyin.com/ikq8axJ/</a></li>
    <li>Xiaohongshu: <a href="https://xhslink.com/o/588P0GrGwWf" target="_blank">https://xhslink.com/o/588P0GrGwWf</a></li>
    <li>SnackVideo: <a href="https://s.snackvideo.com/p/j9jKr9dR" target="_blank">https://s.snackvideo.com/p/j9jKr9dR</a></li>
    <li>Cocofun: <a href="https://www.icocofun.com/share/post/379250110809" target="_blank">https://www.icocofun.com/share/post/379250110809</a></li>
  </ul>

  <!-- Load btch CDN -->
  <script src="https://cdn.jsdelivr.net/npm/btch-downloader@6.0.4/dist/browser/index.min.js"></script>

  <script>
    const output = document.getElementById("output");
    const btn = document.getElementById("downloadBtn");
    const input = document.getElementById("urlInput");

    const regexMap = {
      instagram: /instagram\.com\/p\//i,
      tiktok: /tiktok\.com/i,
      facebook: /facebook\.com/i,
      twitter: /(twitter|x)\.com/i,
      youtube: /(youtube\.com|youtu\.be)/i,
      mediafire: /mediafire\.com/i,
      capcut: /capcut\.com/i,
      gdrive: /drive\.google\.com/i,
      pinterest: /(pin\.it|pinterest\.com)/i,
      douyin: /douyin\.com/i,
      xiaohongshu: /(xiaohongshu|xhslink)\.com/i,
      snackvideo: /(snackvideo\.com|s\.snackvideo\.com)/i,
      cocofun: /(icocofun|cocofun)\.com/i,
    };

    const fnMap = {
      instagram: "igdl",
      tiktok: "ttdl",
      facebook: "fbdown",
      twitter: "twitter",
      youtube: "youtube",
      mediafire: "mediafire",
      capcut: "capcut",
      gdrive: "gdrive",
      pinterest: "pinterest",
      douyin: "douyin",
      xiaohongshu: "xiaohongshu",
      snackvideo: "snackvideo",
      cocofun: "cocofun",
      aio: "aio",
    };

    function detectPlatform(url) {
      for (const [name, regex] of Object.entries(regexMap)) {
        if (regex.test(url)) return name;
      }
      return "pinterest";
    }

    btn.addEventListener("click", async () => {
      const url = input.value.trim();
      if (!url) return alert("Please enter a valid URL!");

      output.textContent = "Detecting platform...";

      try {
        const btch = window.btch;
        if (!btch) throw new Error("btch library not loaded.");

        const platform = detectPlatform(url);
        const fnName = fnMap[platform];
        const fn = btch[fnName];

        if (!fn) throw new Error(`Downloader function missing for ${platform}`);

        output.textContent = `Detected: ${platform}\nFetching data...`;

        const res = await fn(url);
        output.textContent = JSON.stringify(res, null, 2);
      } catch (err) {
        output.textContent = "Error: " + (err.message || err);
      }
    });
  </script>
</body>
</html>
```

</details>

### Demo HTML
[Try Demo](https://btch.foo.ng/example.html)

## Installing

### Package manager

Using npm:

```bash
npm install btch-downloader
```

Using yarn:

```bash
yarn add btch-downloader
```

Using pnpm:

```bash
pnpm add btch-downloader
```

Using bun:

```bash
bun add btch-downloader
```

## Services

<div align="center">

| Service       | Link                                               | Status |
|:-------------:|:--------------------------------------------------:|:------:|
| Documentation          | [Visit](http://btch.foo.ng/module-btch-downloader) | ![Online](https://img.shields.io/badge/status-online-brightgreen) |
| Backend       | [Visit](https://backend1.tioo.eu.org/)             | ![Online](https://img.shields.io/badge/status-online-brightgreen) |

</div>

## Usage

### Instagram

#### ESM
```javascript
import { igdl } from 'btch-downloader';

const url = 'https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link';
igdl(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

#### CJS
```javascript
const { igdl } = require('btch-downloader');

const url = 'https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link';
igdl(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

### TikTok

#### ESM
```javascript
import { ttdl } from 'btch-downloader';

const url = 'https://www.tiktok.com/@omagadsus/video/7025456384175017243?is_from_webapp=1&sender_device=pc&web_id6982004129280116226';
ttdl(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

#### CJS
```javascript
const { ttdl } = require('btch-downloader');

const url = 'https://www.tiktok.com/@omagadsus/video/7025456384175017243?is_from_webapp=1&sender_device=pc&web_id6982004129280116226';
ttdl(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

### Facebook

#### ESM
```javascript
import { fbdown } from 'btch-downloader';

const url = 'https://www.facebook.com/watch/?v=1393572814172251';
fbdown(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

#### CJS
```javascript
const { fbdown } = require('btch-downloader');

const url = 'https://www.facebook.com/watch/?v=1393572814172251';
fbdown(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

### Twitter

#### ESM
```javascript
import { twitter } from 'btch-downloader';

const url = 'https://twitter.com/gofoodindonesia/status/1229369819511709697';
twitter(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

#### CJS
```javascript
const { twitter } = require('btch-downloader');

const url = 'https://twitter.com/gofoodindonesia/status/1229369819511709697';
twitter(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

### YouTube

#### ESM
```javascript
import { youtube } from 'btch-downloader';

const url = 'https://youtube.com/watch?v=C8mJ8943X80';
youtube(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

#### CJS
```javascript
const { youtube } = require('btch-downloader');

const url = 'https://youtube.com/watch?v=C8mJ8943X80';
youtube(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

### MediaFire (no longer maintained / 不再维护) 

#### ESM
```javascript
import { mediafire } from 'btch-downloader';

const url = 'https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk/file';
mediafire(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

#### CJS
```javascript
const { mediafire } = require('btch-downloader');

const url = 'https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk/file';
mediafire(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

### Capcut

#### ESM
```javascript
import { capcut } from 'btch-downloader';

const url = 'https://www.capcut.com/template-detail/7299286607478181121?template_id=7299286607478181121&share_token=80302b19-8026-4101-81df-2fd9a9cecb9c&enter_from=template_detail®ion=ID&language=in&platform=copy_link&is_copy_link=1';
capcut(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

#### CJS
```javascript
const { capcut } = require('btch-downloader');

const url = 'https://www.capcut.com/template-detail/7299286607478181121?template_id=7299286607478181121&share_token=80302b19-8026-4101-81df-2fd9a9cecb9c&enter_from=template_detail®ion=ID&language=in&platform=copy_link&is_copy_link=1';
capcut(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

### Google Drive

#### ESM
```javascript
import { gdrive } from 'btch-downloader';

const url = 'https://drive.google.com/file/d/1thDYWcS5p5FFhzTpTev7RUv0VFnNQyZ4/view?usp=drivesdk';
gdrive(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

#### CJS
```javascript
const { gdrive } = require('btch-downloader');

const url = 'https://drive.google.com/file/d/1thDYWcS5p5FFhzTpTev7RUv0VFnNQyZ4/view?usp=drivesdk';
gdrive(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

### Pinterest

#### ESM
```javascript
import { pinterest } from 'btch-downloader';

const url = 'https://pin.it/4CVodSq';
pinterest(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON

// Using a search query
pinterest('Zhao Lusi')
  .then(data => console.log(data))
  .catch(err => console.error(err)); // JSON
```

#### CJS
```javascript
const { pinterest } = require('btch-downloader');

const url = 'https://pin.it/4CVodSq';
pinterest(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON

// Using a search query
pinterest('Zhao Lusi')
  .then(data => console.log(data))
  .catch(err => console.error(err)); // JSON
```

### AIO

#### ESM
```javascript
import { aio } from 'btch-downloader';

const url = 'https://vt.tiktok.com/ZSkGPK9Kj/';
aio(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

#### CJS
```javascript
const { aio } = require('btch-downloader');

const url = 'https://vt.tiktok.com/ZSkGPK9Kj/';
aio(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

### Douyin

#### ESM
```javascript
import { douyin } from 'btch-downloader';

const url = 'https://v.douyin.com/ikq8axJ/';
douyin(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

#### CJS
```javascript
const { douyin } = require('btch-downloader');

const url = 'https://v.douyin.com/ikq8axJ/';
douyin(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```
### Xiaohongshu (小红书)

#### ESM
```javascript
import { xiaohongshu } from 'btch-downloader';

const url = 'https://xhslink.com/o/588P0GrGwWf';
xiaohongshu(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

#### CJS
```javascript
const { xiaohongshu } = require('btch-downloader');

const url = 'https://xhslink.com/o/588P0GrGwWf';
xiaohongshu(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```
### Snackvideo

#### ESM
```javascript
import { snackvideo } from 'btch-downloader';

const url = 'https://s.snackvideo.com/p/j9jKr9dR';
snackvideo(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

#### CJS
```javascript
const { snackvideo } = require('btch-downloader');

const url = 'https://s.snackvideo.com/p/j9jKr9dR';
snackvideo(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

### Cocofun

#### ESM
```javascript
import { cocofun } from 'btch-downloader';

const url = 'https://www.icocofun.com/share/post/379250110809?lang=id&pkg=id&share_to=copy_link&m=81638cf44ba27b2ffa708f3410a4e6c2&d=63cd2733d8d258facd28d44fde5198d4cea826e89af7efc4238ada620140eea3&nt=1';
cocofun(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

#### CJS
```javascript
const { cocofun } = require('btch-downloader');

const url = 'https://www.icocofun.com/share/post/379250110809?lang=id&pkg=id&share_to=copy_link&m=81638cf44ba27b2ffa708f3410a4e6c2&d=63cd2733d8d258facd28d44fde5198d4cea826e89af7efc4238ada620140eea3&nt=1';
cocofun(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

## Important Notes

1. This downloader can only be used to download media that is public or accessible to the public.
2. This application is not affiliated with or endorsed by any application.
3. Ensure you have permission or copyright to download media before using this application.

## Contribution and Issue Reporting

If you encounter any issues or wish to contribute to the development of this application, please visit our [GitHub repository](https://github.com/hostinger-bot/btch-downloader).

## License

btch-downloader is licensed under the [MIT License](https://github.com/hostinger-bot/btch-downloader/blob/main/LICENSE). Please refer to the LICENSE file for more information.


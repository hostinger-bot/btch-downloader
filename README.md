<div align="center">
  <h1><b>btch-downloader</b></h1>
  
  <p>
    <img src="https://img.shields.io/npm/v/btch-downloader.svg?style=flat&color=blue" alt="Version">
    <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License">
    <img src="https://img.shields.io/github/stars/hostinger-bot/btch-downloader?style=social" alt="GitHub Stars">
    <img src="https://img.shields.io/github/forks/hostinger-bot/btch-downloader?style=social&color=green" alt="GitHub Forks">
    <img src="https://img.shields.io/github/watchers/hostinger-bot/btch-downloader?style=social&color=purple" alt="GitHub Watchers">
    <img src="https://img.shields.io/github/contributors/hostinger-bot/btch-downloader?style=flat&color=blue" alt="Contributors">
    <img src="https://img.shields.io/github/issues/hostinger-bot/btch-downloader?style=flat&color=red" alt="Open Issues">
    <img src="https://img.shields.io/github/issues-closed/hostinger-bot/btch-downloader?style=flat&color=orange" alt="Closed Issues">
    <img src="https://img.shields.io/github/issues-pr/hostinger-bot/btch-downloader?style=flat&color=yellow" alt="Open Pull Requests">
    <img src="https://img.shields.io/github/issues-pr-closed/hostinger-bot/btch-downloader?style=flat&color=brightgreen" alt="Closed Pull Requests">
    <img src="https://img.shields.io/badge/TypeScript-Ready-3178c6.svg?logo=typescript&logoColor=white" alt="TypeScript">
    <img src="https://img.shields.io/npm/dm/btch-downloader?color=orange" alt="Downloads">
    <img src="https://data.jsdelivr.com/v1/package/npm/btch-downloader/badge" alt="JSDelivr">
    <img src="https://img.shields.io/badge/unpkg-CDN-blue?style=flat&logo=unpkg" alt="unpkg CDN">
    <img src="https://github.com/hostinger-bot/btch-downloader/actions/workflows/npm-publish.yml/badge.svg" alt="Node.js Package">
    <img src="https://github.com/hostinger-bot/btch-downloader/actions/workflows/codeql.yml/badge.svg" alt="CodeQL Advanced">
  </p>

  <p>
    <a href="https://www.npmjs.com/package/btch-downloader" title="npm">
      <img src="https://nodei.co/npm/btch-downloader.png?downloads=true&downloadRank=true&stars=true&data=d,s&color=blue" alt="npm badge">
    </a>
  </p>
</div>

<div align="center">
  <p>A lightweight TypeScript/JavaScript library for downloading videos, images, and audio from Instagram, TikTok, YouTube, Capcut, Pinterest, Twitter, X, Google Drive, MediaFire, Douyin, SnackVideo, Xiaohongshu, Cocofun, Spotify, Youtube Search, SounCloud, Threads and Facebook.</p>
</div>

## Project Prerequisites

To ensure this project runs smoothly, make sure you have the following tools installed.

| Prerequisite       | Version                     |
|-------------------|-----------------------------|
| Node.js           | v20+                       |
| Package Manager   | pnpm 10.18.3+, Yarn 4.10.3+, or Bun 1.3.0+ |

Alternatively, you can include btch-downloader by getting it from [npm](https://www.npmjs.com/package/btch-downloader), downloading it from [GitHub releases](https://github.com/hostinger-bot/btch-downloader/releases) or by including it via [unpkg](https://unpkg.com) or another JavaScript CDN, like jsDelivr.

```html
<!-- unpkg : use the latest version of btch-downloader -->
<script src="https://unpkg.com/btch-downloader/dist/browser/index.min.js"></script>

<!-- unpkg : use a specific version of btch-downloader (change the version numbers as necessary) -->
<script src="https://unpkg.com/btch-downloader@6.0.25/dist/browser/index.min.js"></script>

<!-- jsDelivr : use the latest version of btch-downloader -->
<script src="https://cdn.jsdelivr.net/npm/btch-downloader/dist/browser/index.min.js"></script>

<!-- jsDelivr : use a specific version of btch-downloader (change the version numbers as necessary) -->
<script src="https://cdn.jsdelivr.net/npm/btch-downloader@6.0.25/dist/browser/index.min.js"></script>
```

---

<details>
<summary style="font-size:1.3em; font-weight:bold; cursor:pointer; color:#0066cc; text-decoration:underline;">
📘 Click here to see how to implement this downloader using CDN (HTML Example)
</summary>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Playground Test CDN btch-downloader</title>
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
      width: 60%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 15px;
    }
    select {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 15px;
      margin-right: 10px;
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
  <h1>Playground</h1>
  <p align="center">A single-page downloader for all supported platforms.</p>

  <div align="center">
    <select id="platformSelect">
      <option value="auto">Auto Detect</option>
      <option value="instagram">Instagram</option>
      <option value="tiktok">TikTok</option>
      <option value="facebook">Facebook</option>
      <option value="twitter">Twitter</option>
      <option value="youtube">YouTube</option>
      <option value="mediafire">MediaFire</option>
      <option value="capcut">CapCut</option>
      <option value="gdrive">Google Drive</option>
      <option value="pinterest">Pinterest</option>
      <option value="douyin">Douyin</option>
      <option value="xiaohongshu">Xiaohongshu</option>
      <option value="snackvideo">SnackVideo</option>
      <option value="cocofun">Cocofun</option>
      <option value="spotify">Spotify</option>
      <option value="yts">YTS</option>
      <option value="soundcloud">SoundCloud</option>
      <option value="threads">Threads</option>
    </select>
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
    <li>Pinterest: <a href="https://pin.it/4CVodSq" target="_blank">https://pin.it/4CVodSq</a> or query (e.g., "Zhao Lusi")</li>
    <li>Douyin: <a href="https://v.douyin.com/ikq8axJ/" target="_blank">https://v.douyin.com/ikq8axJ/</a></li>
    <li>Xiaohongshu: <a href="http://xhslink.com/o/2jqifpr7GJ5" target="_blank">http://xhslink.com/o/2jqifpr7GJ5</a></li>
    <li>SnackVideo: <a href="https://s.snackvideo.com/p/j9jKr9dR" target="_blank">https://s.snackvideo.com/p/j9jKr9dR</a></li>
    <li>Cocofun: <a href="https://www.icocofun.com/share/post/379250110809" target="_blank">https://www.icocofun.com/share/post/379250110809</a></li>
    <li>Spotify: <a href="https://open.spotify.com/track/3zakx7RAwdkUQlOoQ7SJRt" target="_blank">https://open.spotify.com/track/3zakx7RAwdkUQlOoQ7SJRt</a></li>
    <li>SoundCloud: <a href="https://soundcloud.com/issabella-marchelina/sisa-rasa-mahalini-official-audio?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" target="_blank">https://soundcloud.com/issabella-marchelina/sisa-rasa-mahalini-official-audio?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing</a></li>
    <li>Threads: <a href="https://www.threads.net/@cindyyuvia/post/C_Nqx3khgkI/?xmt=AQGzpsCvidh8IwIqOvq4Ov05Zd5raANiVdvCujM_pjBa1Q" target="_blank">https://www.threads.net/@cindyyuvia/post/C_Nqx3khgkI/?xmt=AQGzpsCvidh8IwIqOvq4Ov05Zd5raANiVdvCujM_pjBa1Q</a></li>
    <li>YTS: <a href="#" target="_blank">Enter a YTS query (e.g., "movie title 2023")</a></li>
  </ul>

  <!-- Load btch CDN -->
  <script src="https://cdn.jsdelivr.net/npm/btch-downloader/dist/browser/index.min.js"></script>

  <script>
    const output = document.getElementById("output");
    const btn = document.getElementById("downloadBtn");
    const input = document.getElementById("urlInput");
    const platformSelect = document.getElementById("platformSelect");

    const platformPlaceholders = {
      auto: "Paste any supported URL here...",
      instagram: "Paste Instagram URL (e.g., https://www.instagram.com/p/ByxKbUSnubS/)",
      tiktok: "Paste TikTok URL (e.g., https://www.tiktok.com/@user/video/123)",
      facebook: "Paste Facebook URL (e.g., https://www.facebook.com/watch/?v=123)",
      twitter: "Paste Twitter URL (e.g., https://twitter.com/user/status/123)",
      youtube: "Paste YouTube URL (e.g., https://youtu.be/C8mJ8943X80)",
      mediafire: "Paste MediaFire URL (e.g., https://www.mediafire.com/file/123)",
      capcut: "Paste CapCut URL (e.g., https://www.capcut.com/template-detail/123)",
      gdrive: "Paste Google Drive URL (e.g., https://drive.google.com/file/d/123)",
      pinterest: "Paste Pinterest URL (e.g., https://pin.it/4CVodSq)",
      douyin: "Paste Douyin URL (e.g., https://v.douyin.com/ikq8axJ/)",
      xiaohongshu: "Paste Xiaohongshu URL (e.g., https://xhslink.com/o/123)",
      snackvideo: "Paste SnackVideo URL (e.g., https://s.snackvideo.com/p/123)",
      cocofun: "Paste Cocofun URL (e.g., https://www.icocofun.com/share/post/123)",
      spotify: "Paste Spotify URL (e.g., https://open.spotify.com/track/123)",
      soundcloud: "Paste SoundCloud URL (e.g., https://soundcloud.com/xxxxc)",
      threads: "Paste Threads URL (e.g., https://www.threads.net/@user/post/abc123)",
      yts: "Enter YTS query (e.g., 'movie title 2023')"
    };

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
        spotify: /(open\.spotify|play\.spotify|spotify)\.com/i,
        soundcloud: /(soundcloud)\.com/i,
        threads: /(threads)\.net\/@[\w.-]+\/post\/[\w_-]+/i,
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
      spotify: "spotify",
      soundcloud: "soundcloud",
      threads: "threads",
      yts: "yts",
    };

    function isValidUrl(string) {
      try {
        new URL(string);
        return true;
      } catch (_) {
        return false;
      }
    }

    function detectPlatform(inputValue, selectedPlatform) {
      if (selectedPlatform !== "auto") {
        return selectedPlatform; // Respect explicit platform selection
      }

      if (isValidUrl(inputValue)) {
        // Check for platform-specific URL patterns
        for (const [name, regex] of Object.entries(regexMap)) {
          if (regex.test(inputValue)) {
            return name;
          }
        }
        // Default to Pinterest for unmatched URLs
        return "pinterest";
      } else {
        // Non-URL inputs default to YTS
        return "yts";
      }
    }

    // Update placeholder when platform changes
    platformSelect.addEventListener("change", () => {
      input.placeholder = platformPlaceholders[platformSelect.value];
      input.value = ""; // Clear input on platform change
    });

    btn.addEventListener("click", async () => {
      const inputValue = input.value.trim();
      if (!inputValue) return alert("Please enter a valid URL or YTS query!");

      output.textContent = "Detecting platform...";

      try {
        const btch = window.btch;
        if (!btch) throw new Error("btch library not loaded.");

        const platform = detectPlatform(inputValue, platformSelect.value);
        const fnName = fnMap[platform];
        const fn = btch[fnName];

        if (!fn) throw new Error(`Downloader function missing for ${platform}`);

        output.textContent = `Detected: ${platform}\nFetching data...`;

        const res = await fn(inputValue);
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
| Documentation | [Visit](http://btch.foo.ng/module-btch-downloader) | [![Online](https://img.shields.io/badge/status-online-brightgreen)](http://btch.foo.ng/module-btch-downloader) |
| Backend       | [Visit](https://backend1.tioo.eu.org/)             | [![Online](https://img.shields.io/badge/status-online-brightgreen)](https://backend1.tioo.eu.org/) |
| API Reference | [Visit](https://backend1.tioo.eu.org/docs/api-reference) | [![Online](https://img.shields.io/badge/status-online-brightgreen)](https://backend1.tioo.eu.org/docs/api-reference) |

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

### Douyin (抖音)

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

const url = 'http://xhslink.com/o/2jqifpr7GJ5';
xiaohongshu(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

#### CJS
```javascript
const { xiaohongshu } = require('btch-downloader');

const url = 'http://xhslink.com/o/2jqifpr7GJ5';
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

### Spotify

#### ESM
```javascript
import { spotify } from 'btch-downloader';

const url = 'https://open.spotify.com/track/3zakx7RAwdkUQlOoQ7SJRt';
spotify(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

#### CJS
```javascript
const { spotify } = require('btch-downloader');

const url = 'https://open.spotify.com/track/3zakx7RAwdkUQlOoQ7SJRt';
spotify(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

### YT Search

#### ESM
```javascript
import { yts } from 'btch-downloader';

const query = 'Somewhere Only We Know';
yts(query).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

#### CJS
```javascript
const { yts } = require('btch-downloader');

const query = 'Somewhere Only We Know';
yts(query).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

### SoundCloud

#### ESM
```javascript
import { soundcloud } from 'btch-downloader';

const url = 'https://soundcloud.com/issabella-marchelina/sisa-rasa-mahalini-official-audio?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing';
soundcloud(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

#### CJS
```javascript
const { soundcloud } = require('btch-downloader');

const url = 'https://soundcloud.com/issabella-marchelina/sisa-rasa-mahalini-official-audio?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing';
soundcloud(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

### Threads

#### ESM
```javascript
import { threads } from 'btch-downloader';

const url = 'https://www.threads.net/@cindyyuvia/post/C_Nqx3khgkI/?xmt=AQGzpsCvidh8IwIqOvq4Ov05Zd5raANiVdvCujM_pjBa1Q';
threads(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

#### CJS
```javascript
const { threads } = require('btch-downloader');

const url = 'https://www.threads.net/@cindyyuvia/post/C_Nqx3khgkI/?xmt=AQGzpsCvidh8IwIqOvq4Ov05Zd5raANiVdvCujM_pjBa1Q';
threads(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

## Important Notes

1. This downloader can only be used to download media that is public or accessible to the public.
2. This application is not affiliated with or endorsed by any application.
3. Ensure you have permission or copyright to download media before using this application.

## Contribution and Issue Reporting

If you encounter any issues or wish to contribute to the development of this application, please visit our [GitHub repository](https://github.com/hostinger-bot/btch-downloader).

## License

btch-downloader is licensed under the [MIT License](https://github.com/hostinger-bot/btch-downloader/blob/main/LICENSE). Please refer to the LICENSE file for more information.


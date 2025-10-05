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


> [!IMPORTANT]
> **Prerequisites**  
> To ensure this project runs smoothly, please make sure you have the following tools installed:
> 
> - **Node.js v20 or higher** — required to run the application.  
> - A package manager of your choice:
>   - **pnpm v10.18.0 or later**  
>   - **Yarn v1.22.22 or later**  
>   - **Bun v1.2.23 or later**
> 
> Before proceeding, verify that these tools are properly installed and configured on your system.


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


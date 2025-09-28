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
<p>A lightweight TypeScript/JavaScript library for downloading videos, images, and audio from Instagram, TikTok, YouTube, Capcut, Pinterest, Twitter, X, Google Drive, MediaFire, Douyin, SnackVideo, Xiaohongshu and Facebook.</p>
</div>

<div align="center">
  <a href="https://www.npmjs.com/package/btch-downloader" title="npm">
    <img src="https://nodei.co/npm/btch-downloader.png?downloads=true&downloadRank=true&stars=true" alt="npm badge">
  </a>
</div>


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

## Usage
#### For complete documentation, visit [http://btch.foo.ng](http://btch.foo.ng/module-btch-downloader).



<details>
  <summary>Instagram</summary>

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
</details>

<details>
  <summary>TikTok</summary>

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
</details>

<details>
  <summary>Facebook</summary>

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
</details>

<details>
  <summary>Twitter</summary>

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
</details>

<details>
  <summary>YouTube</summary>

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
</details>

<details>
  <summary>MediaFire (no longer maintained / 不再维护)</summary>

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
</details>

<details>
  <summary>Capcut</summary>

  #### ESM
  ```javascript
  import { capcut } from 'btch-downloader';

  const url = 'https://www.capcut.com/template-detail/7299286607478181121?template_id=7299286607478181121&share_token=80302b19-8026-4101-81df-2fd9a9cecb9c&enter_from=template_detail&region=ID&language=in&platform=copy_link&is_copy_link=1';
  capcut(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
  ```

  #### CJS
  ```javascript
  const { capcut } = require('btch-downloader');

  const url = 'https://www.capcut.com/template-detail/7299286607478181121?template_id=7299286607478181121&share_token=80302b19-8026-4101-81df-2fd9a9cecb9c&enter_from=template_detail&region=ID&language=in&platform=copy_link&is_copy_link=1';
  capcut(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
  ```
</details>

<details>
  <summary>Google Drive</summary>

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
</details>

<details>
  <summary>Pinterest</summary>

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
</details>

<details>
  <summary>AIO</summary>

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
</details>

<details>
  <summary>Douyin</summary>

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
</details>

<details>
  <summary>Snackvideo</summary>

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
</details>

<details>
  <summary>Xiaohongshu (小红书)</summary>

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
</details>



## Important Notes

1. This downloader can only be used to download media that is public or accessible to the public.
2. This application is not affiliated with or endorsed by any application.
3. Ensure you have permission or copyright to download media before using this application.

## Contribution and Issue Reporting

If you encounter any issues or wish to contribute to the development of this application, please visit our [GitHub repository](https://github.com/hostinger-bot/btch-downloader).

## License

btch-downloader is licensed under the [MIT License](https://github.com/hostinger-bot/btch-downloader/blob/main/LICENSE). Please refer to the LICENSE file for more information.


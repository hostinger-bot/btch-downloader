# btch-downloader

A Node.js library for downloading media from platforms like Instagram, TikTok, Facebook, Twitter, YouTube, MediaFire, Capcut, Google Drive, and Pinterest.

<div align="center">
  <a href="https://www.npmjs.com/package/btch-downloader" title="npm">
    <img src="https://nodei.co/npm/btch-downloader.png?downloads=true&downloadRank=true&stars=true" alt="npm badge">
  </a>
</div>



## Installation

Install the library using npm:

```sh
npm i btch-downloader
```

### Python Installation

Install the Python version using pip:

```bash
pip install btch-downloader
```

### For setup details, refer to the [Official Python Documentation](https://github.com/hostinger-bot/btch-downloader-py/tree/main#usage).

## Usage

For complete documentation, visit [JSDoc](https://hostinger-bot.github.io/btch-downloader/).

### AIO (Under Maintenance)

#### ESM
```javascript
import { aio } from 'btch-downloader';

const url = 'https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link';
aio(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

#### CJS
```javascript
const { aio } = require('btch-downloader');

const url = 'https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link';
aio(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
```

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

### MediaFire (Under maintenance)

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

## Important Notes

1. This downloader can only be used to download media that is public or accessible to the public.
2. This application is not affiliated with or endorsed by any application.
3. Ensure you have permission or copyright to download media before using this application.

## Contribution and Issue Reporting

If you encounter any issues or wish to contribute to the development of this application, please visit our [GitHub repository](https://github.com/hostinger-bot/btch-downloader).

## License

btch-downloader is licensed under the [MIT License](https://github.com/hostinger-bot/btch-downloader/blob/main/LICENSE). Please refer to the LICENSE file for more information.


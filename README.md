___

### Installation
```sh
npm i btch-downloader
```
#### Usage

### AIO
```ts
const { aio } = require('btch-downloader')

const url = 'https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link'
const data = await aio(url)
console.log(data) // JSON
```
### Instagram
```ts
const { igdl } = require('btch-downloader')

const url = 'https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link'
const data = await igdl(url)
console.log(data) // JSON
```
### Tiktok
```ts
const { ttdl } = require('btch-downloader')

const url = 'https://www.tiktok.com/@omagadsus/video/7025456384175017243?is_from_webapp=1&sender_device=pc&web_id6982004129280116226'
// Using tiktokdl
const data = await ttdl(url)
console.log(data) // JSON
```
### Facebook
```ts
const { fbdown } = require('btch-downloader')

const url = 'https://www.facebook.com/watch/?v=1393572814172251'
const data = await fbdown(url)
console.log(data) // JSON
```
### Twitter
```ts
const { twitter } = require('btch-downloader')

const url = 'https://twitter.com/gofoodindonesia/status/1229369819511709697'
const data = await twitter(url)
console.log(data) // JSON
```
### YouTube
```ts
const { youtube } = require('btch-downloader')

const url = 'https://youtube.com/watch?v=C8mJ8943X80'
const data = await youtube(url)
console.log(data) // JSON
```
### Important Notes

1. This downloader can only be used to download media that is public or accessible to the public.
2. This application is not affiliated with or endorsed by any application.
3. Ensure you have permission or copyright to download media before using this application.

### Contribution and Issue Reporting

If you encounter any issues or wish to contribute to the development of this application, please visit our [GitHub repository](https://github.com/BOTCAHX).

### License

btch-downloader is licensed under the [MIT License](https://opensource.org/licenses/MIT). Please refer to the LICENSE file for more information.
___
/**
 * @module btch-downloader
 * @description A lightweight TypeScript/JavaScript library for downloading media from social media platforms
 * @see {@link https://github.com/hostinger-bot/btch-downloader|GitHub Repository} for contributions and issue reporting.
 * @version 5.0.14
 * @author Tio
 * @license MIT
 */

/**
 * Downloads media from a given URL across supported platforms.
 * @async
 * @function aio
 * @param {string} url - The URL of the media to download (e.g., Instagram, TikTok, etc.).
 * @returns {Promise<Object>} A JSON object containing the media data.
 * @throws {Error} If the URL is invalid or the media is not accessible.
 * @example <caption>ESM</caption>
 * import { aio } from 'btch-downloader';
 * aio('https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link')
 *   .then(data => console.log(data))
 *   .catch(err => console.error(err));
 * // JSON
 * @example <caption>CJS</caption>
 * const { aio } = require('btch-downloader');
 * aio('https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link')
 *   .then(data => console.log(data))
 *   .catch(err => console.error(err));
 * // JSON
 */

/**
 * Downloads media from Instagram.
 * @async
 * @function igdl
 * @param {string} url - The Instagram media URL.
 * @returns {Promise<Array<Object>|Object>} An array of JSON objects or an error object.
 * @throws {Error} If the URL is invalid or the media is not accessible.
 * @example <caption>ESM</caption>
 * import { igdl } from 'btch-downloader';
 * igdl('https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link')
 *   .then(data => console.log(data))
 *   .catch(err => console.error(err));
 * // JSON
 * @example <caption>CJS</caption>
 * const { igdl } = require('btch-downloader');
 * igdl('https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link')
 *   .then(data => console.log(data))
 *   .catch(err => console.error(err));
 * // JSON
 */

/**
 * Downloads media from TikTok.
 * @async
 * @function ttdl
 * @param {string} url - The TikTok media URL.
 * @returns {Promise<Object>} A JSON object containing the media data.
 * @throws {Error} If the URL is invalid or the media is not accessible.
 * @example <caption>ESM</caption>
 * import { ttdl } from 'btch-downloader';
 * ttdl('https://www.tiktok.com/@omagadsus/video/7025456384175017243')
 *   .then(data => console.log(data))
 *   .catch(err => console.error(err));
 * // JSON
 * @example <caption>CJS</caption>
 * const { ttdl } = require('btch-downloader');
 * ttdl('https://www.tiktok.com/@omagadsus/video/7025456384175017243')
 *   .then(data => console.log(data))
 *   .catch(err => console.error(err));
 * // JSON
 */

/**
 * Downloads media from Facebook.
 * @async
 * @function fbdown
 * @param {string} url - The Facebook media URL.
 * @returns {Promise<Object>} A JSON object containing the media data.
 * @throws {Error} If the URL is invalid or the media is not accessible.
 * @example <caption>ESM</caption>
 * import { fbdown } from 'btch-downloader';
 * fbdown('https://www.facebook.com/watch/?v=1393572814172251')
 *   .then(data => console.log(data))
 *   .catch(err => console.error(err));
 * // JSON
 * @example <caption>CJS</caption>
 * const { fbdown } = require('btch-downloader');
 * fbdown('https://www.facebook.com/watch/?v=1393572814172251')
 *   .then(data => console.log(data))
 *   .catch(err => console.error(err));
 * // JSON
 */

/**
 * Downloads media from Twitter.
 * @async
 * @function twitter
 * @param {string} url - The Twitter media URL.
 * @returns {Promise<Object>} A JSON object containing the media data.
 * @throws {Error} If the URL is invalid or the media is not accessible.
 * @example <caption>ESM</caption>
 * import { twitter } from 'btch-downloader';
 * twitter('https://twitter.com/gofoodindonesia/status/1229369819511709697')
 *   .then(data => console.log(data))
 *   .catch(err => console.error(err));
 * // JSON
 * @example <caption>CJS</caption>
 * const { twitter } = require('btch-downloader');
 * twitter('https://twitter.com/gofoodindonesia/status/1229369819511709697')
 *   .then(data => console.log(data))
 *   .catch(err => console.error(err));
 * // JSON
 */

/**
 * Downloads media from YouTube.
 * @async
 * @function youtube
 * @param {string} url - The YouTube media URL.
 * @returns {Promise<Object>} A JSON object containing the media data.
 * @throws {Error} If the URL is invalid or the media is not accessible.
 * @example <caption>ESM</caption>
 * import { youtube } from 'btch-downloader';
 * youtube('https://youtube.com/watch?v=C8mJ8943X80')
 *   .then(data => console.log(data))
 *   .catch(err => console.error(err));
 * // JSON
 * @example <caption>CJS</caption>
 * const { youtube } = require('btch-downloader');
 * youtube('https://youtube.com/watch?v=C8mJ8943X80')
 *   .then(data => console.log(data))
 *   .catch(err => console.error(err));
 * // JSON
 */

/**
 * Downloads media from MediaFire.
 * @async
 * @function mediafire
 * @param {string} url - The MediaFire media URL.
 * @returns {Promise<Object>} A JSON object containing the media data.
 * @throws {Error} If the URL is invalid or the media is not accessible.
 * @example <caption>ESM</caption>
 * import { mediafire } from 'btch-downloader';
 * mediafire('https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk/file')
 *   .then(data => console.log(data))
 *   .catch(err => console.error(err));
 * // JSON
 * @example <caption>CJS</caption>
 * const { mediafire } = require('btch-downloader');
 * mediafire('https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk/file')
 *   .then(data => console.log(data))
 *   .catch(err => console.error(err));
 * // JSON
 */

/**
 * Downloads media from Capcut.
 * @async
 * @function capcut
 * @param {string} url - The Capcut media URL.
 * @returns {Promise<Object>} A JSON object containing the media data.
 * @throws {Error} If the URL is invalid or the media is not accessible.
 * @example <caption>ESM</caption>
 * import { capcut } from 'btch-downloader';
 * capcut('https://www.capcut.com/template-detail/7299286607478181121?template_id=7299286607478181121&share_token=80302b19-8026-4101-81df-2fd9a9cecb9c&enter_from=template_detail®ion=ID&language=in&platform=copy_link&is_copy_link=1')
 *   .then(data => console.log(data))
 *   .catch(err => console.error(err));
 * // JSON
 * @example <caption>CJS</caption>
 * const { capcut } = require('btch-downloader');
 * capcut('https://www.capcut.com/template-detail/7299286607478181121?template_id=7299286607478181121&share_token=80302b19-8026-4101-81df-2fd9a9cecb9c&enter_from=template_detail®ion=ID&language=in&platform=copy_link&is_copy_link=1')
 *   .then(data => console.log(data))
 *   .catch(err => console.error(err));
 * // JSON
 */

/**
 * Downloads media from Google Drive.
 * @async
 * @function gdrive
 * @param {string} url - The Google Drive media URL.
 * @returns {Promise<Object>} A JSON object containing the media data.
 * @throws {Error} If the URL is invalid or the media is not accessible.
 * @example <caption>ESM</caption>
 * import { gdrive } from 'btch-downloader';
 * gdrive('https://drive.google.com/file/d/1thDYWcS5p5FFhzTpTev7RUv0VFnNQyZ4/view?usp=drivesdk')
 *   .then(data => console.log(data))
 *   .catch(err => console.error(err));
 * // JSON
 * @example <caption>CJS</caption>
 * const { gdrive } = require('btch-downloader');
 * gdrive('https://drive.google.com/file/d/1thDYWcS5p5FFhzTpTev7RUv0VFnNQyZ4/view?usp=drivesdk')
 *   .then(data => console.log(data))
 *   .catch(err => console.error(err));
 * // JSON
 */

/**
 * Downloads or searches media from Pinterest using a URL or text query.
 * @async
 * @function pinterest
 * @param {string} input - The Pinterest media URL or a search query.
 * @returns {Promise<Object>} A JSON object containing the media data.
 * @throws {Error} If the input is invalid or the media is not accessible.
 * @example <caption>ESM</caption>
 * import { pinterest } from 'btch-downloader';
 * // Using a URL
 * pinterest('https://pin.it/4CVodSq')
 *   .then(data => console.log(data))
 *   .catch(err => console.error(err));
 * @example
 * // Using a search query
 * pinterest('Zhao Lusi')
 *   .then(data => console.log(data))
 *   .catch(err => console.error(err));
 * @example <caption>CJS</caption>
 * const { pinterest } = require('btch-downloader');
 * // Using a URL
 * pinterest('https://pin.it/4CVodSq')
 *   .then(data => console.log(data))
 *   .catch(err => console.error(err));
 * @example
 * // Using a search query
 * pinterest('Zhao Lusi')
 *   .then(data => console.log(data))
 *   .catch(err => console.error(err));
 */

/**
 * Downloads media from Douyin.
 * @async
 * @function douyin
 * @param {string} url - The Douyin media URL.
 * @returns {Promise<Object>} A JSON object containing the media data.
 * @throws {Error} If the URL is invalid or the media is not accessible.
 * @example <caption>ESM</caption>
 * import { douyin } from 'btch-downloader';
 * const url = 'https://v.douyin.com/ikq8axJ/';
 * douyin(url).then(data => console.log(data)).catch(err => console.error(err));
 * // JSON
 * @example <caption>CJS</caption>
 * const { douyin } = require('btch-downloader');
 * const url = 'https://v.douyin.com/ikq8axJ/';
 * douyin(url).then(data => console.log(data)).catch(err => console.error(err));
 * // JSON
 */

/**
 * Downloads media from Xiaohongshu.
 * @async
 * @function xiaohongshu
 * @param {string} url - The Xiaohongshu media URL.
 * @returns {Promise<Object>} A JSON object containing the media data.
 * @throws {Error} If the URL is invalid or the media is not accessible.
 * @example <caption>ESM</caption>
 * import { xiaohongshu } from 'btch-downloader';
 * const url = 'https://xhslink.com/o/588P0GrGwWf';
 * xiaohongshu(url).then(data => console.log(data)).catch(err => console.error(err));
 * // JSON
 * @example <caption>CJS</caption>
 * const { xiaohongshu } = require('btch-downloader');
 * const url = 'https://xhslink.com/o/588P0GrGwWf';
 * xiaohongshu(url).then(data => console.log(data)).catch(err => console.error(err));
 * // JSON
 */

/**
 * Downloads media from Cocofun.
 * @async
 * @function cocofun
 * @param {string} url - The Cocofun post URL.
 * @returns {Promise<Promise<Object>>} A JSON object containing the media data.
 * @throws {Error} If the URL is invalid or the media is not accessible.
 * @example <caption>ESM</caption>
 * import { cocofun } from 'btch-downloader';
 * const url = 'https://www.icocofun.com/share/post/379250110809?lang=id&pkg=id&share_to=copy_link&m=81638cf44ba27b2ffa708f3410a4e6c2&d=63cd2733d8d258facd28d44fde5198d4cea826e89af7efc4238ada620140eea3&nt=1';
 * cocofun(url).then(data => console.log(data)).catch(err => console.error(err));
 * // JSON
 * @example <caption>CJS</caption>
 * const { cocofun } = require('btch-downloader');
 * const url = 'https://www.icocofun.com/share/post/379250110809?lang=id&pkg=id&share_to=copy_link&m=81638cf44ba27b2ffa708f3410a4e6c2&d=63cd2733d8d258facd28d44fde5198d4cea826e89af7efc4238ada620140eea3&nt=1';
 * cocofun(url).then(data => console.log(data)).catch(err => console.error(err));
 * // JSON
 */

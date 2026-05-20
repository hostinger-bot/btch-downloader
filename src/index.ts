"use strict";

import configData from './Defaults/site';
import watermark from './Watermark/config';
import pkg from '../package.json';
import { HttpGet } from "btch-http";
import type {
    ApiErrorResponse,
    TikTokApiResponse,
    TikTokResponse,
    InstagramApiItem,
    InstagramResponse,
    TwitterApiResponse,
    TwitterResponse,
    YouTubeApiResponse,
    YouTubeResponse,
    FacebookApiResponse,
    FacebookResponse,
    MediaFireApiResponse,
    MediaFireResponse,
    CapCutApiResponse,
    CapCutResponse,
    GoogleDriveApiResponse,
    GoogleDriveResponse,
    PinterestApiResponse,
    PinterestResponse,
    AioApiResponse,
    AioResponse,
    XiaohongshuApiResponse,
    XiaohongshuResponse,
    DouyinApiResponse,
    DouyinResponse,
    SnackVideoApiResponse,
    SnackVideoResponse,
    CocofunApiResponse,
    CocofunResponse,
    SpotifyApiRaw,
    SpotifyResponse,
    YtsApiResponse,
    YtsResponse,
    SoundCloudApiResponse,
    SoundCloudResponse,
    ThreadsApiResponse,
    ThreadsResponse,
    KuaishouApiResponse,
    KuaishouResponse,
    VersionConfig,
} from './Types';

const { config, issues } = configData as VersionConfig;
const wm = watermark.dev;
const timeout = 60000;
const version: string = pkg.version;

// Generic error response formatter
const formatErrorResponse = (error: unknown): ApiErrorResponse => ({
    developer: wm,
    status: false,
    message: error instanceof Error ? error.message : 'Unknown error',
    note: `Please report issues to ${issues}`
});

/**
 * TikTok video downloader
 * @async
 * @function ttdl
 * @param {string} url - The TikTok video URL (e.g., https://www.tiktok.com/@user/video/123)
 * @returns {Promise<TikTokResponse>} A JSON object containing video info, thumbnails, and download links.
 * @throws {Error} If the URL is invalid or the request fails.
 * @example <caption>ESM</caption>
 * import { ttdl } from 'btch-downloader';
 *
 * const url = 'https://www.tiktok.com/@omagadsus/video/7025456384175017243';
 * ttdl(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 * @example <caption>CJS</caption>
 * const { ttdl } = require('btch-downloader');
 *
 * const url = 'https://www.tiktok.com/@omagadsus/video/7025456384175017243';
 * ttdl(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 */
async function ttdl(url: string): Promise<TikTokResponse> {
    try {
        const data = await HttpGet<TikTokApiResponse>('ttdl', url, version, timeout, config.baseUrl);
        return {
            developer: wm,
            status: true,
            title: data?.title ?? undefined,
            title_audio: data?.title_audio ?? undefined,
            thumbnail: data?.thumbnail ?? undefined,
            video: data?.video ?? [],
            audio: data?.audio ?? []
        };
    } catch (error) {
        return { ...formatErrorResponse(error), status: false };
    }
}

/**
 * Instagram content downloader (Reels, Posts, TV, Stories)
 * @async
 * @function igdl
 * @param {string} url - The Instagram media URL (e.g., https://www.instagram.com/reel/abc/)
 * @returns {Promise<InstagramResponse>} A JSON object containing an array of media items (links and thumbnails).
 * @throws {Error} If the URL is invalid or the media is not accessible.
 * @example <caption>ESM</caption>
 * import { igdl } from 'btch-downloader';
 *
 * const url = 'https://www.instagram.com/reel/DKPtUL_S9Nh/?igsh=MTE1dTVkb2E4NTFmcw==';
 * igdl(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 * @example <caption>CJS</caption>
 * const { igdl } = require('btch-downloader');
 *
 * const url = 'https://www.instagram.com/reel/DKPtUL_S9Nh/?igsh=MTE1dTVkb2E4NTFmcw==';
 * igdl(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 */

async function igdl(url: string): Promise<InstagramResponse> {
    try {
        const data = await HttpGet<InstagramApiItem[]>('igdl', url, version, timeout, config.baseUrl);

        if (!data || data.length === 0) {
            return {
                ...formatErrorResponse(new Error('No results found')),
                status: false
            };
        }
        const result: InstagramResponse['result'] = [];
        for (const item of data) {
            result.push({
                thumbnail: item?.thumbnail || '',
                url: item?.url || ''
            });
        }

        return {
            developer: wm,
            status: true,
            result
        };

    } catch (error) {
        return { ...formatErrorResponse(error), status: false };
    }
}

/**
 * Twitter (X) video downloader
 * @async
 * @function twitter
 * @param {string} url - The Twitter/X video URL (e.g., https://twitter.com/user/status/123)
 * @returns {Promise<TwitterResponse>} A JSON object containing the video title and download link.
 * @throws {Error} If the URL is invalid or the media is not accessible.
 * @example <caption>ESM</caption>
 * import { twitter } from 'btch-downloader';
 *
 * const url = 'https://twitter.com/gofoodindonesia/status/1229369819511709697';
 * twitter(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 * @example <caption>CJS</caption>
 * const { twitter } = require('btch-downloader');
 *
 * const url = 'https://twitter.com/gofoodindonesia/status/1229369819511709697';
 * twitter(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 */
async function twitter(url: string): Promise<TwitterResponse> {
    try {
        const data = await HttpGet<TwitterApiResponse>('twitter', url, version, timeout, config.baseUrl);
        return {
            developer: wm,
            status: true,
            title: data?.title,
            url: data?.url
        };
    } catch (error) {
        return { ...formatErrorResponse(error), status: false };
    }
}

/**
 * YouTube video and audio downloader
 * @async
 * @function youtube
 * @param {string} url - The YouTube video URL (e.g., https://youtu.be/abc)
 * @returns {Promise<YouTubeResponse>} A JSON object containing video/audio download links, title, and thumbnail.
 * @throws {Error} If the URL is invalid or the request fails.
 * @example <caption>ESM</caption>
 * import { youtube } from 'btch-downloader';
 *
 * const url = 'https://youtube.com/watch?v=C8mJ8943X80';
 * youtube(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 * @example <caption>CJS</caption>
 * const { youtube } = require('btch-downloader');
 *
 * const url = 'https://youtube.com/watch?v=C8mJ8943X80';
 * youtube(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 */
async function youtube(url: string): Promise<YouTubeResponse> {
    try {
        const data = await HttpGet<YouTubeApiResponse>('youtube', url, version, timeout, config.baseUrl);
        return {
            developer: wm,
            status: true,
            title: data?.title,
            thumbnail: data?.thumbnail,
            author: data?.author,
            mp3: data?.mp3,
            mp4: data?.mp4
        };
    } catch (error) {
        return { ...formatErrorResponse(error), status: false };
    }
}

/**
 * Facebook video downloader
 * @async
 * @function fbdown
 * @param {string} url - The Facebook video URL (e.g., https://www.facebook.com/watch/?v=123)
 * @returns {Promise<FacebookResponse>} A JSON object containing Normal and HD quality download links.
 * @throws {Error} If the URL is invalid or the media is not accessible.
 * @example <caption>ESM</caption>
 * import { fbdown } from 'btch-downloader';
 *
 * const url = 'https://www.facebook.com/watch/?v=1393572814172251';
 * fbdown(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 * @example <caption>CJS</caption>
 * const { fbdown } = require('btch-downloader');
 *
 * const url = 'https://www.facebook.com/watch/?v=1393572814172251';
 * fbdown(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 */
async function fbdown(url: string): Promise<FacebookResponse> {
    try {
        const data = await HttpGet<FacebookApiResponse>('fbdown', url, version, timeout, config.baseUrl);
        return {
            developer: wm,
            status: true,
            Normal_video: data?.Normal_video,
            HD: data?.HD
        };
    } catch (error) {
        return { ...formatErrorResponse(error), status: false };
    }
}

/**
 * MediaFire file downloader
 * @async
 * @function mediafire
 * @param {string} url - The MediaFire file URL
 * @returns {Promise<MediaFireResponse>} A JSON object containing file metadata and download link.
 * @throws {Error} If the URL is invalid or the request fails.
 * @deprecated MediaFire support is no longer actively maintained.
 * @example <caption>ESM</caption>
 * import { mediafire } from 'btch-downloader';
 *
 * const url = 'https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk/file';
 * mediafire(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 * @example <caption>CJS</caption>
 * const { mediafire } = require('btch-downloader');
 *
 * const url = 'https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk/file';
 * mediafire(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 */
async function mediafire(url: string): Promise<MediaFireResponse> {
    console.warn('[btch-downloader] mediafire() is deprecated and no longer actively maintained.');
    try {
        const data = await HttpGet<MediaFireApiResponse>('mediafire', url, version, timeout, config.baseUrl);
        return {
            developer: wm,
            status: true,
            result: data
        };
    } catch (error) {
        return { ...formatErrorResponse(error), status: false };
    }
}

/**
 * CapCut template downloader
 * @async
 * @function capcut
 * @param {string} url - The CapCut template URL (e.g., https://www.capcut.com/template-detail/123)
 * @returns {Promise<CapCutResponse>} A JSON object containing template video links and metadata.
 * @throws {Error} If the URL is invalid or the request fails.
 * @example <caption>ESM</caption>
 * import { capcut } from 'btch-downloader';
 *
 * const url = 'https://www.capcut.com/template-detail/7299286607478181121';
 * capcut(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 * @example <caption>CJS</caption>
 * const { capcut } = require('btch-downloader');
 *
 * const url = 'https://www.capcut.com/template-detail/7299286607478181121';
 * capcut(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 */
async function capcut(url: string): Promise<CapCutResponse> {
    try {
        const data = await HttpGet<CapCutApiResponse>('capcut', url, version, timeout, config.baseUrl);
        return {
            developer: wm,
            status: true,
            ...data
        };
    } catch (error) {
        return { ...formatErrorResponse(error), status: false };
    }
}

/**
 * All-In-One (AIO) downloader for various social platforms.
 * @async
 * @function aio
 * @param {string} url - The media URL to download.
 * @returns {Promise<AioResponse>} A JSON object containing media info.
 * @throws {Error} If the URL is invalid or the request fails.
 * @deprecated All-In-One support is no longer actively maintained.
 * @example <caption>ESM</caption>
 * import { aio } from 'btch-downloader';
 *
 * const url = 'https://vt.tiktok.com/ZSkGPK9Kj/';
 * aio(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 * @example <caption>CJS</caption>
 * const { aio } = require('btch-downloader');
 *
 * const url = 'https://vt.tiktok.com/ZSkGPK9Kj/';
 * aio(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 */
async function aio(url: string): Promise<AioResponse> {
    console.warn('[btch-downloader] aio() is deprecated and no longer actively maintained.');
    try {
        const data = await HttpGet<AioApiResponse>('aio', url, version, timeout, config.baseUrl);
        return {
            developer: wm,
            status: true,
            ...data
        };
    } catch (error) {
        return { ...formatErrorResponse(error), status: false };
    }
}

/**
 * Google Drive file downloader
 * @async
 * @function gdrive
 * @param {string} url - The Google Drive file URL (e.g., https://drive.google.com/file/d/abc)
 * @returns {Promise<GoogleDriveResponse>} A JSON object containing file metadata and download link.
 * @throws {Error} If the URL is invalid or the file is not public.
 * @example <caption>ESM</caption>
 * import { gdrive } from 'btch-downloader';
 *
 * const url = 'https://drive.google.com/file/d/1thDYWcS5p5FFhzTpTev7RUv0VFnNQyZ4/view';
 * gdrive(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 * @example <caption>CJS</caption>
 * const { gdrive } = require('btch-downloader');
 *
 * const url = 'https://drive.google.com/file/d/1thDYWcS5p5FFhzTpTev7RUv0VFnNQyZ4/view';
 * gdrive(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 */
async function gdrive(url: string): Promise<GoogleDriveResponse> {
    try {
        const data = await HttpGet<GoogleDriveApiResponse>('gdrive', url, version, timeout, config.baseUrl);
        return {
            developer: wm,
            status: true,
            result: data
        };
    } catch (error) {
        return { ...formatErrorResponse(error), status: false };
    }
}

/**
 * Pinterest content downloader or search
 * @async
 * @function pinterest
 * @param {string} query - The Pinterest pin URL or a search query.
 * @returns {Promise<PinterestResponse>} A JSON object containing pin media or search results.
 * @throws {Error} If the input is invalid or the request fails.
 * @example <caption>ESM (URL)</caption>
 * import { pinterest } from 'btch-downloader';
 *
 * const url = 'https://pin.it/4CVodSq';
 * pinterest(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 * @example <caption>ESM (Search)</caption>
 * import { pinterest } from 'btch-downloader';
 *
 * const query = 'Zhao Lusi';
 * pinterest(query).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 * @example <caption>CJS (URL)</caption>
 * const { pinterest } = require('btch-downloader');
 *
 * const url = 'https://pin.it/4CVodSq';
 * pinterest(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 * @example <caption>CJS (Search)</caption>
 * const { pinterest } = require('btch-downloader');
 *
 * const query = 'Zhao Lusi';
 * pinterest(query).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 */
async function pinterest(query: string): Promise<PinterestResponse> {
    try {
        const data = await HttpGet<PinterestApiResponse>('pinterest', query, version, timeout, config.baseUrl);
        return {
            developer: wm,
            status: true,
            result: data
        };
    } catch (error) {
        return { ...formatErrorResponse(error), status: false };
    }
}

/**
 * Xiaohongshu (Little Red Book / 小红书) downloader
 * @async
 * @function xiaohongshu
 * @param {string} url - The Xiaohongshu post URL (e.g., http://xhslink.com/abc)
 * @returns {Promise<XiaohongshuResponse>} A JSON object containing image/video links and post metadata.
 * @throws {Error} If the URL is invalid or the content is not accessible.
 * @example <caption>ESM</caption>
 * import { xiaohongshu } from 'btch-downloader';
 *
 * const url = 'http://xhslink.com/o/21DKXV988zp';
 * xiaohongshu(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 * @example <caption>CJS</caption>
 * const { xiaohongshu } = require('btch-downloader');
 *
 * const url = 'http://xhslink.com/o/21DKXV988zp';
 * xiaohongshu(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 */
async function xiaohongshu(url: string): Promise<XiaohongshuResponse> {
    try {
        const data = await HttpGet<XiaohongshuApiResponse>('rednote', url, version, timeout, config.baseUrl);
        if (!data || !data.noteId) {
            return {
                ...formatErrorResponse(new Error('No results found')),
                status: false
            };
        }

        return {
            developer: wm,
            status: true,
            result: data
        };
    } catch (error) {
        return { ...formatErrorResponse(error), status: false };
    }
}

/**
 * Douyin (抖音) downloader for videos and images
 * @async
 * @function douyin
 * @param {string} url - The Douyin post URL (e.g., https://v.douyin.com/abc)
 * @returns {Promise<DouyinResponse>} A JSON object containing media links and post metadata.
 * @throws {Error} If the URL is invalid or the request fails.
 * @example <caption>ESM</caption>
 * import { douyin } from 'btch-downloader';
 *
 * const url = 'https://v.douyin.com/ikq8axJ/';
 * douyin(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 * @example <caption>CJS</caption>
 * const { douyin } = require('btch-downloader');
 *
 * const url = 'https://v.douyin.com/ikq8axJ/';
 * douyin(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 */
async function douyin(url: string): Promise<DouyinResponse> {
    try {
        const data = await HttpGet<DouyinApiResponse>('douyin', url, version, timeout, config.baseUrl);
        return {
            developer: wm,
            status: true,
            result: data
        };
    } catch (error) {
        return { ...formatErrorResponse(error), status: false };
    }
}

/**
 * SnackVideo content downloader
 * @async
 * @function snackvideo
 * @param {string} url - The SnackVideo post URL (e.g., https://s.snackvideo.com/p/abc)
 * @returns {Promise<SnackVideoResponse>} A JSON object containing video links and metadata.
 * @throws {Error} If the URL is invalid or the content is not accessible.
 * @example <caption>ESM</caption>
 * import { snackvideo } from 'btch-downloader';
 *
 * const url = 'https://s.snackvideo.com/p/j9jKr9dR';
 * snackvideo(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 * @example <caption>CJS</caption>
 * const { snackvideo } = require('btch-downloader');
 *
 * const url = 'https://s.snackvideo.com/p/j9jKr9dR';
 * snackvideo(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 */
async function snackvideo(url: string): Promise<SnackVideoResponse> {
    try {
        const data = await HttpGet<SnackVideoApiResponse>('snackvideo', url, version, timeout, config.baseUrl);
        return {
            developer: wm,
            status: true,
            result: data
        };
    } catch (error) {
        return { ...formatErrorResponse(error), status: false };
    }
}

/**
 * Cocofun content downloader
 * @async
 * @function cocofun
 * @param {string} url - The Cocofun post URL (e.g., https://www.icocofun.com/share/post/123)
 * @returns {Promise<CocofunResponse>} A JSON object containing media links and post metadata.
 * @throws {Error} If the URL is invalid or the request fails.
 * @example <caption>ESM</caption>
 * import { cocofun } from 'btch-downloader';
 *
 * const url = 'https://www.icocofun.com/share/post/379250110809';
 * cocofun(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 * @example <caption>CJS</caption>
 * const { cocofun } = require('btch-downloader');
 *
 * const url = 'https://www.icocofun.com/share/post/379250110809';
 * cocofun(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 */
async function cocofun(url: string): Promise<CocofunResponse> {
    try {
        const data = await HttpGet<CocofunApiResponse>('cocofun', url, version, timeout, config.baseUrl);
        return {
            developer: wm,
            status: true,
            result: data
        };
    } catch (error) {
        return { ...formatErrorResponse(error), status: false };
    }
}

/**
 * Spotify track downloader
 * @async
 * @function spotify
 * @param {string} url - The Spotify track URL (e.g., https://open.spotify.com/track/abc)
 * @returns {Promise<SpotifyResponse>} A JSON object containing track metadata and download links.
 * @throws {Error} If the URL is invalid or the request fails.
 * @example <caption>ESM</caption>
 * import { spotify } from 'btch-downloader';
 *
 * const url = 'https://open.spotify.com/track/3zakx7RAwdkUQlOoQ7SJRt';
 * spotify(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 * @example <caption>CJS</caption>
 * const { spotify } = require('btch-downloader');
 *
 * const url = 'https://open.spotify.com/track/3zakx7RAwdkUQlOoQ7SJRt';
 * spotify(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 */
async function spotify(url: string): Promise<SpotifyResponse> {
    try {
        const data = await HttpGet<SpotifyApiRaw>('spotify', url, version, timeout, config.baseUrl);
        if (data?.res_data) {
            delete data.message;
            if (data.res_data.server === 'rapidapi') delete data.res_data.server;
            if (data.res_data.message === 'success') delete data.res_data.message;
            if (data.res_data.message) delete data.res_data.message;
        }

        return {
            developer: wm,
            status: true,
            result: data.res_data
        };
    } catch (error) {
        return { ...formatErrorResponse(error), status: false };
    }
}

/**
 * YouTube search engine
 * @async
 * @function yts
 * @param {string} query - The search query for YouTube videos.
 * @returns {Promise<YtsResponse>} A JSON object containing a list of search results.
 * @throws {Error} If the request fails.
 * @example <caption>ESM</caption>
 * import { yts } from 'btch-downloader';
 *
 * const query = 'Somewhere Only We Know';
 * yts(query).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 * @example <caption>CJS</caption>
 * const { yts } = require('btch-downloader');
 *
 * const query = 'Somewhere Only We Know';
 * yts(query).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 */
async function yts(query: string): Promise<YtsResponse> {
    try {
        const data = await HttpGet<YtsApiResponse>('yts', query, version, timeout, config.baseUrl);
        return {
            developer: wm,
            status: true,
            result: data
        };
    } catch (error) {
        return { ...formatErrorResponse(error), status: false };
    }
}

/**
 * SoundCloud track downloader
 * @async
 * @function soundcloud
 * @param {string} url - The SoundCloud track URL (e.g., https://soundcloud.com/user/track)
 * @returns {Promise<SoundCloudResponse>} A JSON object containing track info and download links.
 * @throws {Error} If the URL is invalid or the media is not accessible.
 * @example <caption>ESM</caption>
 * import { soundcloud } from 'btch-downloader';
 *
 * const url = 'https://soundcloud.com/issabella-marchelina/sisa-rasa-mahalini-official-audio';
 * soundcloud(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 * @example <caption>CJS</caption>
 * const { soundcloud } = require('btch-downloader');
 *
 * const url = 'https://soundcloud.com/issabella-marchelina/sisa-rasa-mahalini-official-audio';
 * soundcloud(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 */
async function soundcloud(url: string): Promise<SoundCloudResponse> {
    try {
        const data = await HttpGet<SoundCloudApiResponse>('soundcloud', url, version, timeout, config.baseUrl);
        return {
            developer: wm,
            status: true,
            result: data
        };
    } catch (error) {
        return { ...formatErrorResponse(error), status: false };
    }
}

/**
 * Threads (by Instagram) content downloader
 * @async
 * @function threads
 * @param {string} url - The Threads post URL (e.g., https://www.threads.net/@user/post/abc)
 * @returns {Promise<ThreadsResponse>} A JSON object containing media links and post metadata.
 * @throws {Error} If the URL is invalid or the content is not accessible.
 * @example <caption>ESM</caption>
 * import { threads } from 'btch-downloader';
 *
 * const url = 'https://www.threads.net/@cindyyuvia/post/C_Nqx3khgkI/';
 * threads(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 * @example <caption>CJS</caption>
 * const { threads } = require('btch-downloader');
 *
 * const url = 'https://www.threads.net/@cindyyuvia/post/C_Nqx3khgkI/';
 * threads(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 */
async function threads(url: string): Promise<ThreadsResponse> {
    try {
        const data = await HttpGet<ThreadsApiResponse>('threads', url, version, timeout, config.baseUrl);
        return {
            developer: wm,
            status: true,
            result: data
        };
    } catch (error) {
        return { ...formatErrorResponse(error), status: false };
    }
}


/**
 * Kuaishou (快手) video downloader
 * @async
 * @function kuaishou
 * @param {string} url - The Kuaishou video URL (e.g., https://v.kuaishou.com/abc)
 * @returns {Promise<KuaishouResponse>} A JSON object containing video metadata and download link.
 * @throws {Error} If the URL is invalid or the request fails.
 * @example <caption>ESM</caption>
 * import { kuaishou } from 'btch-downloader';
 *
 * const url = 'https://v.kuaishou.com/JT195ZHT';
 * kuaishou(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 * @example <caption>CJS</caption>
 * const { kuaishou } = require('btch-downloader');
 *
 * const url = 'https://v.kuaishou.com/JT195ZHT';
 * kuaishou(url).then(data => console.log(data)).catch(err => console.error(err)); // JSON
 */

async function kuaishou(url: string): Promise<KuaishouResponse> {
    try {
        const data = await HttpGet<KuaishouApiResponse>('kuaishou', url, version, timeout, config.baseUrl);

        if (!data || !data.success) {
            return {
                ...formatErrorResponse(new Error('No results found or failed to fetch')),
                status: false
            };
        }

        return {
            developer: wm,
            status: true,
            result: data
        };

    } catch (error) {
        return { ...formatErrorResponse(error), status: false };
    }
}

export {
  fbdown,
  igdl,
  ttdl,
  twitter,
  youtube,
  mediafire,
  capcut,
  gdrive,
  pinterest,
  aio,
  xiaohongshu,
  douyin,
  snackvideo,
  cocofun,
  spotify,
  yts,
  soundcloud,
  threads,
  kuaishou,
  version as VERSION,
  wm as developer,
  issues
};

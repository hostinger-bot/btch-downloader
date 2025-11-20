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
    VersionConfig
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
 * @param {string} url - TikTok video URL
 * @returns {Promise<TikTokResponse>} Object containing video info and download links
 * @throws {Error} When invalid URL or request fails
 * @example
 * const result = await ttdl('https://tiktok.com/@user/video/123');
 * console.log(result.video[0]); // Video download URL
 */
async function ttdl(url: string): Promise<TikTokResponse> {
    try {
        const data = await HttpGet<TikTokApiResponse>('ttdl', url, version, timeout, config.baseUrl);
        return {
            developer: wm,
            status: true,
            title: data.title,
            title_audio: data.title_audio,
            thumbnail: data.thumbnail,
            video: data.video,
            audio: data.audio
        };
    } catch (error) {
        return { ...formatErrorResponse(error), status: false };
    }
}

/**
 * Instagram content downloader
 * @async
 * @function igdl
 * @param {string} url - Instagram post URL (reels/posts/stories)
 * @returns {Promise<InstagramResponse>} Array of media items with download links
 * @throws {Error} When invalid URL or request fails
 * @example
 * const result = await igdl('https://instagram.com/p/Cxyz...');
 * result.forEach(item => console.log(item.url));
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
                thumbnail: item.thumbnail,
                url: item.url
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
 * Twitter video downloader
 * @async
 * @function twitter
 * @param {string} url - Twitter video URL
 * @returns {Promise<TwitterResponse>} Object containing video info
 * @throws {Error} When invalid URL or request fails
 * @example
 * const result = await twitter('https://twitter.com/user/status/123');
 */
async function twitter(url: string): Promise<TwitterResponse> {
    try {
        const data = await HttpGet<TwitterApiResponse>('twitter', url, version, timeout, config.baseUrl);
        return {
            developer: wm,
            status: true,
            title: data.title,
            url: data.url
        };
    } catch (error) {
        return { ...formatErrorResponse(error), status: false };
    }
}

/**
 * YouTube video downloader
 * @async
 * @function youtube
 * @param {string} url - YouTube video URL
 * @returns {Promise<YouTubeResponse>} Object containing video and audio download links
 * @throws {Error} When invalid URL or request fails
 * @example
 * const result = await youtube('https://youtube.com/watch?v=123');
 * console.log(result.mp4); // Video download URL
 */
async function youtube(url: string): Promise<YouTubeResponse> {
    try {
        const data = await HttpGet<YouTubeApiResponse>('youtube', url, version, timeout, config.baseUrl);
        return {
            developer: wm,
            status: true,
            title: data.title,
            thumbnail: data.thumbnail,
            author: data.author,
            mp3: data.mp3,
            mp4: data.mp4
        };
    } catch (error) {
        return { ...formatErrorResponse(error), status: false };
    }
}

/**
 * Facebook video downloader
 * @async
 * @function fbdown
 * @param {string} url - Facebook video URL
 * @returns {Promise<FacebookResponse>} Object containing video quality options
 * @throws {Error} When invalid URL or request fails
 * @example
 * const result = await fbdown('https://facebook.com/watch/?v=123');
 * console.log(result.HD); // HD quality URL
 */
async function fbdown(url: string): Promise<FacebookResponse> {
    try {
        const data = await HttpGet<FacebookApiResponse>('fbdown', url, version, timeout, config.baseUrl);
        return {
            developer: wm,
            status: true,
            Normal_video: data.Normal_video,
            HD: data.HD
        };
    } catch (error) {
        return { ...formatErrorResponse(error), status: false };
    }
}

/**
 * MediaFire file downloader
 * @async
 * @function mediafire
 * @param {string} url - MediaFire file URL
 * @returns {Promise<MediaFireResponse>} Object containing file info
 * @throws {Error} When invalid URL or request fails
 * @example
 * const result = await mediafire('https://mediafire.com/file/123');
 * console.log(result.result.filename); // Downloaded filename
 */
async function mediafire(url: string): Promise<MediaFireResponse> {
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
 * @param {string} url - CapCut template URL
 * @returns {Promise<CapCutResponse>} Object containing template info
 * @throws {Error} When invalid URL or request fails
 * @example
 * const result = await capcut('https://capcut.com/template/123');
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
 * All In One Downloader
 * @async
 * @function aio
 * @param {string} url - Video URL
 * @returns {Promise<AioApiResponse>} Object containing video info
 * @throws {Error} When invalid URL or request fails
 * @example
 * const result = await aio('https://tiktok.com/@user/video/123');
 */
async function aio(url: string): Promise<AioResponse> {
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
 * @param {string} url - Google Drive file URL
 * @returns {Promise<GoogleDriveResponse>} Object containing file info
 * @throws {Error} When invalid URL or request fails
 * @example
 * const result = await gdrive('https://drive.google.com/file/d/123');
 * console.log(result.result.downloadUrl); // Download URL
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
 * Pinterest content downloader
 * @async
 * @function pinterest
 * @param {string} query - Pinterest URL or search query
 * @returns {Promise<PinterestResponse>} Object containing pin info or search results
 * @throws {Error} When invalid URL/query or request fails
 * @example
 * // For URL
 * const result = await pinterest('https://pin.it/123');
 * // For search
 * const results = await pinterest('Zhao Lusi');
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
 * Xiaohongshu downloader
 * @async
 * @function xiaohongshu
 * @param {string} url - Xiaohongshu post URL
 * @returns {Promise<XiaohongshuResponse>} Object containing media details and download links
 * @throws {Error} When invalid URL or request fails
 * @example
 * const result = await xiaohongshu('https://xhslink.com/o/123456');
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
 * Douyin content downloader
 * @async
 * @function douyin
 * @param {string} url - Douyin post URL
 * @returns {Promise<DouyinResponse>} Object containing media details and download links
 * @throws {Error} When invalid URL or request fails
 * @example
 * const result = await douyin('https://v.douyin.com/1234');
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
 * @param {string} url - SnackVideo post URL
 * @returns {Promise<SnackVideoResponse>} Object containing media details and download links
 * @throws {Error} When invalid URL or request fails
 * @example
 * const result = await snackvideo('https://www.snackvideo.com/@seponsbobofficial/video/5251628748119377077');
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
 * @param {string} url - SnackVideo post URL
 * @returns {Promise<CocofunResponse>} Object containing media details and download links
 * @throws {Error} When invalid URL or request fails
 * @example
 * const result = await cocofun('https://www.icocofun.com/share/post/588965339175?lang=id&pkg=id&share_to=copy_link&m=81638cf44ba27b2ffa708f3410a4e6c2&d=63cd2733d8d258facd28d44fde5198d4cea826e89af7efc4238ada620140eea3&nt=1');
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
 * Spotify content downloader
 * @async
 * @function spotify
 * @param {string} url - Spotify track URL
 * @returns {Promise<SpotifyResponse>} Object containing media details and download links
 * @throws {Error} When invalid URL or request fails
 * @example
 * const result = await spotify('https://open.spotify.com/track/3zakx7RAwdkUQlOoQ7SJRt');
 */
async function spotify(url: string): Promise<SpotifyResponse> {
    try {
        const data = await HttpGet<SpotifyApiRaw>('spotify', url, version, timeout, config.baseUrl);
        if (data?.res_data) {
            delete data.message;
            if (data.res_data.server === 'rapidapi') delete data.res_data.server;
            if (data.res_data.message === 'success') delete data.res_data.message;
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
 * YouTube search
 * @async
 * @function yts
 * @param {string} query - YouTube search query
 * @returns {Promise<YtsResponse>} Object containing search results
 * @throws {Error} When invalid query or request fails
 * @example
 * const result = await yts('Somewhere Only We Know');
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
 * SoundCloud content downloader
 * @async
 * @function soundcloud
 * @param {string} url - SoundCloud track URL
 * @returns {Promise<SoundCloudResponse>} Object containing media details and download links
 * @throws {Error} When invalid URL or request fails
 * @example
 * const result = await soundcloud('https://soundcloud.com/artist-name/track-name');
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
 * Threads content downloader
 * @async
 * @function threads
 * @param {string} url - Threads post URL
 * @returns {Promise<ThreadsResponse>} Object containing media details and download links
 * @throws {Error} When invalid URL or request fails
 * @example
 * const result = await threads('https://www.threads.net/@cindyyuvia/post/C_Nqx3khgkI');
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
  version as VERSION,
  wm as developer,
  issues
};


"use strict";
import configData from './Defaults/site';
import watermark from './Watermark/config.json';
import { version } from '../package.json';
import { HttpGet } from './Http/Get';
import {
    InstagramResponse,
    TikTokResponse,
    TwitterResponse,
    YouTubeResponse,
    FacebookResponse,
    MediaFireResponse,
    CapCutResponse,
    GoogleDriveResponse,
    PinterestResponse
} from './Types/types';

interface VersionConfig {
    config: {
        baseUrl: string;
    };
    documentation: string;
}

const { config, documentation } = configData as VersionConfig;
const wmdev = watermark.dev.name;
const timeout = 60000;

interface ApiErrorResponse {
    developer: string;
    status: boolean;
    message: string;
    note: string;
}

interface TikTokApiResponse {
    title: string;
    title_audio: string;
    thumbnail: string;
    video: string[];
    audio: string[];
}

interface InstagramApiItem {
    thumbnail: string;
    url: string;
    resolution?: string;
    shouldRender?: boolean;
}

interface TwitterApiResponse {
    title: string;
    url: string;
}

interface YouTubeApiResponse {
    title: string;
    thumbnail: string;
    author: string;
    mp3: string;
    mp4: string;
}

interface FacebookApiResponse {
    Normal_video: string;
    HD: string;
}

interface MediaFireApiResponse {
    filename: string;
    filesize: string;
    filesizeH?: string;
    type?: string;
    upload_date?: string;
    owner?: string;
    ext?: string;
    mimetype?: string;
    url?: string;
}

interface CapCutApiResponse {
    url?: string;
    data?: {
        "@context"?: string;
        "@type"?: string;
        name?: string;
        description?: string;
        thumbnailUrl?: string[];
        uploadDate?: string;
        contentUrl?: string;
        meta?: {
            title?: string;
            desc?: string;
            like?: number;
            play?: number;
            duration?: number;
            usage?: number;
            createTime?: number;
            coverUrl?: string;
            videoRatio?: string;
            author?: {
                name?: string;
                avatarUrl?: string;
                description?: string;
                profileUrl?: string;
                secUid?: string;
                uid?: number;
            };
        };
    };
}

interface GoogleDriveApiResponse {
    filename: string;
    filesize: string;
    downloadUrl: string;
}

interface PinterestApiResponse {
    query?: string;
    count?: number;
    result?: Array<{
        id?: string;
        title?: string;
        description?: string;
        pin_url?: string;
        image_url?: string;
        images?: {
            original?: string;
            large?: string;
            medium?: string;
            small?: string;
            [key: string]: any;
        };
        video_url?: string | null;
        is_video?: boolean;
        uploader?: {
            username?: string;
            full_name?: string;
            profile_url?: string;
            avatar_url?: string;
        };
    }>;
    id?: string;
    title?: string;
    description?: string;
    link?: string | null;
    image?: string;
    images?: {
        [key: string]: {
            width?: number;
            height?: number;
            url?: string;
        };
    };
    is_video?: boolean;
    video_url?: string | null;
    videos?: any;
    user?: {
        username?: string;
        full_name?: string;
        profile_url?: string;
        avatar_url?: string;
    };
}

// Formatter respons error generik
const formatErrorResponse = (error: unknown): ApiErrorResponse => ({
    developer: wmdev,
    status: false,
    message: error instanceof Error ? error.message : 'Unknown error',
    note: `Please check the documentation at ${documentation}`
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
            developer: wmdev,
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

        return {
            developer: wmdev,
            status: true,
            result: data.map((item: InstagramApiItem) => ({
                thumbnail: item.thumbnail,
                url: item.url,
                resolution: item.resolution,
                shouldRender: item.shouldRender
            }))
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
            developer: wmdev,
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
            developer: wmdev,
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
            developer: wmdev,
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
            developer: wmdev,
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
            developer: wmdev,
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
            developer: wmdev,
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
            developer: wmdev,
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
    pinterest
};
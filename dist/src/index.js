"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fbdown = fbdown;
exports.igdl = igdl;
exports.ttdl = ttdl;
exports.twitter = twitter;
exports.youtube = youtube;
exports.mediafire = mediafire;
exports.capcut = capcut;
exports.gdrive = gdrive;
exports.pinterest = pinterest;
const axios_1 = __importDefault(require("axios"));
const package_json_1 = require("../package.json");
const config_json_1 = __importDefault(require("./watermark/config.json"));
const BASE_DEVELOPER = config_json_1.default.dev.name;
/**
 * Internal API fetch utility
 * @private
 * @async
 * @function _fetchapi
 * @param {string} endpoint - API endpoint to call
 * @param {string} url - URL to process
 * @returns {Promise<any>} API response data
 * @throws {Error} When request fails
 * @example
 * const data = await _fetchapi('instagram', 'https://instagram.com/p/123');
 */
function _fetchapi(endpoint, url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`${package_json_1.config.baseUrl}/${endpoint}`, {
                params: { url },
                headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': `btch/${package_json_1.version}`
                }
            });
            return response.data;
        }
        catch (error) {
            throw new Error(`Error fetching from ${endpoint}: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    });
}
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
function ttdl(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield _fetchapi('ttdl', url);
            return {
                developer: BASE_DEVELOPER,
                title: data.title,
                title_audio: data.title_audio,
                thumbnail: data.thumbnail,
                video: data.video,
                audio: data.audio
            };
        }
        catch (error) {
            return {
                developer: BASE_DEVELOPER,
                status: false,
                message: error instanceof Error ? error.message : 'Unknown error',
                note: 'Please check the documentation at https://www.npmjs.com/package/btch-downloader'
            };
        }
    });
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
function igdl(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield _fetchapi('igdl', url);
            if (!data || data.status === false) {
                return {
                    developer: BASE_DEVELOPER,
                    status: false,
                    message: (data === null || data === void 0 ? void 0 : data.msg) || 'Result Not Found! Check Your Url Now!',
                    note: 'Please check the documentation at https://www.npmjs.com/package/btch-downloader'
                };
            }
            return {
                developer: BASE_DEVELOPER,
                result: data.map((item) => ({
                    thumbnail: item.thumbnail,
                    url: item.url,
                    resolution: item.resolution,
                    shouldRender: item.shouldRender
                }))
            };
        }
        catch (error) {
            return {
                developer: BASE_DEVELOPER,
                status: false,
                message: 'Request Failed With Code 401',
                note: 'Please check the documentation at https://www.npmjs.com/package/btch-downloader'
            };
        }
    });
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
function twitter(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield _fetchapi('twitter', url);
            return {
                developer: BASE_DEVELOPER,
                title: data.title,
                url: data.url
            };
        }
        catch (error) {
            return {
                developer: BASE_DEVELOPER,
                status: false,
                message: error instanceof Error ? error.message : 'Unknown error',
                note: 'Please check the documentation at https://www.npmjs.com/package/btch-downloader'
            };
        }
    });
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
function youtube(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield _fetchapi('youtube', url);
            return {
                developer: BASE_DEVELOPER,
                title: data.title,
                thumbnail: data.thumbnail,
                author: data.author,
                mp3: data.mp3,
                mp4: data.mp4
            };
        }
        catch (error) {
            return {
                developer: BASE_DEVELOPER,
                status: false,
                message: error instanceof Error ? error.message : 'Unknown error',
                note: 'Please check the documentation at https://www.npmjs.com/package/btch-downloader'
            };
        }
    });
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
function fbdown(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield _fetchapi('fbdown', url);
            return {
                developer: BASE_DEVELOPER,
                Normal_video: data.Normal_video,
                HD: data.HD
            };
        }
        catch (error) {
            return {
                developer: BASE_DEVELOPER,
                status: false,
                message: error instanceof Error ? error.message : 'Unknown error',
                note: 'Please check the documentation at https://www.npmjs.com/package/btch-downloader'
            };
        }
    });
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
function mediafire(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield _fetchapi('mediafire', url);
            return {
                developer: BASE_DEVELOPER,
                result: data
            };
        }
        catch (error) {
            return {
                developer: BASE_DEVELOPER,
                status: false,
                message: error instanceof Error ? error.message : 'Unknown error',
                note: 'Please check the documentation at https://www.npmjs.com/package/btch-downloader'
            };
        }
    });
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
function capcut(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield _fetchapi('capcut', url);
            return data;
        }
        catch (error) {
            return {
                developer: BASE_DEVELOPER,
                status: false,
                message: error instanceof Error ? error.message : 'Unknown error',
                note: 'Please check the documentation at https://www.npmjs.com/package/btch-downloader'
            };
        }
    });
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
function gdrive(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield _fetchapi('gdrive', url);
            return {
                developer: BASE_DEVELOPER,
                result: data.data
            };
        }
        catch (error) {
            return {
                developer: BASE_DEVELOPER,
                status: false,
                message: error instanceof Error ? error.message : 'Unknown error',
                note: 'Please check the documentation at https://www.npmjs.com/package/btch-downloader'
            };
        }
    });
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
function pinterest(query) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield _fetchapi('pinterest', query);
            return {
                developer: BASE_DEVELOPER,
                result: data.result
            };
        }
        catch (error) {
            return {
                developer: BASE_DEVELOPER,
                status: false,
                message: error instanceof Error ? error.message : 'Unknown error',
                note: 'Please check the documentation at https://www.npmjs.com/package/btch-downloader'
            };
        }
    });
}

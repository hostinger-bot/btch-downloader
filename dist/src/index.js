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
const site_1 = __importDefault(require("./Defaults/site"));
const config_json_1 = __importDefault(require("./Watermark/config.json"));
const package_json_1 = require("../package.json");
const Get_1 = require("./Http/Get");
const { config, documentation } = site_1.default;
const wmdev = config_json_1.default.dev.name;
const timeout = 60000;
// Formatter respons error generik
const formatErrorResponse = (error) => ({
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
function ttdl(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield (0, Get_1.HttpGet)('ttdl', url, package_json_1.version, timeout, config.baseUrl);
            return {
                developer: wmdev,
                status: true,
                title: data.title,
                title_audio: data.title_audio,
                thumbnail: data.thumbnail,
                video: data.video,
                audio: data.audio
            };
        }
        catch (error) {
            return Object.assign(Object.assign({}, formatErrorResponse(error)), { status: false });
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
            const data = yield (0, Get_1.HttpGet)('igdl', url, package_json_1.version, timeout, config.baseUrl);
            if (!data || data.length === 0) {
                return Object.assign(Object.assign({}, formatErrorResponse(new Error('No results found'))), { status: false });
            }
            return {
                developer: wmdev,
                status: true,
                result: data.map((item) => ({
                    thumbnail: item.thumbnail,
                    url: item.url,
                    resolution: item.resolution,
                    shouldRender: item.shouldRender
                }))
            };
        }
        catch (error) {
            return Object.assign(Object.assign({}, formatErrorResponse(error)), { status: false });
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
            const data = yield (0, Get_1.HttpGet)('twitter', url, package_json_1.version, timeout, config.baseUrl);
            return {
                developer: wmdev,
                status: true,
                title: data.title,
                url: data.url
            };
        }
        catch (error) {
            return Object.assign(Object.assign({}, formatErrorResponse(error)), { status: false });
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
            const data = yield (0, Get_1.HttpGet)('youtube', url, package_json_1.version, timeout, config.baseUrl);
            return {
                developer: wmdev,
                status: true,
                title: data.title,
                thumbnail: data.thumbnail,
                author: data.author,
                mp3: data.mp3,
                mp4: data.mp4
            };
        }
        catch (error) {
            return Object.assign(Object.assign({}, formatErrorResponse(error)), { status: false });
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
            const data = yield (0, Get_1.HttpGet)('fbdown', url, package_json_1.version, timeout, config.baseUrl);
            return {
                developer: wmdev,
                status: true,
                Normal_video: data.Normal_video,
                HD: data.HD
            };
        }
        catch (error) {
            return Object.assign(Object.assign({}, formatErrorResponse(error)), { status: false });
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
            const data = yield (0, Get_1.HttpGet)('mediafire', url, package_json_1.version, timeout, config.baseUrl);
            return {
                developer: wmdev,
                status: true,
                result: data
            };
        }
        catch (error) {
            return Object.assign(Object.assign({}, formatErrorResponse(error)), { status: false });
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
            const data = yield (0, Get_1.HttpGet)('capcut', url, package_json_1.version, timeout, config.baseUrl);
            return Object.assign({ developer: wmdev, status: true }, data);
        }
        catch (error) {
            return Object.assign(Object.assign({}, formatErrorResponse(error)), { status: false });
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
            const data = yield (0, Get_1.HttpGet)('gdrive', url, package_json_1.version, timeout, config.baseUrl);
            return {
                developer: wmdev,
                status: true,
                result: data
            };
        }
        catch (error) {
            return Object.assign(Object.assign({}, formatErrorResponse(error)), { status: false });
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
            const data = yield (0, Get_1.HttpGet)('pinterest', query, package_json_1.version, timeout, config.baseUrl);
            return {
                developer: wmdev,
                status: true,
                result: data
            };
        }
        catch (error) {
            return Object.assign(Object.assign({}, formatErrorResponse(error)), { status: false });
        }
    });
}

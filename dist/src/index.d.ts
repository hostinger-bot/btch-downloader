import { InstagramResponse, TikTokResponse, TwitterResponse, YouTubeResponse, FacebookResponse, MediaFireResponse, CapCutResponse, GoogleDriveResponse, PinterestResponse } from './Types/types';
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
declare function ttdl(url: string): Promise<TikTokResponse>;
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
declare function igdl(url: string): Promise<InstagramResponse>;
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
declare function twitter(url: string): Promise<TwitterResponse>;
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
declare function youtube(url: string): Promise<YouTubeResponse>;
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
declare function fbdown(url: string): Promise<FacebookResponse>;
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
declare function mediafire(url: string): Promise<MediaFireResponse>;
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
declare function capcut(url: string): Promise<CapCutResponse>;
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
declare function gdrive(url: string): Promise<GoogleDriveResponse>;
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
declare function pinterest(query: string): Promise<PinterestResponse>;
export { fbdown, igdl, ttdl, twitter, youtube, mediafire, capcut, gdrive, pinterest };

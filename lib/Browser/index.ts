/**
 * @namespace Browser
 * @description Browser-specific version of btch-downloader.
 *
 * ```html
 * <!-- unpkg : use the latest version of btch-downloader -->
 * <script src="https://unpkg.com/btch-downloader/dist/browser/index.min.js"></script>
 *  
 * <!-- unpkg : use a specific version of btch-downloader (change the version numbers as necessary) -->
 * <script src="https://unpkg.com/btch-downloader@6.0.34/dist/browser/index.min.js"></script>
 *  
 * <!-- jsDelivr : use the latest version of btch-downloader -->
 * <script src="https://cdn.jsdelivr.net/npm/btch-downloader/dist/browser/index.min.js"></script>
 *  
 * <!-- jsDelivr : use a specific version of btch-downloader (change the version numbers as necessary) -->
 * <script src="https://cdn.jsdelivr.net/npm/btch-downloader@6.0.34/dist/browser/index.min.js"></script>
 * ```
 */

import * as endpoints from './api/endpoints';
import { VERSION as B_VERSION, developer as B_developer, issues as B_issues } from './api/http';

/** 
 * Instagram content downloader (Browser version) 
 * @memberof Browser
 */
export const igdl = endpoints.igdl;
/** 
 * TikTok video downloader (Browser version) 
 * @memberof Browser
 */
export const ttdl = endpoints.ttdl;
/** 
 * Twitter (X) video downloader (Browser version) 
 * @memberof Browser
 */
export const twitter = endpoints.twitter;
/** 
 * YouTube video and audio downloader (Browser version) 
 * @memberof Browser
 */
export const youtube = endpoints.youtube;
/** 
 * Facebook video downloader (Browser version) 
 * @memberof Browser
 */
export const fbdown = endpoints.fbdown;
/** 
 * MediaFire file downloader (Browser version) 
 * @memberof Browser
 */
export const mediafire = endpoints.mediafire;
/** 
 * CapCut template downloader (Browser version) 
 * @memberof Browser
 */
export const capcut = endpoints.capcut;
/** 
 * Google Drive file downloader (Browser version) 
 * @memberof Browser
 */
export const gdrive = endpoints.gdrive;
/** 
 * Pinterest content downloader or search (Browser version) 
 * @memberof Browser
 */
export const pinterest = endpoints.pinterest;
/** 
 * All-In-One (AIO) downloader (Browser version) 
 * @memberof Browser
 */
export const aio = endpoints.aio;
/** 
 * Xiaohongshu (Little Red Book) downloader (Browser version) 
 * @memberof Browser
 */
export const xiaohongshu = endpoints.xiaohongshu;
/** 
 * Xiaohongshu Profile (Little Red Book) downloader (Browser version) 
 * @memberof Browser
 */
export const xiaohongshuProfile = endpoints.xiaohongshuProfile;
/** 
 * Douyin downloader (Browser version) 
 * @memberof Browser
 */
export const douyin = endpoints.douyin;
/** 
 * SnackVideo content downloader (Browser version) 
 * @memberof Browser
 */
export const snackvideo = endpoints.snackvideo;
/** 
 * Cocofun content downloader (Browser version) 
 * @memberof Browser
 */
export const cocofun = endpoints.cocofun;
/** 
 * Spotify track downloader (Browser version) 
 * @memberof Browser
 */
export const spotify = endpoints.spotify;
/** 
 * YouTube search engine (Browser version) 
 * @memberof Browser
 */
export const yts = endpoints.yts;
/** 
 * SoundCloud track downloader (Browser version) 
 * @memberof Browser
 */
export const soundcloud = endpoints.soundcloud;
/** 
 * Threads (by Instagram) content downloader (Browser version) 
 * @memberof Browser
 */
export const threads = endpoints.threads;
/** 
 * Kuaishou video downloader (Browser version) 
 * @memberof Browser
 */
export const kuaishou = endpoints.kuaishou;

export {
    /** 
     * The current version of the library. 
     * @memberof Browser
     */
    B_VERSION as VERSION,
    /** 
     * The developer signature for the library. 
     * @memberof Browser
     */
    B_developer as developer,
    /** 
     * The URL for reporting issues. 
     * @memberof Browser
     */
    B_issues as issues
};

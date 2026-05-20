/**
 * API endpoints for the browser library.
 */
import { httpGet, developer, issues } from './http';
import type {
    TikTokResponse,
    InstagramResponse,
    TwitterResponse,
    YouTubeResponse,
    FacebookResponse,
    MediaFireResponse,
    CapCutResponse,
    GoogleDriveResponse,
    PinterestResponse,
    AioResponse,
    XiaohongshuResponse,
    DouyinResponse,
    SnackVideoResponse,
    CocofunResponse,
    SpotifyResponse,
    YtsResponse,
    SoundCloudResponse,
    ThreadsResponse,
    KuaishouResponse,
} from '../../../src/Types';

const wm = developer;

/**
 * Instagram content downloader (Reels, Posts, TV, Stories)
 * @async
 * @function igdl
 * @memberof Browser
 * 
 * @param {string} url - The Instagram media URL (e.g., https://www.instagram.com/reel/DKPtUL_S9Nh/?igsh=MTE1dTVkb2E4NTFmcw==)
 * @returns {Promise<InstagramResponse>} A JSON object containing an array of media items (links and thumbnails).
 * @throws {Error} If the URL is invalid or the media is not accessible.
 * @example
 * btch.igdl('https://www.instagram.com/reel/DKPtUL_S9Nh/?igsh=MTE1dTVkb2E4NTFmcw==').then(data => console.log(data));
 */
export async function igdl(url: string): Promise<InstagramResponse> {
  try {
    const data = await httpGet('igdl', url);
    if (!data || data.length === 0) {
      return { developer: wm, status: false, message: 'No results found', note: `Please report issues to ${issues}` };
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
      result,
    };
  } catch (err) {
    return { developer: wm, status: false, message: (err as Error).message, note: `Please report issues to ${issues}` };
  }
}

/**
 * TikTok video downloader
 * @async
 * @function ttdl
 * @memberof Browser
 * 
 * @param {string} url - The TikTok video URL (e.g., https://www.tiktok.com/@omagadsus/video/7025456384175017243)
 * @returns {Promise<TikTokResponse>} A JSON object containing video info, thumbnails, and download links.
 * @throws {Error} If the URL is invalid or the request fails.
 * @example
 * btch.ttdl('https://www.tiktok.com/@omagadsus/video/7025456384175017243').then(data => console.log(data));
 */
export async function ttdl(url: string): Promise<TikTokResponse> {
  try {
    const data = await httpGet('ttdl', url);
    return {
      developer: wm,
      status: true,
      title: data?.title ?? undefined,
      title_audio: data?.title_audio ?? undefined,
      thumbnail: data?.thumbnail ?? undefined,
      video: data?.video ?? [],
      audio: data?.audio ?? [],
    };
  } catch (err) {
    return { developer: wm, status: false, message: (err as Error).message, note: `Please report issues to ${issues}` };
  }
}

/**
 * Twitter (X) video downloader
 * @async
 * @function twitter
 * @memberof Browser
 * 
 * @param {string} url - The Twitter/X video URL (e.g., https://twitter.com/gofoodindonesia/status/1229369819511709697)
 * @returns {Promise<TwitterResponse>} A JSON object containing the video title and download link.
 * @throws {Error} If the URL is invalid or the media is not accessible.
 * @example
 * btch.twitter('https://twitter.com/gofoodindonesia/status/1229369819511709697').then(data => console.log(data));
 */
export async function twitter(url: string): Promise<TwitterResponse> {
  try {
    const data = await httpGet('twitter', url);
    return {
      developer: wm,
      status: true,
      title: data?.title ?? undefined,
      url: data?.url ?? undefined,
    };
  } catch (err) {
    return { developer: wm, status: false, message: (err as Error).message, note: `Please report issues to ${issues}` };
  }
}

/**
 * YouTube video and audio downloader
 * @async
 * @function youtube
 * @memberof Browser
 * 
 * @param {string} url - The YouTube video URL (e.g., https://youtu.be/C8mJ8943X80)
 * @returns {Promise<YouTubeResponse>} A JSON object containing video/audio download links, title, and thumbnail.
 * @throws {Error} If the URL is invalid or the request fails.
 * @example
 * btch.youtube('https://youtu.be/C8mJ8943X80').then(data => console.log(data));
 */
export async function youtube(url: string): Promise<YouTubeResponse> {
  try {
    const data = await httpGet('youtube', url);
    return {
      developer: wm,
      status: true,
      title: data?.title ?? undefined,
      thumbnail: data?.thumbnail ?? undefined,
      author: data?.author ?? undefined,
      mp3: data?.mp3 ?? undefined,
      mp4: data?.mp4 ?? undefined,
    };
  } catch (err) {
    return { developer: wm, status: false, message: (err as Error).message, note: `Please report issues to ${issues}` };
  }
}

/**
 * Facebook video downloader
 * @async
 * @function fbdown
 * @memberof Browser
 * 
 * @param {string} url - The Facebook video URL (e.g., https://www.facebook.com/watch/?v=1393572814172251)
 * @returns {Promise<FacebookResponse>} A JSON object containing Normal and HD quality download links.
 * @throws {Error} If the URL is invalid or the media is not accessible.
 * @example
 * btch.fbdown('https://www.facebook.com/watch/?v=1393572814172251').then(data => console.log(data));
 */
export async function fbdown(url: string): Promise<FacebookResponse> {
  try {
    const data = await httpGet('fbdown', url);
    return {
      developer: wm,
      status: true,
      Normal_video: data?.Normal_video ?? undefined,
      HD: data?.HD ?? undefined,
    };
  } catch (err) {
    return { developer: wm, status: false, message: (err as Error).message, note: `Please report issues to ${issues}` };
  }
}

/**
 * MediaFire file downloader
 * @async
 * @function mediafire
 * @memberof Browser
 * 
 * @param {string} url - The MediaFire file URL (e.g., https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk/file)
 * @returns {Promise<MediaFireResponse>} A JSON object containing file metadata and download link.
 * @throws {Error} If the URL is invalid or the request fails.
 * @deprecated MediaFire support is no longer actively maintained.
 * @example
 * btch.mediafire('https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk/file').then(data => console.log(data));
 */
export async function mediafire(url: string): Promise<MediaFireResponse> {
  console.warn('[btch-downloader] mediafire() is deprecated and no longer actively maintained.');
  try {
    const data = await httpGet('mediafire', url);
    return { developer: wm, status: true, result: data ?? undefined };
  } catch (err) {
    return { developer: wm, status: false, message: (err as Error).message, note: `Please report issues to ${issues}` };
  }
}

/**
 * CapCut template downloader
 * @async
 * @function capcut
 * @memberof Browser
 * 
 * @param {string} url - The CapCut template URL (e.g., https://www.capcut.com/template-detail/7299286607478181121)
 * @returns {Promise<CapCutResponse>} A JSON object containing template video links and metadata.
 * @throws {Error} If the URL is invalid or the request fails.
 * @example
 * btch.capcut('https://www.capcut.com/template-detail/7299286607478181121').then(data => console.log(data));
 */
export async function capcut(url: string): Promise<CapCutResponse> {
  try {
    const data = await httpGet('capcut', url);
    return { developer: wm, status: true, ...data };
  } catch (err) {
    return { developer: wm, status: false, message: (err as Error).message, note: `Please report issues to ${issues}` };
  }
}

/**
 * Google Drive file downloader
 * @async
 * @function gdrive
 * @memberof Browser
 * 
 * @param {string} url - The Google Drive file URL (e.g., https://drive.google.com/file/d/1thDYWcS5p5FFhzTpTev7RUv0VFnNQyZ4/view)
 * @returns {Promise<GoogleDriveResponse>} A JSON object containing file metadata and download link.
 * @throws {Error} If the URL is invalid or the file is not public.
 * @example
 * btch.gdrive('https://drive.google.com/file/d/1thDYWcS5p5FFhzTpTev7RUv0VFnNQyZ4/view').then(data => console.log(data));
 */
export async function gdrive(url: string): Promise<GoogleDriveResponse> {
  try {
    const data = await httpGet('gdrive', url);
    return { developer: wm, status: true, result: data ?? undefined };
  } catch (err) {
    return { developer: wm, status: false, message: (err as Error).message, note: `Please report issues to ${issues}` };
  }
}

/**
 * Pinterest content downloader or search
 * @async
 * @function pinterest
 * @memberof Browser
 * 
 * @param {string} query - The Pinterest pin URL or a search query (e.g., https://pin.it/4CVodSq)
 * @returns {Promise<PinterestResponse>} A JSON object containing pin media or search results.
 * @throws {Error} If the input is invalid or the request fails.
 * @example
 * btch.pinterest('https://pin.it/4CVodSq').then(data => console.log(data));
 */
export async function pinterest(query: string): Promise<PinterestResponse> {
  try {
    const data = await httpGet('pinterest', query);
    return { developer: wm, status: true, result: data ?? undefined };
  } catch (err) {
    return { developer: wm, status: false, message: (err as Error).message, note: `Please report issues to ${issues}` };
  }
}

/**
 * All-In-One (AIO) downloader for various social platforms.
 * @async
 * @function aio
 * @memberof Browser
 * 
 * @param {string} url - The media URL to download (e.g., https://vt.tiktok.com/ZSkGPK9Kj/)
 * @returns {Promise<AioResponse>} A JSON object containing media info.
 * @throws {Error} If the URL is invalid or the request fails.
 * @deprecated All-In-One support is no longer actively maintained.
 * @example
 * btch.aio('https://vt.tiktok.com/ZSkGPK9Kj/').then(data => console.log(data));
 */
export async function aio(url: string): Promise<AioResponse> {
  console.warn('[btch-downloader] aio() is deprecated and no longer actively maintained.');
  try {
    const data = await httpGet('aio', url);
    return {
      developer: wm,
      status: true,
      ...data
    };
  } catch (err) {
    return {
      developer: wm,
      status: false,
      message: (err as Error).message,
      note: `Please report issues to ${issues}`
    };
  }
}

/**
 * Xiaohongshu (Little Red Book / 小红书) downloader
 * @async
 * @function xiaohongshu
 * @memberof Browser
 * 
 * @param {string} url - The Xiaohongshu post URL (e.g., http://xhslink.com/o/21DKXV988zp)
 * @returns {Promise<XiaohongshuResponse>} A JSON object containing image/video links and post metadata.
 * @throws {Error} If the URL is invalid or the content is not accessible.
 * @example
 * btch.xiaohongshu('http://xhslink.com/o/21DKXV988zp').then(data => console.log(data));
 */
export async function xiaohongshu(url: string): Promise<XiaohongshuResponse> {
  try {
    const data = await httpGet('rednote', url);
    if (!data || !data.noteId) {
      return { developer: wm, status: false, message: 'No results found', note: `Please report issues to ${issues}` };
    }
    return { developer: wm, status: true, result: data };
  } catch (err) {
    return { developer: wm, status: false, message: (err as Error).message, note: `Please report issues to ${issues}` };
  }
}

/**
 * Douyin (抖音) downloader for videos and images
 * @async
 * @function douyin
 * @memberof Browser
 * 
 * @param {string} url - The Douyin post URL (e.g., https://v.douyin.com/ikq8axJ/)
 * @returns {Promise<DouyinResponse>} A JSON object containing media links and post metadata.
 * @throws {Error} If the URL is invalid or the request fails.
 * @example
 * btch.douyin('https://v.douyin.com/ikq8axJ/').then(data => console.log(data));
 */
export async function douyin(url: string): Promise<DouyinResponse> {
  try {
    const data = await httpGet('douyin', url);
    return { developer: wm, status: true, result: data ?? undefined };
  } catch (err) {
    return { developer: wm, status: false, message: (err as Error).message, note: `Please report issues to ${issues}` };
  }
}

/**
 * SnackVideo content downloader
 * @async
 * @function snackvideo
 * @memberof Browser
 * 
 * @param {string} url - The SnackVideo post URL (e.g., https://s.snackvideo.com/p/j9jKr9dR)
 * @returns {Promise<SnackVideoResponse>} A JSON object containing video links and metadata.
 * @throws {Error} If the URL is invalid or the content is not accessible.
 * @example
 * btch.snackvideo('https://s.snackvideo.com/p/j9jKr9dR').then(data => console.log(data));
 */
export async function snackvideo(url: string): Promise<SnackVideoResponse> {
  try {
    const data = await httpGet('snackvideo', url);
    return { developer: wm, status: true, result: data ?? undefined };
  } catch (err) {
    return { developer: wm, status: false, message: (err as Error).message, note: `Please report issues to ${issues}` };
  }
}

/**
 * Cocofun content downloader
 * @async
 * @function cocofun
 * @memberof Browser
 * 
 * @param {string} url - The Cocofun post URL (e.g., https://www.icocofun.com/share/post/379250110809)
 * @returns {Promise<CocofunResponse>} A JSON object containing media links and post metadata.
 * @throws {Error} If the URL is invalid or the request fails.
 * @example
 * btch.cocofun('https://www.icocofun.com/share/post/379250110809').then(data => console.log(data));
 */
export async function cocofun(url: string): Promise<CocofunResponse> {
  try {
    const data = await httpGet('cocofun', url);
    return { developer: wm, status: true, result: data ?? undefined };
  } catch (err) {
    return { developer: wm, status: false, message: (err as Error).message, note: `Please report issues to ${issues}` };
  }
}

/**
 * Spotify track downloader
 * @async
 * @function spotify
 * @memberof Browser
 * 
 * @param {string} url - The Spotify track URL (e.g., https://open.spotify.com/track/3zakx7RAwdkUQlOoQ7SJRt)
 * @returns {Promise<SpotifyResponse>} A JSON object containing track metadata and download links.
 * @throws {Error} If the URL is invalid or the request fails.
 * @example
 * btch.spotify('https://open.spotify.com/track/3zakx7RAwdkUQlOoQ7SJRt').then(data => console.log(data));
 */
export async function spotify(url: string): Promise<SpotifyResponse> {
  try {
    const data = await httpGet('spotify', url);
    if (data?.res_data) {
      if (data.res_data.server === 'rapidapi') delete data.res_data.server;
      if (data.res_data.message === 'success') delete data.res_data.message;
      if (data.res_data.message) delete data.res_data.message;
      delete data.message;
    }

    return { developer: wm, status: true, result: data?.res_data ?? undefined };
  } catch (err) {
    return { 
      developer: wm,
      status: false,
      message: (err as Error).message,
      note: `Please report issues to ${issues}`
    };
  }
}

/**
 * YouTube search engine
 * @async
 * @function yts
 * @memberof Browser
 * 
 * @param {string} query - The search query for YouTube videos (e.g., Somewhere Only We Know)
 * @returns {Promise<YtsResponse>} A JSON object containing a list of search results.
 * @throws {Error} If the request fails.
 * @example
 * btch.yts('Somewhere Only We Know').then(data => console.log(data));
 */
export async function yts(query: string): Promise<YtsResponse> {
  try {
    const data = await httpGet('yts', query);
    return { developer: wm, status: true, result: data ?? undefined };
  } catch (err) {
    return { developer: wm, status: false, message: (err as Error).message, note: `Please report issues to ${issues}` };
  }
}

/**
 * SoundCloud track downloader
 * @async
 * @function soundcloud
 * @memberof Browser
 * 
 * @param {string} url - The SoundCloud track URL (e.g., https://soundcloud.com/issabella-marchelina/sisa-rasa-mahalini-official-audio)
 * @returns {Promise<SoundCloudResponse>} A JSON object containing track info and download links.
 * @throws {Error} If the URL is invalid or the media is not accessible.
 * @example
 * btch.soundcloud('https://soundcloud.com/issabella-marchelina/sisa-rasa-mahalini-official-audio').then(data => console.log(data));
 */
export async function soundcloud(url: string): Promise<SoundCloudResponse> {
  try {
    const data = await httpGet('soundcloud', url);
    return {
      developer: wm,
      status: true,
      result: data ?? undefined,
    };
  } catch (err) {
    return {
      developer: wm,
      status: false,
      message: (err as Error).message,
      note: `Please report issues to ${issues}`
    };
  }
}

/**
 * Threads (by Instagram) content downloader
 * @async
 * @function threads
 * @memberof Browser
 * 
 * @param {string} url - The Threads post URL (e.g., https://www.threads.net/@cindyyuvia/post/C_Nqx3khgkI/)
 * @returns {Promise<ThreadsResponse>} A JSON object containing media links and post metadata.
 * @throws {Error} If the URL is invalid or the content is not accessible.
 * @example
 * btch.threads('https://www.threads.net/@cindyyuvia/post/C_Nqx3khgkI/').then(data => console.log(data));
 */
export async function threads(url: string): Promise<ThreadsResponse> {
  try {
    const data = await httpGet('threads', url);
    return {
      developer: wm,
      status: true,
      result: data ?? undefined,
    };
  } catch (err) {
    return {
      developer: wm,
      status: false,
      message: (err as Error).message,
      note: `Please report issues to ${issues}`
    };
  }
}

/**
 * Kuaishou (快手) video downloader
 * @async
 * @function kuaishou
 * @memberof Browser
 * 
 * @param {string} url - The Kuaishou video URL (e.g., https://v.kuaishou.com/JT195ZHT)
 * @returns {Promise<KuaishouResponse>} A JSON object containing video metadata and download link.
 * @throws {Error} If the URL is invalid or the request fails.
 * @example
 * btch.kuaishou('https://v.kuaishou.com/JT195ZHT').then(data => console.log(data));
 */
export async function kuaishou(url: string): Promise<KuaishouResponse> {
  try {
    const data = await httpGet('kuaishou', url);
    if (!data || !data.success) {
        return {
            developer: wm,
            status: false,
            message: 'No results found or failed to fetch',
            note: `Please report issues to ${issues}`
        };
    }
    return {
      developer: wm,
      status: true,
      result: data,
    };
  } catch (err) {
    return {
      developer: wm,
      status: false,
      message: (err as Error).message,
      note: `Please report issues to ${issues}`
    };
  }
}

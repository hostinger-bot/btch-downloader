/**
 * Base structure for all API responses.
 * @interface BaseResponse
 * 
 * 
 */
export interface BaseResponse {
    /** Name of the developer or organization. */
    developer: string;
    /** Success status of the request. */
    status?: boolean | string;
    /** Error or info message. */
    message?: string;
    /** Additional note or instructions. */
    note?: string;
    /** Numeric status code. */
    code?: number;
}

/**
 * Response structure for API errors.
 * @interface ApiErrorResponse
 * 
 * 
 * @extends BaseResponse
 */
export interface ApiErrorResponse extends BaseResponse {
    status: boolean;
    message: string;
    note: string;
}

/**
 * Raw response from the TikTok API.
 * @interface TikTokApiResponse
 * 
 * 
 */
export interface TikTokApiResponse {
    status: boolean;
    title: string;
    title_audio: string;
    thumbnail: string;
    video: string[];
    audio: string[];
}

/**
 * Formatted TikTok downloader response.
 * @interface TikTokResponse
 * 
 * 
 * @extends BaseResponse
 */
export interface TikTokResponse extends BaseResponse {
    status?: boolean;
    /** Video title. */
    title?: string;
    /** Audio title. */
    title_audio?: string;
    /** Video thumbnail URL. */
    thumbnail?: string;
    /** List of video download URLs. */
    video?: string[];
    /** List of audio download URLs. */
    audio?: string[];
}

/**
 * Single media item from Instagram.
 * @interface InstagramApiItem
 * 
 * 
 */
export interface InstagramApiItem {
    /** Thumbnail image URL. */
    thumbnail: string;
    /** Media download URL (Video or Image). */
    url: string;
}

/**
 * Formatted Instagram downloader response.
 * @interface InstagramResponse
 * 
 * 
 * @extends BaseResponse
 */
export interface InstagramResponse extends BaseResponse {
    /** List of media items found in the URL. */
    result?: InstagramApiItem[];
}

/**
 * Raw response from the Twitter API.
 * @interface TwitterApiResponse
 * 
 * 
 */
export interface TwitterApiResponse {
    status: boolean;
    title: string;
    url: string;
}

/**
 * Formatted Twitter/X downloader response.
 * @interface TwitterResponse
 * 
 * 
 * @extends BaseResponse
 */
export interface TwitterResponse extends BaseResponse {
    status?: boolean;
    /** Tweet content or video title. */
    title?: string;
    /** Video download URL. */
    url?: string;
}

/**
 * Raw response from the YouTube API.
 * @interface YouTubeApiResponse
 * 
 * 
 */
export interface YouTubeApiResponse {
    status: boolean;
    title: string;
    thumbnail: string;
    author: string;
    mp3: string;
    mp4: string;
}

/**
 * Formatted YouTube downloader response.
 * @interface YouTubeResponse
 * 
 * 
 * @extends BaseResponse
 */
export interface YouTubeResponse extends BaseResponse {
    status?: boolean;
    /** Video title. */
    title?: string;
    /** Video thumbnail URL. */
    thumbnail?: string;
    /** Channel name. */
    author?: string;
    /** MP3 download link. */
    mp3?: string;
    /** MP4 download link. */
    mp4?: string;
}

/**
 * Raw response from the Facebook API.
 * @interface FacebookApiResponse
 * 
 * 
 */
export interface FacebookApiResponse {
    status: boolean;
    /** SD/Normal quality video URL. */
    Normal_video: string;
    /** HD quality video URL. */
    HD: string;
}

/**
 * Formatted Facebook downloader response.
 * @interface FacebookResponse
 * 
 * 
 * @extends BaseResponse
 */
export interface FacebookResponse extends BaseResponse {
    status?: boolean;
    /** SD/Normal quality video link. */
    Normal_video?: string;
    /** HD quality video link. */
    HD?: string;
}

/**
 * Raw metadata from the MediaFire API.
 * @interface MediaFireApiResponse
 * 
 * 
 */
export interface MediaFireApiResponse {
    status: boolean;
    /** File name. */
    filename: string;
    /** File size in bytes. */
    filesize: string;
    /** Human-readable file size. */
    filesizeH?: string;
    /** File extension or category. */
    type?: string;
    /** Date when the file was uploaded. */
    upload_date?: string;
    /** Owner of the file. */
    owner?: string;
    /** File extension. */
    ext?: string;
    /** MIME type. */
    mimetype?: string;
    /** Direct download link. */
    url?: string;
}

/**
 * Formatted MediaFire downloader response.
 * @interface MediaFireResponse
 * 
 * 
 * @extends BaseResponse
 */
export interface MediaFireResponse extends BaseResponse {
    /** File details and download link. */
    result?: MediaFireApiResponse;
}

/**
 * Raw response from the CapCut API.
 * @interface CapCutApiResponse
 * 
 * 
 */
export interface CapCutApiResponse {
    status?: boolean;
    code?: number;
    /** Template title. */
    title?: string;
    /** Direct video URL. */
    originalVideoUrl?: string;
    /** Template cover image. */
    coverUrl?: string;
    /** Author name. */
    authorName?: string;
}

/**
 * Formatted CapCut downloader response.
 * @interface CapCutResponse
 * 
 * 
 * @extends BaseResponse
 */
export interface CapCutResponse extends BaseResponse {
    title?: string;
    originalVideoUrl?: string;
    coverUrl?: string;
    authorName?: string;
}

/**
 * Raw metadata from the Google Drive API.
 * @interface GoogleDriveApiResponse
 * 
 * 
 */
export interface GoogleDriveApiResponse {
    status: boolean;
    /** File name. */
    filename: string;
    /** File size in bytes. */
    filesize: string;
    /** Direct download link. */
    downloadUrl: string;
}

/**
 * Formatted Google Drive downloader response.
 * @interface GoogleDriveResponse
 * 
 * 
 * @extends BaseResponse
 */
export interface GoogleDriveResponse extends BaseResponse {
    /** File details and download link. */
    result?: GoogleDriveApiResponse;
}

/**
 * Single pin content from Pinterest.
 * @interface PinterestPin
 * 
 * 
 */
export interface PinterestPin {
    /** Pin ID. */
    id?: string;
    /** Pin title. */
    title?: string;
    /** Pin description. */
    description?: string;
    /** Link to the pin on Pinterest. */
    pin_url?: string;
    /** Direct image URL. */
    image_url?: string;
    /** List of images in different sizes. */
    images?: {
        original?: string;
        large?: string;
        medium?: string;
        small?: string;
        [key: string]: any;
    };
    /** Video download URL if applicable. */
    video_url?: string | null;
    /** Whether the pin is a video. */
    is_video?: boolean;
    /** Information about the uploader. */
    uploader?: {
        username?: string;
        full_name?: string;
        profile_url?: string;
        avatar_url?: string;
    };
}

/**
 * Raw response from the Pinterest API (Search or URL).
 * @interface PinterestApiResponse
 * 
 * 
 */
export interface PinterestApiResponse {
    /** The search query used. */
    query?: string;
    /** Number of results found. */
    count?: number;
    /** List of pins found. */
    result?: PinterestPin[];
    /** Pin ID. */
    id?: string;
    /** Pin title. */
    title?: string;
    /** Pin description. */
    description?: string;
    /** Associated link. */
    link?: string | null;
    /** Main image URL. */
    image?: string;
    /** Map of images by size. */
    images?: Record<string, {
        width?: number;
        height?: number;
        url?: string;
    }>;
    /** Whether the content is a video. */
    is_video?: boolean;
    /** Direct video URL. */
    video_url?: string | null;
    /** Map of video qualities. */
    videos?: Record<string, {
        url: string;
        width?: number;
        height?: number;
        duration?: number;
        thumbnail?: string;
        captions_urls?: Record<string, any>;
    }>;
    /** User metadata. */
    user?: {
        username?: string;
        full_name?: string;
        profile_url?: string;
        avatar_url?: string;
    };
}

/**
 * Formatted Pinterest downloader response.
 * @interface PinterestResponse
 * 
 * 
 * @extends BaseResponse
 */
export interface PinterestResponse extends BaseResponse {
    /** Media details or search results. */
    result?: PinterestApiResponse;
}

/**
 * Raw response from the AIO (All-In-One) API.
 * @interface AioApiResponse
 * 
 * 
 */
export interface AioApiResponse {
    developer?: string;
    status?: string | boolean;
    mess?: string;
    p?: string;
    result?: {
        status?: string;
        mess?: string;
        p?: string;
        vid?: string;
        title?: string;
        t?: number;
        a?: string;
        links?: {
            [format: string]: {
                [key: string]: {
                    size?: string;
                    f?: string;
                    q?: string;
                    q_text?: string;
                    k?: string;
                    selected?: string;
                };
            };
        };
        related?: { title?: string; contents?: any[] }[];
        [key: string]: any;
    };
    data?: {
        [key: string]: any;
    };
    mp4?: { [key: string]: any };
    mp3?: { [key: string]: any };
    [key: string]: any;
}

/**
 * Formatted AIO downloader response.
 * @interface AioResponse
 * 
 * 
 * @extends BaseResponse
 */
export interface AioResponse extends BaseResponse {
    result?: AioApiResponse['result'];
    data?: AioApiResponse['data'];
    mp4?: AioApiResponse['mp4'];
    mp3?: AioApiResponse['mp3'];
}

/**
 * Raw response from the Xiaohongshu API.
 * @interface XiaohongshuApiResponse
 * 
 * 
 */
export interface XiaohongshuApiResponse {
    status?: boolean;
    /** Unique note identifier. */
    noteId?: string;
    /** Author nickname. */
    nickname?: string;
    /** Post title. */
    title?: string;
    /** Post description. */
    desc?: string;
    /** SEO keywords. */
    keywords?: string;
    /** Video duration if applicable. */
    duration?: string;
    /** Social engagement metrics. */
    engagement?: { likes?: string; comments?: string; collects?: string };
    /** List of high-quality image URLs. */
    images?: string[];
    /** List of available download links. */
    downloads?: { quality?: string; url?: string }[];
}

/**
 * Formatted Xiaohongshu downloader response.
 * @interface XiaohongshuResponse
 * 
 * 
 * @extends BaseResponse
 */
export interface XiaohongshuResponse extends BaseResponse {
    /** Post metadata and media links. */
    result?: XiaohongshuApiResponse;
}

/**
 * Raw response from the Douyin API.
 * @interface DouyinApiResponse
 * 
 * 
 */
export interface DouyinApiResponse {
    status?: boolean;
    /** Video/Post title. */
    title?: string;
    /** Video thumbnail URL. */
    thumbnail?: string;
    /** List of video/image download links. */
    links?: { quality?: string; url?: string }[];
}

/**
 * Formatted Douyin downloader response.
 * @interface DouyinResponse
 * 
 * 
 * @extends BaseResponse
 */
export interface DouyinResponse extends BaseResponse {
    /** Post metadata and media links. */
    result?: DouyinApiResponse;
}

/**
 * Raw response from the SnackVideo API.
 * @interface SnackVideoApiResponse
 * 
 * 
 */
export interface SnackVideoApiResponse {
    status?: boolean;
    url?: string;
    title?: string;
    description?: string;
    thumbnail?: string;
    uploadDate?: string;
    videoUrl?: string;
    duration?: string;
    interaction?: { views?: number; likes?: number; shares?: number };
    creator?: { name?: string; profileUrl?: string; bio?: string };
}

/**
 * Formatted SnackVideo downloader response.
 * @interface SnackVideoResponse
 * 
 * 
 * @extends BaseResponse
 */
export interface SnackVideoResponse extends BaseResponse {
    result?: SnackVideoApiResponse;
}

/**
 * Raw response from the Cocofun API.
 * @interface CocofunApiResponse
 * 
 * 
 */
export interface CocofunApiResponse {
    status?: boolean;
    /** Topic/Category. */
    topic?: string;
    /** Video caption. */
    caption?: string;
    /** View count. */
    play?: number;
    /** Like count. */
    like?: number;
    /** Share count. */
    share?: number;
    /** Duration in seconds. */
    duration?: number;
    /** Thumbnail URL. */
    thumbnail?: string;
    /** Watermarked video URL. */
    watermark?: string;
    /** No-watermark video URL. */
    no_watermark?: string;
}

/**
 * Formatted Cocofun downloader response.
 * @interface CocofunResponse
 * 
 * 
 * @extends BaseResponse
 */
export interface CocofunResponse extends BaseResponse {
    result?: CocofunApiResponse;
}

/**
 * Single audio format from Spotify.
 * @interface SpotifyFormat
 * 
 * 
 */
export interface SpotifyFormat {
    status: boolean;
    /** Download URL. */
    url: string;
    /** File size. */
    filesize: string | number;
    /** Audio quality. */
    quality: string;
    /** Audio codec. */
    acodec: string;
    /** Video codec (usually empty for spotify). */
    vcodec: string;
    /** File extension. */
    ext: string;
    /** Download protocol. */
    protocol: string;
}

/**
 * Internal Spotify API response metadata.
 * @interface SpotifyApiResponse
 * 
 * 
 */
export interface SpotifyApiResponse {
    status?: boolean;
    /** Track title. */
    title?: string;
    /** Source platform. */
    source?: string;
    /** Server identifier. */
    server?: string;
    /** Album artwork URL. */
    thumbnail?: string;
    /** Duration in seconds. */
    duration?: number;
    message?: string;
    subtitles?: string[];
    /** List of available audio formats. */
    formats?: SpotifyFormat[];
}

/**
 * Raw container for Spotify API data.
 * @interface SpotifyApiRaw
 * 
 * 
 */
export interface SpotifyApiRaw {
    res_data: SpotifyApiResponse;
    message?: string;
}

/**
 * Formatted Spotify downloader response.
 * @interface SpotifyResponse
 * 
 * 
 * @extends BaseResponse
 */
export interface SpotifyResponse extends BaseResponse {
    /** Track metadata and download links. */
    result?: SpotifyApiResponse;
}

/**
 * Raw result from YouTube search.
 * @interface YtsApiResponse
 * 
 * 
 */
export interface YtsApiResponse {
    status?: boolean;
    /** Video title. */
    title?: string;
    /** YouTube URL. */
    url?: string;
    /** YouTube video ID. */
    videoId?: string;
    /** Channel name. */
    author?: string;
    authorId?: string;
    authorUrl?: string;
    /** Video description snippet. */
    description?: string;
    /** Human-readable duration (e.g., "3:45"). */
    duration?: string;
    /** Total view count. */
    views?: number;
    /** Time elapsed since upload. */
    uploadedAt?: string;
    /** Video thumbnail URL. */
    thumbnail?: string;
    /** Type of result (video, channel, etc.). */
    type?: string;
}

/**
 * Formatted YouTube search response.
 * @interface YtsResponse
 * 
 * 
 * @extends BaseResponse
 */
export interface YtsResponse extends BaseResponse {
    /** List of search results. */
    result?: YtsApiResponse;
}

/**
 * Raw response from the SoundCloud API.
 * @interface SoundCloudApiResponse
 * 
 * 
 */
export interface SoundCloudApiResponse {
    status?: boolean;
    /** Track title. */
    title?: string;
    /** Artwork/Thumbnail URL. */
    thumbnail?: string;
    /** Direct audio URL. */
    audio?: string;
    /** MP3 download link. */
    downloadMp3?: string;
    /** Artwork download link. */
    downloadArtwork?: string;
}

/**
 * Formatted SoundCloud downloader response.
 * @interface SoundCloudResponse
 * 
 * 
 * @extends BaseResponse
 */
export interface SoundCloudResponse extends BaseResponse {
    /** Track metadata and audio links. */
    result?: SoundCloudApiResponse;
}

/**
 * Raw response from the Threads API.
 * @interface ThreadsApiResponse
 * 
 * 
 */
export interface ThreadsApiResponse {
  status: boolean;
  /** Content type (image or video). */
  type: 'image' | 'video';
  /** Main image or thumbnail URL. */
  image: string;
  /** Video URL if type is 'video'. */
  video?: string;
}

/**
 * Formatted Threads downloader response.
 * @interface ThreadsResponse
 * 
 * 
 * @extends BaseResponse
 */
export interface ThreadsResponse extends BaseResponse {
  /** Post media and metadata. */
  result?: ThreadsApiResponse;
}

/**
 * Raw response from the Kuaishou API.
 * @interface KuaishouApiResponse
 * 
 * 
 */
export interface KuaishouApiResponse {
    success: boolean;
    /** Video download URL. */
    videoUrl: string;
    /** Video title. */
    title: string;
    /** Author nickname. */
    author: string;
    /** Author username. */
    username: string;
    likeCount: number;
    commentCount: number;
    viewCount: number;
    width: number;
    height: number;
    /** Duration in milliseconds. */
    duration: number;
    /** Raw source URL. */
    rawUrl: string;
}

/**
 * Formatted Kuaishou downloader response.
 * @interface KuaishouResponse
 * 
 * 
 * @extends BaseResponse
 */
export interface KuaishouResponse extends BaseResponse {
    status?: boolean;
    /** Video details and download link. */
    result?: KuaishouApiResponse;
}

/**
 * Configuration structure for the SDK.
 * @interface VersionConfig
 * 
 * 
 */
export interface VersionConfig {
    /** Global configuration settings. */
    config: {
        /** The base URL for all API requests. */
        baseUrl: string;
    };
    /** URL for reporting bugs or issues. */
    issues: string;
}

/**
 * Generic HTTP response wrapper.
 * @interface HttpResponse
 * 
 * 
 * @template T
 */
export interface HttpResponse<T> {
  /** HTTP status code. */
  status: number;
  /** HTTP status text. */
  statusText: string;
  /** The response payload. */
  data: T;
}
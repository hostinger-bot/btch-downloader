export interface BaseResponse {
    developer: string;
    status?: boolean | string;
    message?: string;
    note?: string;
    code?: number;
}

export interface ApiErrorResponse extends BaseResponse {
    status: boolean;
    message: string;
    note: string;
}

export interface TikTokApiResponse {
    status: boolean;
    title: string;
    title_audio: string;
    thumbnail: string;
    video: string[];
    audio: string[];
}

export interface TikTokResponse extends BaseResponse {
    status?: boolean;
    title?: string;
    title_audio?: string;
    thumbnail?: string;
    video?: string[];
    audio?: string[];
}

export interface InstagramApiItem {
    thumbnail: string;
    url: string;
}

export interface InstagramResponse extends BaseResponse {
    result?: InstagramApiItem[];
}

export interface TwitterApiResponse {
    status: boolean;
    title: string;
    url: string;
}

export interface TwitterResponse extends BaseResponse {
    status?: boolean;
    title?: string;
    url?: string;
}

export interface YouTubeApiResponse {
    status: boolean;
    title: string;
    thumbnail: string;
    author: string;
    mp3: string;
    mp4: string;
}

export interface YouTubeResponse extends BaseResponse {
    status?: boolean;
    title?: string;
    thumbnail?: string;
    author?: string;
    mp3?: string;
    mp4?: string;
}

export interface FacebookApiResponse {
    status: boolean;
    Normal_video: string;
    HD: string;
}

export interface FacebookResponse extends BaseResponse {
    status?: boolean;
    Normal_video?: string;
    HD?: string;
}

export interface MediaFireApiResponse {
    status: boolean;
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

export interface MediaFireResponse extends BaseResponse {
    result?: MediaFireApiResponse;
}

export interface CapCutApiResponse {
    status?: boolean;
    code?: number;
    title?: string;
    originalVideoUrl?: string;
    coverUrl?: string;
    authorName?: string;
}

export interface CapCutResponse extends BaseResponse {
    title?: string;
    originalVideoUrl?: string;
    coverUrl?: string;
    authorName?: string;
}

export interface GoogleDriveApiResponse {
    status: boolean;
    filename: string;
    filesize: string;
    downloadUrl: string;
}

export interface GoogleDriveResponse extends BaseResponse {
    result?: GoogleDriveApiResponse;
}

export interface PinterestPin {
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
}

export interface PinterestApiResponse {
    query?: string;
    count?: number;
    result?: PinterestPin[];
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

export interface PinterestResponse extends BaseResponse {
    result?: PinterestApiResponse;
}

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

export interface AioResponse extends BaseResponse {
    result?: AioApiResponse['result'];
    data?: AioApiResponse['data'];
    mp4?: AioApiResponse['mp4'];
    mp3?: AioApiResponse['mp3'];
}

export interface XiaohongshuApiResponse {
    status?: boolean;
    noteId?: string;
    nickname?: string;
    title?: string;
    desc?: string;
    keywords?: string;
    duration?: string;
    engagement?: { likes?: string; comments?: string; collects?: string };
    images?: string[];
    downloads?: { quality?: string; url?: string }[];
}

export interface XiaohongshuResponse extends BaseResponse {
    result?: XiaohongshuApiResponse;
}

export interface DouyinApiResponse {
    status?: boolean;
    title?: string;
    thumbnail?: string;
    links?: { quality?: string; url?: string }[];
}

export interface DouyinResponse extends BaseResponse {
    result?: DouyinApiResponse;
}

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

export interface SnackVideoResponse extends BaseResponse {
    result?: SnackVideoApiResponse;
}

export interface CocofunApiResponse {
    status?: boolean;
    topic?: string;
    caption?: string;
    play?: number;
    like?: number;
    share?: number;
    duration?: number;
    thumbnail?: string;
    watermark?: string;
    no_watermark?: string;
}

export interface CocofunResponse extends BaseResponse {
    result?: CocofunApiResponse;
}

export interface SpotifyFormat {
    status: boolean;
    url: string;
    filesize: string | number;
    quality: string;
    acodec: string;
    vcodec: string;
    ext: string;
    protocol: string;
}

export interface SpotifyApiResponse {
    status?: boolean;
    title?: string;
    source?: string;
    server?: string;
    thumbnail?: string;
    duration?: number;
    message?: string;
    subtitles?: string[];
    formats?: SpotifyFormat[];
}

export interface SpotifyApiRaw {
    res_data: SpotifyApiResponse;
    message?: string;
}

export interface SpotifyResponse extends BaseResponse {
    result?: SpotifyApiResponse;
}

export interface YtsApiResponse {
    status?: boolean;
    title?: string;
    url?: string;
    videoId?: string;
    author?: string;
    authorId?: string;
    authorUrl?: string;
    description?: string;
    duration?: string;
    views?: number;
    uploadedAt?: string;
    thumbnail?: string;
    type?: string;
}

export interface YtsResponse extends BaseResponse {
    result?: YtsApiResponse;
}

export interface SoundCloudApiResponse {
    status?: boolean;
    title?: string;
    thumbnail?: string;
    audio?: string;
    downloadMp3?: string;
    downloadArtwork?: string;
}

export interface SoundCloudResponse extends BaseResponse {
    result?: SoundCloudApiResponse;
}

export interface ThreadsApiResponse {
  status: boolean;
  type: 'image' | 'video';
  image: string;
  video?: string;
}

export interface ThreadsResponse extends BaseResponse {
  result?: ThreadsApiResponse;
}

export interface VersionConfig {
    config: {
        baseUrl: string;
    };
    issues: string;
}

export interface HttpResponse<T> {
  status: number;
  statusText: string;
  data: T;
}
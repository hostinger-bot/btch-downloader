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
    title: string;
    title_audio: string;
    thumbnail: string;
    video: string[];
    audio: string[];
}

export interface TikTokResponse extends BaseResponse {
    title?: string;
    title_audio?: string;
    thumbnail?: string;
    video?: string[] | null;
    audio?: string[] | null;
}

export interface InstagramApiItem {
    thumbnail: string;
    url: string;
    resolution: string | null;
    shouldRender?: boolean;
}

export interface InstagramResponse extends BaseResponse {
    result: InstagramApiItem[] | null;
}

export interface TwitterApiResponse {
    title: string;
    url: string;
}

export interface TwitterResponse extends BaseResponse {
    title?: string;
    url?: string;
}

export interface YouTubeApiResponse {
    title: string;
    thumbnail: string;
    author: string;
    mp3: string;
    mp4: string;
}

export interface YouTubeResponse extends BaseResponse {
    title?: string;
    thumbnail?: string;
    author?: string;
    mp3?: string | null;
    mp4?: string | null;
}

export interface FacebookApiResponse {
    Normal_video: string;
    HD: string;
}

export interface FacebookResponse extends BaseResponse {
    Normal_video?: string | null;
    HD?: string | null;
}

export interface MediaFireApiResponse {
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
    result: MediaFireApiResponse | null;
}

export interface CapCutApiResponse {
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
    filename: string;
    filesize: string;
    downloadUrl: string;
}

export interface GoogleDriveResponse extends BaseResponse {
    result: GoogleDriveApiResponse | null;
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
    result?: PinterestPin[] | null;
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
    result: PinterestApiResponse | null;
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
    } | null;
    data?: {
        [key: string]: any;
    } | null;
    mp4?: { [key: string]: any } | null;
    mp3?: { [key: string]: any } | null;
    [key: string]: any;
}

export interface AioResponse extends BaseResponse {
    result: AioApiResponse['result'] | null;
    data: AioApiResponse['data'] | null;
    mp4: AioApiResponse['mp4'] | null;
    mp3: AioApiResponse['mp3'] | null;
}

export interface XiaohongshuApiResponse {
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
    result: XiaohongshuApiResponse | null;
}

export interface DouyinApiResponse {
    title?: string;
    thumbnail?: string;
    links?: { quality?: string; url?: string }[];
}

export interface DouyinResponse extends BaseResponse {
    result: DouyinApiResponse | null;
}

export interface SnackVideoApiResponse {
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
    result: SnackVideoApiResponse | null;
}

export interface CocofunApiResponse {
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
    result: CocofunApiResponse | null;
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
    data: T | null;
}
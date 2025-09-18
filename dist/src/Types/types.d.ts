export interface BaseResponse {
    developer: string;
    status?: boolean;
    message?: string;
    note?: string;
    code?: number;
}
export interface InstagramItem {
    thumbnail: string;
    url: string;
    resolution?: string;
    shouldRender?: boolean;
}
export interface InstagramResponse extends BaseResponse {
    result?: InstagramItem[];
}
export interface TikTokResponse extends BaseResponse {
    title?: string;
    title_audio?: string;
    thumbnail?: string;
    video?: string[];
    audio?: string[];
}
export interface TwitterResponse extends BaseResponse {
    title?: string;
    url?: string;
}
export interface YouTubeResponse extends BaseResponse {
    title?: string;
    thumbnail?: string;
    author?: string;
    mp3?: string;
    mp4?: string;
}
export interface FacebookResponse extends BaseResponse {
    Normal_video?: string;
    HD?: string;
}
export interface MediaFireResponse extends BaseResponse {
    result?: {
        filename: string;
        filesize: string;
        filesizeH?: string;
        type?: string;
        upload_date?: string;
        owner?: string;
        ext?: string;
        mimetype?: string;
        url?: string;
    };
}
export interface CapCutResponse extends BaseResponse {
    title?: string;
    originalVideoUrl?: string;
    coverUrl?: string;
    authorName?: string;
}
export interface GoogleDriveResponse extends BaseResponse {
    result?: {
        filename: string;
        filesize: string;
        downloadUrl: string;
    };
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
export interface AioResponse extends BaseResponse {
    result?: {
        status?: string;
        mess?: string;
        p?: string;
        vid?: string;
        title?: string;
        t?: number;
        a?: string;
        links?: {
            mp4?: {
                [key: string]: {
                    size?: string;
                    f?: string;
                    q?: string;
                    q_text?: string;
                    k?: string;
                    selected?: string;
                };
            };
            m4a?: {
                [key: string]: {
                    size?: string;
                    f?: string;
                    q?: string;
                    q_text?: string;
                    k?: string;
                };
            };
            mp3?: {
                [key: string]: {
                    size?: string;
                    f?: string;
                    q?: string;
                    q_text?: string;
                    k?: string;
                };
            };
        };
        related?: {
            title?: string;
            contents?: any[];
        }[];
    };
}
export interface PinterestResponse extends BaseResponse {
    result?: {
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
    };
}

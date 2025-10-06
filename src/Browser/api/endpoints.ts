import { httpGet, developer } from './http';

const wm = developer;
const issues = 'https://github.com/hostinger-bot/btch-downloader/issues';

// Instagram
export async function igdl(url: string) {
  try {
    const data = await httpGet('igdl', url);
    if (!data || data.length === 0) {
      return { developer: wm, status: false, message: 'No results found', note: `Please report issues to ${issues}`, result: [] };
    }
    return {
      developer: wm,
      status: true,
      result: data.map(item => ({
        thumbnail: item?.thumbnail || '',
        url: item?.url || '',
        resolution: item?.resolution ?? null,
        shouldRender: item?.shouldRender ?? false,
      })),
    };
  } catch (err) {
    return { developer: wm, status: false, message: (err as Error).message, note: `Please report issues to ${issues}`, result: [] };
  }
}

// TikTok
export async function ttdl(url: string) {
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
    return { developer: wm, status: false, message: (err as Error).message, note: `Please report issues to ${issues}`, result: [] };
  }
}

// Twitter
export async function twitter(url: string) {
  try {
    const data = await httpGet('twitter', url);
    return {
      developer: wm,
      status: true,
      title: data?.title ?? undefined,
      url: data?.url ?? undefined,
    };
  } catch (err) {
    return { developer: wm, status: false, message: (err as Error).message, note: `Please report issues to ${issues}`, result: [] };
  }
}

// YouTube
export async function youtube(url: string) {
  try {
    const data = await httpGet('youtube', url);
    return {
      developer: wm,
      status: true,
      title: data?.title ?? undefined,
      thumbnail: data?.thumbnail ?? undefined,
      author: data?.author ?? undefined,
      mp3: data?.mp3 ?? null,
      mp4: data?.mp4 ?? null,
    };
  } catch (err) {
    return { developer: wm, status: false, message: (err as Error).message, note: `Please report issues to ${issues}`, result: [] };
  }
}

// Facebook
export async function fbdown(url: string) {
  try {
    const data = await httpGet('fbdown', url);
    return {
      developer: wm,
      status: true,
      Normal_video: data?.Normal_video ?? null,
      HD: data?.HD ?? null,
    };
  } catch (err) {
    return { developer: wm, status: false, message: (err as Error).message, note: `Please report issues to ${issues}`, result: [] };
  }
}

// MediaFire
export async function mediafire(url: string) {
  try {
    const data = await httpGet('mediafire', url);
    return { developer: wm, status: true, result: data ?? null };
  } catch (err) {
    return { developer: wm, status: false, message: (err as Error).message, note: `Please report issues to ${issues}`, result: [] };
  }
}

// CapCut
export async function capcut(url: string) {
  try {
    const data = await httpGet('capcut', url);
    return { developer: wm, status: true, ...data };
  } catch (err) {
    return { developer: wm, status: false, message: (err as Error).message, note: `Please report issues to ${issues}`, result: [] };
  }
}

// Google Drive
export async function gdrive(url: string) {
  try {
    const data = await httpGet('gdrive', url);
    return { developer: wm, status: true, result: data ?? null };
  } catch (err) {
    return { developer: wm, status: false, message: (err as Error).message, note: `Please report issues to ${issues}`, result: [] };
  }
}

// Pinterest
export async function pinterest(query: string) {
  try {
    const data = await httpGet('pinterest', query);
    return { developer: wm, status: true, result: data ?? null };
  } catch (err) {
    return { developer: wm, status: false, message: (err as Error).message, note: `Please report issues to ${issues}`, result: [] };
  }
}

// AIO
export async function aio(url: string) {
  try {
    const data = await httpGet('aio', url);
    return {
      developer: wm,
      status: true,
      result: data?.result ?? null,
      data: data?.data ?? null,
      mp4: data?.mp4 ?? null,
      mp3: data?.mp3 ?? null,
    };
  } catch (err) {
    return {
      developer: wm,
      status: false,
      message: (err as Error).message,
      note: `Please report issues to ${issues}`,
      result: [],
      data: null,
      mp4: null,
      mp3: null,
    };
  }
}

// Xiaohongshu
export async function xiaohongshu(url: string) {
  try {
    const data = await httpGet('rednote', url);
    if (!data || !data.noteId) {
      return { developer: wm, status: false, message: 'No results found', note: `Please report issues to ${issues}`, result: [] };
    }
    return { developer: wm, status: true, result: data };
  } catch (err) {
    return { developer: wm, status: false, message: (err as Error).message, note: `Please report issues to ${issues}`, result: [] };
  }
}

// Douyin
export async function douyin(url: string) {
  try {
    const data = await httpGet('douyin', url);
    return { developer: wm, status: true, result: data ?? null };
  } catch (err) {
    return { developer: wm, status: false, message: (err as Error).message, note: `Please report issues to ${issues}`, result: [] };
  }
}

// SnackVideo
export async function snackvideo(url: string) {
  try {
    const data = await httpGet('snackvideo', url);
    return { developer: wm, status: true, result: data ?? null };
  } catch (err) {
    return { developer: wm, status: false, message: (err as Error).message, note: `Please report issues to ${issues}`, result: [] };
  }
}

// Cocofun
export async function cocofun(url: string) {
  try {
    const data = await httpGet('cocofun', url);
    return { developer: wm, status: true, result: data ?? null };
  } catch (err) {
    return { developer: wm, status: false, message: (err as Error).message, note: `Please report issues to ${issues}`, result: [] };
  }
}
import { httpGet } from './http';

// Instagram
export async function igdl(url: string) {
  try {
    return await httpGet('igdl', url);
  } catch (err) {
    return { status: false, message: (err as Error).message };
  }
}

// TikTok
export async function ttdl(url: string) {
  try {
    return await httpGet('ttdl', url);
  } catch (err) {
    return { status: false, message: (err as Error).message };
  }
}

// Twitter
export async function twitter(url: string) {
  try {
    return await httpGet('twitter', url);
  } catch (err) {
    return { status: false, message: (err as Error).message };
  }
}

// YouTube
export async function youtube(url: string) {
  try {
    return await httpGet('youtube', url);
  } catch (err) {
    return { status: false, message: (err as Error).message };
  }
}

// Facebook
export async function fbdown(url: string) {
  try {
    return await httpGet('fbdown', url);
  } catch (err) {
    return { status: false, message: (err as Error).message };
  }
}

// MediaFire
export async function mediafire(url: string) {
  try {
    return await httpGet('mediafire', url);
  } catch (err) {
    return { status: false, message: (err as Error).message };
  }
}

// CapCut
export async function capcut(url: string) {
  try {
    return await httpGet('capcut', url);
  } catch (err) {
    return { status: false, message: (err as Error).message };
  }
}

// Google Drive
export async function gdrive(url: string) {
  try {
    return await httpGet('gdrive', url);
  } catch (err) {
    return { status: false, message: (err as Error).message };
  }
}

// Pinterest
export async function pinterest(query: string) {
  try {
    return await httpGet('pinterest', query);
  } catch (err) {
    return { status: false, message: (err as Error).message };
  }
}

// AIO
export async function aio(url: string) {
  try {
    return await httpGet('aio', url);
  } catch (err) {
    return { status: false, message: (err as Error).message };
  }
}

// Xiaohongshu
export async function xiaohongshu(url: string) {
  try {
    return await httpGet('rednote', url);
  } catch (err) {
    return { status: false, message: (err as Error).message };
  }
}

// Douyin
export async function douyin(url: string) {
  try {
    return await httpGet('douyin', url);
  } catch (err) {
    return { status: false, message: (err as Error).message };
  }
}

// SnackVideo
export async function snackvideo(url: string) {
  try {
    return await httpGet('snackvideo', url);
  } catch (err) {
    return { status: false, message: (err as Error).message };
  }
}

// Cocofun
export async function cocofun(url: string) {
  try {
    return await httpGet('cocofun', url);
  } catch (err) {
    return { status: false, message: (err as Error).message };
  }
}

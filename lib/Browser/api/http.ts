import configData from '../../../src/Defaults/site';
import watermark from '../../../src/Watermark/config';
import pkg from '../../../package.json';

export const API_URL = configData.config.baseUrl;
export const developer = watermark.dev;
export const issues = configData.issues;
export const VERSION = pkg.version;

export async function httpGet(endpoint: string, param: string) {
  const url = `${API_URL}/${endpoint}?url=${encodeURIComponent(param)}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: Request failed`);
  }
  try {
    return await res.json();
  } catch {
    return await res.text();
  }
}

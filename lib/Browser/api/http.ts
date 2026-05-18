export const API_URL = 'https://backend1.tioo.eu.org';
export const developer = 'prm2.0';
export const issues = 'https://github.com/hostinger-bot/btch-downloader/issues';

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
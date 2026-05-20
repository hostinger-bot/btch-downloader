/**
 * Internal HTTP utilities for the browser library.
 * @module BrowserInternal
 */

import configData from '../../../src/Defaults/site';
import watermark from '../../../src/Watermark/config';
import pkg from '../../../package.json';

/**
 * The base URL for the backend API.
 * @type {string}
 * @memberof module:BrowserInternal
 */
export const API_URL = configData.config.baseUrl;

/**
 * The developer signature for the library.
 * @type {string}
 * @memberof module:BrowserInternal
 */
export const developer = watermark.dev;

/**
 * The URL for reporting issues.
 * @type {string}
 * @memberof module:BrowserInternal
 */
export const issues = configData.issues;

/**
 * The current version of the library.
 * @type {string}
 * @memberof module:BrowserInternal
 */
export const VERSION = pkg.version;

/**
 * Performs a GET request to the backend API.
 * @async
 * @function httpGet
 * @memberof module:BrowserInternal
 * @param {string} endpoint - The API endpoint to call.
 * @param {string} param - The parameter (usually a URL or search query) to pass to the endpoint.
 * @returns {Promise<any>} A promise that resolves to the JSON or text response from the API.
 * @throws {Error} If the HTTP request fails.
 */
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

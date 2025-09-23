"use strict";
import { request } from 'https';
import { URL } from 'url';

interface CustomResponse<T> {
    status: number;
    statusText: string;
    data: T;
}

/**
 * Custom HTTP GET function using Node.js https module
 * @private
 * @async
 * @function HttpGet
 * @param {string} endpoint - API endpoint to call
 * @param {string} url - URL to process
 * @param {string} version - Client version for headers
 * @param {number} timeout - Timeout in milliseconds
 * @param {string} baseUrl - Base URL for the API
 * @returns {Promise<T>} URL response data
 * @throws {Error} When request fails
 * @example
 * const data = await HttpGet('instagram', 'https://instagram.com/p/123', '1.0.0', 60000, baseUrl);
 */
async function HttpGet<T>(endpoint: string, url: string, version: string, timeout: number, baseUrl: string): Promise<T> {
    return new Promise((resolve, reject) => {
        try {
            const BaseUrl = new URL(`${baseUrl}/${endpoint}`);
            BaseUrl.searchParams.append('url', url);
            // Headers
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': `btch/${version}`,
                    'X-Client-Version': version
                },
                timeout: timeout
            };
            const req = request(BaseUrl, options, (res) => {
                let data = '';

                res.on('data', (chunk) => {
                    data += chunk;
                });

                res.on('end', () => {
                    try {
                        if (res.statusCode && (res.statusCode < 200 || res.statusCode >= 300)) {
                            throw new Error(`${res.statusCode} ${res.statusMessage || 'Unknown'}`);
                        }

                        const parsedData: T = JSON.parse(data);
                        resolve(parsedData);
                    } catch (error) {
                        reject(new Error(error instanceof Error ? error.message : 'Unknown error occurred'));
                    }
                });
            });

            req.on('error', (error) => {
                reject(new Error(error.message));
            });

            req.on('timeout', () => {
                req.destroy();
                reject(new Error('Request timed out'));
            });

            req.end();
        } catch (error) {
            reject(new Error(error instanceof Error ? error.message : 'Unknown error occurred'));
        }
    });
}

export { HttpGet };

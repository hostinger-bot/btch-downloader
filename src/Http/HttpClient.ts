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

// New interfaces and types for better type safety
interface HttpClientConfig {
    baseUrl: string;
    version: string;
    timeout?: number;
    defaultHeaders?: Record<string, string>;
}

interface HttpResponse<T> {
    status: number;
    statusText: string;
    data: T;
    headers: Record<string, string>;
}

class HttpError extends Error {
    constructor(
        public status: number,
        message: string,
        public response?: HttpResponse<unknown>
    ) {
        super(message);
        this.name = 'HttpError';
    }
}

/**
 * Professional HTTP Client class with GET and POST methods
 */
class HttpClient {
    private config: HttpClientConfig;

    constructor(config: HttpClientConfig) {
        this.config = {
            timeout: 60000, // Default timeout
            defaultHeaders: {
                'Content-Type': 'application/json',
                'User-Agent': `btch/${config.version}`,
                'X-Client-Version': config.version
            },
            ...config
        };
    }

    /**
     * Performs an HTTP GET request
     * @async
     * @param endpoint - API endpoint to call
     * @param queryParams - Optional query parameters
     * @param customHeaders - Optional custom headers
     * @returns Promise containing the response data
     * @throws HttpError when request fails
     */
    async get<T>(
        endpoint: string,
        queryParams: Record<string, string> = {},
        customHeaders: Record<string, string> = {}
    ): Promise<HttpResponse<T>> {
        return new Promise((resolve, reject) => {
            try {
                const url = new URL(`${this.config.baseUrl}/${endpoint}`);
                Object.entries(queryParams).forEach(([key, value]) => {
                    url.searchParams.append(key, value);
                });
                
                const headers = { ...this.config.defaultHeaders, ...customHeaders };
                
                const options = {
                    method: 'GET',
                    headers,
                    timeout: this.config.timeout
                };

                const req = request(url, options, (res) => {
                    let responseData = '';
                    const responseHeaders = res.headers as Record<string, string>;

                    res.on('data', (chunk) => {
                        responseData += chunk;
                    });

                    res.on('end', () => {
                        try {
                            if (!res.statusCode) {
                                throw new Error('No status code received');
                            }

                            const response: HttpResponse<T> = {
                                status: res.statusCode,
                                statusText: res.statusMessage || 'Unknown',
                                data: responseData ? JSON.parse(responseData) : null,
                                headers: responseHeaders
                            };

                            if (res.statusCode < 200 || res.statusCode >= 300) {
                                throw new HttpError(res.statusCode, res.statusMessage || 'Request failed', response);
                            }

                            resolve(response);
                        } catch (error) {
                            reject(this.handleError(error, res.statusCode));
                        }
                    });
                });

                req.on('error', (error) => {
                    reject(this.handleError(error));
                });

                req.on('timeout', () => {
                    req.destroy();
                    reject(this.handleError(new Error('Request timed out')));
                });

                req.end();
            } catch (error) {
                reject(this.handleError(error));
            }
        });
    }

    /**
     * Performs an HTTP POST request
     * @async
     * @param endpoint - API endpoint to call
     * @param data - Data to send in the request body
     * @param customHeaders - Optional custom headers
     * @returns Promise containing the response data
     * @throws HttpError when request fails
     */
    async post<T, D = unknown>(
        endpoint: string,
        data: D,
        customHeaders: Record<string, string> = {}
    ): Promise<HttpResponse<T>> {
        return new Promise((resolve, reject) => {
            try {
                const url = new URL(`${this.config.baseUrl}/${endpoint}`);
                const headers = { ...this.config.defaultHeaders, ...customHeaders };
                
                const options = {
                    method: 'POST',
                    headers,
                    timeout: this.config.timeout
                };

                const req = request(url, options, (res) => {
                    let responseData = '';
                    const responseHeaders = res.headers as Record<string, string>;

                    res.on('data', (chunk) => {
                        responseData += chunk;
                    });

                    res.on('end', () => {
                        try {
                            if (!res.statusCode) {
                                throw new Error('No status code received');
                            }

                            const response: HttpResponse<T> = {
                                status: res.statusCode,
                                statusText: res.statusMessage || 'Unknown',
                                data: responseData ? JSON.parse(responseData) : null,
                                headers: responseHeaders
                            };

                            if (res.statusCode < 200 || res.statusCode >= 300) {
                                throw new HttpError(res.statusCode, res.statusMessage || 'Request failed', response);
                            }

                            resolve(response);
                        } catch (error) {
                            reject(this.handleError(error, res.statusCode));
                        }
                    });
                });

                req.on('error', (error) => {
                    reject(this.handleError(error));
                });

                req.on('timeout', () => {
                    req.destroy();
                    reject(this.handleError(new Error('Request timed out')));
                });

                // Write request body
                if (data) {
                    req.write(JSON.stringify(data));
                }

                req.end();
            } catch (error) {
                reject(this.handleError(error));
            }
        });
    }

    /**
     * Handles errors and creates proper HttpError instances
     * @private
     */
    private handleError(error: unknown, status?: number): HttpError {
        if (error instanceof HttpError) {
            return error;
        }

        const message = error instanceof Error ? error.message : 'Unknown error occurred';
        return new HttpError(status || 500, message);
    }
}

export { HttpGet };
export type { CustomResponse, HttpClientConfig, HttpResponse, HttpError };
export { HttpClient };
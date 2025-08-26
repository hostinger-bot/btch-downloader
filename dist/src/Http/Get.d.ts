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
 * @returns {Promise<T>} API response data
 * @throws {Error} When request fails
 * @example
 * const data = await HttpGet('instagram', 'https://instagram.com/p/123', '1.0.0', 60000, 'https://api.example.com');
 */
declare function HttpGet<T>(endpoint: string, url: string, version: string, timeout: number, baseUrl: string): Promise<T>;
export { HttpGet };

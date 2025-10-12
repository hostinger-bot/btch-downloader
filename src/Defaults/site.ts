/**
 * Configuration data for the btch-downloader package.
 * @module config
 * @description Defines the configuration settings for the btch-downloader package, including the base URL for API requests and the URL for reporting issues.
 */

/**
 * Interface defining the structure of the configuration data.
 * @interface VersionConfig
 */
interface VersionConfig {
  /**
   * Configuration settings for the application.
   */
  config: {
    /**
     * The base URL for the backend API.
     * @example "https://backend1.tioo.eu.org"
     */
    baseUrl: string;
  };
  /**
   * URL for reporting issues related to the btch-downloader package.
   * @example "https://github.com/hostinger-bot/btch-downloader/issues"
   */
  issues: string;
}

/**
 * The configuration object for the btch-downloader package.
 * @type {VersionConfig}
 */
const configData: VersionConfig = {
  config: {
    baseUrl: 'https://backend1.tioo.eu.org',
  },
  issues: 'https://github.com/hostinger-bot/btch-downloader/issues',
};

export default configData;
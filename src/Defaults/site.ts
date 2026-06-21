/**
 * Configuration data for the btch-downloader package.
 * @module config
 * 
 * @description Defines the configuration settings for the btch-downloader package, including the base URL for API requests and the URL for reporting issues.
 */

import type { VersionConfig } from '../Types';

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
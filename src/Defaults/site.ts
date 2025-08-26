/**
 * Configuration data for the btch-downloader package.
 */
export interface VersionConfig {
    config: {
        baseUrl: string;
    };
    documentation: string;
}

const configData: VersionConfig = {
    config: {
        baseUrl: "https://backend1.tioo.eu.org",
    },
    documentation: "https://www.npmjs.com/package/btch-downloader",
};

export default configData;
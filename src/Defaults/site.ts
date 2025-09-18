/**
 * Configuration data for the btch-downloader package.
 */
export interface VersionConfig {
    config: {
        baseUrl: string;
    };
    issues: string;
}

const configData: VersionConfig = {
    config: {
        baseUrl: "https://backend1.tioo.eu.org",
    },
    issues: "https://github.com/hostinger-bot/btch-downloader/issues",
};

export default configData;
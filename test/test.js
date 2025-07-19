import { igdl } from '../dist/src/index.js';

(async () => {
    try {
        console.log('Testing...');
        const url = 'https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link';
        const result = await igdl(url);
        console.log('[RESPONSE]:', result);
    } catch (error) {
        console.error(error.message);
    }
})();
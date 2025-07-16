const { igdl } = require('../dist/src/index.js');

(async () => {
    try {
        console.log('Testing...');
        let url = 'https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link'
        const result = await igdl(url);
        console.log('Response:', result);
    } catch (error) {
        console.error(error.message);
    }
})();
import { aio } from '../dist/index';

(async () => {
  try {
    console.log('Testing...');
    const url: string = 'https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link';
    const result = await aio(url);
    console.log('[RESPONSE]: ', JSON.stringify(result, null, 4));
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('Unknown error:', error);
    }
  }
})();
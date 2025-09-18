import { aio } from '../dist/src/index';

(async () => {
  try {
    console.log('Testing...');
    const url: string = 'https://vt.tiktok.com/ZSkGPK9Kj/';
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
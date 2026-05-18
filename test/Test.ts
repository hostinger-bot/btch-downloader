import { igdl } from '../dist/index';

(async () => {
  try {
    console.log('Testing...');
    const url: string = 'https://www.instagram.com/reel/DKPtUL_S9Nh/?igsh=MTE1dTVkb2E4NTFmcw==';
    const result = await igdl(url);
    console.log('[RESPONSE]: ', JSON.stringify(result, null, 2));
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('Unknown error:', error);
    }
  }
})();
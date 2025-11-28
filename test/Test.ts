import { pinterest } from '../dist/index';

(async () => {
  try {
    console.log('Testing...');
    const url: string = 'https://pin.it/16CatjvXO';
    const result = await pinterest(url);
    console.log('[RESPONSE]: ', JSON.stringify(result, null, 4));
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('Unknown error:', error);
    }
  }
})();
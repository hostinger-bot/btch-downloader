import { yts } from '../dist/index';

(async () => {
  try {
    console.log('Testing...');
    const query: string = 'cinta dalam doa';
    const result = await yts(query);
    console.log('[RESPONSE]: ', JSON.stringify(result, null, 4));
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('Unknown error:', error);
    }
  }
})();
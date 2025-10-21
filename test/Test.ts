import { spotify } from '../dist/index';

(async () => {
  try {
    console.log('Testing...');
    const url: string = 'https://open.spotify.com/track/3zakx7RAwdkUQlOoQ7SJRt';
    const result = await spotify(url);
    console.log('[RESPONSE]: ', JSON.stringify(result, null, 4));
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('Unknown error:', error);
    }
  }
})();
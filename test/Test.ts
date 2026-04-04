import { kuaishou } from '../dist/index';

(async () => {
  try {
    console.log('Testing...');
    const url: string = 'https://v.kuaishou.com/JT195ZHT';
    const result = await kuaishou(url);
    console.log('[RESPONSE]: ', JSON.stringify(result, null, 4));
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('Unknown error:', error);
    }
  }
})();
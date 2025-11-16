import { threads } from '../dist/index';

(async () => {
  try {
    console.log('Testing...');
    const url: string = 'https://www.threads.com/@karokpru/post/DRGxFAREuQo?xmt=AQF05skrhZ5VkqCayTteuwBMedfbKgTj072d3WHgN-Vx8q8txCbNBn2e0w8Sjo2wsFKWn3Q&slof=1';
    const result = await threads(url);
    console.log('[RESPONSE]: ', JSON.stringify(result, null, 4));
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('Unknown error:', error);
    }
  }
})();
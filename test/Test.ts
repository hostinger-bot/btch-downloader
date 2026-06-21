/**
 * Simple test script for validating the downloader functionality.
 * @module Tests
 */

import { xiaohongshu } from '../src/index';

(async () => {
  try {
    console.log('Testing...');
    const url: string = 'http://xhslink.com/o/8eizn4DZwe5';
    const result = await xiaohongshu(url);
    console.log('[RESPONSE]: ', JSON.stringify(result, null, 2));
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('Unknown error:', error);
    }
  }
})();

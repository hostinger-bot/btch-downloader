import { soundcloud } from '../dist/index';

(async () => {
  try {
    console.log('Testing...');
    const url: string = 'https://soundcloud.com/issabella-marchelina/sisa-rasa-mahalini-official-audio?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing';
    const result = await soundcloud(url);
    console.log('[RESPONSE]: ', JSON.stringify(result, null, 4));
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('Unknown error:', error);
    }
  }
})();
const axios = require('axios');
const { version, config } = require('../package.json');

async function _fetchapi(endpoint, url) {
  try {
    const response = await axios.get(`${config.baseUrl}/${endpoint}`, {
      params: { url },
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': `btch/${version}` 
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${endpoint}: ${error.message}`);
  }
}

// TT
async function ttdl(url) {
  try {
    const data = await _fetchapi('ttdl', url);
    return {
      developer: '@prm2.0',
      title: data.title,
      title_audio: data.title_audio,
      thumbnail: data.thumbnail,
      video: data.video,
      audio: data.audio
    };
  } catch (error) {
    return {
      developer: '@prm2.0',
      status: false,
      message: error.message,
      note: 'Please check the documentation at https://www.npmjs.com/package/btch-downloader'
    };
  }
}

// IG
async function igdl(url) {
  try {
    const data = await _fetchapi('igdl', url);
    if (!data || data.status === false) {
      return { 
        developer: '@prm2.0', 
        status: false, 
        message: data.msg || 'Result Not Found! Check Your Url Now!',
        note: 'Please check the documentation at https://www.npmjs.com/package/btch-downloader'
      };
    }
    
    // Array
    return data.map(item => ({
      developer: '@prm2.0',
      thumbnail: item.thumbnail,
      url: item.url,
      resolution: item.resolution,
      shouldRender: item.shouldRender
    }));
  } catch (error) {
    return {
      developer: '@prm2.0',
      status: false,
      message: 'Request Failed With Code 401',
      note: 'Please check the documentation at https://www.npmjs.com/package/btch-downloader'
    };
  }
}

// X
async function twitter(url) {
  try {
    const data = await _fetchapi('twitter', url);
    return {
      developer: '@prm2.0',
      title: data.title,
      url: data.url
    };
  } catch (error) {
    return {
      developer: '@prm2.0',
      status: false,
      message: error.message,
      note: 'Please check the documentation at https://www.npmjs.com/package/btch-downloader'
    };
  }
}

// YT
async function youtube(url) {
  try {
    const data = await _fetchapi('youtube', url);
    return {
      developer: '@prm2.0',
      title: data.title,
      thumbnail: data.thumbnail,
      author: data.author,
      mp3: data.mp3,
      mp4: data.mp4
    };
  } catch (error) {
    return {
      developer: '@prm2.0',
      status: false,
      message: error.message,
      note: 'Please check the documentation at https://www.npmjs.com/package/btch-downloader'
    };
  }
}

// FB
async function fbdown(url) {
  try {
    const data = await _fetchapi('fbdown', url);
    return {
      developer: '@prm2.0',
      Normal_video: data.Normal_video,
      HD: data.HD
    };
  } catch (error) {
    return {
      developer: '@prm2.0',
      status: false,
      message: error.message,
      note: 'Please check the documentation at https://www.npmjs.com/package/btch-downloader'
    };
  }
}

// AIO
async function aio(url) {
  try {
    const data = await _fetchapi('aio', url);
    return {
      developer: '@prm2.0',
      url: data.url
    };
  } catch (error) {
    return {
      developer: '@prm2.0',
      status: false,
      message: error.message,
      note: 'Please check the documentation at https://www.npmjs.com/package/btch-downloader'
    };
  }
}

module.exports = {
  aio,
  fbdown,
  igdl,
  ttdl,
  twitter,
  youtube,
};

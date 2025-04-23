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
  const data = await _fetchapi('ttdl', url);
  return {
    title: data.title,
    title_audio: data.title_audio,
    thumbnail: data.thumbnail,
    video: data.video,
    audio: data.audio,
    owner_module: '@prm2.0'
  };
}

// IG
async function igdl(url) {
  try {
    const data = await _fetchapi('igdl', url);
    if (!data || data.status === false) {
      return { developer: '@prm2.0', status: false, msg: data.msg || 'Result Not Found! Check Your Url Now!' };
    }
    return data.map(item => ({
      owner_module: '@prm2.0',
      thumbnail: item.thumbnail,
      url: item.url,
      resolution: item.resolution,
      shouldRender: item.shouldRender
    }));
  } catch (error) {
    return 'Request Failed With Code 401';
  }
}

// X
async function twitter(url) {
  try {
    const data = await _fetchapi('twitter', url);
    return {
      title: data.title,
      url: data.url,
      owner_module: '@prm2.0'
    };
  } catch (error) {
    throw error;
  }
}

// YT
async function youtube(url) {
  const data = await _fetchapi('youtube', url);
  return {
    title: data.title,
    thumbnail: data.thumbnail,
    author: data.author,
    mp3: data.mp3,
    mp4: data.mp4
  };
}

// FB
async function fbdown(url) {
  const data = await _fetchapi('fbdown', url);
  return {
    owner_module: '@prm2.0',
    Normal_video: data.Normal_video,
    HD: data.HD
  };
}

// AIO
async function aio(url) {
  const data = await _fetchapi('aio', url);
  return {
    url: data.url
  };
}

module.exports = {
  aio,
  fbdown,
  igdl,
  ttdl,
  twitter,
  youtube,
};

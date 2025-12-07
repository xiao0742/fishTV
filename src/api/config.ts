export const API_CONFIG = {
  baseURL: '/ikun/api.php', // 默认用非凡
  timeout: 10000,
};

export const VIDEO_SOURCES = {
  moyu: {
    name: '摸鱼云️',
    url: '/ikun/api.php'
  },
  feifan: {
    name: '非凡云',
    url: '/ikun/api.php'
  },
  modu: {
    name: '魔都云',
    url: '/modu/api.php'
  },
  youzhi: {
    name: '优质云',
    url: '/youzhi/api.php'
  },
  subocaiji: {
    name: '速播云',
    url: '/subocaiji/api.php'
  },
};

export const setBaseURL = (url: string) => {
  API_CONFIG.baseURL = url;
};
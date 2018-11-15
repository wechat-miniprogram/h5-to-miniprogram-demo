module.exports = {
  index: 'index',
  urlMap: {
    index: 'https://weixin.qq.com/index?a=1&b=2#hash',
  },
  resFilter(src, pageKey) {
    return pageKey === 'index' && src === './index.png' ? 'https://raw.githubusercontent.com/wechat-miniprogram/h5-to-miniprogram-demo/master/h5/index.png' : src
  },
  rem: 58.59375,
}

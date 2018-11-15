module.exports = {
  index: 'index',
  urlMap: {
    index: 'https://weixin.qq.com/index?a=1&b=2#hash',
  },
  resFilter(src, pageKey) {
    return pageKey === 'index' && src === './index.png' ? 'http://juneandgreen.github.io/test/h5-to-miniprogram-demo/demo1/logo.png' : src
  },
  rem: 58.59375,
}

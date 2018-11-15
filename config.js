module.exports = {
  index: 'h5', // 首页
  urlMap: { // 每个页面对应的初始 url，用于 window.location 和 window.history 对象
    h5: 'https://weixin.qq.com/index?a=1&b=2#hash',
  },
  resFilter(src, pageKey) {
    // 资源过滤，用于替换 h5 中使用到的资源路径
    return pageKey === 'h5' && src === './index.png' ? 'https://raw.githubusercontent.com/wechat-miniprogram/h5-to-miniprogram-demo/master/h5/index.png' : src
  },
}

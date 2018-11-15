const path = require('path')
const toMiniprogram = require('h5-to-miniprogram')

toMiniprogram({
  entry: { // 入口 h5 页面路径
    h5: path.join(__dirname, './h5/index.html'),
  },
  output: path.join(__dirname, './miniprogram'), // 输出目录
  config: path.join(__dirname, './config.js'), // 配置文件路径
}).then(res => {
  console.log('done')
}).catch(err => {
  console.error(err)
})

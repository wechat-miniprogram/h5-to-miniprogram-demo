const path = require('path')
const toMiniprogram = require('h5-to-miniprogram')

toMiniprogram({
  entry: {
    h5: path.join(__dirname, './h5/index.html'),
  },
  output: path.join(__dirname, './miniprogram'),
  config: path.join(__dirname, './config.js'),
}).then(res => {
  console.log('done')
}).catch(err => {
  console.error(err)
})

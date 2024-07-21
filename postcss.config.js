// const globalData = require('@csstools/postcss-global-data')
// const customMedia = require('postcss-custom-media')
import globalData from '@csstools/postcss-global-data'
import customMedia from 'postcss-custom-media'

console.log('postcss.config.js')

const config = {
  plugins: [
    globalData({
      files: ['./src/theme.css'],
    }),
    customMedia,
  ],
}

export default config

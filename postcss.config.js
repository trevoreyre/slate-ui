import globalData from '@csstools/postcss-global-data'
import customMedia from 'postcss-custom-media'

const config = {
  plugins: [
    globalData({
      files: ['./src/theme.css'],
    }),
    customMedia,
  ],
}

export default config

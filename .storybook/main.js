module.exports = {
  presets: ['@storybook/addon-docs/preset'],
  addons: [
    // '@storybook/addon-storysource/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
  ],
  stories: ['../src/**/*.stories.(js|mdx)'],
  // webpack: async config => {
  //   config.module.rules.push({
  //     test: /\.stories\.js$/,
  //     loaders: [require.resolve('@storybook/source-loader')],
  //     enforce: 'pre',
  //   })
  //   return config;
  // }
}

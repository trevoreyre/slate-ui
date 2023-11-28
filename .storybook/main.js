/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  framework: { name: '@storybook/web-components-vite' },
  stories: ['../{src,docs}/**/*.mdx', '../{src,docs}/**/*.stories.js'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  docs: { autodocs: true },
}

export default config

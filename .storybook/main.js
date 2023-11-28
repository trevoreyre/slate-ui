/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  framework: { name: '@storybook/web-components-vite' },
  stories: ['../{src,docs}/**/*.mdx', '../{src,docs}/**/*.stories.js'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  docs: { autodocs: true },
  previewHead: (head) => `
    ${head}
    <script async src="https://maps.googleapis.com/maps/api/js?callback=googleMapsCallback&key=AIzaSyBaKhvYlE30Hxxwny_Rkm8-WB7gigy8GaY&libraries=maps,marker&v=beta"></script>
    <script>
      function googleMapsCallback() {
        console.log('Google Maps loaded!')
      }
    </script>
  `,
}

export default config

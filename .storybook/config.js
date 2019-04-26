import { configure, addDecorator, addParameters } from '@storybook/vue'
import { withCssResources } from '@storybook/addon-cssresources'
import { withStyles } from 'storybook-addon-styles/vue'
import AppCss from '../src/AppCss/AppCss.vue'
import Theme from '../src/Theme/Theme.vue'

const withTheme = () => ({
  components: { AppCss, Theme },
  template: `
    <Theme>
      <AppCss />
      <story />
    </Theme>
  `
})

const themeFont = `
<link href="https://fonts.googleapis.com/css?family=Lato:400,600,900" rel="stylesheet" />
`

const backgroundLight = `
<style>
body {
  background: var(--color-background-light);
}
</style>
`

const themeToucheUnderwater = `
<style>
:root {
  --color-background: #f1f3f5;
  --color-divider: rgba(0, 33, 66, 0.24);
}
</style>
`

addDecorator(withCssResources)
addDecorator(withStyles)
addDecorator(withTheme)
addParameters({
  options: {
    panelPosition: 'right'
  },
  styles: {
    padding: '40px'
  },
  cssresources: [{
    id: 'theme-font',
    code: themeFont,
    picked: true
  }, {
    id: 'background-light',
    code: backgroundLight
  }, {
    id: 'theme-touche-underwater',
    code: themeToucheUnderwater
  }],
})

// Automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

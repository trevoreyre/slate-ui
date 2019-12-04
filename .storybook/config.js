import { configure, addDecorator, addParameters } from '@storybook/vue'
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

addDecorator(withStyles)
addDecorator(withTheme)
addParameters({
  options: {
    panelPosition: 'right'
  },
  styles: {
    padding: '40px'
  },
})

// Automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

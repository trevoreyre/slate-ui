import { configure, addDecorator, addParameters } from '@storybook/vue';
import { makeDecorator } from '@storybook/addons'
import AppCss from '../src/AppCss/AppCss.vue'
import Theme from '../src/Theme/Theme.vue'

const withStyles = makeDecorator({
  name: 'withStyles',
  parameterName: 'styles',
  wrapper: (story, context, { parameters }) => {
    return {
      components: { AppCss, Theme },
      template: `
        <Theme>
          <AppCss />
          <div :style="styles">
            <story />
          </div>
        </Theme>
      `,
      data() {
        return {
          styles: {
            ...parameters
          }
        }
      }
    }
  }
})

addDecorator(withStyles)
addParameters({
  options: {
    showPanel: false
  },
  styles: {
    padding: '40px'
  }
})

// Automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

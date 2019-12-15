import Vue from 'vue'
import { addDecorator, addParameters } from '@storybook/vue'
import { withStyles } from 'storybook-addon-styles/vue'
import AppCss from '../src/AppCss/AppCss'
import Theme from '../src/Theme/Theme'
import { iconMixin } from '../src/util/icon'

// Globally register all components to reduce noise in stories
import Button from '../src/Button/Button.vue'
import ButtonIcon from '../src/ButtonIcon/ButtonIcon.vue'
import Icon from '../src/Icon/Icon.vue'

const IconUser = {
  mixins: [iconMixin],
  template: `
    <svg v-bind="iconProps" :class="iconClass">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9 7a3 3 0 116 0 3 3 0 01-6 0zm3-5a5 5 0 100 10 5 5 0 000-10zM8 14a5 5 0 00-5 5v2a1 1 0 102 0v-2a3 3 0 013-3h8a3 3 0 013 3v2a1 1 0 102 0v-2a5 5 0 00-5-5H8z" />
    </svg>
  `,
}

Vue.component('Button', Button)
Vue.component('ButtonIcon', ButtonIcon)
Vue.component('Icon', Icon)
Vue.component('IconUser', IconUser)

const withTheme = () => ({
  components: { AppCss, Theme },
  template: `
    <Theme>
      <AppCss />
      <story />
    </Theme>
  `,
})

addDecorator(withStyles)
addDecorator(withTheme)
addParameters({
  option: {
    panelPosition: 'right',
  },
  docs: {
    inlineStories: true,
  },
  styles: {
    padding: '40px',
  },
})

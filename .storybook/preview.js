import Vue from 'vue'
import { addDecorator, addParameters } from '@storybook/vue'
import SlateUi from '@slate-ui/core'
import { iconMixin } from '@slate-ui/theme'

Vue.use(SlateUi, { prefix: '' })

const IconClose = {
  mixins: [iconMixin],
  template: `
    <svg v-bind="iconProps" :class="iconClass">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7071 6.7071c.3905-.3905.3905-1.0237 0-1.4142-.3905-.3905-1.0237-.3905-1.4142 0L12 10.5858l-5.2929-5.293c-.3905-.3904-1.0237-.3904-1.4142 0-.3905.3906-.3905 1.0238 0 1.4143L10.5858 12l-5.293 5.2929c-.3904.3905-.3904 1.0237 0 1.4142.3906.3905 1.0238.3905 1.4143 0L12 13.4142l5.2929 5.2929c.3905.3905 1.0237.3905 1.4142 0 .3905-.3905.3905-1.0237 0-1.4142L13.4142 12l5.2929-5.2929z" />
    </svg>
  `
}
const IconUser = {
  mixins: [iconMixin],
  template: `
    <svg v-bind="iconProps" :class="iconClass">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9 7a3 3 0 116 0 3 3 0 01-6 0zm3-5a5 5 0 100 10 5 5 0 000-10zM8 14a5 5 0 00-5 5v2a1 1 0 102 0v-2a3 3 0 013-3h8a3 3 0 013 3v2a1 1 0 102 0v-2a5 5 0 00-5-5H8z" />
    </svg>
  `,
}

Vue.component('IconClose', IconClose)
Vue.component('IconUser', IconUser)

const withTheme = () => ({
  template: `
    <Theme>
      <Css />
      <Container size="lg" p="sm">
        <story />
      </Container>
    </Theme>
  `,
})

addDecorator(withTheme)
addParameters({
  option: {
    panelPosition: 'right',
  },
  docs: {
    inlineStories: true,
  },
})

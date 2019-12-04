import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { linkTo } from '@storybook/addon-links'
import Icon from '../Icon/Icon'
import Button from './Button.vue'

const CustomLink = Vue.component('CustomLink', {
  template: `
    <a class="custom-link" style="color: red;"><slot></slot></a>
  `,
})

const UserSvg = Vue.component('UserSvg', {
  template: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 7a3 3 0 116 0 3 3 0 01-6 0zm3-5a5 5 0 100 10 5 5 0 000-10zM8 14a5 5 0 00-5 5v2a1 1 0 102 0v-2a3 3 0 013-3h8a3 3 0 013 3v2a1 1 0 102 0v-2a5 5 0 00-5-5H8z" />
  `,
})

const components = { Button, CustomLink, Icon, UserSvg }

storiesOf('Button', module)
  .add('default', () => ({
    components,
    template: `
      <Button>Button</Button>
    `,
  }))
  .add('theme', () => ({
    components,
    template: `
      <div>
        <Button theme="primary" mr="2xs">Primary button</Button>
        <Button theme="secondary">Secondary button</Button>
      </div>
    `,
  }))
  .add('size', () => ({
    components,
    template: `
      <div>
        <Button size="sm" mr="2xs">Small</Button>
        <Button size="md" mr="2xs">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
  `,
  }))
  .add('icons', () => ({
    components,
    template: `
      <div>
        <Button mr="2xs">
          <Icon size="sm"><UserSvg /></Icon>
          Icon + Text
        </Button>
        <Button>
          <Icon><UserSvg /></Icon>
        </Button>
      </div>
    `,
  }))
  .add('custom tag', () => ({
    components,
    template: `
      <Button as="a" href="#" @click="link">
        Link to default button
      </Button>
    `,
    methods: {
      link: linkTo('Button', e => {
        e.preventDefault()
        return 'default'
      }),
    },
  }))
  .add('custom component', () => ({
    components,
    template: `
      <Button :as="CustomLink" href="#">
        Custom link
      </Button>
    `,
    data() {
      return { CustomLink }
    },
  }))

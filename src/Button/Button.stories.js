import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { linkTo } from '@storybook/addon-links'
import Button from './Button.vue'

const CoolLink = Vue.component('CoolLink', {
  template: `
    <a class="cool-link" style="color: red;"><slot></slot></a>
  `,
})

storiesOf('Button', module)
  .add('default', () => ({
    components: { Button },
    template: `
      <div>
        <Button theme="neutral">Neutral (default)</Button>
        <Button theme="primary">Primary</Button>
        <Button theme="secondary">Secondary</Button>
      </div>
    `,
  }))
  .add('size', () => ({
    components: { Button },
    template: `
      <div>
        <Button theme="primary" size="small">Small</Button>
        <Button theme="primary" size="medium">Medium</Button>
        <Button theme="primary" size="large">Large</Button>
      </div>
  `,
  }))
  .add('type', () => ({
    components: { Button },
    template: `
      <div>
        <Button theme="primary" type="default">Default</Button>
        <Button theme="primary" type="raised">Raised</Button>
        <Button theme="primary" type="flat">Flat</Button>
      </div>
    `,
  }))
  .add('custom tag', () => ({
    components: { Button },
    template: `
      <Button as="a" theme="primary" href="#" @click="link">
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
    components: { Button, CoolLink },
    template: `
      <Button :as="CoolLink" href="#">
        Cool link
      </Button>
    `,
    data() {
      return { CoolLink }
    },
  }))

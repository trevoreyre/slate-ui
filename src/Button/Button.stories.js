import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { linkTo } from '@storybook/addon-links'
import Buttons from '../Buttons/Buttons.vue'
import Button from './Button.vue'

const CoolLink = Vue.component('CoolLink', {
  template: `
    <a class="cool-link" style="color: red;"><slot></slot></a>
  `,
})

storiesOf('Button', module)
  .add('default', () => ({
    components: { Button, Buttons },
    template: `
      <Buttons>
        <Button theme="neutral">Neutral (default)</Button>
        <Button theme="primary">Primary</Button>
        <Button theme="secondary">Secondary</Button>
      </Buttons>
    `,
  }))
  .add('size', () => ({
    components: { Button, Buttons },
    template: `
      <Buttons>
        <Button theme="primary" size="s">Small</Button>
        <Button theme="primary" size="m">Medium</Button>
        <Button theme="primary" size="l">Large</Button>
      </Buttons>
  `,
  }))
  .add('type', () => ({
    components: { Button, Buttons },
    template: `
      <Buttons>
        <Button theme="primary" type="default">Default</Button>
        <Button theme="primary" type="raised">Raised</Button>
        <Button theme="primary" type="flat">Flat</Button>
      </Buttons>
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
  .add('buttons alignment', () => ({
    components: { Button, Buttons },
    template: `
      <div>
        <h2>Left (default)</h2>
        <Buttons align="left">
          <Button theme="primary">Button</Button>
          <Button theme="primary">Button</Button>
          <Button theme="primary">Button</Button>
        </Buttons>
        <h2 style="text-align: center">Center</h2>
        <Buttons align="center">
          <Button theme="primary">Button</Button>
          <Button theme="primary">Button</Button>
          <Button theme="primary">Button</Button>
        </Buttons>
        <h2 style="text-align: right">Right</h2>
        <Buttons align="right">
          <Button theme="primary">Button</Button>
          <Button theme="primary">Button</Button>
          <Button theme="primary">Button</Button>
        </Buttons>
      </div>
    `,
  }))

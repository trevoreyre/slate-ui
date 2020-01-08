import { action } from '@storybook/addon-actions'
import Button from './Button.vue'

export default {
  title: 'Button',
  component: Button,
}

export const basic = () => ({
  template: `
    <Button>Button</Button>
  `,
})

export const theme = () => ({
  template: `
    <div>
      <div class="mb-sm">
        <Button theme="primary" mr="2xs">
          Primary
        </Button>
        <Button theme="secondary">
          Secondary
        </Button>
      </div>
      <div>
        <Button theme="primary" rounded mr="2xs">
          Primary
        </Button>
        <Button theme="secondary" rounded>
          Secondary
        </Button>
      </div>
    </div>
  `,
})

export const size = () => ({
  template: `
    <div>
      <div class="mb-sm">
        <Button size="sm" mr="2xs">
          Small
        </Button>
        <Button size="md" mr="2xs">
          Medium
        </Button>
        <Button size="lg">Large</Button>
      </div>
      <div>
        <Button size="sm" rounded mr="2xs">
          Small
        </Button>
        <Button size="md" rounded mr="2xs">
          Medium
        </Button>
        <Button size="lg" rounded>
          Large
        </Button>
      </div>
    </div>
  `,
})

export const icons = () => {
  return {
    template: `
      <div>
        <Button mr="2xs">
          <IconUser mr="3xs" />
          Leading
        </Button>
        <Button mr="2xs">
          Trailing
          <IconClose ml="3xs" />
        </Button>
        <Button mr="2xs">
          <IconUser mr="3xs" />
          Both
          <IconClose ml="3xs" />
        </Button>
      </div>
    `,
  }
}

export const disabled = () => ({
  template: `
    <div>
      <Button disabled mr="2xs" @click="handleClick">
        Primary
      </Button>
      <Button theme="secondary" disabled mr="2xs" @click="handleClick">
        Secondary
      </Button>
      <Button as="a" href="#" aria-disabled="true" @click="handleClick">
        Link
      </Button>
    </div>
  `,
  methods: {
    handleClick: action('handleClick'),
  },
})

export const customTag = () => ({
  template: `
    <Button as="a" href="#" @click.prevent="handleClick">
      Link
    </Button>
  `,
  methods: {
    handleClick: action('handleClick'),
  },
})

export const customComponent = () => {
  const DangerButton = {
    template: `
      <button style="background: #c23036;" v-on="$listeners">
        DANGER: <slot></slot>
      </button>
    `,
  }

  return {
    template: `
      <Button :as="DangerButton" @click="handleClick">
        Button
      </Button>
    `,
    data() {
      return { DangerButton }
    },
    methods: {
      handleClick: action('handleClick'),
    },
  }
}

import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Container from '../Container/Container.vue'
import Icon from './Icon'

const UserSvg = Vue.component('UserSvg', {
  template: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 7a3 3 0 116 0 3 3 0 01-6 0zm3-5a5 5 0 100 10 5 5 0 000-10zM8 14a5 5 0 00-5 5v2a1 1 0 102 0v-2a3 3 0 013-3h8a3 3 0 013 3v2a1 1 0 102 0v-2a5 5 0 00-5-5H8z" />
  `,
})

const components = { Container, Icon, UserSvg }

storiesOf('Icon', module)
  .add('default', () => ({
    components,
    template: `
      <Icon>
        <UserSvg />
      </Icon>
    `,
  }))
  .add('theme', () => ({
    components,
    template: `
      <div>
        <Container>
          <Icon theme="primary" mr="2xs"><UserSvg /></Icon>
          <Icon theme="secondary" mr="2xs"><UserSvg /></Icon>
        </Container>
        <Container bgColor="brand-primary">
          <Icon theme="primary" mr="2xs"><UserSvg /></Icon>
          <Icon theme="secondary" mr="2xs"><UserSvg /></Icon>
        </Container>
      </div>
    `,
  }))
  .add('size', () => ({
    components,
    template: `
      <div>
        <Icon size="xs" mr="2xs"><UserSvg /></Icon>
        <Icon size="sm" mr="2xs"><UserSvg /></Icon>
        <Icon size="md" mr="2xs"><UserSvg /></Icon>
        <Icon size="lg" mr="2xs"><UserSvg /></Icon>
        <Icon size="xl" mr="2xs"><UserSvg /></Icon>
        <Icon size="2xl" mr="2xs"><UserSvg /></Icon>
        <Icon size="3xl" mr="2xs"><UserSvg /></Icon>
        <Icon size="4xl" mr="2xs"><UserSvg /></Icon>
        <Icon size="5xl"><UserSvg /></Icon>
      </div>
    `,
  }))
  .add('override svg props', () => ({
    components,
    template: `
      <div>
        <Icon aria-hidden="false" viewBox="-4 -4 32 32" class="foo"><UserSvg /></Icon>
      </div>
    `,
  }))

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import Container from '../Container/Container.vue'
import Input from './Input.vue'

const components = { Container, Input }

storiesOf('Input', module)
  .addParameters({ styles: { padding: 0 } })
  .add('default', () => ({
    components,
    template: `
      <div>
        <Container size="sm" p="xl">
          <Input theme="light" placeholder="Placeholder" />
        </Container>
        <Container bgColor="light" size="sm" p="xl">
          <Input placeholder="Placeholder" />
        </Container>
      </div>
    `,
  }))
  .addParameters({ styles: { padding: '40px', maxWidth: '400px' } })
  .add('rounded', () => ({
    components,
    template: `
      <Input rounded theme="light" placeholder="Placeholder" />
    `,
  }))
  .add('v-model', () => ({
    components,
    template: `<Input v-model="value" theme="light" />`,
    data() {
      return {
        value: 'Initial value',
      }
    },
  }))
  .add('input listener', () => ({
    components,
    template: `<Input @input="action" theme="light" />`,
    methods: {
      action: action('input'),
    },
  }))
  .add('native input listener', () => ({
    components,
    template: `<Input @input.native="action" theme="light" />`,
    methods: {
      action: action('input'),
    },
  }))

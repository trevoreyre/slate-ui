import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import Container from '../Container/Container.vue'
import Input from './Input.vue'

storiesOf('Input', module)
  .addParameters({ styles: { padding: 0 } })
  .add('default', () => ({
    components: { Input, Container },
    template: `
      <div>
        <Container size="s" padding="xl">
          <Input theme="light" />
        </Container>
        <Container theme="light" size="s" padding="xl">
          <Input />
        </Container>
      </div>
    `,
  }))
  .addParameters({ styles: { padding: '40px', maxWidth: '400px' } })
  .add('v-model', () => ({
    components: { Input },
    template: `<Input v-model="value" />`,
    data() {
      return {
        value: 'Initial value',
      }
    },
  }))
  .add('input listener', () => ({
    components: { Input },
    template: `<Input @input="action" />`,
    methods: {
      action: action('input'),
    },
  }))
  .add('native input listener', () => ({
    components: { Input },
    template: `<Input @input.native="action" />`,
    methods: {
      action: action('input'),
    },
  }))

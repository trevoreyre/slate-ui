import { storiesOf } from '@storybook/vue'
import Input from './Input.vue'

storiesOf('Input', module)
  .add('default', () => ({
    components: { Input },
    template: `<Input />`,
  }))
  .add('v-model', () => ({
    components: { Input },
    template: `<Input v-model="value" />`,
    data() {
      return {
        value: 'Initial value',
      }
    },
  }))

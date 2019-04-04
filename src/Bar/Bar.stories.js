import { storiesOf } from '@storybook/vue'
import Bar from './Bar.vue'

storiesOf('Bar', module)
  .addParameters({ styles: { padding: 0 } })
  .add('default', () => ({
    components: { Bar },
    template: `
      <Bar>
        <template #left>
          Left slot
        </template>
        <template #center>
          Center slot
        </template>
        <template #right>
          Right slot
        </template>
      </Bar>
    `,
  }))

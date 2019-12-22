import { storiesOf } from '@storybook/vue'
import Card from './Card.vue'

storiesOf('Card', module)
  .add('default', () => ({
    components: { Card },
    template: `
      <Card>
        Some Content
      </Card>
    `,
  }))
  .add('as button', () => ({
    components: { Card },
    template: `
      <div>
        <Card as="button" mr="sm">
          Button card
        </Card>
        <Card as="button">
          Button card
        </Card>
      </div>
    `,
  }))
  .add('shadows', () => ({
    components: { Card },
    template: `
      <div>
        <Card shadow="none" mb="lg">
          No shadow
        </Card>
        <Card shadow="sm" mb="lg">
          Small shadow
        </Card>
        <Card shadow="md" mb="lg">
          Medium shadow
        </Card>
        <Card shadow="lg" mb="lg">
          Large shadow
        </Card>
        <Card shadow="xl" mb="lg">
          XL shadow
        </Card>
        <Card shadow="2xl" mb="lg">
          2XL shadow
        </Card>
        <Card shadow="inner" mb="lg">
          Inner shadow
        </Card>
      </div>
    `,
  }))

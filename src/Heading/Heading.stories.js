import { storiesOf } from '@storybook/vue'
import Container from '../Container/Container.vue'
import Heading from './Heading.vue'

storiesOf('Heading', module).add('default', () => ({
  components: { Container, Heading },
  template: `
    <Container size="m">
      <Heading size="l">Large heading</Heading>
      <Heading size="m">Medium heading (default)</Heading>
      <Heading size="s">Small heading</Heading>
    </Container>
  `,
}))

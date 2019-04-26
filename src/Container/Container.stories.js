import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Heading from '../Heading/Heading.vue'
import Container from './Container.vue'

const LoremIpsum = Vue.component('LoremIpsum', {
  template: `
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto assumenda ut odio nobis? Sapiente nam magni laboriosam, laborum optio accusamus commodi maxime corrupti autem obcaecati assumenda impedit quis dolorum libero.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto assumenda ut odio nobis? Sapiente nam magni laboriosam, laborum optio accusamus commodi maxime corrupti autem obcaecati assumenda impedit quis dolorum libero.
      </p>
    </div>
  `,
})

storiesOf('Container', module)
  .addParameters({
    styles: { padding: 0 },
  })
  .add('default', () => ({
    components: { Container, Heading, LoremIpsum },
    template: `
      <div>
        <Container theme="default" padding="xlarge">
          <Heading>Default</Heading>
          <LoremIpsum />
        </Container>
        <Container theme="light" padding="xlarge">
          <Heading>Light</Heading>
          <LoremIpsum />
        </Container>
      </div>
    `,
  }))

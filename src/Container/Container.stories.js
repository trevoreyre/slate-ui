import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import H2 from '../Typography/H2'
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
    components: { Container, H2, LoremIpsum },
    template: `
    <div>
        <Container theme="default" padding="xlarge">
          <H2>Default</H2>
          <LoremIpsum />
        </Container>
        <Container theme="light" padding="xlarge">
          <H2>Light</H2>
          <LoremIpsum />
        </Container>
      </div>
    `,
  }))

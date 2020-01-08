import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import H2 from '../Typography/H2'
import P from '../Typography/P'
import Container from './Container.vue'

const LoremIpsum = Vue.component('LoremIpsum', {
  components: { P },
  template: `
    <div>
      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto assumenda ut odio nobis? Sapiente nam magni laboriosam, laborum optio accusamus commodi maxime corrupti autem obcaecati assumenda impedit quis dolorum libero.
      </P>
      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto assumenda ut odio nobis? Sapiente nam magni laboriosam, laborum optio accusamus commodi maxime corrupti autem obcaecati assumenda impedit quis dolorum libero.
      </P>
    </div>
  `,
})

const components = { H2, P, Container, LoremIpsum }

storiesOf('Container', module)
  .addParameters({
    styles: { padding: 0 },
  })
  .add('default', () => ({
    components,
    template: `
      <div>
        <Container>
          <H2>Default</H2>
          <LoremIpsum />
        </Container>
        <Container bgColor="light">
          <H2>Light</H2>
          <LoremIpsum />
        </Container>
      </div>
    `,
  }))

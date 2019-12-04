import { storiesOf } from '@storybook/vue'
import Container from '../Container/Container.vue'
import H1 from './H1'
import H2 from './H2'
import H3 from './H3'
import H4 from './H4'
import H5 from './H5'
import H6 from './H6'
import P from './P'
import P2 from './P2'
import Txt from './Txt'
import Txt2 from './Txt2'
import Overline from './Overline'
import Label from './Label'

const components = {
  Container,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  P2,
  Txt,
  Txt2,
  Overline,
  Label,
}

storiesOf('Typography', module)
  .addParameters({ styles: { padding: 0 } })
  .addDecorator(() => ({
    components: { Container },
    template: `
      <Container size="md" p="xl">
        <story />
      </Container>
    `,
  }))
  .add('all', () => ({
    components,
    template: `
    <div>
      <H1 mb="sm">H1: The quick brown fox jumps over the lazy dog</H1>
      <H2 mb="sm">H2: The quick brown fox jumps over the lazy dog</H2>
      <H3 mb="sm">H3: The quick brown fox jumps over the lazy dog</H3>
      <H4 mb="sm">H4: The quick brown fox jumps over the lazy dog</H4>
      <H5 mb="sm">H5: The quick brown fox jumps over the lazy dog</H5>
      <H6 mb="sm">H6: The quick brown fox jumps over the lazy dog</H6>
      <P mb="sm">P: The quick brown fox jumps over the lazy dog</P>
      <P2 mb="sm">P2: The quick brown fox jumps over the lazy dog</P2>
      <Txt mb="sm">Txt: The quick brown fox jumps over the lazy dog</Txt>
      <Txt2 mb="sm">Txt2: The quick brown fox jumps over the lazy dog</Txt2>
      <Overline mb="sm">Overline: The quick brown fox jumps over the lazy dog</Overline>
      <Label>Label: The quick brown fox jumps over the lazy dog</Label>
    </div>
  `,
  }))
  .add('theme', () => ({
    components,
    template: `
      <div>
        <Container>
          <Txt theme="primary" mb="sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde sit numquam expedita magni eius consectetur esse quasi. Doloribus, veniam vero. Ducimus, modi voluptatem debitis rerum voluptatum necessitatibus aut excepturi eum.
          </Txt>
          <Txt theme="secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde sit numquam expedita magni eius consectetur esse quasi. Doloribus, veniam vero. Ducimus, modi voluptatem debitis rerum voluptatum necessitatibus aut excepturi eum.
          </Txt>
        </Container>
        <Container bgColor="brand-primary">
          <Txt theme="primary" mb="sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde sit numquam expedita magni eius consectetur esse quasi. Doloribus, veniam vero. Ducimus, modi voluptatem debitis rerum voluptatum necessitatibus aut excepturi eum.
          </Txt>
          <Txt theme="secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde sit numquam expedita magni eius consectetur esse quasi. Doloribus, veniam vero. Ducimus, modi voluptatem debitis rerum voluptatum necessitatibus aut excepturi eum.
          </Txt>
        </Container>
      </div>
    `,
  }))
  .add('disabled', () => ({
    components,
    template: `
      <div>
        <Container id="poop">
          <Txt disabled>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde sit numquam expedita magni eius consectetur esse quasi. Doloribus, veniam vero. Ducimus, modi voluptatem debitis rerum voluptatum necessitatibus aut excepturi eum.
          </Txt>
        </Container>
        <Container bgColor="brand-primary">
          <Txt disabled>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde sit numquam expedita magni eius consectetur esse quasi. Doloribus, veniam vero. Ducimus, modi voluptatem debitis rerum voluptatum necessitatibus aut excepturi eum.
          </Txt>
        </Container>
      </div>
    `,
  }))
  .add('font props', () => ({
    components,
    template: `
      <H1 fontSize="4xl" fontWeight="bold" lineHeight="lg" letterSpacing="sm">
        The quick brown fox jumps over the lazy dog
      </H1>
    `,
  }))

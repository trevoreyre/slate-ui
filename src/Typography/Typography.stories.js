import { storiesOf } from '@storybook/vue'
import Code from '../Code/Code.vue'
import Container from '../Container/Container.vue'
import Heading from '../Heading/Heading.vue'
import Paragraph from '../Paragraph/Paragraph.vue'
import Text from '../Text/Text.vue'

storiesOf('Typography', module)
  .addParameters({ styles: { padding: 0 } })
  .addDecorator(() => ({
    components: { Container },
    template: `
      <Container size="s">
        <story />
      </Container>
    `,
  }))
  .add('all', () => ({
    components: { Code, Container, Heading, Paragraph, Text },
    template: `
    <div>
      <Heading size="xxl">H1: What Can I Do With Archetype?</Heading>
      <Paragraph>
        Paragraph: Archetype lets designers like you very quickly and easily
        create consistent typography styling and spacing live, in the browser.
        These styles are all underpinned by established typographic best practices
        meaning less guesswork and more harmonious designs.
      </Paragraph>
      <Paragraph>
        Archetype helps you create a design system of consistent, reusable
        components which can be easily implemented as your finished design is
        exported as developer-friendly CSS so everyone's happy!
      </Paragraph>
      <Heading size="xl">H2: Sounds Great, Where Do I Start?</Heading>
      <Paragraph>
        Paragraph: It's easy peasy: 1) Start by selecting a visually compatible
        font pair. 2) Define harmoniously proportioned sizes for all the standard
        typographic elements your design might require. 3) Set the optimal
        vertical spacing of all elements in your design. 4) Tweak and refine
        individual elements to get everything looking exactly the way you want. 5)
        Export as CSS ready to send to a developer. Job Done.
      </Paragraph>
      <Heading size="l">H3: Help Us Improve</Heading>
      <Paragraph>
        Paragraph: This is version 1 of Archetype and we'd love your feedback and
        suggestions on how we can improve it to make it even more useful. Please
        use the feedback link in the header to let us know what you think. Be as
        critical as you like, we have thick skin.
      </Paragraph>
      <Heading size="m">H4: Still Reading?</Heading>
      <Paragraph>
        Paragraph: Well here's some inspirational quotes for you: "Good design is
        making something intelligible and memorable. Great design is making
        something memorable and meaningful": Dieter Rams.
      </Paragraph>
      <Heading size="s">H5: More? Ok</Heading>
      <Paragraph>
        Paragraph: "A designer knows he has achieved perfection not when there is
        nothing left to add, but when there is nothing left to take away": Antoine
        de Saint-Exupery.
      </Paragraph>
      <Heading size="xs">H6: One For the Road</Heading>
      <Paragraph>
        Paragraph: "The best activities for your health are pumping and humping":
        Arnold Schwarzenegger.
      </Paragraph>
      <Heading size="xxl">Heading One</Heading>
      <Heading size="xl">Heading Two</Heading>
      <Heading size="l">Heading Three</Heading>
      <Heading size="m">Heading Four</Heading>
      <Heading size="s">Heading Five</Heading>
      <Heading size="xs">Heading Six</Heading>
    </div>
  `,
  }))

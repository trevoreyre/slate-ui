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

storiesOf('Typography', module)
  .addParameters({ styles: { padding: 0 } })
  .addDecorator(() => ({
    components: { Container },
    template: `
      <Container size="m">
        <story />
      </Container>
    `,
  }))
  .add('all', () => ({
    components: {
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
    },
    template: `
    <div>
      <H1>H1: The quick brown fox jumps over the lazy dog</H1>
      <H2>H2: The quick brown fox jumps over the lazy dog</H2>
      <H3>H3: The quick brown fox jumps over the lazy dog</H3>
      <H4>H4: The quick brown fox jumps over the lazy dog</H4>
      <H5>H5: The quick brown fox jumps over the lazy dog</H5>
      <H6>H6: The quick brown fox jumps over the lazy dog</H6>
      <P>P: The quick brown fox jumps over the lazy dog</P>
      <P2>P2: The quick brown fox jumps over the lazy dog</P2>
      <Txt>Txt: The quick brown fox jumps over the lazy dog</Txt>
      <Txt2>Txt2: The quick brown fox jumps over the lazy dog</Txt2>
      <Overline>Overline: The quick brown fox jumps over the lazy dog</Overline>
      <Label>Label: The quick brown fox jumps over the lazy dog</Label>
    </div>
  `,
  }))

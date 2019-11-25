import { storiesOf } from '@storybook/vue'
import Container from '../Container/Container.vue'
import Img from './Img.vue'

storiesOf('Image', module).add('default', () => ({
  components: { Container, Img },
  data() {
    return {
      image: {
        aspectRatio: 1,
        placeholder:
          'https://robohash.org/minusassumendadolor.png?size=20x20&set=set1',
      },
      src: 'https://robohash.org/minusassumendadolor.png?size=200x200&set=set1',
    }
  },
  template: `
    <Container size="m">
      <Img :image="image" :src="src" />
    </Container>
  `,
}))

import { action } from '@storybook/addon-actions'
import Img from './Img.vue'

export default {
  title: 'Img',
  component: Img,
}

export const basic = () => ({
  template: `
    <Img
      width="1600"
      height="900"
      src="https://source.unsplash.com/XW4C3wPqyJs/1600x900"
      alt="Green, forested mountain landscape"
    />
  `,
})

export const responsive = () => ({
  template: `
    <Img
      sizes="
        (min-width: 1280px) 1280px,
        100vw
      "
      srcset="
        https://res.cloudinary.com/trevoreyre/image/upload/q_70,f_auto,w_200/slate-ui/ales-krivec-XW4C3wPqyJs-unsplash.jpg 200w,
        https://res.cloudinary.com/trevoreyre/image/upload/q_70,f_auto,w_400/slate-ui/ales-krivec-XW4C3wPqyJs-unsplash.jpg 400w,
        https://res.cloudinary.com/trevoreyre/image/upload/q_70,f_auto,w_800/slate-ui/ales-krivec-XW4C3wPqyJs-unsplash.jpg 800w,
        https://res.cloudinary.com/trevoreyre/image/upload/q_70,f_auto,w_1200/slate-ui/ales-krivec-XW4C3wPqyJs-unsplash.jpg 1200w,
        https://res.cloudinary.com/trevoreyre/image/upload/q_70,f_auto,w_1600/slate-ui/ales-krivec-XW4C3wPqyJs-unsplash.jpg 1600w,
        https://res.cloudinary.com/trevoreyre/image/upload/q_70,f_auto,w_2400/slate-ui/ales-krivec-XW4C3wPqyJs-unsplash.jpg 2400w
      "
      src="https://res.cloudinary.com/trevoreyre/image/upload/q_70,f_auto,w_1600/slate-ui/ales-krivec-XW4C3wPqyJs-unsplash.jpg"
      alt="Green, forested mountain landscape"
    />
  `,
})

export const placeholder = () => ({
  template: `
    <div>
      <H3>Default placeholder</H3>
      <Img
        width="1"
        height="1"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        alt="A transparent pixel"
        mb="md"
      />
    </div>
  `,
})

export const fallback = () => ({
  template: `
    <div>
      <H3>Default fallback</H3>
      <Img
        width="1600"
        height="1060"
        src="/error.jpg"
        alt="Green, forested mountain landscape"
        mb="md"
        @error="handleError"
      />
    </div>
  `,
  methods: {
    handleError: action('handleError'),
    handleClick: action('handleClick'),
  },
})

export const withContent = () => ({
  template: `
    <div>
      <H2>Article with images</H2>
      <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorem, inventore, nemo excepturi et ex delectus iste dolore nisi officiis, totam exercitationem labore? Delectus quibusdam est itaque cumque nisi ipsam.</P>
      <Img
        width="1600"
        height="1060"
        sizes="
          (min-width: 1280px) 1280px,
          100vw
        "
        srcset="
          https://res.cloudinary.com/trevoreyre/image/upload/q_70,f_auto,w_200/slate-ui/ales-krivec-XW4C3wPqyJs-unsplash.jpg 200w,
          https://res.cloudinary.com/trevoreyre/image/upload/q_70,f_auto,w_400/slate-ui/ales-krivec-XW4C3wPqyJs-unsplash.jpg 400w,
          https://res.cloudinary.com/trevoreyre/image/upload/q_70,f_auto,w_800/slate-ui/ales-krivec-XW4C3wPqyJs-unsplash.jpg 800w,
          https://res.cloudinary.com/trevoreyre/image/upload/q_70,f_auto,w_1200/slate-ui/ales-krivec-XW4C3wPqyJs-unsplash.jpg 1200w,
          https://res.cloudinary.com/trevoreyre/image/upload/q_70,f_auto,w_1600/slate-ui/ales-krivec-XW4C3wPqyJs-unsplash.jpg 1600w,
          https://res.cloudinary.com/trevoreyre/image/upload/q_70,f_auto,w_2400/slate-ui/ales-krivec-XW4C3wPqyJs-unsplash.jpg 2400w
        "
        src="https://res.cloudinary.com/trevoreyre/image/upload/q_70,f_auto,w_1600/slate-ui/ales-krivec-XW4C3wPqyJs-unsplash.jpg"
        mb="xs"
      />
      <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorem, inventore, nemo excepturi et ex delectus iste dolore nisi officiis, totam exercitationem labore? Delectus quibusdam est itaque cumque nisi ipsam.</P>
    </div>
  `,
})

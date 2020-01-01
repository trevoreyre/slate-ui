import ImgProvider from './ImgProvider.vue'

export default {
  title: 'ImgProvider',
  component: ImgProvider,
}

export const basic = () => ({
  template: `
    <ImgProvider
      sizes="(min-width: 1280px) 1280px, 100vw"
      srcset="
        https://res.cloudinary.com/trevoreyre/image/upload/q_70,f_auto,w_200/slate-ui/{filename} 200w,
        https://res.cloudinary.com/trevoreyre/image/upload/q_70,f_auto,w_400/slate-ui/{filename} 400w,
        https://res.cloudinary.com/trevoreyre/image/upload/q_70,f_auto,w_800/slate-ui/{filename} 800w,
        https://res.cloudinary.com/trevoreyre/image/upload/q_70,f_auto,w_1200/slate-ui/{filename} 1200w,
        https://res.cloudinary.com/trevoreyre/image/upload/q_70,f_auto,w_1600/slate-ui/{filename} 1600w,
        https://res.cloudinary.com/trevoreyre/image/upload/q_70,f_auto,w_2400/slate-ui/{filename} 2400w
      "
      src="https://res.cloudinary.com/trevoreyre/image/upload/q_70,f_auto,w_1600/slate-ui/{filename}"
    >
      <H2>Some awesome article</H2>
      <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorem, inventore, nemo excepturi et ex delectus iste dolore nisi officiis, totam exercitationem labore? Delectus quibusdam est itaque cumque nisi ipsam.</P>
      <Img
        width="1600"
        height="1060"
        filename="ales-krivec-XW4C3wPqyJs-unsplash.jpg"
        mb="xs"
      />
      <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorem, inventore, nemo excepturi et ex delectus iste dolore nisi officiis, totam exercitationem labore? Delectus quibusdam est itaque cumque nisi ipsam.</P>
      <Img
        width="1600"
        height="1060"
        filename="m-wong-eWk5u40S8cc-unsplash.jpg"
        mb="xs"
      />
    </ImgProvider>
  `,
})

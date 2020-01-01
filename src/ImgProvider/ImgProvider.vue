<script>
const getSrcSet = (strings, ...props) => filename => {
  return strings
    .map((string, i) => `${string}${props[i] ? filename : ''}`)
    .join()
    .trim()
}

export default {
  name: 'SlateImgProvider',

  props: {
    /** Fallback image to display if original fails to load */
    fallback: String,
    /** Image to display while loading */
    placeholder: String,
    /** Image source. Used as fallback for browsers that don't support srcset. */
    src: String,
    /** Available sources for image. Use with sizes for responsive images. */
    srcset: String,
  },

  provide() {
    return {
      getSrc: filename => {
        return this.src.replace(/{filename}/gi, filename)
      },
      getSrcset: filename => {
        return this.srcset.replace(/{filename}/gi, filename)
      },
      defaultFallback: this.fallback,
      defaultPlaceholder: this.placeholder,
    }
  },

  render(h) {
    return <div>{this.$slots.default}</div>
  },
}
</script>

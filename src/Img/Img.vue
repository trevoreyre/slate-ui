<script>
import { marginMixin } from '../util/spacing'
import { iconMixin } from '../util/icon'
import Txt from '../Typography/Txt.vue'

const IconImage = {
  mixins: [iconMixin],
  template: `
    <svg v-bind="iconProps" :class="iconClass">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5 4a1 1 0 00-1 1v14c0 .43.27.8.65.94L15.29 9.29a1 1 0 011.42 0L20 12.6V5a1 1 0 00-1-1H5zm17 11V5a3 3 0 00-3-3H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3v-4zm-2 .41l-4-4L7.41 20H19a1 1 0 001-1v-3.59zM8.5 8a.5.5 0 100 1 .5.5 0 000-1zM6 8.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z" />
    </svg>
  `,
}

const IconImageError = {
  mixins: [iconMixin],
  template: `
    <svg v-bind="iconProps" :class="iconClass">
      <path fill-rule="evenodd" d="M1.707.293A1 1 0 00.293 1.707l2 2C2.104 4.098 2 4.537 2 5v14a3 3 0 003 3h14c.463 0 .902-.105 1.293-.292l2 2a1 1 0 001.414-1.415l-22-22zM18.586 20L13 14.414 7.414 20h11.172zm-7-7l-2.172-2.172a2.5 2.5 0 01-3.241-3.241L4 5.413V19a1 1 0 00.65.937L11.585 13z" clip-rule="evenodd"/>
      <path d="M20 5v7.586l-3.293-3.293a1 1 0 10-1.414 1.414L20 15.414V16c0 .5.5 1 1 1s1-.5 1-1V5a3 3 0 00-3-3H8c-.5 0-1 .5-1 1s.5 1 1 1h11a1 1 0 011 1z"/>
    </svg>
  `,
}

// const inlineSvgPlaceholder = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='#000000' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5 4a1 1 0 00-1 1v14c0 .43.27.8.65.94L15.29 9.29a1 1 0 011.42 0L20 12.6V5a1 1 0 00-1-1H5zm17 11V5a3 3 0 00-3-3H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3v-4zm-2 .41l-4-4L7.41 20H19a1 1 0 001-1v-3.59zM8.5 8a.5.5 0 100 1 .5.5 0 000-1zM6 8.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z'%3E%3C/path%3E%3C/svg%3E`

const inlineSvgPlaceholder =
  'https://via.placeholder.com/1600/edf2f7/2d3748?text=Placeholder'

// const inlineSvgError = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='#000000' width='24' height='24' viewBox='0 0 24 24' %3E%3Cpath fill-rule='evenodd' d='M1.707.293A1 1 0 00.293 1.707l2 2C2.104 4.098 2 4.537 2 5v14a3 3 0 003 3h14c.463 0 .902-.105 1.293-.292l2 2a1 1 0 001.414-1.415l-22-22zM18.586 20L13 14.414 7.414 20h11.172zm-7-7l-2.172-2.172a2.5 2.5 0 01-3.241-3.241L4 5.413V19a1 1 0 00.65.937L11.585 13z' clip-rule='evenodd'/%3E%3Cpath d='M20 5v7.586l-3.293-3.293a1 1 0 10-1.414 1.414L20 15.414V16c0 .5.5 1 1 1s1-.5 1-1V5a3 3 0 00-3-3H8c-.5 0-1 .5-1 1s.5 1 1 1h11a1 1 0 011 1z'/%3E%3C/svg%3E`

const inlineSvgError =
  'https://via.placeholder.com/1600/edf2f7/718096?text=Error'

export default {
  name: 'SlateImg',
  mixins: [marginMixin],

  inject: {
    getSrc: {
      default() {
        return filename => filename
      },
    },
    getSrcset: {
      default() {
        return filename => filename
      },
    },
    defaultFallback: {
      default() {
        return 'https://via.placeholder.com/1600/edf2f7/718096?text=Error'
      },
    },
    defaultPlaceholder: {
      default() {
        return 'https://via.placeholder.com/1600/edf2f7/2d3748?text=Placeholder'
      },
    },
  },

  props: {
    /** Image alt text */
    alt: {
      type: String,
      required: true,
    },
    /** Element to render, either an HTML tag or another component */
    as: {
      type: [String, Function, Object],
      default: 'img',
    },
    /** Fallback image to display if original fails to load */
    fallback: String,
    /** Image filename. Use together with ImgProvider srcset. */
    filename: String,
    /** Image height. Width and height are required to display placeholders and fallbacks. */
    height: [String, Number],
    /* TODO: Support loading prop */
    loading: {
      type: String,
      default: 'auto',
      validator: value => ['auto', 'eager', 'lazy'].includes(value),
    },
    /** Image to display while loading */
    placeholder: String,
    /** Sizes the image will be displayed at. Use with srcset for responsive images. */
    sizes: String,
    /** Image source. Used as fallback for browsers that don't support srcset. */
    src: String,
    /** Available sources for image. Use with sizes for responsive images. */
    srcset: String,
    /** Image width. Width and height are required to display placeholders and fallbacks. */
    width: [String, Number],
  },

  data() {
    return {
      error: false,
      isLoading: true,
    }
  },

  render(h) {
    const {
      alt,
      as: As,
      fallback: fallbackProp,
      filename,
      height,
      placeholder: placeholderProp,
      sizes,
      src: srcProp,
      srcset: srcsetProp,
      width,
    } = this.$props
    const { error, isLoading } = this.$data
    const {
      error: errorListener,
      load: loadListener,
      ...otherListeners
    } = this.$listeners
    const other = {
      attrs: this.$attrs,
      on: otherListeners,
    }

    const handleLoad = event => {
      this.$data.isLoading = false
      if (loadListener) loadListener(event)
    }

    const handleError = event => {
      this.$data.error = true
      if (errorListener) errorListener(event)
    }

    const placeholder = placeholderProp || this.defaultPlaceholder
    let src = null
    let srcset = null
    if (error) {
      src = inlineSvgError
    } else if (isLoading && placeholder) {
      src = placeholder
    } else {
      src = srcProp || this.getSrc(filename)
      srcset = srcsetProp || this.getSrcset(filename)
    }

    return (
      <As
        class={['img', this.marginClass, { error }]}
        src={src}
        srcset={srcset}
        sizes={sizes}
        width={width}
        height={height}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        {...other}
      />
    )
  },
}
</script>

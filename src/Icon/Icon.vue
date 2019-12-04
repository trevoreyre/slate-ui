<script>
import { iconMixin } from '../util/icon'

export default {
  mixins: [iconMixin],
  props: {
    as: {
      type: [String, Function],
      default: 'svg',
    },
  },
  render(h) {
    return h(
      this.as,
      {
        class: this.iconClass,
        attrs: { ...this.iconProps, ...this.$attrs },
        props: this.$props,
        on: this.$listeners,
      },
      this.$slots.default
    )
  },
}
</script>

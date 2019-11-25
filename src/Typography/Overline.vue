<script>
import { marginMixin } from '../util/spacing'

export default {
  name: 'SlateOverline',
  mixins: [marginMixin],
  props: {
    as: {
      type: [String, Function],
      default: 'p',
    },
  },
  render(h) {
    return h(
      this.as,
      {
        class: ['overline', this.marginClass],
      },
      this.$slots.default
    )
  },
}
</script>

<style scoped>
.overline {
  font-size: 0.875rem;
  line-height: 1;
  font-weight: 600;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
}
</style>

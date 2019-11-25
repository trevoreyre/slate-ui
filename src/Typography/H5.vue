<script>
import { marginMixin } from '../util/spacing'

export default {
  name: 'SlateH5',
  mixins: [marginMixin],
  inject: {
    headingLevel: { default: 2 },
  },
  props: {
    as: {
      type: [String, Function],
      default() {
        return 'h' + this.headingLevel
      },
    },
  },
  render(h) {
    return h(
      this.as,
      {
        class: ['h5', this.marginClass],
      },
      this.$slots.default
    )
  },
}
</script>

<style scoped>
.h5 {
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 400;
}
</style>

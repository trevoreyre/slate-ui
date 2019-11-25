<script>
import { marginMixin } from '../util/spacing'

export default {
  name: 'SlateH4',
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
        class: ['h4', this.marginClass],
      },
      this.$slots.default
    )
  },
}
</script>

<style scoped>
.h4 {
  font-size: 1.75rem;
  line-height: 1.25;
  font-weight: 400;
}
</style>

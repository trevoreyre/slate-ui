<script>
import { marginMixin } from '../util/spacing'

export default {
  name: 'SlateH6',
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
        class: ['h6', this.marginClass],
      },
      this.$slots.default
    )
  },
}
</script>

<style scoped>
.h6 {
  font-size: 1.25rem;
  line-height: 1.5;
  font-weight: 600;
}
</style>

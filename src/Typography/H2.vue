<script>
import { marginMixin } from '../util/spacing'

export default {
  name: 'SlateH2',
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
        class: ['h2', this.marginClass],
      },
      this.$slots.default
    )
  },
}
</script>

<style scoped>
.h2 {
  font-size: 2.25rem;
  line-height: 1.25;
  font-weight: 300;
}
</style>

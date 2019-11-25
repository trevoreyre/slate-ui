<script>
import { marginMixin } from '../util/spacing'

export default {
  name: 'SlateH1',
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
        class: ['h1', this.marginClass],
      },
      this.$slots.default
    )
  },
}
</script>

<style scoped>
.h1 {
  font-size: 3rem;
  line-height: 1.15;
  font-weight: 300;
}
</style>

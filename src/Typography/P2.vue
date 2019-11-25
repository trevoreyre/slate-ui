<script>
import { marginMixin } from '../util/spacing'

export default {
  name: 'SlateP2',
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
        class: ['p2', this.marginClass],
      },
      this.$slots.default
    )
  },
}
</script>

<style scoped>
.p2 {
  margin-bottom: var(--spacing-xs);
  font-size: 0.875rem;
  line-height: 1.5;
  font-weight: 400;
}
</style>

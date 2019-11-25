<script>
import { marginMixin } from '../util/spacing'

export default {
  name: 'SlateP',
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
        class: ['p', this.marginClass],
      },
      this.$slots.default
    )
  },
}
</script>

<style scoped>
.p {
  margin-bottom: var(--spacing-xs);
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
}
</style>

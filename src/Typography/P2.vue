<script>
import { typographyMixin } from '../util/typography'

export default {
  name: 'SlateP2',
  mixins: [typographyMixin],
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
        class: ['p2', this.typographyClass],
        style: this.typographyStyle,
      },
      this.$slots.default
    )
  },
}
</script>

<style scoped>
.p2 {
  margin-bottom: var(--spacing-xs);
  --font-size: var(--font-size-sm);
  --line-height: var(--line-height-lg);
  --font-weight: var(--font-weight-normal);
}
</style>

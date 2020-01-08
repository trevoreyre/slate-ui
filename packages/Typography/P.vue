<script>
import { typographyMixin } from '@slate-ui/theme'

export default {
  name: 'SlateP',
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
        class: ['p', this.typographyClass],
        style: this.typographyStyle,
      },
      this.$slots.default
    )
  },
}
</script>

<style scoped>
.p {
  margin-bottom: var(--spacing-xs);
  --font-size: var(--font-size-default);
  --line-height: var(--line-height-lg);
  --font-weight: var(--font-weight-normal);
}
</style>

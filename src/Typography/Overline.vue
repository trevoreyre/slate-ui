<script>
import { typographyMixin } from '../util/typography'

export default {
  name: 'SlateOverline',
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
        class: ['overline', this.typographyClass],
        style: this.typographyStyle,
      },
      this.$slots.default
    )
  },
}
</script>

<style scoped>
.overline {
  --font-size: var(--font-size-sm);
  --line-height: var(--line-height-none);
  --font-weight: var(--font-weight-bold);
  --letter-spacing: var(--letter-spacing-xl);
  text-transform: uppercase;
}
</style>

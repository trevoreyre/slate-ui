<script>
import { typographyMixin } from '@slate-ui/theme'

export default {
  name: 'SlateH2',
  mixins: [typographyMixin],
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
        class: ['h2', this.typographyClass],
        style: this.typographyStyle,
      },
      this.$slots.default
    )
  },
}
</script>

<style scoped>
.h2 {
  --font-size: var(--font-size-4xl);
  --line-height: var(--line-height-md);
  --font-weight: var(--font-weight-light);
}
</style>

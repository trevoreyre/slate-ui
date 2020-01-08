<script>
import { typographyMixin } from '@slate-ui/theme'

export default {
  name: 'SlateH1',
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
        class: ['h1', this.typographyClass],
        style: this.typographyStyle,
      },
      this.$slots.default
    )
  },
}
</script>

<style scoped>
.h1 {
  --font-size: var(--font-size-5xl);
  --line-height: var(--line-height-sm);
  --font-weight: var(--font-weight-light);
}
</style>

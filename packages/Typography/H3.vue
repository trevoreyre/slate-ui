<script>
import { typographyMixin } from '@slate-ui/theme'

export default {
  name: 'SlateH3',
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
        class: ['h3', this.typographyClass],
        style: this.typographyStyle,
      },
      this.$slots.default
    )
  },
}
</script>

<style scoped>
.h3 {
  --font-size: var(--font-size-3xl);
  --line-height: var(--line-height-md);
  --font-weight: var(--font-weight-normal);
}
</style>

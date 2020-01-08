<script>
import { typographyMixin } from '@slate-ui/theme'

export default {
  name: 'SlateH5',
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
        class: ['h5', this.typographyClass],
        style: this.typographyStyle,
      },
      this.$slots.default
    )
  },
}
</script>

<style scoped>
.h5 {
  --font-size: var(--font-size-xl);
  --line-height: var(--line-height-lg);
  --font-weight: var(--font-weight-normal);
}
</style>

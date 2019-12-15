<script>
import { typographyMixin } from '../util/typography'

export default {
  name: 'SlateH6',
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
        class: ['h6', this.typographyClass],
        style: this.typographyStyle,
      },
      this.$slots.default
    )
  },
}
</script>

<style scoped>
.h6 {
  --font-size: var(--font-size-lg);
  --line-height: var(--line-height-lg);
  --font-weight: var(--font-weight-bold);
}
</style>

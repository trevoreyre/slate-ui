<script>
import { typographyMixin } from '../util/typography'

export default {
  name: 'SlateH4',
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
        class: ['h4', this.typographyClass],
        style: this.typographyStyle,
      },
      this.$slots.default
    )
  },
}
</script>

<style scoped>
.h4 {
  --font-size: var(--font-size-2xl);
  --line-height: var(--line-height-md);
  --font-weight: var(--font-weight-normal);
}
</style>

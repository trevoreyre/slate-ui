<script>
import { typographyMixin } from '../util/typography'

export default {
  name: 'SlateLabel',
  mixins: [typographyMixin],
  props: {
    as: {
      type: [String, Function],
      default: 'label',
    },
  },
  render(h) {
    return h(
      this.as,
      {
        class: ['label', this.typographyClass],
        style: this.typographyStyle,
      },
      this.$slots.default
    )
  },
}
</script>

<style scoped>
.label {
  --font-size: var(--font-size-xs);
  --line-height: var(--line-height-none);
  --font-weight: var(--font-weight-normal);
}
</style>

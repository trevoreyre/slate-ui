<script>
import { typographyMixin } from '../util/typography'

export default {
  name: 'SlateTxt',
  mixins: [typographyMixin],
  props: {
    as: {
      type: [String, Function],
      default: 'div',
    },
  },
  render(h) {
    return h(
      this.as,
      {
        class: ['txt', this.typographyClass],
        style: this.typographyStyle,
      },
      this.$slots.default
    )
  },
}
</script>

<style scoped>
.txt {
  --font-size: var(--font-size-default);
  --line-height: var(--line-height-lg);
  --font-weight: var(--font-weight-normal);
}
</style>

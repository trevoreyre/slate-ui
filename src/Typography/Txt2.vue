<script>
import { typographyMixin } from '../util/typography'

export default {
  name: 'SlateTxt2',
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
        class: ['txt2', this.typographyClass],
        style: this.typographyStyle,
      },
      this.$slots.default
    )
  },
}
</script>

<style scoped>
.txt2 {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-lg);
  font-weight: var(--font-weight-normal);
}
</style>

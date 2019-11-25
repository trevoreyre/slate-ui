<script>
import { marginMixin } from '../util/spacing'

export default {
  name: 'SlateTxt2',
  mixins: [marginMixin],
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
        class: ['txt2', this.marginClass],
      },
      this.$slots.default
    )
  },
}
</script>

<style scoped>
.txt2 {
  font-size: 0.875rem;
  line-height: 1.5;
  font-weight: 400;
}
</style>

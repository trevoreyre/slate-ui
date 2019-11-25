<script>
import { marginMixin } from '../util/spacing'

export default {
  name: 'SlateTxt',
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
        class: ['txt', this.marginClass],
      },
      this.$slots.default
    )
  },
}
</script>

<style scoped>
.txt {
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
}
</style>

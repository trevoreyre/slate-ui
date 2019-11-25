<script>
import { marginMixin } from '../util/spacing'

export default {
  name: 'SlateLabel',
  mixins: [marginMixin],
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
        class: ['label', this.marginClass],
      },
      this.$slots.default
    )
  },
}
</script>

<style scoped>
.label {
  font-size: 0.75rem;
  line-height: 1;
  font-weight: 400;
}
</style>

<script>
import { spacingMixin } from '../util/spacing'
import { shadowMixin } from '../util/shadow'

export default {
  mixins: [spacingMixin, shadowMixin],
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
        class: ['card', this.spacingClass, this.shadowClass],
        attrs: this.$attrs,
        props: this.$props,
        on: this.$listeners,
      },
      this.$slots.default
    )
  },
}
</script>

<style scoped>
.card {
  --shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-sm);
  background: var(--color-background-light);
  transition: 0.3s transform ease, 0.3s box-shadow ease;
  /* Unset default styles if Card is rendered as button or link */
  border: none;
  text-align: left;
  text-decoration: none;
  line-height: inherit;
}
</style>

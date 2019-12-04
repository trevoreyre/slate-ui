<script>
import { colorMixin } from '../util/color'
import { shadowMixin } from '../util/shadow'
import { spacingMixin, spacingValidator } from '../util/spacing'

export default {
  name: 'SlateContainer',
  mixins: [colorMixin, shadowMixin, spacingMixin],
  props: {
    as: {
      type: [String, Function],
      default: 'div',
    },
    padding: {
      type: String,
      default: 'xs',
      validator: spacingValidator,
    },
    size: {
      type: String,
      validator: value => ['sm', 'md', 'lg', 'xl'].includes(value),
    },
  },
  render(h) {
    return h(
      this.as,
      {
        class: [
          'container',
          this.size,
          this.colorClass,
          this.shadowClass,
          this.spacingClass,
        ],
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
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.container.sm {
  max-width: var(--breakpoint-sm);
}

.container.md {
  max-width: var(--breakpoint-md);
}

.container.lg {
  max-width: var(--breakpoint-lg);
}

.container.xl {
  max-width: var(--breakpoint-xl);
}
</style>

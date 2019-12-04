<script>
import { marginMixin } from '../util/spacing'
import { sizeValidator, themeValidator } from '../util/propValidators'

export default {
  name: 'SlateButton',
  mixins: [marginMixin],
  props: {
    as: {
      type: [String, Function],
      default: 'button',
    },
    size: {
      type: String,
      default: 'md',
      validator: sizeValidator,
    },
    theme: {
      type: String,
      default: 'primary',
      validator: value => ['primary', 'secondary'].includes(value),
    },
  },
  provide() {
    return {
      backgroundColor: this.theme === 'primary' ? 'brand-primary' : undefined,
    }
  },
  render(h) {
    return h(
      this.as,
      {
        class: ['button', this.size, this.theme, this.marginClass],
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
.button {
  --font-size: var(--font-size-sm);
  --line-height: var(--line-height-none);
  --font-weight: var(--font-weight-bold);
  --letter-spacing: var(--letter-spacing-xl);
  --text-transform: var(--text-transform-uppercase);
  border-radius: var(--border-radius-default);
  border: none;
  padding: var(--spacing-xs) var(--spacing-sm);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-align: center;
  background: var(--color-background-low-contrast);
  color: var(--color-text-primary);
}

.button > * {
  margin: 0 var(--spacing-3xs);
}

.button.sm {
  padding: var(--spacing-2xs) var(--spacing-xs);
}

.button.lg {
  padding: var(--spacing-sm) var(--spacing-md);
}

.button.primary {
  background-color: var(--color-brand-primary);
  color: var(--color-text-primary-on-brand-primary);
}

.button.secondary {
  background-color: transparent;
  color: var(--color-text-primary);
}
</style>

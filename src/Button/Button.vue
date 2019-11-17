<script>
import { sizeValidator, themeValidator } from '../util/propValidators'

export default {
  props: {
    as: {
      type: [String, Function],
      default: 'button',
    },
    size: {
      type: String,
      default: 'm',
      validator: sizeValidator,
    },
    theme: {
      type: String,
      default: 'neutral',
      validator: themeValidator,
    },
    type: {
      type: String,
      default: 'default',
      validator: value =>
        ['default', 'raised', 'flat', 'flat-inverse'].includes(value),
    },
  },
  render(h) {
    return h(
      this.as,
      {
        class: ['button', this.size, this.theme, this.type],
        attrs: { ...this.$attrs },
        props: { ...this.$props },
        on: { ...this.$listeners },
      },
      this.$slots.default
    )
  },
}
</script>

<style scoped>
.button {
  border-radius: var(--border-radius-s);
  border: none;
  padding: var(--spacing-sm);
  max-width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  line-height: 1;
  background: var(--color-background-low-contrast);
  color: var(--text-color-primary);
}

.button > *:not(:last-child) {
  margin-right: var(--spacing-xs);
}

.s {
  padding: var(--spacing-xs);
}

.l {
  padding: var(--spacing-4xl);
}

.primary {
  border-color: var(--color-primary);
  background: var(--color-primary);
  color: var(--text-color-primary-on-primary);
}

.secondary {
  border-color: var(--color-secondary);
  background: var(--color-secondary);
  color: var(--text-color-primary-on-secondary);
}

.raised {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.raised:hover {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}

.flat {
  background: transparent;
  border-color: var(--text-color-primary);
}

.flat:hover {
  border-color: var(--text-color-primary);
  background: var(--text-color-primary);
  color: var(--text-color-primary-on-contrast);
  fill: var(--text-color-primary-on-contrast);
}

.primary.flat {
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.primary.flat:hover {
  background: var(--color-primary);
  color: var(--text-color-primary-on-primary);
}

.secondary.flat {
  color: var(--color-secondary);
  border-color: var(--color-secondary);
}

.secondary.flat:hover {
  background: var(--color-secondary);
  color: var(--text-color-primary-on-secondary);
}

.flat-inverse {
  border-color: var(--text-color-primary-on-contrast);
  background: transparent;
}

.flat-inverse:hover {
  border-color: var(--text-color-primary-on-contrast);
  background: var(--text-color-primary-on-contrast);
}

.neutral.flat-inverse {
  color: var(--text-color-primary-on-contrast);
}

.neutral.flat-inverse:hover {
  color: var(--text-color-primary);
}

.primary.flat-inverse:hover {
  color: var(--color-primary);
}

.secondary.flat-inverse:hover {
  color: var(--color-secondary);
}
</style>

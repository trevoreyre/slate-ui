<script>
import {
  marginMixin,
  validateBooleanString,
  validateSize,
} from '@slate-ui/theme'
import { toBoolean } from '@slate-ui/util'

/**
 * A button allows a user to take an action on the current page
 */
export default {
  name: 'SlateButton',
  mixins: [marginMixin],
  inheritAttrs: false,

  props: {
    /** Disables interaction. Use instead of `disabled` when rendering as link. */
    ariaDisabled: {
      type: [Boolean, String],
      validator: validateBooleanString,
    },
    /** Element to render, either an HTML tag or another component */
    as: {
      type: [String, Function, Object],
      default: 'button',
    },
    /** Disables interaction */
    disabled: Boolean,
    /** Set to `true` for rounded, pill-shaped buttons */
    rounded: Boolean,
    /** Size of the button. `sm | md | lg` */
    size: {
      type: String,
      default: 'md',
      validator: validateSize,
    },
    /** Button style. `primary | secondary` */
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
    const {
      as: As,
      ariaDisabled,
      disabled,
      rounded,
      size,
      theme,
      ...otherProps
    } = this.$props
    const { tabindex, ...otherAttrs } = this.$attrs
    const { click, ...otherListeners } = this.$listeners
    // TODO: I don't think spreading otherProps here actually works
    // TODO: see https://github.com/vuejs/babel-plugin-transform-vue-jsx/issues/86
    const other = {
      ...otherProps,
      attrs: otherAttrs,
      on: otherListeners,
    }

    const handleClick = event => {
      if (disabled || ariaDisabled) {
        event.preventDefault()
      } else if (click) {
        click(event)
      }
    }

    const isDisabled = disabled || toBoolean(ariaDisabled)

    return (
      <As
        class={['button', size, theme, this.marginClass, { rounded }]}
        disabled={disabled}
        aria-disabled={ariaDisabled}
        tabindex={isDisabled ? -1 : tabindex}
        onClick={handleClick}
        {...other}
      >
        {this.$slots.default}
      </As>
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
  padding: 0 var(--spacing-sm);
  min-height: var(--spacing-xl);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
}

.button.sm {
  padding: 0 var(--spacing-xs);
  min-height: var(--spacing-lg);
}

.button.lg {
  padding: 0 var(--spacing-md);
  min-height: var(--spacing-2xl);
}

.button.rounded {
  border-radius: var(--border-radius-full);
}

.button.primary {
  background-color: var(--color-brand-700);
  color: var(--color-text-primary-on-brand-primary);
}

.button.secondary {
  padding: 0 var(--spacing-xs);
  background-color: transparent;
  color: var(--color-text-primary);
}

.button.secondary:hover {
  background-color: var(--color-brand-200);
}

.button.sm.secondary {
  padding: 0 var(--spacing-2xs);
}

.button.lg.secondary {
  padding: 0 var(--spacing-sm);
}

.button[disabled],
.button[aria-disabled='true'] {
  opacity: 0.3;
  cursor: default;
  pointer-events: none;
}
</style>

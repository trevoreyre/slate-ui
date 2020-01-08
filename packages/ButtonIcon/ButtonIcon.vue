<script>
import {
  marginMixin,
  validateBooleanString,
  validateSize,
} from '@slate-ui/theme'
import { toBoolean } from '@slate-ui/util'

/**
 * Display a single icon as a square or circle button
 */
export default {
  name: 'SlateButtonIcon',
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
    /** Set to `true` for circular button */
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
        class={['button-icon', size, theme, this.marginClass, { rounded }]}
        disabled={disabled}
        aria-disabled={ariaDisabled}
        tabindex={isDisabled ? -1 : tabindex}
        onClick={handleClick}
        {...otherProps}
        attrs={otherAttrs}
        {...{ on: otherListeners }}
      >
        {this.$slots.default}
      </As>
    )
  },
}
</script>

<style scoped>
.button-icon {
  border-radius: var(--border-radius-default);
  border: none;
  width: var(--spacing-xl);
  height: var(--spacing-xl);
  display: inline-block;
  text-decoration: none;
  vertical-align: middle;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-indent: 9999px;
}

.button-icon > * {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.button-icon.sm {
  width: var(--spacing-lg);
  height: var(--spacing-lg);
}

.button-icon.lg {
  width: var(--spacing-2xl);
  height: var(--spacing-2xl);
}

.button-icon.rounded {
  border-radius: var(--border-radius-full);
}

.button-icon.primary {
  background-color: var(--color-brand-700);
  color: var(--color-text-primary-on-brand-primary);
}

.button-icon.secondary {
  background-color: transparent;
  color: var(--color-text-primary);
}

.button-icon.secondary:hover {
  background-color: var(--color-brand-200);
}
</style>

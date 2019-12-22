<script>
import { marginMixin } from '../util/spacing'

/**
 * A tag provides additional info or categorization
 */
export default {
  name: 'SlateTag',
  mixins: [marginMixin],
  inheritAttrs: false,

  props: {
    /** Element to render, either an HTML tag or another component */
    as: {
      type: [String, Function, Object],
      default: 'span',
    },
    /** Set to `true` for rounded, pill-shaped tags */
    rounded: Boolean,
  },

  provide() {
    return {
      backgroundColor: 'brand-200',
    }
  },

  render(h) {
    const { as: As, rounded } = this.$props
    const { click } = this.$listeners
    const other = {
      attrs: this.$attrs,
      on: this.$listeners,
    }

    return (
      <As class={['tag', this.marginClass, { rounded, click }]} {...other}>
        {this.$slots.default}
      </As>
    )
  },
}
</script>

<style scoped>
.tag {
  --font-size: var(--font-size-sm);
  --line-height: var(--line-height-none);
  border-radius: var(--border-radius-default);
  padding: 0 var(--spacing-3xs);
  min-height: var(--spacing-md);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  background-color: var(--color-brand-200);
}

.tag.rounded {
  border-radius: var(--border-radius-full);
  padding: 0 var(--spacing-2xs);
}

.tag.click {
  cursor: pointer;
}
</style>

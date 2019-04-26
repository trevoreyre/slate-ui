<script>
import 'normalize.css'

export default {
  render(h) {
    return h('div', this.$slots.default)
  },
}
</script>

<style>
html {
  height: 100%;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  min-height: 100%;
  color: var(--text-color-primary);
  background: var(--color-background);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: var(--font-family);
}
</style>

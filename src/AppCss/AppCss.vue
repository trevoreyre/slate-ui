<script>
// import 'normalize.css'
import 'focus-visible' // Polyfill for :focus-visible styling

export default {
  render(h) {
    return h('div', this.$slots.default)
  },
}
</script>

<style>
/* Adapted from Tailwind CSS - https://tailwindcss.com/docs/preflight */
html {
  height: 100%;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: var(--font-family);
  font-size: var(--font-size-base);
}

*,
*::before,
*::after {
  /* Defaults */
  --border: var(--border-default);
  --shadow: var(--shadow-default);
  --outline: var(--outline-default);
  --font-size: var(--font-size-default);
  --font-weight: var(--font-weight-default);
  --line-height: var(--line-height-default);
  --letter-spacing: var(--letter-spacing-default);
  --text-transform: var(--text-transform-default);
  box-sizing: inherit;
  position: relative;
  box-shadow: var(--border), var(--shadow), var(--outline);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  line-height: var(--line-height);
  letter-spacing: var(--letter-spacing);
  text-transform: var(--text-transform);
}

:focus {
  --outline: var(--outline-md);
  outline: none;
}

.js-focus-visible :focus:not([data-focus-visible-added]) {
  --outline: var(--outline-none);
}

/**
 * TODO: When browser support is better, remove focus-visible polyfill and styling above.
 *
 * :focus:not(:focus-visible) {
 *   --outline: var(--outline-none);
 * }
 */

body {
  margin: 0;
  min-height: 100%;
  color: var(--color-text-primary);
  background: var(--color-background);
  font-size: var(--font-size-default);
  line-height: var(--line-height-default);
}

/* Removes the default spacing and border for appropriate elements. */
blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

button {
  background: transparent;
  padding: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Ensure horizontal rules are visible by default */
hr {
  border-top-width: 1px;
}

textarea {
  resize: vertical;
}

input::placeholder,
textarea::placeholder {
  color: var(--color-text-secondary);
}

button,
[role='button'] {
  cursor: pointer;
}

table {
  border-collapse: collapse;
}

/* h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
} */

/* Reset links to optimize for opt-in styling instead of opt-out. */
a {
  color: inherit;
  text-decoration: inherit;
}

/**
 * Reset form element properties that are easy to forget to
 * style explicitly so you don't inadvertently introduce
 * styles that deviate from your design system. These styles
 * supplement a partial reset that is already applied by
 * normalize.css.
 */
button,
input,
optgroup,
select,
textarea {
  padding: 0;
  /* line-height: inherit; */
  color: inherit;
}

/**
 * Use the configured 'mono' font family for elements that
 * are expected to be rendered with a monospace font, falling
 * back to the system monospace stack if there is no configured
 * 'mono' font family.
 */
pre,
code,
kbd,
samp {
  font-family: Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
    monospace;
}

/**
 * Make replaced elements `display: block` by default as that's
 * the behavior you want almost all of the time. Inspired by
 * CSS Remedy, with `svg` added as well.
 *
 * https://github.com/mozdevs/cssremedy/issues/14
 */
img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  vertical-align: middle;
}

/**
 * Constrain images and videos to the parent width and preserve
 * their instrinsic aspect ratio.
 *
 * https://github.com/mozdevs/cssremedy/issues/14
 */
img,
video {
  max-width: 100%;
  height: auto;
}
</style>

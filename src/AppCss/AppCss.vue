<script>
import 'normalize.css'

export default {
  render(h) {
    return h('div', this.$slots.default)
  },
}
</script>

<style>
/* Adapted from Tailwind CSS - https://tailwindcss.com/docs/preflight */
/* Use the system font stack as a sane default. Set default line-height */
html {
  height: 100%;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  --border: var(--border-none);
  --shadow: var(--shadow-none);
  --outline: var(--outline-none);
  box-shadow: var(--border), var(--shadow), var(--outline);
  box-sizing: inherit;
}

body {
  min-height: 100%;
  color: var(--text-color-primary);
  background: var(--color-background);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1.5;
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

/* Work around a Firefox/IE bug where the transparent `button` background */
/* results in a loss of the default `button` focus styles. */
button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
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
  color: var(--text-color-secondary);
}

button,
[role='button'] {
  cursor: pointer;
}

table {
  border-collapse: collapse;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

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
  line-height: inherit;
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

/* Margin utility classes */
.m-none {
  margin: 0 !important;
}
.m-4xs {
  margin: var(--spacing-4xs) !important;
}
.m-3xs {
  margin: var(--spacing-3xs) !important;
}
.m-2xs {
  margin: var(--spacing-2xs) !important;
}
.m-xs {
  margin: var(--spacing-xs) !important;
}
.m-sm {
  margin: var(--spacing-sm) !important;
}
.m-md {
  margin: var(--spacing-md) !important;
}
.m-lg {
  margin: var(--spacing-lg) !important;
}
.m-xl {
  margin: var(--spacing-xl) !important;
}
.m-2xl {
  margin: var(--spacing-2xl) !important;
}
.m-3xl {
  margin: var(--spacing-3xl) !important;
}
.m-4xl {
  margin: var(--spacing-4xl) !important;
}
.m-5xl {
  margin: var(--spacing-5xl) !important;
}
.m-6xl {
  margin: var(--spacing-6xl) !important;
}
.m-7xl {
  margin: var(--spacing-7xl) !important;
}
.mt-none {
  margin-top: 0 !important;
}
.mt-4xs {
  margin-top: var(--spacing-4xs) !important;
}
.mt-3xs {
  margin-top: var(--spacing-3xs) !important;
}
.mt-2xs {
  margin-top: var(--spacing-2xs) !important;
}
.mt-xs {
  margin-top: var(--spacing-xs) !important;
}
.mt-sm {
  margin-top: var(--spacing-sm) !important;
}
.mt-md {
  margin-top: var(--spacing-md) !important;
}
.mt-lg {
  margin-top: var(--spacing-lg) !important;
}
.mt-xl {
  margin-top: var(--spacing-xl) !important;
}
.mt-2xl {
  margin-top: var(--spacing-2xl) !important;
}
.mt-3xl {
  margin-top: var(--spacing-3xl) !important;
}
.mt-4xl {
  margin-top: var(--spacing-4xl) !important;
}
.mt-5xl {
  margin-top: var(--spacing-5xl) !important;
}
.mt-6xl {
  margin-top: var(--spacing-6xl) !important;
}
.mt-7xl {
  margin-top: var(--spacing-7xl) !important;
}
.mr-none {
  margin-right: 0 !important;
}
.mr-4xs {
  margin-right: var(--spacing-4xs) !important;
}
.mr-3xs {
  margin-right: var(--spacing-3xs) !important;
}
.mr-2xs {
  margin-right: var(--spacing-2xs) !important;
}
.mr-xs {
  margin-right: var(--spacing-xs) !important;
}
.mr-sm {
  margin-right: var(--spacing-sm) !important;
}
.mr-md {
  margin-right: var(--spacing-md) !important;
}
.mr-lg {
  margin-right: var(--spacing-lg) !important;
}
.mr-xl {
  margin-right: var(--spacing-xl) !important;
}
.mr-2xl {
  margin-right: var(--spacing-2xl) !important;
}
.mr-3xl {
  margin-right: var(--spacing-3xl) !important;
}
.mr-4xl {
  margin-right: var(--spacing-4xl) !important;
}
.mr-5xl {
  margin-right: var(--spacing-5xl) !important;
}
.mr-6xl {
  margin-right: var(--spacing-6xl) !important;
}
.mr-7xl {
  margin-right: var(--spacing-7xl) !important;
}
.mb-none {
  margin-bottom: 0 !important;
}
.mb-4xs {
  margin-bottom: var(--spacing-4xs) !important;
}
.mb-3xs {
  margin-bottom: var(--spacing-3xs) !important;
}
.mb-2xs {
  margin-bottom: var(--spacing-2xs) !important;
}
.mb-xs {
  margin-bottom: var(--spacing-xs) !important;
}
.mb-sm {
  margin-bottom: var(--spacing-sm) !important;
}
.mb-md {
  margin-bottom: var(--spacing-md) !important;
}
.mb-lg {
  margin-bottom: var(--spacing-lg) !important;
}
.mb-xl {
  margin-bottom: var(--spacing-xl) !important;
}
.mb-2xl {
  margin-bottom: var(--spacing-2xl) !important;
}
.mb-3xl {
  margin-bottom: var(--spacing-3xl) !important;
}
.mb-4xl {
  margin-bottom: var(--spacing-4xl) !important;
}
.mb-5xl {
  margin-bottom: var(--spacing-5xl) !important;
}
.mb-6xl {
  margin-bottom: var(--spacing-6xl) !important;
}
.mb-7xl {
  margin-bottom: var(--spacing-7xl) !important;
}
.ml-none {
  margin-left: 0 !important;
}
.ml-4xs {
  margin-left: var(--spacing-4xs) !important;
}
.ml-3xs {
  margin-left: var(--spacing-3xs) !important;
}
.ml-2xs {
  margin-left: var(--spacing-2xs) !important;
}
.ml-xs {
  margin-left: var(--spacing-xs) !important;
}
.ml-sm {
  margin-left: var(--spacing-sm) !important;
}
.ml-md {
  margin-left: var(--spacing-md) !important;
}
.ml-lg {
  margin-left: var(--spacing-lg) !important;
}
.ml-xl {
  margin-left: var(--spacing-xl) !important;
}
.ml-2xl {
  margin-left: var(--spacing-2xl) !important;
}
.ml-3xl {
  margin-left: var(--spacing-3xl) !important;
}
.ml-4xl {
  margin-left: var(--spacing-4xl) !important;
}
.ml-5xl {
  margin-left: var(--spacing-5xl) !important;
}
.ml-6xl {
  margin-left: var(--spacing-6xl) !important;
}
.ml-7xl {
  margin-left: var(--spacing-7xl) !important;
}
.mx-none {
  margin-left: 0 !important;
  margin-right: 0 !important;
}
.mx-4xs {
  margin-left: var(--spacing-4xs) !important;
  margin-right: var(--spacing-4xs) !important;
}
.mx-3xs {
  margin-left: var(--spacing-3xs) !important;
  margin-right: var(--spacing-3xs) !important;
}
.mx-2xs {
  margin-left: var(--spacing-2xs) !important;
  margin-right: var(--spacing-2xs) !important;
}
.mx-xs {
  margin-left: var(--spacing-xs) !important;
  margin-right: var(--spacing-xs) !important;
}
.mx-sm {
  margin-left: var(--spacing-sm) !important;
  margin-right: var(--spacing-sm) !important;
}
.mx-md {
  margin-left: var(--spacing-md) !important;
  margin-right: var(--spacing-md) !important;
}
.mx-lg {
  margin-left: var(--spacing-lg) !important;
  margin-right: var(--spacing-lg) !important;
}
.mx-xl {
  margin-left: var(--spacing-xl) !important;
  margin-right: var(--spacing-xl) !important;
}
.mx-2xl {
  margin-left: var(--spacing-2xl) !important;
  margin-right: var(--spacing-2xl) !important;
}
.mx-3xl {
  margin-left: var(--spacing-3xl) !important;
  margin-right: var(--spacing-3xl) !important;
}
.mx-4xl {
  margin-left: var(--spacing-4xl) !important;
  margin-right: var(--spacing-4xl) !important;
}
.mx-5xl {
  margin-left: var(--spacing-5xl) !important;
  margin-right: var(--spacing-5xl) !important;
}
.mx-6xl {
  margin-left: var(--spacing-6xl) !important;
  margin-right: var(--spacing-6xl) !important;
}
.mx-7xl {
  margin-left: var(--spacing-7xl) !important;
  margin-right: var(--spacing-7xl) !important;
}
.my-none {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
.my-4xs {
  margin-top: var(--spacing-4xs) !important;
  margin-bottom: var(--spacing-4xs) !important;
}
.my-3xs {
  margin-top: var(--spacing-3xs) !important;
  margin-bottom: var(--spacing-3xs) !important;
}
.my-2xs {
  margin-top: var(--spacing-2xs) !important;
  margin-bottom: var(--spacing-2xs) !important;
}
.my-xs {
  margin-top: var(--spacing-xs) !important;
  margin-bottom: var(--spacing-xs) !important;
}
.my-sm {
  margin-top: var(--spacing-sm) !important;
  margin-bottom: var(--spacing-sm) !important;
}
.my-md {
  margin-top: var(--spacing-md) !important;
  margin-bottom: var(--spacing-md) !important;
}
.my-lg {
  margin-top: var(--spacing-lg) !important;
  margin-bottom: var(--spacing-lg) !important;
}
.my-xl {
  margin-top: var(--spacing-xl) !important;
  margin-bottom: var(--spacing-xl) !important;
}
.my-2xl {
  margin-top: var(--spacing-2xl) !important;
  margin-bottom: var(--spacing-2xl) !important;
}
.my-3xl {
  margin-top: var(--spacing-3xl) !important;
  margin-bottom: var(--spacing-3xl) !important;
}
.my-4xl {
  margin-top: var(--spacing-4xl) !important;
  margin-bottom: var(--spacing-4xl) !important;
}
.my-5xl {
  margin-top: var(--spacing-5xl) !important;
  margin-bottom: var(--spacing-5xl) !important;
}
.my-6xl {
  margin-top: var(--spacing-6xl) !important;
  margin-bottom: var(--spacing-6xl) !important;
}
.my-7xl {
  margin-top: var(--spacing-7xl) !important;
  margin-bottom: var(--spacing-7xl) !important;
}

/* Padding utility classes */
.p-none {
  padding: 0 !important;
}
.p-4xs {
  padding: var(--spacing-4xs) !important;
}
.p-3xs {
  padding: var(--spacing-3xs) !important;
}
.p-2xs {
  padding: var(--spacing-2xs) !important;
}
.p-xs {
  padding: var(--spacing-xs) !important;
}
.p-sm {
  padding: var(--spacing-sm) !important;
}
.p-md {
  padding: var(--spacing-md) !important;
}
.p-lg {
  padding: var(--spacing-lg) !important;
}
.p-xl {
  padding: var(--spacing-xl) !important;
}
.p-2xl {
  padding: var(--spacing-2xl) !important;
}
.p-3xl {
  padding: var(--spacing-3xl) !important;
}
.p-4xl {
  padding: var(--spacing-4xl) !important;
}
.p-5xl {
  padding: var(--spacing-5xl) !important;
}
.p-6xl {
  padding: var(--spacing-6xl) !important;
}
.p-7xl {
  padding: var(--spacing-7xl) !important;
}
.pt-none {
  padding-top: 0 !important;
}
.pt-4xs {
  padding-top: var(--spacing-4xs) !important;
}
.pt-3xs {
  padding-top: var(--spacing-3xs) !important;
}
.pt-2xs {
  padding-top: var(--spacing-2xs) !important;
}
.pt-xs {
  padding-top: var(--spacing-xs) !important;
}
.pt-sm {
  padding-top: var(--spacing-sm) !important;
}
.pt-md {
  padding-top: var(--spacing-md) !important;
}
.pt-lg {
  padding-top: var(--spacing-lg) !important;
}
.pt-xl {
  padding-top: var(--spacing-xl) !important;
}
.pt-2xl {
  padding-top: var(--spacing-2xl) !important;
}
.pt-3xl {
  padding-top: var(--spacing-3xl) !important;
}
.pt-4xl {
  padding-top: var(--spacing-4xl) !important;
}
.pt-5xl {
  padding-top: var(--spacing-5xl) !important;
}
.pt-6xl {
  padding-top: var(--spacing-6xl) !important;
}
.pt-7xl {
  padding-top: var(--spacing-7xl) !important;
}
.pr-none {
  padding-right: 0 !important;
}
.pr-4xs {
  padding-right: var(--spacing-4xs) !important;
}
.pr-3xs {
  padding-right: var(--spacing-3xs) !important;
}
.pr-2xs {
  padding-right: var(--spacing-2xs) !important;
}
.pr-xs {
  padding-right: var(--spacing-xs) !important;
}
.pr-sm {
  padding-right: var(--spacing-sm) !important;
}
.pr-md {
  padding-right: var(--spacing-md) !important;
}
.pr-lg {
  padding-right: var(--spacing-lg) !important;
}
.pr-xl {
  padding-right: var(--spacing-xl) !important;
}
.pr-2xl {
  padding-right: var(--spacing-2xl) !important;
}
.pr-3xl {
  padding-right: var(--spacing-3xl) !important;
}
.pr-4xl {
  padding-right: var(--spacing-4xl) !important;
}
.pr-5xl {
  padding-right: var(--spacing-5xl) !important;
}
.pr-6xl {
  padding-right: var(--spacing-6xl) !important;
}
.pr-7xl {
  padding-right: var(--spacing-7xl) !important;
}
.pb-none {
  padding-bottom: 0 !important;
}
.pb-4xs {
  padding-bottom: var(--spacing-4xs) !important;
}
.pb-3xs {
  padding-bottom: var(--spacing-3xs) !important;
}
.pb-2xs {
  padding-bottom: var(--spacing-2xs) !important;
}
.pb-xs {
  padding-bottom: var(--spacing-xs) !important;
}
.pb-sm {
  padding-bottom: var(--spacing-sm) !important;
}
.pb-md {
  padding-bottom: var(--spacing-md) !important;
}
.pb-lg {
  padding-bottom: var(--spacing-lg) !important;
}
.pb-xl {
  padding-bottom: var(--spacing-xl) !important;
}
.pb-2xl {
  padding-bottom: var(--spacing-2xl) !important;
}
.pb-3xl {
  padding-bottom: var(--spacing-3xl) !important;
}
.pb-4xl {
  padding-bottom: var(--spacing-4xl) !important;
}
.pb-5xl {
  padding-bottom: var(--spacing-5xl) !important;
}
.pb-6xl {
  padding-bottom: var(--spacing-6xl) !important;
}
.pb-7xl {
  padding-bottom: var(--spacing-7xl) !important;
}
.pl-none {
  padding-left: 0 !important;
}
.pl-4xs {
  padding-left: var(--spacing-4xs) !important;
}
.pl-3xs {
  padding-left: var(--spacing-3xs) !important;
}
.pl-2xs {
  padding-left: var(--spacing-2xs) !important;
}
.pl-xs {
  padding-left: var(--spacing-xs) !important;
}
.pl-sm {
  padding-left: var(--spacing-sm) !important;
}
.pl-md {
  padding-left: var(--spacing-md) !important;
}
.pl-lg {
  padding-left: var(--spacing-lg) !important;
}
.pl-xl {
  padding-left: var(--spacing-xl) !important;
}
.pl-2xl {
  padding-left: var(--spacing-2xl) !important;
}
.pl-3xl {
  padding-left: var(--spacing-3xl) !important;
}
.pl-4xl {
  padding-left: var(--spacing-4xl) !important;
}
.pl-5xl {
  padding-left: var(--spacing-5xl) !important;
}
.pl-6xl {
  padding-left: var(--spacing-6xl) !important;
}
.pl-7xl {
  padding-left: var(--spacing-7xl) !important;
}
.px-none {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.px-4xs {
  padding-left: var(--spacing-4xs) !important;
  padding-right: var(--spacing-4xs) !important;
}
.px-3xs {
  padding-left: var(--spacing-3xs) !important;
  padding-right: var(--spacing-3xs) !important;
}
.px-2xs {
  padding-left: var(--spacing-2xs) !important;
  padding-right: var(--spacing-2xs) !important;
}
.px-xs {
  padding-left: var(--spacing-xs) !important;
  padding-right: var(--spacing-xs) !important;
}
.px-sm {
  padding-left: var(--spacing-sm) !important;
  padding-right: var(--spacing-sm) !important;
}
.px-md {
  padding-left: var(--spacing-md) !important;
  padding-right: var(--spacing-md) !important;
}
.px-lg {
  padding-left: var(--spacing-lg) !important;
  padding-right: var(--spacing-lg) !important;
}
.px-xl {
  padding-left: var(--spacing-xl) !important;
  padding-right: var(--spacing-xl) !important;
}
.px-2xl {
  padding-left: var(--spacing-2xl) !important;
  padding-right: var(--spacing-2xl) !important;
}
.px-3xl {
  padding-left: var(--spacing-3xl) !important;
  padding-right: var(--spacing-3xl) !important;
}
.px-4xl {
  padding-left: var(--spacing-4xl) !important;
  padding-right: var(--spacing-4xl) !important;
}
.px-5xl {
  padding-left: var(--spacing-5xl) !important;
  padding-right: var(--spacing-5xl) !important;
}
.px-6xl {
  padding-left: var(--spacing-6xl) !important;
  padding-right: var(--spacing-6xl) !important;
}
.px-7xl {
  padding-left: var(--spacing-7xl) !important;
  padding-right: var(--spacing-7xl) !important;
}
.py-none {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
.py-4xs {
  padding-top: var(--spacing-4xs) !important;
  padding-bottom: var(--spacing-4xs) !important;
}
.py-3xs {
  padding-top: var(--spacing-3xs) !important;
  padding-bottom: var(--spacing-3xs) !important;
}
.py-2xs {
  padding-top: var(--spacing-2xs) !important;
  padding-bottom: var(--spacing-2xs) !important;
}
.py-xs {
  padding-top: var(--spacing-xs) !important;
  padding-bottom: var(--spacing-xs) !important;
}
.py-sm {
  padding-top: var(--spacing-sm) !important;
  padding-bottom: var(--spacing-sm) !important;
}
.py-md {
  padding-top: var(--spacing-md) !important;
  padding-bottom: var(--spacing-md) !important;
}
.py-lg {
  padding-top: var(--spacing-lg) !important;
  padding-bottom: var(--spacing-lg) !important;
}
.py-xl {
  padding-top: var(--spacing-xl) !important;
  padding-bottom: var(--spacing-xl) !important;
}
.py-2xl {
  padding-top: var(--spacing-2xl) !important;
  padding-bottom: var(--spacing-2xl) !important;
}
.py-3xl {
  padding-top: var(--spacing-3xl) !important;
  padding-bottom: var(--spacing-3xl) !important;
}
.py-4xl {
  padding-top: var(--spacing-4xl) !important;
  padding-bottom: var(--spacing-4xl) !important;
}
.py-5xl {
  padding-top: var(--spacing-5xl) !important;
  padding-bottom: var(--spacing-5xl) !important;
}
.py-6xl {
  padding-top: var(--spacing-6xl) !important;
  padding-bottom: var(--spacing-6xl) !important;
}
.py-7xl {
  padding-top: var(--spacing-7xl) !important;
  padding-bottom: var(--spacing-7xl) !important;
}

/* Shadow utility classes */
.shadow-none {
  --shadow: var(--shadow-none) !important;
}
.shadow-sm {
  --shadow: var(--shadow-sm) !important;
}
.shadow-md {
  --shadow: var(--shadow-md) !important;
}
.shadow-lg {
  --shadow: var(--shadow-lg) !important;
}
.shadow-xl {
  --shadow: var(--shadow-xl) !important;
}
.shadow-2xl {
  --shadow: var(--shadow-2xl) !important;
}
.shadow-inner {
  --shadow: var(--shadow-inner) !important;
}
</style>

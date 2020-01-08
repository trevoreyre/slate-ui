<script>
export default {
  name: 'SlateTheme',
  render(h) {
    return h('div', this.$slots.default)
  },
}
</script>

<style>
:root {
  /* Typography */
  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  --font-size-base: 100%;

  /* Layout */
  --content-max-width: 1024px;
  --breakpoint-sm: 600px;
  --breakpoint-md: 960px;
  --breakpoint-lg: 1280px;
  --breakpoint-xl: 1920px;

  /* Spacing - margin, padding */
  --spacing-none: 0;
  --spacing-4xs: 0.25rem; /* 4px */
  --spacing-3xs: 0.5rem; /* 8px */
  --spacing-2xs: 0.75rem; /* 12px */
  --spacing-xs: 1rem; /* 16px */
  --spacing-sm: 1.5rem; /* 24px */
  --spacing-md: 2rem; /* 32px */
  --spacing-lg: 2.5rem; /* 40px */
  --spacing-xl: 3rem; /* 48px */
  --spacing-2xl: 4rem; /* 64px */
  --spacing-3xl: 5rem; /* 80px */
  --spacing-4xl: 6rem; /* 96px */
  --spacing-5xl: 8rem; /* 128px */
  --spacing-6xl: 10rem; /* 160px */
  --spacing-7xl: 12rem; /* 192px */
  --spacing-default: var(--spacing-xs);

  --border-radius-none: 0;
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 16px;
  --border-radius-xl: 24px;
  --border-radius-full: 9999px;
  --border-radius-default: var(--border-radius-sm);

  --font-size-xs: 0.75rem; /* 12px */
  --font-size-sm: 0.875rem; /* 14px */
  --font-size-md: 1rem; /* 16px */
  --font-size-lg: 1.25rem; /* 20px */
  --font-size-xl: 1.5rem; /* 24px */
  --font-size-2xl: 1.75rem; /* 28px */
  --font-size-3xl: 2rem; /* 32px */
  --font-size-4xl: 2.5rem; /* 40px */
  --font-size-5xl: 3rem; /* 48px */
  --font-size-default: var(--font-size-md);

  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-bold: 600;
  --font-weight-default: var(--font-weight-normal);

  --line-height-none: 1;
  --line-height-sm: 1.15;
  --line-height-md: 1.25;
  --line-height-lg: 1.5;
  --line-height-default: var(--line-height-lg);

  --letter-spacing-sm: -0.025em;
  --letter-spacing-md: 0;
  --letter-spacing-lg: 0.025em;
  --letter-spacing-xl: 0.05em;
  --letter-spacing-default: var(--letter-spacing-md);

  --text-transform-none: none;
  --text-transform-capitalize: capitalize;
  --text-transform-uppercase: uppercase;
  --text-transform-lowercase: lowercase;
  --text-transform-default: var(--text-transform-none);

  /* Brand colors */
  /* TODO: Figure out brand colors and text-on-brand colors */
  --color-brand-100: #f7fafc;
  --color-brand-200: #edf2f7;
  --color-brand-300: #e2e8f0;
  --color-brand-400: #cbd5e0;
  --color-brand-500: #a0aec0;
  --color-brand-600: #718096;
  --color-brand-700: #4a5568;
  --color-brand-800: #2d3748;
  --color-brand-900: #1a202c;
  --color-brand-default: var(--color-brand-700);

  --color-brand-primary: #1c5b72;

  --color-background-light: #fff;
  --color-background: #f7fafc;
  --color-background-dark: #edf2f7;

  --color-border: rgba(0, 0, 0, 0.12);
  --color-divider: rgba(0, 0, 0, 0.12);
  /* TODO: Re-think color-hover variable */
  --color-hover: rgba(0, 0, 0, 0.06);

  --color-text-primary: rgba(0, 0, 0, 0.7);
  --color-text-secondary: rgba(0, 0, 0, 0.5);
  --color-text-disabled: rgba(0, 0, 0, 0.38);

  --color-text-primary-on-brand-primary: #fff;
  --color-text-secondary-on-brand-primary: rgba(255, 255, 255, 0.7);
  --color-text-disabled-on-brand-primary: rgba(255, 255, 255, 0.5);

  --color-icon-primary: rgba(0, 0, 0, 0.4);
  --color-icon-secondary: rgba(0, 0, 0, 0.2);

  /* TODO: Select icon colors on brand colors */
  --color-icon-primary-on-brand-primary: #edf2f7;
  --color-icon-secondary-on-brand-primary: #e2e8f0;

  /* TODO: Error/success colors */

  /*
    Set borders using box shadow, to avoid affecting layout. Use
    0 0 transparent for no border, because the "none" keyword can't
    be used in a comma-separated list of shadows, and we want to
    use borders and shadows together on elements.
  */
  --border-none: 0 0 transparent;
  --border-sm: inset 0 0 0 1px var(--color-border);
  --border-t-sm: inset 0 1px 0 0 var(--color-border);
  --border-b-sm: inset 0 -1px 0 0 var(--color-border);
  --border-l-sm: inset 1px 0 0 0 var(--color-border);
  --border-r-sm: inset -1px 0 0 0 var(--color-border);
  --border-active: inset 0 0 0 4px var(--color-brand-primary);
  --border-default: var(--border-none);

  /* Outline */
  --outline-none: 0 0 transparent;
  /* TODO: Figure out color for outline */
  --outline-sm: 0 0 0 2px rgba(66, 153, 225, 0.5);
  --outline-md: 0 0 0 3px rgba(66, 153, 225, 0.5);
  --outline-default: var(--outline-none);

  /* Shadows */
  --shadow-none: 0 0 transparent;
  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  --shadow-default: var(--shadow-none);
}

/* Color utility classes */
.bg-color-light {
  background-color: var(--color-background-light);
}
.bg-color-brand-primary {
  background-color: var(--color-brand-primary);
}

/* Typography utility classes */
.typography.primary {
  color: var(--color-text-primary);
}
.typography.secondary {
  color: var(--color-text-secondary);
}
.typography.primary.on-brand-primary {
  color: var(--color-text-primary-on-brand-primary);
}
.typography.secondary.on-brand-primary {
  color: var(--color-text-secondary-on-brand-primary);
}
.typography.disabled.disabled {
  color: var(--color-text-disabled);
}
.typography.disabled.on-brand-primary {
  color: var(--color-text-disabled-on-brand-primary);
}

/* Icon utility classes */
.icon {
  display: inline-block;
}
.icon svg {
  width: 100%;
  height: 100%;
  fill: inherit;
}
.icon.size-xs {
  width: var(--font-size-xs);
  height: var(--font-size-xs);
}
.icon.size-sm {
  width: var(--font-size-sm);
  height: var(--font-size-sm);
}
.icon.size-md {
  width: var(--font-size-md);
  height: var(--font-size-md);
}
.icon.size-lg {
  width: var(--font-size-lg);
  height: var(--font-size-lg);
}
.icon.size-xl {
  width: var(--font-size-xl);
  height: var(--font-size-xl);
}
.icon.size-2xl {
  width: var(--font-size-2xl);
  height: var(--font-size-2xl);
}
.icon.size-3xl {
  width: var(--font-size-3xl);
  height: var(--font-size-3xl);
}
.icon.size-4xl {
  width: var(--font-size-4xl);
  height: var(--font-size-4xl);
}
.icon.size-5xl {
  width: var(--font-size-5xl);
  height: var(--font-size-5xl);
}
.icon.primary {
  fill: var(--color-icon-primary);
}
.icon.secondary {
  fill: var(--color-icon-secondary);
}
.icon.primary.on-brand-primary {
  fill: var(--color-icon-primary-on-brand-primary);
}
.icon.secondary.on-brand-primary {
  fill: var(--color-icon-secondary-on-brand-primary);
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

/* Typography utility classes */
.font-size-xs {
  font-size: var(--font-size-xs) !important;
}
.font-size-sm {
  font-size: var(--font-size-sm) !important;
}
.font-size-md {
  font-size: var(--font-size-md) !important;
}
.font-size-lg {
  font-size: var(--font-size-lg) !important;
}
.font-size-xl {
  font-size: var(--font-size-xl) !important;
}
.font-size-2xl {
  font-size: var(--font-size-2xl) !important;
}
.font-size-3xl {
  font-size: var(--font-size-3xl) !important;
}
.font-size-4xl {
  font-size: var(--font-size-4xl) !important;
}
.font-size-5xl {
  font-size: var(--font-size-5xl) !important;
}
.font-weight-light {
  font-weight: var(--font-weight-light) !important;
}
.font-weight-normal {
  font-weight: var(--font-weight-normal) !important;
}
.font-weight-bold {
  font-weight: var(--font-weight-bold) !important;
}
.line-height-none {
  line-height: var(--line-height-none) !important;
}
.line-height-sm {
  line-height: var(--line-height-sm) !important;
}
.line-height-md {
  line-height: var(--line-height-md) !important;
}
.line-height-lg {
  line-height: var(--line-height-lg) !important;
}
.letter-spacing-sm {
  letter-spacing: var(--letter-spacing-sm) !important;
}
.letter-spacing-md {
  letter-spacing: var(--letter-spacing-md) !important;
}
.letter-spacing-lg {
  letter-spacing: var(--letter-spacing-lg) !important;
}
.letter-spacing-xl {
  letter-spacing: var(--letter-spacing-xl) !important;
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
.m-auto {
  margin: auto !important;
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
.mt-auto {
  margin-top: auto !important;
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
.mr-auto {
  margin-right: auto !important;
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
.mb-auto {
  margin-bottom: auto !important;
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
.ml-auto {
  margin-left: auto !important;
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
.mx-auto {
  margin-left: auto !important;
  margin-right: auto !important;
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
.my-auto {
  margin-top: auto !important;
  margin-bottom: auto !important;
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
</style>

<script>
export default {
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
  --font-size: 100%;

  /* Layout */
  --content-max-width: 1024px;
  --breakpoint-desktop: 1200px;
  --breakpoint-tablet: 800px;

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

  /* Border radius */
  --rounded-none: 0;
  --rounded-sm: 4px;
  --rounded-md: 8px;
  --rounded-lg: 16px;
  --rounded-xl: 24px;
  --rounded-full: 9999px;

  /* Theme colors and text colors */
  --color-primary: #1c5b72;
  --color-secondary: #e03616;
  --color-background-light: #fff;
  --color-background: #fafafa;
  --color-border: rgba(0, 0, 0, 0.12);
  --color-divider: rgba(0, 0, 0, 0.12);
  /* TODO: Re-think color-hover variable */
  --color-hover: rgba(0, 0, 0, 0.06);
  --text-color-primary: rgba(0, 0, 0, 0.7);
  --text-color-secondary: rgba(0, 0, 0, 0.5);
  --text-color-disabled: rgba(0, 0, 0, 0.38);
  --text-color-primary-on-contrast: #fff;
  --text-color-secondary-on-contrast: rgba(255, 255, 255, 0.7);
  --text-color-disabled-on-contrast: rgba(255, 255, 255, 0.5);
  --text-color-primary-on-primary: #fff;
  --text-color-secondary-on-primary: rgba(255, 255, 255, 0.7);
  --text-color-disabled-on-primary: rgba(255, 255, 255, 0.5);
  --text-color-primary-on-secondary: #fff;
  --text-color-secondary-on-secondary: rgba(255, 255, 255, 0.7);
  --text-color-disabled-on-secondary: rgba(255, 255, 255, 0.5);
  --icon-color-primary: rgba(0, 0, 0, 0.4);
  --icon-color-secondary: rgba(0, 0, 0, 0.2);

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
  --border-active: inset 0 0 0 4px var(--color-primary);

  /* Outline */
  --outline-none: 0 0 transparent;
  /* TODO: Figure out color for outline */
  --outline-sm: 0 0 0 3px rgba(66, 153, 225, 0.5);

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
}
</style>

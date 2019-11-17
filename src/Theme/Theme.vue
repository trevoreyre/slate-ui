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
  --font-family: 'Lato', Verdana, sans-serif;
  --font-size: 16px;

  /* Layout */
  --content-max-width: 1024px;
  --breakpoint-desktop: 1200px;
  --breakpoint-tablet: 800px;

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

  --border-radius-s: 4px;
  --border-radius-m: 8px;
  --border-radius-l: 16px;
  --border-radius-xl: 24px;

  /* Theme colors and text colors */
  --color-primary: #1c5b72;
  --color-secondary: #e03616;
  --color-background-light: #fff;
  --color-background: #fafafa;
  --color-border: rgba(0, 0, 0, 0.12);
  --color-divider: rgba(0, 0, 0, 0.12);
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

  /* Set borders using box shadow */
  --border-top: inset 0 1px 0 0 var(--color-border);
  --border-bottom: inset 0 -1px 0 0 var(--color-border);
  --border-left: inset 1px 0 0 0 var(--color-border);
  --border-right: inset -1px 0 0 0 var(--color-border);
  --border: inset 0 0 0 1px var(--color-border);

  /* Shadows */
  --shadow: 0 2px 2px rgba(0, 0, 0, 0.16);

  /* Nav button */
  --button-width: 56px;
  --button-height: 56px;
  --bar-thickness: 2px;
  --button-pad: 18px;
  --button-bar-space: 4px;
  --button-transistion-duration: 0.3s;

  /* Logo */
  --logo-width: 160px;
}
</style>

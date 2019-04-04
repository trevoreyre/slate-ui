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
  --font-family: 'Open Sans', Verdana, sans-serif;
  --font-size: 16px;

  /* Layout */
  --content-max-width: 1024px;
  --breakpoint-desktop: 1200px;
  --breakpoint-tablet: 800px;
  --spacing-xs: 4px;
  --spacing-s: 8px;
  --spacing-m: 16px;
  --spacing-l: 32px;
  --spacing-xl: 64px;
  --spacing-xxl: 96px;
  --border-radius-s: 4px;
  --border-radius-m: 8px;
  --border-radius-l: 12px;
  --border-radius-xl: 16px;

  /* Theme colors and text colors */
  --color-primary: #1c5b72;
  --color-secondary: #e03616;
  --color-background-light: #fff;
  --color-background: #fafafa;
  --color-divider: rgba(0, 0, 0, 0.12);
  --text-color-primary: rgba(0, 0, 0, 0.87);
  --text-color-secondary: rgba(0, 0, 0, 0.54);
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

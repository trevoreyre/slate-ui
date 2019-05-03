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
  --spacing-xs: 8px;
  --spacing-s: 16px;
  --spacing-m: 24px;
  --spacing-l: 48px;
  --spacing-xl: 96px;
  --spacing-xxl: 192px;
  --border-radius-s: 4px;
  --border-radius-m: 8px;
  --border-radius-l: 16px;
  --border-radius-xl: 24px;

  /* Theme colors and text colors */
  --color-primary: #1c5b72;
  --color-secondary: #e03616;
  --color-background-light: #fff;
  --color-background: #fafafa;
  --color-divider: rgba(0, 0, 0, 0.12);
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

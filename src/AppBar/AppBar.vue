<template>
  <div :class="['app-bar', theme, size]">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { sizeValidator, themeBackgroundValidator } from '../util/propValidators'

export default {
  props: {
    theme: {
      type: String,
      default: 'default',
      validator: themeBackgroundValidator,
    },
    size: {
      type: String,
      default: 'm',
      validator: sizeValidator,
    },
  },
}
</script>

<style scoped>
.app-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--spacing-m) - 0.5px) var(--spacing-m);
  border-bottom: 1px solid var(--color-divider);
}

.container {
  width: 100%;
  max-width: var(--content-max-width);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.default {
  background: var(--color-background);
}

.light {
  background: var(--color-background-light);
}

.s {
  padding: var(--spacing-s) var(--spacing-m);
}

.l {
  padding: var(--spacing-l) var(--spacing-m);
}
</style>

<template>
  <div :class="['app-bar', theme, size]">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { validateSize } from '@slate-ui/theme'

export default {
  name: 'SlateAppBar',
  props: {
    theme: {
      type: String,
      default: 'default',
      validator: value => ['default', 'light'].includes(value),
    },
    size: {
      type: String,
      default: 'md',
      validator: validateSize,
    },
  },
}
</script>

<style scoped>
.app-bar {
  --border: var(--border-b-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-sm);
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
  padding: var(--spacing-xs) var(--spacing-sm);
}

.l {
  padding: var(--spacing-4xl) var(--spacing-sm);
}
</style>

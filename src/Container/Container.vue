<template>
  <div :class="['container', theme]">
    <div :class="['content', size, `padding-${padding}`]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { spacingValidator } from '../util/propValidators'

export default {
  name: 'container',
  props: {
    size: {
      type: String,
      default: 'full',
      validator: value => ['s', 'm', 'l', 'full'].includes(value),
    },
    padding: {
      type: String,
      default: 'm',
      validator: spacingValidator,
    },
    theme: {
      type: String,
      default: 'inherit',
      validator: value => ['default', 'light', 'inherit'].includes(value),
    },
  },
}
</script>

<style scoped>
.container {
  width: 100%;
}

.default {
  background: var(--color-background);
}

.light {
  background: var(--color-background-light);
}

.inherit {
  background: transparent;
}

.content {
  margin: 0 auto;
}

.s {
  max-width: 600px;
}

.m {
  max-width: var(--breakpoint-tablet);
}

.l {
  max-width: var(--breakpoint-desktop);
}

.f {
  max-width: 100%;
}

.padding-xs {
  padding: var(--spacing-3xs);
}

.padding-s {
  padding: var(--spacing-xs);
}

.padding-m {
  padding: var(--spacing-sm);
}

.padding-l {
  padding: var(--spacing-4xl);
}

.padding-xl {
  padding: var(--spacing-4xl);
}

.padding-xxl {
  padding: var(--spacing-7xl);
}
</style>

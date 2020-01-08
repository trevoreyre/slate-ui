<script>
export default {
  name: 'SlateBadge',
  provide: {
    backgroundColor: 'brand-primary',
  },
}
</script>

<template>
  <span class="badge">
    <slot></slot>
  </span>
</template>

<style scoped>
.badge {
  border-radius: var(--border-radius-full);
  padding: var(--spacing-3xs);
  min-width: calc(2 * var(--spacing-3xs) + var(--font-size-xs));
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(33%, -33%);
  transform-origin: 100% 0%;
  background: var(--color-brand-700);
  color: var(--color-text-primary-on-brand-primary);
  font-size: var(--font-size-xs);
  text-align: center;
  line-height: 1;
}
</style>

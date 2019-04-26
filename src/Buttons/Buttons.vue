<template>
  <div :class="['buttons', align]">
    <slot></slot>
  </div>
</template>

<script>
import { alignValidator } from '../util/propValidators'

export default {
  props: {
    align: {
      type: String,
      default: 'left',
      validator: alignValidator,
    },
  },
}
</script>

<style scoped>
.buttons {
  margin: calc(-1 * var(--spacing-s));
  max-width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

.buttons > * {
  margin: var(--spacing-s);
}

.left {
  justify-content: flex-start;
}

.center {
  justify-content: center;
}

.right {
  justify-content: flex-end;
}
</style>

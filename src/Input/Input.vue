<template>
  <input
    :class="['input', theme, { rounded: rounded }]"
    :value="value"
    v-on="listeners"
  />
</template>

<script>
import { themeBackgroundValidator } from '../util/propValidators'

export default {
  props: {
    value: String,
    theme: {
      type: String,
      default: 'default',
      validator: themeBackgroundValidator,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    listeners() {
      const vm = this
      return {
        ...this.$listeners,
        input(event) {
          vm.$emit('input', event.target.value)
        },
      }
    },
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>

<style scoped>
.input {
  border-radius: var(--border-radius-m);
  border: 1px solid var(--color-divider);
  padding: calc(var(--spacing-s) - 2px) var(--spacing-s);
  width: 100%;
}

.default {
  background: var(--color-background);
}

.light {
  background: var(--color-background-light);
}

.rounded {
  border-radius: var(--border-radius-xl);
  padding: calc(var(--spacing-s) - 2px) var(--spacing-m);
}
</style>

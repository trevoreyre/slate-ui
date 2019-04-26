<template>
  <input :class="['input', theme]" :value="value" v-on="listeners" />
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
  border-radius: var(--border-radius-s);
  border: 1px solid var(--color-divider);
  padding: var(--spacing-s);
  width: 100%;
}

.default {
  background: var(--color-background);
}

.light {
  background: var(--color-background-light);
}
</style>

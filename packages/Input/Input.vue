<template>
  <input
    :class="['input', theme, { rounded: rounded }]"
    :value="value"
    v-on="listeners"
  />
</template>

<script>
export default {
  name: 'SlateInput',
  props: {
    value: String,
    theme: {
      type: String,
      default: 'default',
      validator: value => ['default', 'light'].includes(value),
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
  --border: var(--border-sm);
  border-radius: var(--border-radius-md);
  border: none;
  padding: var(--spacing-xs);
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
  padding: calc(var(--spacing-xs) - 2px) var(--spacing-sm);
}
</style>

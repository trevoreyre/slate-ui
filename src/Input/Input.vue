<template>
  <input class="input" :value="value" @input="handleInput" />
</template>

<script>
export default {
  props: {
    value: String,
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
  border: 1px solid var(--color-divider);
  border-radius: var(--border-radius-s);
  padding: var(--spacing-s);
  font-family: inherit;
}
</style>

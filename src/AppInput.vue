<template>
  <input class="app-input" :value="value" @input="handleInput" />
</template>

<script>
export default {
  props: {
    value: {
      type: String
    }
  },
  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>

<style scoped>
.app-input {
  border: solid 1px var(--border-color);
  border-radius: var(--border-radius-s);
  padding: var(--spacing-s);
  font-family: inherit;
}
</style>

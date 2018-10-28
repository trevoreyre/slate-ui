<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="viewBox"
  >
    <slot></slot>
  </svg>
</template>

<script>
export default {
  name: "icon",
  props: {
    width: {
      type: Number,
      default: 24,
      required: false
    },
    height: {
      type: Number,
      default: 24,
      required: false
    },
    viewBox: {
      type: String,
      default: "0 0 24 24",
      required: false
    }
  }
};
</script>

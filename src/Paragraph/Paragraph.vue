<template>
  <p class="paragraph">
    <slot></slot>
  </p>
</template>

<script>
export default {
  props: {
    margin: String,
  },
}
</script>

<style scoped>
.paragraph {
  margin-bottom: 4rem;
  font-size: 2rem;
  line-height: 4rem;
  font-weight: 400;
}

@media screen and (max-width: 720px) {
  p {
    margin-bottom: 3rem;
    font-size: 1.6rem;
    line-height: 3rem;
    font-weight: 400;
  }
}
</style>

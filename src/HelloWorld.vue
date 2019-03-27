<template>
  <h1>Hello {{ msg }}</h1>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

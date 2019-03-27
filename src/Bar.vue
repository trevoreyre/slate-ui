<template>
  <div class="bar">
    <div class="left" v-if="$slots['left']">
      <slot name="left"></slot>
    </div>
    <div class="center" v-if="$slots['center']">
      <slot name="center"></slot>
    </div>
    <div class="right" v-if="$slots['right']">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "bar"
};
</script>

<style scoped>
.bar {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 24px calc((100% - 1344px) / 2);
}

.left,
.center,
.right {
  display: flex;
  align-items: center;
  flex: 1 1 100%;
}

.left {
  padding-left: 24px;
  justify-content: flex-start;
}

.center {
  margin: 0 16px;
  justify-content: center;
}

.right {
  padding-right: 24px;
  justify-content: flex-end;
}
</style>

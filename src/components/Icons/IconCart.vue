<template>
  <icon class='icon-cart' :width="27" :height="26" viewBox='0 0 27 26'>
    <path d="M10.046 25c1.18 0 2.154-.95 2.154-2.143a2.148 2.148 0 0 0-2.154-2.143c-1.18 0-2.154.95-2.154 2.143 0 1.192.974 2.143 2.154 2.143zM22.736 25c1.18 0 2.154-.95 2.154-2.143a2.148 2.148 0 0 0-2.154-2.143c-1.18 0-2.154.95-2.154 2.143 0 1.192.974 2.143 2.154 2.143zM1 1h4.545l3.046 14.282c.104.491.388.933.804 1.247.415.313.935.48 1.469.47h11.045a2.37 2.37 0 0 0 1.469-.47c.415-.314.7-.756.804-1.247L26 6.333H6.682" stroke="#000" stroke-opacity=".54" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </icon>
</template>

<script>
import Icon from "./Icon";

export default {
  name: "icon-cart",
  components: {
    Icon
  }
};
</script>

<style scoped>
.icon-cart {
  fill: none;
}
</style>


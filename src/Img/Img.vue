// TODO: Flesh out the Img component
<script>
import { marginMixin } from '../util/spacing'

export default {
  name: 'SlateImg',
  mixins: [marginMixin],
  props: {
    image: {
      type: Object,
      required: true,
    },
    src: String,
    alt: String,
    width: {
      type: Number,
      default: 400,
    },
  },

  computed: {
    style() {
      return {
        paddingBottom: `${this.image.aspectRatio * 100}%`,
      }
    },
  },
}
</script>

<template>
  <div :class="['app-image', marginClass]" :style="style">
    <img class="placeholder" :src="image.placeholder" />
    <img class="image" :src="src" :alt="alt" />
  </div>
</template>

<style scoped>
.app-image {
  border-radius: var(--rounded);
  position: relative;
  height: 0;
  overflow: hidden;
}

.placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(8px);
  transform: scale(1.1);
}

.image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

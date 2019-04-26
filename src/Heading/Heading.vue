<script>
const mapSizeToTag = {
  xs: 'h6',
  s: 'h5',
  m: 'h4',
  l: 'h3',
  xl: 'h2',
  xxl: 'h1',
}

export default {
  props: {
    as: [String, Function],
    size: {
      type: String,
      default: 'm',
      validator: value => ['xs', 's', 'm', 'l', 'xl', 'xxl'].includes(value),
    },
  },
  render(h) {
    const as = this.as || mapSizeToTag[this.size]
    return h(
      as,
      {
        class: ['header', this.size],
      },
      this.$slots.default
    )
  },
}
</script>

<style scoped>
/* h1 */
.xxl {
  margin-bottom: 4rem;
  font-size: 7.63rem;
  line-height: 8rem;
  font-weight: 900;
}

/* h2 */
.xl {
  margin-bottom: 4rem;
  font-size: 6.1rem;
  line-height: 8rem;
  font-weight: 900;
}

/* h3 */
.l {
  margin-bottom: 4rem;
  font-size: 4.88rem;
  line-height: 8rem;
  font-weight: 900;
}

/* h4 */
.m {
  margin-bottom: 4rem;
  font-size: 3.91rem;
  line-height: 4rem;
  font-weight: 900;
}

/* h5 */
.s {
  margin-bottom: 4rem;
  font-size: 3.125em;
  line-height: 4rem;
  font-weight: 900;
}

/* h6 */
.xs {
  margin-bottom: 4rem;
  font-size: 2.5em;
  line-height: 4rem;
  font-weight: 900;
}

@media screen and (max-width: 720px) {
  .xxl {
    margin-bottom: 3rem;
    font-size: 6.1rem;
    line-height: 9rem;
    font-weight: 600;
  }

  .xl {
    margin-bottom: 3rem;
    font-size: 4.88rem;
    line-height: 6rem;
    font-weight: 600;
  }

  .l {
    margin-bottom: 3rem;
    font-size: 3.91rem;
    line-height: 6rem;
    font-weight: 600;
  }

  .m {
    margin-bottom: 3rem;
    font-size: 3.125em;
    line-height: 6rem;
    font-weight: 600;
  }

  .s {
    margin-bottom: 3rem;
    font-size: 2.5em;
    line-height: 3rem;
    font-weight: 600;
  }

  .xs {
    margin-bottom: 3rem;
    font-size: 2em;
    line-height: 3rem;
    font-weight: 600;
  }
}
</style>

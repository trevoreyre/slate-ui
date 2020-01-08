<template>
  <Autocomplete
    :search="search"
    :auto-select="autoSelect"
    :default-value="defaultValue"
    :get-result-value="getResultValue"
    @submit="handleSubmit"
  >
    <template
      v-slot="{
        rootProps,
        inputProps,
        inputListeners: { input, ...otherInputListeners },
        resultListProps,
        resultListListeners,
        results,
        resultProps,
      }"
    >
      <div v-bind="rootProps" :class="['autocomplete', { rounded }]">
        <Input
          :rounded="rounded"
          :theme="theme"
          v-bind="{ ...inputProps, ...$attrs }"
          :class="'autocomplete-input'"
          v-on="otherInputListeners"
          @input.native="input"
        />
        <ul
          v-bind="resultListProps"
          v-on="resultListListeners"
          :class="'autocomplete-result-list'"
        >
          <li
            v-for="(result, index) in results"
            :key="resultProps[index].id"
            v-bind="resultProps[index]"
            :class="'autocomplete-result'"
          >
            {{ getResultValue(result) }}
            <Icon class="icon-search" theme="secondary">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 11a7 7 0 1114 0 7 7 0 01-14 0zm12.62 7.03a9 9 0 111.41-1.41l3.68 3.67a1 1 0 01-1.42 1.42l-3.67-3.68z"
              />
            </Icon>
          </li>
        </ul>
        <Icon class="icon-search" theme="secondary">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4 11a7 7 0 1114 0 7 7 0 01-14 0zm12.62 7.03a9 9 0 111.41-1.41l3.68 3.67a1 1 0 01-1.42 1.42l-3.67-3.68z"
          />
        </Icon>
      </div>
    </template>
  </Autocomplete>
</template>

<script>
import Autocomplete from '@trevoreyre/autocomplete-vue'
import Icon from '@slate-ui/icon'
import Input from '@slate-ui/input'

export default {
  name: 'SlateAutocomplete',
  inheritAttrs: false,
  components: { Autocomplete, Icon, Input },
  props: {
    search: {
      type: Function,
      required: true,
    },
    autoSelect: {
      type: Boolean,
      default: false,
    },
    getResultValue: {
      type: Function,
      default: result => result,
    },
    defaultValue: {
      type: String,
      default: '',
    },
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
  methods: {
    handleSubmit(selectedResult) {
      this.$emit('submit', selectedResult)
    },
  },
}
</script>

<style scoped>
.autocomplete {
  --autocomplete-border-above: var(--border-t-sm), var(--border-r-sm),
    var(--border-l-sm);
  --autocomplete-border-below: var(--border-b-sm), var(--border-r-sm),
    var(--border-l-sm);
}

.icon-search {
  position: absolute;
  top: 50%;
  left: var(--spacing-xs);
  transform: translateY(-50%);
  pointer-events: none;
}

.rounded .icon-search {
  left: var(--spacing-sm);
}

.autocomplete-input {
  /* Small padding between border, icon, and text + width of icon */
  padding-left: calc(2 * var(--spacing-xs) + 1rem);
}

.rounded .autocomplete-input {
  /* Medium padding for rounded corners + width of icon + small padding for text */
  padding-left: calc(var(--spacing-sm) + 1rem + var(--spacing-xs));
}

.autocomplete-input:focus,
.autocomplete-input[aria-expanded='true'] {
  outline: none;
  background-color: var(--color-background-light);
}

[data-position='below'] .autocomplete-input[aria-expanded='true'] {
  --border: var(--autocomplete-border-above);
  --shadow: var(--shadow-md);
  border-bottom-left-radius: var(--border-radius-none);
  border-bottom-right-radius: var(--border-radius-none);
}

[data-position='above'] .autocomplete-input[aria-expanded='true'] {
  --border: var(--autocomplete-border-below);
  --shadow: var(--shadow-md);
  border-top-left-radius: var(--border-radius-none);
  border-top-right-radius: var(--border-radius-none);
  z-index: 2;
}

/* Loading spinner */
.autocomplete[data-loading='true']::after {
  content: '';
  border: 3px solid var(--color-icon-secondary);
  border-right: 3px solid var(--color-icon-primary);
  border-radius: var(--border-radius-full);
  width: 1.25rem;
  height: 1.25rem;
  position: absolute;
  right: var(--spacing-xs);
  top: 50%;
  transform: translateY(-50%);
  animation: rotate 1s infinite linear;
}

.autocomplete-result-list {
  margin: var(--spacing-none);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-none);
  box-sizing: border-box;
  max-height: 296px;
  overflow-y: auto;
  background: var(--color-background-light);
  list-style: none;
}

.rounded .autocomplete-result-list {
  border-radius: var(--border-radius-xl);
}

[data-position='below'] .autocomplete-result-list {
  --border: var(--autocomplete-border-below);
  --shadow: var(--shadow-md);
  border-top-left-radius: var(--border-radius-none);
  border-top-right-radius: var(--border-radius-none);
  padding-bottom: var(--spacing-3xs);
}

[data-position='above'] .autocomplete-result-list {
  --border: var(--autocomplete-border-above);
  --shadow: var(--shadow-md);
  border-bottom-left-radius: var(--border-radius-none);
  border-bottom-right-radius: var(--border-radius-none);
  padding-top: var(--spacing-3xs);
}

/* Single result item */
.autocomplete-result {
  cursor: default;
  padding: calc(var(--spacing-sm) / 2);
  padding-left: calc(2 * var(--spacing-xs) + 1rem);
  position: relative;
}

.rounded .autocomplete-result {
  padding-left: calc(var(--spacing-sm) + 1rem + var(--spacing-xs));
}

.autocomplete-result:hover,
.autocomplete-result[aria-selected='true'] {
  background-color: var(--color-hover);
}

@keyframes rotate {
  from {
    transform: translateY(-50%) rotate(0deg);
  }
  to {
    transform: translateY(-50%) rotate(359deg);
  }
}
</style>

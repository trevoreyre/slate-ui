<template>
  <Autocomplete :search="search">
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
          :class="'autocomplete-results'"
        >
          <li
            v-for="(result, index) in results"
            :key="resultProps[index].id"
            v-bind="resultProps[index]"
            :class="'autocomplete-result'"
          >
            {{ result }}
            <div class="icon" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4-4" />
              </svg>
            </div>
          </li>
        </ul>
        <div class="icon" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4-4" />
          </svg>
        </div>
      </div>
    </template>
  </Autocomplete>
</template>

<script>
import Autocomplete from '@trevoreyre/autocomplete-vue'
import { themeBackgroundValidator } from '../util/propValidators'
import Input from '../Input/Input.vue'

export default {
  inheritAttrs: false,
  components: { Autocomplete, Input },
  props: {
    search: {
      type: Function,
      required: true,
    },
    theme: {
      type: String,
      default: 'default',
      validator: themeBackgroundValidator,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.icon {
  position: absolute;
  top: 50%;
  left: var(--spacing-s);
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--icon-color-secondary);
}

.rounded .icon {
  left: var(--spacing-m);
}

.icon svg {
  width: 1.25rem;
  height: 1.25rem;
  display: block;
}

.autocomplete-input {
  /* Small padding between border, icon, and text + width of icon */
  padding-left: calc(2 * var(--spacing-s) + 1rem);
}

.rounded .autocomplete-input {
  /* Medium padding for rounded corners + width of icon + small padding for text */
  padding-left: calc(var(--spacing-m) + 1rem + var(--spacing-s));
}

.autocomplete-input:focus,
.autocomplete-input[aria-expanded='true'] {
  background-color: var(--color-background-light);
  outline-offset: 4px;
  box-shadow: var(--shadow);
}

[data-position='below'] .autocomplete-input[aria-expanded='true'] {
  border-bottom-color: transparent;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

[data-position='above'] .autocomplete-input[aria-expanded='true'] {
  border-top-color: transparent;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  z-index: 2;
}

/* Loading spinner */
.autocomplete[data-loading='true']::after {
  content: '';
  border: 3px solid var(--color-icon-secondary);
  border-right: 3px solid var(--color-icon-primary);
  border-radius: 100%;
  width: 1.25rem;
  height: 1.25rem;
  position: absolute;
  right: var(--spacing-s);
  top: 50%;
  transform: translateY(-50%);
  animation: rotate 1s infinite linear;
}

.autocomplete-results {
  margin: 0;
  border: 1px solid var(--color-divider);
  border-radius: var(--border-radius-m);
  padding: 0;
  box-sizing: border-box;
  max-height: 296px;
  overflow-y: auto;
  background: var(--color-background-light);
  list-style: none;
  box-shadow: var(--shadow);
}

.rounded .autocomplete-results {
  border-radius: var(--border-radius-xl);
}

[data-position='below'] .autocomplete-results {
  margin-top: -1px;
  border-top-color: transparent;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  padding-bottom: var(--spacing-xs);
}

[data-position='above'] .autocomplete-results {
  margin-bottom: -1px;
  border-bottom-color: transparent;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding-top: var(--spacing-xs);
}

/* Single result item */
.autocomplete-result {
  cursor: default;
  padding: calc(var(--spacing-m) / 2);
  padding-left: calc(2 * var(--spacing-s) + 1rem);
  position: relative;
}

.rounded .autocomplete-result {
  padding-left: calc(var(--spacing-m) + 1rem + var(--spacing-s));
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

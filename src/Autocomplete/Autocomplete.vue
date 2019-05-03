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
      <div v-bind="rootProps">
        <Input
          :rounded="rounded"
          :theme="theme"
          v-bind="{ ...inputProps, ...$attrs }"
          v-on="otherInputListeners"
          @input.native="input"
        />
        <ul
          v-bind="resultListProps"
          v-on="resultListListeners"
          :class="['autocomplete-results', { rounded: rounded }]"
        >
          <li
            v-for="(result, index) in results"
            :key="resultProps[index].id"
            v-bind="resultProps[index]"
          >
            {{ result }}
          </li>
        </ul>
        <div class="icon" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
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
  top: calc(var(--spacing-s) - 4px);
  left: var(--spacing-s);
  pointer-events: none;
  color: var(--icon-color-secondary);
}

.icon svg {
  display: block;
}

.autocomplete-input {
  padding-left: 48px;
  background-repeat: no-repeat;
  background-position: calc(var(--spacing-s) - 2px) center;
}

.rounded {
  padding-left: 56px;
  background-position: calc(var(--spacing-m) - 2px) center;
}

.autocomplete-input:focus,
.autocomplete-input[aria-expanded='true'] {
  background-color: var(--color-background-light);
  outline-offset: 4px;
  box-shadow: var(--shadow);
}

[data-position='below'] .autocomplete-input[aria-expanded='true'] {
  border-bottom-color: transparent;
  border-radius: var(--border-radius-m) var(--border-radius-m) 0 0;
}

[data-position='below'] .autocomplete-input.rounded[aria-expanded='true'] {
  border-bottom-color: transparent;
  border-radius: var(--border-radius-xl) var(--border-radius-xl) 0 0;
}

[data-position='above'] .autocomplete-input[aria-expanded='true'] {
  border-top-color: transparent;
  border-radius: 0 0 var(--border-radius-m) var(--border-radius-m);
  z-index: 2;
}

[data-position='above'] .autocomplete-input.rounded[aria-expanded='true'] {
  border-top-color: transparent;
  border-radius: 0 0 var(--border-radius-xl) var(--border-radius-xl);
  z-index: 2;
}

/* Loading spinner */
.autocomplete[data-loading='true']::after {
  content: '';
  border: 3px solid rgba(0, 0, 0, 0.12);
  border-right: 3px solid rgba(0, 0, 0, 0.48);
  border-radius: 100%;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  animation: rotate 1s infinite linear;
}

.autocomplete-results {
  margin: 0;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 0;
  box-sizing: border-box;
  max-height: 296px;
  overflow-y: auto;
  background: #fff;
  list-style: none;
  box-shadow: var(--shadow);
}

[data-position='below'] .autocomplete-results {
  margin-top: -1px;
  border-top-color: transparent;
  border-radius: 0 0 var(--border-radius-m) var(--border-radius-m);
  padding-bottom: var(--spacing-xs);
}

[data-position='below'] .autocomplete-results.rounded {
  border-radius: 0 0 var(--border-radius-xl) var(--border-radius-xl);
}

[data-position='above'] .autocomplete-results {
  margin-bottom: -1px;
  border-bottom-color: transparent;
  border-radius: var(--border-radius-m) var(--border-radius-m) 0 0;
  padding-top: var(--spacing-xs);
}

[data-position='above'] .autocomplete-results.rounded {
  border-radius: var(--border-radius-xl) var(--border-radius-xl) 0 0;
}

/* Single result item */
.autocomplete-result {
  cursor: default;
  padding: 12px 12px 12px 48px;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjY2NjIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iOCIvPjxwYXRoIGQ9Ik0yMSAyMWwtNC00Ii8+PC9zdmc+');
  background-repeat: no-repeat;
  background-position: 12px center;
}

.autocomplete-result:hover,
.autocomplete-result[aria-selected='true'] {
  background-color: rgba(0, 0, 0, 0.06);
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

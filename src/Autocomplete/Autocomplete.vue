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
          v-bind="{ ...inputProps, ...$attrs }"
          v-on="otherInputListeners"
          @input.native="input"
        />
        <ul v-bind="resultListProps" v-on="resultListListeners">
          <li
            v-for="(result, index) in results"
            :key="resultProps[index].id"
            v-bind="resultProps[index]"
          >
            Result: {{ result }}
          </li>
        </ul>
      </div>
    </template>
  </Autocomplete>
</template>

<script>
import Autocomplete from '@trevoreyre/autocomplete-vue'
import Input from '../Input/Input.vue'

export default {
  inheritAttrs: false,
  components: { Autocomplete, Input },
  props: {
    search: {
      type: Function,
      required: true,
    },
  },
}
</script>

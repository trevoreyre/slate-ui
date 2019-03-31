import { storiesOf } from "@storybook/vue";

import HelloWorld from "./HelloWorld.vue";

storiesOf("HelloWorld", module).add("default", () => ({
  components: { HelloWorld },
  template: `<HelloWorld msg="Trevor" />`
}));

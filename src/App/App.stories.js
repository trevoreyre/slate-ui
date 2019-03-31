import { storiesOf } from "@storybook/vue";

import App from "./App.vue";

storiesOf("App", module).add("default", () => ({
  components: { App },
  template: `<App />`
}));

import { storiesOf } from '@storybook/vue'
import AppBar from './AppBar.vue'

storiesOf('AppBar', module)
  .add('default', () => ({
    components: { AppBar },
    template: `
      <AppBar>
        <div>
          Child 1
        </div>
        <div>
          Child 2
        </div>
        <div>
          Child 3
        </div>
      </AppBar>
    `,
  }))
  .add('size', () => ({
    components: { AppBar },
    template: `
      <div>
        <AppBar size="sm">
          Small
        </AppBar>
        <AppBar>
          Medium (default)
        </AppBar>
        <AppBar size="lg">
          Large
        </AppBar>
      </div>
    `,
  }))
  .add('theme', () => ({
    components: { AppBar },
    template: `
      <div>
        <AppBar>
          <div>
            Default
          </div>
        </AppBar>
        <AppBar theme="light">
          <div>
            Light
          </div>
        </AppBar>
      </div>
    `,
  }))

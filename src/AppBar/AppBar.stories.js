import { storiesOf } from '@storybook/vue'
import AppBar from './AppBar.vue'

storiesOf('AppBar', module)
  .addParameters({ styles: { padding: 0 } })
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
        <AppBar size="s">
          Small
        </AppBar>
        <AppBar>
          Medium (default)
        </AppBar>
        <AppBar size="l">
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

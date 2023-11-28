import { html } from 'lit'
import './app-bar.js'
import '../app-nav/app-nav.js'

const meta = {
  title: 'Stories/App bar',
  component: 'slate-app-bar',
  parameters: {
    styles: {
      padding: 0,
    },
  },
}

const Basic = {
  render: () => html`
    <slate-app-bar>
      <slate-app-nav>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </slate-app-nav>
    </slate-app-bar>
  `,
}

export default meta
export { Basic }

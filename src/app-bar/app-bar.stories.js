import { html } from 'lit'
import './app-bar.css'
import './app-bar.js'
import '../app-nav/app-nav.css'
import '../app-nav/app-nav-close-button.js'
import '../app-nav/app-nav-content.js'
import '../app-nav/app-nav-menu-button.js'
import '../app-nav/app-nav.js'

const meta = {
  title: 'Components/App bar',
  component: 'slate-app-bar',
  parameters: {
    styles: {
      padding: 0,
    },
  },
}

const Default = {
  render: () => html`
    <slate-app-bar>
      <slate-app-nav aria-label="Main" justify="between" wrap>
        <slate-app-nav-menu-button></slate-app-nav-menu-button>
        <slate-app-nav-content gap="md">
          <slate-app-nav-close-button></slate-app-nav-close-button>
          <a href="#">
            <slate-text transform="uppercase">Home</slate-text>
          </a>
          <a href="#">
            <slate-text transform="uppercase">Projects</slate-text>
          </a>
          <a href="#">
            <slate-text transform="uppercase">Posts</slate-text>
          </a>
          <a href="#">
            <slate-text transform="uppercase">Contact</slate-text>
          </a>
        </slate-app-nav-content>
        <slate-stack
          class="social-links"
          gap="sm"
          direction="row"
        ></slate-stack>
      </slate-app-nav>
    </slate-app-bar>
  `,
}

export default meta
export { Default }

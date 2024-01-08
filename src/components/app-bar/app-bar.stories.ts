import { html } from '../../utils/html'

const meta = {
  title: 'Components/App bar',
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

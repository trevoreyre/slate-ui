import { defineCustomElements } from '../loader'
import { html } from '../src/utils/html'
import '../src/theme.css'
import '../src/theme-typography.css'
import '../src/styles.css'
import './preview.css'

defineCustomElements()

const defaultStyles = {
  padding: 'var(--spacing-xl)',
}

/** @type { import('@storybook/web-components-vite').Preview } */
const preview = {
  decorators: [
    (story, { parameters }) => {
      const { styles = defaultStyles } = parameters
      console.log({ styles })
      const style = Object.entries(styles)
        .map(
          ([key, value]) => console.log({ key, value }) || `${key}: ${value}`,
        )
        .join('; ')
      console.log({ style })

      return html`
        <div style="${style}">${story()}</div>
      `
    },
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      canvas: {
        withToolbar: false,
      },
      source: {
        format: 'html',
        excludeDecorators: true,
      },
    },
  },
}

export default preview

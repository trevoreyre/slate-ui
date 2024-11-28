import { setCustomElementsManifest } from '@storybook/web-components'
import { html } from 'lit'
import { styleMap } from 'lit/directives/style-map.js'
import customElementsManifest from '../custom-elements.json'
import '../src/theme.css'
import '../src/theme-typography.css'
import '../src/theme-typography-2.css'
import '../src/styles.css'
import './preview.css'
import './components.js'

setCustomElementsManifest(customElementsManifest)

const defaultStyles = {
  padding: 'var(--spacing-xl)',
}

/** @type { import('@storybook/web-components-vite').Preview } */
const preview = {
  decorators: [
    (story, { parameters }) => {
      const { styles: stylesParam = {} } = parameters
      const styles = { ...defaultStyles, ...stylesParam }

      return html`
        <div style=${styleMap(styles)}>${story()}</div>
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

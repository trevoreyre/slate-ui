import { html, LitElement } from 'lit'

/**
 * Light DOM version of LitElement
 */
class SlateElement extends LitElement {
  createRenderRoot() {
    return this
  }

  render() {
    return html``
  }
}

export { SlateElement }

import { SlateElement } from '../slate-element.js'

class Content extends SlateElement {}

if (!customElements.get('slate-content')) {
  customElements.define('slate-content', Content)
}

export { Content }

import { SlateElement } from '../slate-element.js'

class Tag extends SlateElement {}

if (!customElements.get('slate-tag')) {
  customElements.define('slate-tag', Tag)
}

export { Tag }

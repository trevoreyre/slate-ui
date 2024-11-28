import { SlateElement } from '../slate-element.js'

class AppBar extends SlateElement {}

if (!customElements.get('slate-app-bar')) {
  customElements.define('slate-app-bar', AppBar)
}

export { AppBar }

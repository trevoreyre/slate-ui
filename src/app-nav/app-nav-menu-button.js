import { SlateElement } from '../slate-element.js'

class AppNavMenuButton extends SlateElement {}

if (!customElements.get('slate-app-nav-menu-button')) {
  customElements.define('slate-app-nav-menu-button', AppNavMenuButton)
}
export { AppNavMenuButton }

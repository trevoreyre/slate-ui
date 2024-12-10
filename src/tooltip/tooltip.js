import {
  apply as applyPopoverPolyfill,
  isSupported as popoverSupported,
  isPolyfilled as popoverPolyfilled,
} from '@oddbird/popover-polyfill/fn'
// import applyCssAnchorPositioningPolyfill from '@oddbird/css-anchor-positioning/fn'
import {
  autoUpdate,
  computePosition,
  flip,
  offset,
  shift,
} from '@floating-ui/dom'
import { SlateElement } from '../slate-element.js'

class Tooltip extends SlateElement {
  #cleanupAutoUpdate = null

  #trigger = null

  constructor() {
    super()
    this.addEventListener('toggle', (event) => {
      if (event.newState === 'open' && this.#trigger) {
        this.#cleanupAutoUpdate = autoUpdate(
          this.#trigger,
          this,
          this.updatePosition.bind(this),
        )
      } else if (event.newState === 'closed') {
        this.#cleanupAutoUpdate?.()
      }
    })
  }

  connectedCallback() {
    this.#trigger = document.querySelector(`[popovertarget='${this.id}']`)
  }

  disconnectedCallback() {
    this.#cleanupAutoUpdate?.()
  }

  updatePosition() {
    if (!this.#trigger) {
      return
    }

    computePosition(this.#trigger, this, {
      strategy: 'fixed',
      placement: 'top',
      middleware: [offset(4), flip(), shift({ padding: 8 })],
    }).then(({ x, y }) => {
      Object.assign(this.style, {
        insetInlineStart: `${x}px`,
        insetBlockStart: `${y}px`,
      })
    })
  }
}

// Polyfill popover API
if (!popoverSupported() && !popoverPolyfilled()) {
  applyPopoverPolyfill()
}

// TODO - This polyfill doesn't seem to be working on Safari
// Polyfill CSS anchor positioning
// if (!('anchorName' in document?.documentElement?.style)) {
//   console.log('Polyfilling CSS anchor positioning')
//   applyCssAnchorPositioningPolyfill()
// }

if (!customElements.get('slate-tooltip')) {
  customElements.define('slate-tooltip', Tooltip)
}

export { Tooltip }

import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'slate-app-nav-close-button',
  styleUrl: './app-nav.css',
})
class AppNavCloseButton {
  @Prop({ reflect: true })
  label: string = 'Close menu'

  render() {
    return (
      <button aria-label={this.label}>
        <svg
          slate-icon-close
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    )
  }
}

export { AppNavCloseButton }

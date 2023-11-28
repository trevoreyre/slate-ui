import { css, html, LitElement } from 'lit'
import '../../src/app-bar/app-bar.js'
import '../../src/container/container.js'
import '../../src/stack/stack.js'
import '../../src/text/text.js'
import './trevor-eyre.stories.css'

const meta = {
  title: 'Examples/Trevor Eyre',
}

const HomePage = {
  name: 'Home page',
  render: () => html`
    <slate-container size="lg">
      <slate-stack gap="7xl">
        <slate-app-bar class="story-te-app-bar">
          <slate-stack gap="md" direction="row">
            <story-nav-link active>
              <story-icon-home></story-icon-home>
              <slate-text transform="uppercase">Home</slate-text>
            </story-nav-link>
            <story-nav-link>
              <story-icon-projects></story-icon-projects>
              <slate-text transform="uppercase">Projects</slate-text>
            </story-nav-link>
            <story-nav-link>
              <story-icon-posts></story-icon-posts>
              <slate-text transform="uppercase">Posts</slate-text>
            </story-nav-link>
            <story-nav-link>
              <story-icon-contact></story-icon-contact>
              <slate-text transform="uppercase">Contact</slate-text>
            </story-nav-link>
          </slate-stack>
          <slate-stack gap="sm" direction="row">
            <story-icon-github></story-icon-github>
            <story-icon-instagram></story-icon-instagram>
            <story-icon-twitter></story-icon-twitter>
            <story-icon-email></story-icon-email>
          </slate-stack>
        </slate-app-bar>
        <slate-container size="md" align="start">
          <slate-stack gap="4xl">
            <slate-stack gap="sm">
              <slate-text variant="secondary" size="lg" transform="uppercase">
                Trevor Eyre
              </slate-text>
              <slate-text size="4xl" transform="uppercase">
                Front End
                <br />
                Engineer
              </slate-text>
            </slate-stack>
            <slate-text size="3xl">
              I'm Trevor. I love everything front end. I especially enjoy
              developing design systems and component libraries to deliver
              consistent experiences across applications. Like this React
              library I worked on at Healthwise, or this Vue library I’m
              developing for personal projects.
            </slate-text>
          </slate-stack>
        </slate-container>
      </slate-stack>
    </slate-container>
  `,
  parameters: {
    styles: {
      padding: 'var(--spacing-xl) var(--spacing-md)',
    },
  },
}

class NavLink extends LitElement {
  static properties = {
    tabIndex: {
      type: String,
      attribute: 'tabindex',
      reflect: true,
    },
  }

  constructor() {
    super()
    this.tabIndex = 0
  }

  static styles = css`
    :host {
      display: flex;
      gap: var(--spacing-3xs);
      align-items: center;
      position: relative;
      margin: var(--spacing-none) calc(-1 * var(--spacing-xs));
      padding: var(--spacing-sm) var(--spacing-xs);
      cursor: pointer;
    }

    :host(:where([active]))::after {
      content: '';
      display: block;
      block-size: var(--border-size-md);
      inline-size: calc(100% - 2 * var(--spacing-xs));
      position: absolute;
      inset-block-end: 0;
      inset-inline-start: var(--spacing-xs);
      transform: translate3d(0, var(--border-size-md), 0);
      background: hsl(var(--color-text-primary));
    }
  `

  render() {
    return html`
      <slot></slot>
    `
  }
}
if (!customElements.get('story-nav-link')) {
  customElements.define('story-nav-link', NavLink)
}

const iconStyles = css`
  :host {
    display: block;
  }

  svg {
    display: block;
    inline-size: var(--spacing-xs);
    block-size: var(--spacing-xs);
  }

  svg path {
    stroke: hsl(var(--color-icon-secondary));
  }
`

const iconSocialStyles = css`
  svg path {
    stroke: hsl(var(--color-icon-primary));
  }
`

class IconHome extends LitElement {
  static styles = iconStyles
  render() {
    return html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9 22V12H15V22"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `
  }
}
if (!customElements.get('story-icon-home')) {
  customElements.define('story-icon-home', IconHome)
}

class IconProjects extends LitElement {
  static styles = iconStyles
  render() {
    return html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 18L22 12L16 6"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 6L2 12L8 18"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `
  }
}
if (!customElements.get('story-icon-projects')) {
  customElements.define('story-icon-projects', IconProjects)
}

class IconPosts extends LitElement {
  static styles = iconStyles
  render() {
    return html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 3C17.2626 2.73735 17.5744 2.52901 17.9176 2.38687C18.2608 2.24473 18.6286 2.17157 19 2.17157C19.3714 2.17157 19.7392 2.24473 20.0824 2.38687C20.4256 2.52901 20.7374 2.73735 21 3C21.2626 3.26264 21.471 3.57444 21.6131 3.9176C21.7553 4.26077 21.8284 4.62856 21.8284 5C21.8284 5.37143 21.7553 5.73923 21.6131 6.08239C21.471 6.42555 21.2626 6.73735 21 7L7.5 20.5L2 22L3.5 16.5L17 3Z"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `
  }
}
if (!customElements.get('story-icon-posts')) {
  customElements.define('story-icon-posts', IconPosts)
}

class IconContact extends LitElement {
  static styles = iconStyles
  render() {
    return html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 2L11 13"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22 2L15 22L11 13L2 9L22 2Z"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `
  }
}
if (!customElements.get('story-icon-contact')) {
  customElements.define('story-icon-contact', IconContact)
}

class IconChevronRight extends LitElement {
  static styles = iconStyles
  render() {
    return html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 18L15 12L9 6"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `
  }
}
if (!customElements.get('story-icon-chevron-right')) {
  customElements.define('story-icon-chevron-right', IconChevronRight)
}

class IconInstagram extends LitElement {
  static styles = [iconStyles, iconSocialStyles]
  render() {
    return html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1902 8.22774 13.4229 8.09408 12.5922C7.96042 11.7615 8.09208 10.9099 8.47034 10.1584C8.8486 9.40685 9.4542 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.5 6.5H17.51"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `
  }
}
if (!customElements.get('story-icon-instagram')) {
  customElements.define('story-icon-instagram', IconInstagram)
}

class IconTwitter extends LitElement {
  static styles = [iconStyles, iconSocialStyles]
  render() {
    return html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23 2.99998C22.0424 3.67546 20.9821 4.19209 19.86 4.52999C19.2577 3.8375 18.4573 3.34668 17.567 3.12391C16.6767 2.90115 15.7395 2.95718 14.8821 3.28444C14.0247 3.6117 13.2884 4.19439 12.773 4.9537C12.2575 5.71302 11.9877 6.61232 12 7.52998V8.52998C10.2426 8.57555 8.50127 8.1858 6.93101 7.39543C5.36074 6.60506 4.01032 5.43862 3 3.99998C3 3.99998 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.49998C20.9991 7.22144 20.9723 6.94358 20.92 6.66999C21.9406 5.66348 22.6608 4.3927 23 2.99998Z"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `
  }
}
if (!customElements.get('story-icon-twitter')) {
  customElements.define('story-icon-twitter', IconTwitter)
}

class IconGitHub extends LitElement {
  static styles = [iconStyles, iconSocialStyles]
  render() {
    return html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_634_82)">
          <path
            d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 0.999999C19.91 0.999999 18.73 0.649999 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.649999 5.09 0.999999 5.09 0.999999C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22"
            stroke="#718096"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_634_82">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    `
  }
}
if (!customElements.get('story-icon-github')) {
  customElements.define('story-icon-github', IconGitHub)
}

class IconEmail extends LitElement {
  static styles = [iconStyles, iconSocialStyles]
  render() {
    return html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22 6L12 13L2 6"
          stroke="#718096"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `
  }
}
if (!customElements.get('story-icon-email')) {
  customElements.define('story-icon-email', IconEmail)
}

export default meta
export { HomePage }

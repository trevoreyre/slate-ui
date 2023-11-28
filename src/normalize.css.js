import { css } from 'lit'

const normalize = css`
  :host {
    display: block;
    box-sizing: border-box;
    position: relative;
  }

  :host([hidden]) {
    display: none;
  }
`

export { normalize }

import { html } from '../../utils/html'

const meta = {
  title: 'Components/App bar',
  parameters: {
    styles: {
      padding: 0,
    },
  },
}

const Basic = {
  render: () => html`
    <slate-app-bar>
      <slate-container size="lg">
        <slate-app-nav aria-label="Main" justify="between" wrap>
          <slate-app-nav-content gap="md">
            <a href="#">
              <slate-text transform="uppercase">Home</slate-text>
            </a>
            <a href="#">
              <slate-text transform="uppercase">Projects</slate-text>
            </a>
            <a href="#">
              <slate-text transform="uppercase">Posts</slate-text>
            </a>
            <a href="#">
              <slate-text transform="uppercase">Contact</slate-text>
            </a>
          </slate-app-nav-content>
          <slate-stack class="social-links" gap="sm" direction="row">
            <!-- <a
              aria-label="Phone"
              href="tel:+12086316741"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IconPhone aria-hidden="true" />
            </a>
            <a
              aria-label="Email"
              href="mailto:trevoreyre@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IconEmail aria-hidden="true" />
            </a>
            <a
              aria-label="GitHub"
              href="https://github.com/trevoreyre"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IconLogoGitHub aria-hidden="true" />
            </a>
            <a
            	aria-label="LinkedIn"
              href="https://www.linkedin.com/in/trevoreyre"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IconLogoLinkedIn aria-hidden="true" />
            </a> -->
          </slate-stack>
        </slate-app-nav>
      </slate-container>
    </slate-app-bar>
  `,
}

export default meta
export { Basic }

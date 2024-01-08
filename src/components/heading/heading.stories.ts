import { html } from '../../utils/html'

const meta = {
  title: 'Components/Heading',
}

const Basic = {
  render: () => html`
    <slate-heading>A basic heading</slate-heading>
  `,
}

const Size = {
  render: () => html`
    <slate-stack gap="xl">
      <slate-stack direction="row">
        <slate-text size="sm">xs</slate-text>
        <slate-heading size="xs" wrap="false">
          The quick brown fox jumps over the lazy dog
        </slate-heading>
      </slate-stack>
      <slate-stack direction="row">
        <slate-text size="sm">sm</slate-text>
        <slate-heading size="sm" wrap="false">
          The quick brown fox jumps over the lazy dog
        </slate-heading>
      </slate-stack>
      <slate-stack direction="row">
        <slate-text size="sm">md</slate-text>
        <slate-heading size="md" wrap="false">
          The quick brown fox jumps over the lazy dog
        </slate-heading>
      </slate-stack>
      <slate-stack direction="row">
        <slate-text size="sm">lg</slate-text>
        <slate-heading size="lg" wrap="false">
          The quick brown fox jumps over the lazy dog
        </slate-heading>
      </slate-stack>
      <slate-stack direction="row">
        <slate-text size="sm">xl</slate-text>
        <slate-heading size="xl" wrap="false">
          The quick brown fox jumps over the lazy dog
        </slate-heading>
      </slate-stack>
      <slate-stack direction="row">
        <slate-text size="sm">2xl</slate-text>
        <slate-heading size="2xl" wrap="false">
          The quick brown fox jumps over the lazy dog
        </slate-heading>
      </slate-stack>
      <slate-stack direction="row">
        <slate-text size="sm">3xl</slate-text>
        <slate-heading size="3xl" wrap="false">
          The quick brown fox jumps over the lazy dog
        </slate-heading>
      </slate-stack>
      <slate-stack direction="row">
        <slate-text size="sm">4xl</slate-text>
        <slate-heading size="4xl" wrap="false">
          The quick brown fox jumps over the lazy dog
        </slate-heading>
      </slate-stack>
      <slate-stack direction="row">
        <slate-text size="sm">5xl</slate-text>
        <slate-heading size="5xl" wrap="false">
          The quick brown fox jumps over the lazy dog
        </slate-heading>
      </slate-stack>
      <slate-stack direction="row">
        <slate-text size="sm">6xl</slate-text>
        <slate-heading size="6xl" wrap="false">
          The quick brown fox jumps over the lazy dog
        </slate-heading>
      </slate-stack>
    </slate-stack>
  `,
}

export default meta
export { Basic, Size }

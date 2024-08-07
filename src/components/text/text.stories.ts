import { html } from '../../utils/html'

const meta = {
  title: 'Components/Text',
  parameters: {
    styles: {
      background:
        'linear-gradient(transparent 7px, hsl(var(--color-border) / 40%) 1px)',
      'background-size': '8px 8px',
      'background-repeat': 'repeat',
      'overflow-x': 'auto',
    },
  },
}

const Basic = {
  render: () => html`
    <slate-text>Some text</slate-text>
  `,
}

const Size = {
  render: () => html`
    <slate-stack gap="xl">
      <slate-stack direction="row">
        <slate-text size="sm">xs</slate-text>
        <slate-text size="xs" wrap="false">
          <span class="lh-box"></span>
          <span class="em-box"></span>
          <span class="cap-box"></span>
          <span class="ex-box"></span>
          <span class="desc-box"></span>
          The quick brown fox jumps over the lazy dog
        </slate-text>
      </slate-stack>
      <slate-stack direction="row">
        <slate-text size="sm">sm</slate-text>
        <slate-text size="sm" wrap="false">
          <span class="lh-box"></span>
          <span class="em-box"></span>
          <span class="cap-box"></span>
          <span class="ex-box"></span>
          <span class="desc-box"></span>
          The quick brown fox jumps over the lazy dog
        </slate-text>
      </slate-stack>
      <slate-stack direction="row">
        <slate-text size="sm">md</slate-text>
        <slate-text size="md" wrap="false">
          <span class="lh-box"></span>
          <span class="em-box"></span>
          <span class="cap-box"></span>
          <span class="ex-box"></span>
          <span class="desc-box"></span>
          The quick brown fox jumps over the lazy dog
        </slate-text>
      </slate-stack>
      <slate-stack direction="row">
        <slate-text size="sm">lg</slate-text>
        <slate-text size="lg" wrap="false">
          <span class="lh-box"></span>
          <span class="em-box"></span>
          <span class="cap-box"></span>
          <span class="ex-box"></span>
          <span class="desc-box"></span>
          The quick brown fox jumps over the lazy dog
        </slate-text>
      </slate-stack>
      <slate-stack direction="row">
        <slate-text size="sm">xl</slate-text>
        <slate-text size="xl" wrap="false">
          <span class="lh-box"></span>
          <span class="em-box"></span>
          <span class="cap-box"></span>
          <span class="ex-box"></span>
          <span class="desc-box"></span>
          The quick brown fox jumps over the lazy dog
        </slate-text>
      </slate-stack>
      <slate-stack direction="row">
        <slate-text size="sm">2xl</slate-text>
        <slate-text size="2xl" wrap="false">
          <span class="lh-box"></span>
          <span class="em-box"></span>
          <span class="cap-box"></span>
          <span class="ex-box"></span>
          <span class="desc-box"></span>
          The quick brown fox jumps over the lazy dog
        </slate-text>
      </slate-stack>
      <!-- <slate-stack direction="row">
        <slate-text size="sm">3xl</slate-text>
        <slate-text size="3xl" wrap="false">
          The quick brown fox jumps over the lazy dog
        </slate-text>
      </slate-stack>
      <slate-stack direction="row">
        <slate-text size="sm">4xl</slate-text>
        <slate-text size="4xl" wrap="false">
          The quick brown fox jumps over the lazy dog
        </slate-text>
      </slate-stack>
      <slate-stack direction="row">
        <slate-text size="sm">5xl</slate-text>
        <slate-text size="5xl" wrap="false">
          The quick brown fox jumps over the lazy dog
        </slate-text>
      </slate-stack>
      <slate-stack direction="row">
        <slate-text size="sm">6xl</slate-text>
        <slate-text size="6xl" wrap="false">
          The quick brown fox jumps over the lazy dog
        </slate-text>
      </slate-stack>
      <slate-stack direction="row">
        <slate-text size="sm">7xl</slate-text>
        <slate-text size="7xl" wrap="false">
          The quick brown fox jumps over the lazy dog
        </slate-text>
      </slate-stack> -->
    </slate-stack>
  `,
}

const Paragraphs = {
  render: () => html`
    <slate-stack gap="xl">
      <slate-container size="xs" align="start">
        <slate-stack gap="xl">
          <slate-stack direction="row">
            <slate-text size="sm">xs</slate-text>
            <slate-text size="xs">
              But the location suppose for gets when mountains, by which phase
              attributing to biases, leather clock pile career from for moving
              but nor the rationally and on been happening, of expect, attained
              something furnished times, she the textile value and on of gone
              background a sitting come like the like.
            </slate-text>
          </slate-stack>
          <slate-stack direction="row">
            <slate-text size="sm">sm</slate-text>
            <slate-text size="sm">
              But the location suppose for gets when mountains, by which phase
              attributing to biases, leather clock pile career from for moving
              but nor the rationally and on been happening, of expect, attained
              something furnished times, she the textile value and on of gone
              background a sitting come like the like.
            </slate-text>
          </slate-stack>
        </slate-stack>
      </slate-container>
      <slate-container size="sm" align="start">
        <slate-stack gap="xl">
          <slate-stack direction="row">
            <slate-text size="sm">md</slate-text>
            <slate-text size="md">
              But the location suppose for gets when mountains, by which phase
              attributing to biases, leather clock pile career from for moving
              but nor the rationally and on been happening, of expect, attained
              something furnished times, she the textile value and on of gone
              background a sitting come like the like.
            </slate-text>
          </slate-stack>
          <slate-stack direction="row">
            <slate-text size="sm">lg</slate-text>
            <slate-text size="lg">
              But the location suppose for gets when mountains, by which phase
              attributing to biases, leather clock pile career from for moving
              but nor the rationally and on been happening, of expect, attained
              something furnished times, she the textile value and on of gone
              background a sitting come like the like.
            </slate-text>
          </slate-stack>
        </slate-stack>
      </slate-container>
      <slate-container size="md" align="start">
        <slate-stack gap="xl">
          <slate-stack direction="row">
            <slate-text size="sm">xl</slate-text>
            <slate-text size="xl">
              But the location suppose for gets when mountains, by which phase
              attributing to biases, leather clock pile career from for moving
              but nor the rationally and on been happening, of expect, attained
              something furnished times, she the textile value and on of gone
              background a sitting come like the like.
            </slate-text>
          </slate-stack>
          <slate-stack direction="row">
            <slate-text size="sm">2xl</slate-text>
            <slate-text size="2xl">
              But the location suppose for gets when mountains, by which phase
              attributing to biases, leather clock pile career from for moving
              but nor the rationally and on been happening, of expect, attained
              something furnished times, she the textile value and on of gone
              background a sitting come like the like.
            </slate-text>
          </slate-stack>
        </slate-stack>
      </slate-container>
      <slate-container size="lg" align="start">
        <slate-stack direction="row">
          <slate-text size="sm">3xl</slate-text>
          <slate-text size="3xl">
            But the location suppose for gets when mountains, by which phase
            attributing to biases, leather clock pile career from for moving but
            nor the rationally and on been happening, of expect, attained
            something furnished times, she the textile value and on of gone
            background a sitting come like the like.
          </slate-text>
        </slate-stack>
      </slate-container>
      <slate-container size="xl" align="start">
        <slate-stack gap="xl">
          <slate-stack direction="row">
            <slate-text size="sm">4xl</slate-text>
            <slate-text size="4xl">
              But the location suppose for gets when mountains, by which phase
              attributing to biases, leather clock pile career from for moving
              but nor the rationally and on been happening.
            </slate-text>
          </slate-stack>
          <slate-stack direction="row">
            <slate-text size="sm">5xl</slate-text>
            <slate-text size="5xl">
              But the location suppose for gets when mountains, by which phase
              attributing to biases, leather clock pile career from.
            </slate-text>
          </slate-stack>
          <slate-stack direction="row">
            <slate-text size="sm">6xl</slate-text>
            <slate-text size="6xl">
              But the location suppose for gets when mountains, by which phase
              attributing.
            </slate-text>
          </slate-stack>
        </slate-stack>
      </slate-container>
    </slate-stack>
  `,
}

export default meta
export { Basic, Size, Paragraphs }

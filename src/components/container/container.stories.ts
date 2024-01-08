import { html } from '../../utils/html'

const meta = {
  title: 'Components/Container',
}

const Default = {
  render: () => html`
    <slate-container>
      <div class="story-box">
        <slate-text>
          But the location suppose for gets when mountains, by which phase
          attributing to biases, leather clock pile career from for moving but
          nor the rationally and on been happening, of expect, attained
          something furnished times, she the textile value and on of gone
          background a sitting come like the like.
        </slate-text>
      </div>
    </slate-container>
  `,
}

const Size = {
  render: () => html`
    <slate-stack gap="lg">
      <slate-container size="xs">
        <div class="story-box">
          <slate-stack>
            <slate-text size="lg" weight="bold">xs</slate-text>
            <slate-text>
              But the location suppose for gets when mountains, by which phase
              attributing to biases, leather clock pile career from for moving
              but nor the rationally and on been happening, of expect, attained
              something furnished times, she the textile value and on of gone
              background a sitting come like the like.
            </slate-text>
          </slate-stack>
        </div>
      </slate-container>
      <slate-container size="sm">
        <div class="story-box">
          <slate-stack>
            <slate-text size="lg" weight="bold">sm</slate-text>
            <slate-text>
              But the location suppose for gets when mountains, by which phase
              attributing to biases, leather clock pile career from for moving
              but nor the rationally and on been happening, of expect, attained
              something furnished times, she the textile value and on of gone
              background a sitting come like the like.
            </slate-text>
          </slate-stack>
        </div>
      </slate-container>
      <slate-container size="md">
        <div class="story-box">
          <slate-stack>
            <slate-text size="lg" weight="bold">md</slate-text>
            <slate-text>
              But the location suppose for gets when mountains, by which phase
              attributing to biases, leather clock pile career from for moving
              but nor the rationally and on been happening, of expect, attained
              something furnished times, she the textile value and on of gone
              background a sitting come like the like.
            </slate-text>
          </slate-stack>
        </div>
      </slate-container>
      <slate-container size="lg">
        <div class="story-box">
          <slate-stack>
            <slate-text size="lg" weight="bold">lg</slate-text>
            <slate-text>
              But the location suppose for gets when mountains, by which phase
              attributing to biases, leather clock pile career from for moving
              but nor the rationally and on been happening, of expect, attained
              something furnished times, she the textile value and on of gone
              background a sitting come like the like.
            </slate-text>
          </slate-stack>
        </div>
      </slate-container>
      <slate-container size="xl">
        <div class="story-box">
          <slate-stack>
            <slate-text size="lg" weight="bold">xl</slate-text>
            <slate-text>
              But the location suppose for gets when mountains, by which phase
              attributing to biases, leather clock pile career from for moving
              but nor the rationally and on been happening, of expect, attained
              something furnished times, she the textile value and on of gone
              background a sitting come like the like.
            </slate-text>
          </slate-stack>
        </div>
      </slate-container>
      <slate-container size="2xl">
        <div class="story-box">
          <slate-stack>
            <slate-text size="lg" weight="bold">2xl</slate-text>
            <slate-text>
              But the location suppose for gets when mountains, by which phase
              attributing to biases, leather clock pile career from for moving
              but nor the rationally and on been happening, of expect, attained
              something furnished times, she the textile value and on of gone
              background a sitting come like the like.
            </slate-text>
          </slate-stack>
        </div>
      </slate-container>
    </slate-stack>
  `,
}

const Align = {
  render: () => html`
    <slate-stack gap="lg">
      <slate-container align="start" size="sm">
        <div class="story-box">
          <slate-stack>
            <slate-text size="lg" weight="bold">start</slate-text>
            <slate-text>
              But the location suppose for gets when mountains, by which phase
              attributing to biases, leather clock pile career from for moving
              but nor the rationally and on been happening, of expect, attained
              something furnished times, she the textile value and on of gone
              background a sitting come like the like.
            </slate-text>
          </slate-stack>
        </div>
      </slate-container>
      <slate-container align="center" size="sm">
        <div class="story-box">
          <slate-stack>
            <slate-text size="lg" weight="bold">center</slate-text>
            <slate-text>
              But the location suppose for gets when mountains, by which phase
              attributing to biases, leather clock pile career from for moving
              but nor the rationally and on been happening, of expect, attained
              something furnished times, she the textile value and on of gone
              background a sitting come like the like.
            </slate-text>
          </slate-stack>
        </div>
      </slate-container>
      <slate-container align="end" size="sm">
        <div class="story-box">
          <slate-stack>
            <slate-text size="lg" weight="bold">end</slate-text>
            <slate-text>
              But the location suppose for gets when mountains, by which phase
              attributing to biases, leather clock pile career from for moving
              but nor the rationally and on been happening, of expect, attained
              something furnished times, she the textile value and on of gone
              background a sitting come like the like.
            </slate-text>
          </slate-stack>
        </div>
      </slate-container>
    </slate-stack>
  `,
}

export default meta
export { Default, Size, Align }

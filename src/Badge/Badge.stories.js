import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Button from '../Button/Button'
import Card from '../Card/Card'
import Icon from '../Icon/Icon'
import Overline from '../Typography/Overline'
import Txt from '../Typography/Txt'
import Badge from './Badge'

const Root = Vue.component('Root', {
  template: `
    <div style="width: 32px; height: 32px;">
      <slot></slot>
    </div>
  `,
})

const UserSvg = Vue.component('UserSvg', {
  template: `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 7a3 3 0 116 0 3 3 0 01-6 0zm3-5a5 5 0 100 10 5 5 0 000-10zM8 14a5 5 0 00-5 5v2a1 1 0 102 0v-2a3 3 0 013-3h8a3 3 0 013 3v2a1 1 0 102 0v-2a5 5 0 00-5-5H8z" />
  `,
})

const components = { Button, Card, Icon, Overline, Txt, Badge, Root, UserSvg }

storiesOf('Badge', module)
  .addParameters({ styles: { maxWidth: '500px' } })
  .add('default', () => ({
    components,
    template: `
      <div>
        <Root>
          <Badge>3</Badge>
        </Root>
        <Root>
          <Badge>Hello</Badge>
        </Root>
      </div>
    `,
  }))
  .add('with icon', () => ({
    components,
    template: `
      <Root>
        <Badge>
          <Icon size="sm"><UserSvg /></Icon>
        </Badge>
      </Root>
    `,
  }))
  .add('in components', () => ({
    components,
    template: `
      <div>
        <Card mb="lg">
          <Txt>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sunt saepe ratione autem quos quaerat, sit debitis, iste neque itaque illo laborum asperiores quas similique incidunt, soluta a eos aut?</Txt>
          <Badge>3</Badge>
        </Card>
        <div style="display: flex; align-items: center;">
          <Txt pr="xs" mr="xs">
            Typography
            <Badge>5</Badge>
          </Txt>
          <Button theme="secondary" class="mr-xs">
            Button
            <Badge>
              <Icon size="sm"><UserSvg /></Icon>
            </Badge>
          </Button>
        </div>
      </div>
    `,
  }))

import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'slate-stack',
  styleUrl: './stack.css',
})
class Stack {
  @Prop({ reflect: true })
  align: 'baseline' | 'start' | 'center' | 'end' | 'stretch'

  @Prop({ reflect: true })
  direction: 'row' | 'column'

  @Prop({ reflect: true })
  gap:
    | '4xs'
    | '3xs'
    | '2xs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | 'full'

  @Prop({ reflect: true })
  justify: 'start' | 'center' | 'end' | 'stretch'

  @Prop({ reflect: true })
  wrap: boolean
}

export { Stack }

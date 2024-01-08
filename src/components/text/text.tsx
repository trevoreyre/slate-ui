import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'slate-text',
  styleUrl: './text.css',
})
class Text {
  @Prop({ reflect: true })
  size?:
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

  @Prop({ reflect: true })
  transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize'

  @Prop({ reflect: true })
  variant?: 'primary' | 'secondary'

  @Prop({ reflect: true })
  weight?: 'light' | 'normal' | 'bold'

  @Prop({ reflect: true })
  wrap?: boolean
}

export { Text }

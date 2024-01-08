import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'slate-container',
  styleUrl: './container.css',
})
class Container {
  @Prop({ reflect: true })
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

  @Prop({ reflect: true })
  align: 'start' | 'center' | 'end'
}

export { Container }

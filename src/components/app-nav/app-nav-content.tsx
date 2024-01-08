import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'slate-app-nav-content',
  styleUrl: './app-nav.css',
})
class AppNavContent {
  @Prop({ reflect: true })
  gap?:
    | '4xs'
    | '3xs'
    | '2xs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | 'full'
}

export { AppNavContent }

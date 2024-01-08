import { Component, Listen, Prop } from '@stencil/core'

@Component({
  tag: 'slate-app-nav',
  styleUrl: './app-nav.css',
})
class AppNav {
  @Prop({ reflect: true })
  align?: 'start' | 'center' | 'end'

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

  @Prop({ reflect: true })
  justify?:
    | 'start'
    | 'center'
    | 'end'
    | 'stretch'
    | 'around'
    | 'between'
    | 'evenly'

  @Prop({ reflect: true })
  role: HTMLElement['role'] = 'navigation'

  @Prop({ reflect: true })
  wrap?: boolean

  @Prop({ reflect: true })
  open?: boolean = false

  @Listen('click')
  handleClick({ target }) {
    if (
      target.closest('slate-app-nav-menu-button, [slate-app-nav-menu-button]')
    ) {
      this.open = !this.open
    }
  }
}

export { AppNav }

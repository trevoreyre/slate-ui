import { Component, Element, Prop, Watch } from '@stencil/core'

@Component({
  tag: 'slate-heading',
  styleUrl: './heading.css',
})
class Heading {
  @Prop({ reflect: true })
  level: HTMLElement['ariaLevel'] = '2'

  @Prop({ reflect: true })
  role: HTMLElement['role'] = 'heading'

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

  @Element() host!: HTMLElement

  connectedCallback() {
    this.host.setAttribute('aria-level', this.level)
  }

  @Watch('level')
  handleUpdateLevel(level: string) {
    this.host.setAttribute('aria-level', level)
  }
}

export { Heading }

import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'slate-link',
  styleUrl: './link.css',
  shadow: true,
})
class Link {
  @Prop({ reflect: true })
  href: string

  @Prop({ reflect: true })
  target?: '_self' | '_blank'

  @Prop({ reflect: true })
  rel?: string

  render() {
    const target = this.target
    const rel =
      this.rel ?? (target === '_blank' ? 'noreferrer noopener' : undefined)

    return (
      <a part="host" href={this.href} target={target} rel={rel}>
        <slot></slot>
      </a>
    )
  }
}

export { Link }

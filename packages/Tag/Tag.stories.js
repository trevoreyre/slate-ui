import { action } from '@storybook/addon-actions'
import Tag from './Tag'

export default {
  title: 'Tag',
  component: Tag,
}

export const basic = () => ({
  template: `
    <div>
      <Tag mr="3xs">Tag 1</Tag>
      <Tag mr="3xs">Tag 2</Tag>
      <Tag>Tag 3</Tag>
    </div>
  `,
})

export const rounded = () => ({
  template: `
    <div>
      <Tag rounded mr="3xs">Tag 1</Tag>
      <Tag rounded mr="3xs">Tag 2</Tag>
      <Tag rounded>Tag 3</Tag>
    </div>
  `,
})

export const icons = () => ({
  template: `
    <div>
      <Tag rounded mr="3xs">
        <IconUser size="md" mr="4xs" /> John
      </Tag>
      <Tag rounded mr="3xs">
        Jane <IconClose size="md" ml="4xs" />
      </Tag>
      <Tag rounded mr="3xs">
        <IconUser size="md" mr="4xs" />
        Harold
        <IconClose size="md" ml="4xs" />
      </Tag>
      <Tag rounded>
        Janice
      </Tag>
    </div>
  `,
})

export const events = () => ({
  template: `
    <div>
      <Tag @click="handleClick" mr="3xs">Tag 1</Tag>
      <Tag @click="handleClick" mr="3xs">Tag 2</Tag>
      <Tag @click="handleClick">Tag 3</Tag>
    </div>
  `,
  methods: {
    handleClick: action('handleClick'),
  },
})

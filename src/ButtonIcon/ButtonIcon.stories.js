import ButtonIcon from './ButtonIcon.vue'

export default {
  title: 'ButtonIcon',
  component: ButtonIcon,
}

export const basic = () => ({
  template: `
    <ButtonIcon>
      <IconUser /> Button
    </ButtonIcon>
  `,
})

export const theme = () => ({
  template: `
    <div>
      <div class="mb-sm">
        <ButtonIcon theme="primary" mr="2xs">
          <IconUser /> Primary
        </ButtonIcon>
        <ButtonIcon theme="secondary">
          <IconUser /> Secondary
        </ButtonIcon>
      </div>
      <div>
        <ButtonIcon theme="primary" rounded mr="2xs">
          <IconUser /> Primary
        </ButtonIcon>
        <ButtonIcon theme="secondary" rounded>
          <IconUser /> Secondary
        </ButtonIcon>
      </div>
    </div>
  `,
})

export const size = () => ({
  template: `
    <div>
      <div class="mb-sm">
        <ButtonIcon size="sm" mr="2xs">
          <IconUser /> Small
        </ButtonIcon>
        <ButtonIcon size="md" mr="2xs">
          <IconUser /> Medium
        </ButtonIcon>
          <ButtonIcon size="lg">
          <IconUser /> Large
        </ButtonIcon>
      </div>
      <div>
        <ButtonIcon size="sm" rounded mr="2xs">
          <IconUser /> Small
        </ButtonIcon>
        <ButtonIcon size="md" rounded mr="2xs">
          <IconUser /> Medium
        </ButtonIcon>
        <ButtonIcon size="lg" rounded>
          <IconUser /> Large
        </ButtonIcon>
      </div>
    </div>
  `,
})

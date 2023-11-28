import { createStyleObject } from '@capsizecss/core'
import extend from 'just-extend'
import fontMetrics from '@capsizecss/metrics/appleSystem.js'
import fs from 'fs'
import outdent from 'outdent'

const defaultSizeToOptions = {
  xs: {
    capHeight: 9,
    lineGap: 20,
  },
  sm: {
    capHeight: 10,
    lineGap: 22,
  },
  md: {
    capHeight: 12,
    lineGap: 24,
  },
  lg: {
    capHeight: 14,
    lineGap: 24,
  },
  xl: {
    capHeight: 16,
    lineGap: 24,
  },
  '2xl': {
    capHeight: 20,
    lineGap: 24,
  },
  '3xl': {
    capHeight: 26,
    lineGap: 24,
  },
  '4xl': {
    capHeight: 32,
    lineGap: 24,
  },
  '5xl': {
    capHeight: 40,
    lineGap: 24,
  },
  '6xl': {
    capHeight: 48,
    lineGap: 24,
  },
}

export function createStyle(props) {
  const { size, ...options } = props

  const styles = createStyleObject(options)

  const fontSize = Number(styles.fontSize.replace('px', ''))
  const fontSizeRem = fontSize / 16

  const lineHeight = Number(styles.lineHeight.replace('px', ''))
  const lineHeightRem = lineHeight / 16

  return outdent`
    --text-${size}-font-size: ${fontSizeRem}rem;
    --text-${size}-line-height: ${lineHeightRem}rem;
    --text-${size}-margin-before: ${styles['::before'].marginBottom};
    --text-${size}-margin-after: ${styles['::after'].marginTop};
  `
}

function createStyles(props) {
  const { fontMetrics, ...sizeToOptionsProp } = props

  const sizeToOptions = extend(true, defaultSizeToOptions, sizeToOptionsProp)
  console.log({ sizeToOptions })

  const styles = Object.entries(sizeToOptions).map(([size, options]) =>
    createStyle({ size, fontMetrics, ...options })
  )
  return styles.join('\n\n')
}

const _themeTypography = createStyles({ fontMetrics })

const themeTypography = outdent`
:root {
${_themeTypography}
}
`.replace(/--/g, '  --')

fs.writeFileSync('./src/theme-typography.css', themeTypography)

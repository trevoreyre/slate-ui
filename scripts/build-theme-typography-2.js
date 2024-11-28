import { createStyleObject, precomputeValues } from '@capsizecss/core'
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
  '7xl': {
    capHeight: 96,
    lineGap: 16,
  },
}

function createStyle(props) {
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

//   fontMetrics: {
//     familyName: '-apple-system',
//     capHeight: 1450,
//     ascent: 1950,
//     descent: -420,
//     lineGap: 0,
//     unitsPerEm: 2048
//   }
// }

function createStyles({ fontMetrics }) {
  const capHeightScale = fontMetrics.capHeight / fontMetrics.unitsPerEm
  const descentScale = Math.abs(fontMetrics.descent) / fontMetrics.unitsPerEm
  const ascentScale = fontMetrics.ascent / fontMetrics.unitsPerEm
  const lineGapScale = fontMetrics.lineGap / fontMetrics.unitsPerEm

  const textTrimStart = (ascentScale - capHeightScale + lineGapScale / 2) * -1
  const textTrimEnd = (descentScale + lineGapScale / 2) * -1

  // const { capHeightTrim, baselineTrim } = precomputeValues({
  //   capHeight: 10,
  //   fontMetrics,
  // })

  // return outdent`
  //   --font-scale: ${capHeightScale};
  //   --text-trim-start: ${capHeightTrim};
  //   --text-trim-end: ${baselineTrim};
  // `

  return outdent`
    --font-cap-height: ${capHeightScale}em;
    --font-ascent: ${ascentScale}em;
    --font-descent: ${descentScale}em;
  `
}

const _themeTypography = createStyles({ fontMetrics })
console.log({ fontMetrics })

const themeTypography = outdent`
@layer slate-theme {
  :root {
${_themeTypography}
  }
}
`.replace(/--/g, '    --')

fs.writeFileSync('./src/theme-typography-2.css', themeTypography)

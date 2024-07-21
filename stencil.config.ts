import { Config } from '@stencil/core'

const config: Config = {
  namespace: 'slate-ui',
  globalStyle: 'src/theme.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: 'theme.css' },
        { src: 'theme-typography.css' },
        { src: 'styles.css' },
      ],
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      copy: [
        { src: 'theme.css' },
        { src: 'theme-typography.css' },
        { src: 'styles.css' },
      ],
    },
    {
      type: 'docs-readme',
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
}

export { config }

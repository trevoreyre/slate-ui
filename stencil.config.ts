import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'slate-ui-stencil',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [{ src: 'theme.css' }, { src: 'theme-typography.css' }, { src: 'styles.css' }],
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      copy: [{ src: 'theme.css' }, { src: 'theme-typography.css' }, { src: 'styles.css' }],
    },
    {
      type: 'docs-readme',
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
};

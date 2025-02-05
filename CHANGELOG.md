# CHANGELOG

## v4.0.0 (February 5, 2025)

- BREAKING: Converted `Link` to light dom component
- Added `--font-family-monospace` custom property to theme
- Added styling for links styled as `Heading` components
- Updated `Text` component to support styling with `slate-text` attribute
- Fixed `Card` styling
- Set background color in `Tooltip`
- Cleaned up Storybook a bit

## v3.3.1 (January 10, 2025)

- Added styling in `Field` component for radios
- Adjusted line height in `Field` and `FieldSet` components
- Adjusted line height in `Text` component
- Adjusted padding in `Tooltip` component

## v3.3.0 (December 10, 2024)

- Added `<slate-tooltip>` component
- Added `<slate-field-set>` component
- Small tweak to spacing in `<slate-field>` component

## v3.2.0 (December 9, 2024)

- Added `<slate-divider>` component
- Minor style tweaks to `<slate-field>` component

## v3.1.1 (December 2, 2024)

- Remove margin on all elements in base styles by default
- Added support for `slate-container` attribute
- Added support for `slate-stack` attribute
- Updated color of `<slate-field>` input placeholder text

## v3.1.0 (December 2, 2024)

- Added `<slate-field>` component
- Added support for styling headings with `slate-heading` attribute

## v3.0.0 (November 27, 2024)

- BREAKING: Switched from Stencil back to Lit
- BREAKING: Updated `wrap` prop for `<slate-text>` component from `boolean` to `string`
- Added `<slate-card>` component

## v2.1.0 (July 20, 2024)

- Updated `<slate-app-bar>`
- Added `<slate-content>` component
- Added `display` prop to `<slate-link>`
- Added experimental typography styling update (wip)

## v2.0.1 (January 8, 2024)

- Fixed Storybook build

## v2.0.0 (January 7, 2024)

- BREAKING: Switched from Lit to Stencil
- BREAKING: Switched all components to use light DOM, except `<slate-link>`
- BREAKING: Removed `<slate-badge>` component
- BREAKING: Removed `<slate-link-block>` component
- Added `<slate-tag>` component

## v1.1.1 (December 3, 2023)

- Reduced width of `<slate-app-nav-content>` a bit

## v1.1.0 (December 3, 2023)

- Added `SlateElement` class for light DOM web components
- Converted `<slate-app-nav>`, `<slate-app-nav-content>`, and `<slate-app-nav-menu-button>` to light DOM components
- Added CSS layers, `theme`, and `components-1`

## v1.0.0 (November 27, 2023)

- Initial public release

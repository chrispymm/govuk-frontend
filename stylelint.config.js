module.exports = {
  extends: 'stylelint-config-gds/scss',
  ignoreFiles: [
    '**/dist/**',
    '**/vendor/**',

    // Ignore CSS-in-JS (including dotfiles)
    '**/?(.)*.{cjs,js,mjs}'
  ],
  overrides: [
    {
      customSyntax: 'postcss-scss',
      files: ['**/*.scss']
    }
  ],
  plugins: ['stylelint-order'],
  rules: {
    /**
     * GOV.UK Frontend has a specific ordering pattern
     * that should be applied to rules
     *
     * https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-order/README.md
     */
    'order/properties-order': [
      'content',
      'quotes',

      // Box-sizing - Allow here until global is decided
      'box-sizing',

      'display',
      'visibility',

      'position',
      'z-index',
      'top',
      'right',
      'bottom',
      'left',

      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',

      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',

      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',

      'float',
      'clear',

      'overflow',
      'overflow-x',
      'overflow-y',

      'clip',
      'clip-path',
      'zoom',
      'resize',

      'columns',

      'table-layout',
      'empty-cells',
      'caption-side',
      'border-spacing',
      'border-collapse',

      'list-style',
      'list-style-position',
      'list-style-type',
      'list-style-image',

      'transform',
      'transition',
      'animation',

      'border',
      'border-top',
      'border-right',
      'border-bottom',
      'border-left',

      'border-width',
      'border-top-width',
      'border-right-width',
      'border-bottom-width',
      'border-left-width',

      'border-style',
      'border-top-style',
      'border-right-style',
      'border-bottom-style',
      'border-left-style',

      'border-radius',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-left-radius',
      'border-bottom-right-radius',

      'border-color',
      'border-top-color',
      'border-right-color',
      'border-bottom-color',
      'border-left-color',

      'outline',
      'outline-color',
      'outline-offset',
      'outline-style',
      'outline-width',

      'opacity',

      // Color has been moved to ensure it appears before background
      'color',
      'background',
      'background-color',
      'background-image',
      'background-repeat',
      'background-position',
      'background-size',
      'box-shadow',
      'fill',

      'font',
      'font-family',
      'font-size',
      'font-style',
      'font-variant',
      'font-weight',

      'font-emphasize',

      'letter-spacing',
      'line-height',
      'list-style',
      'word-spacing',

      'text-align',
      'text-align-last',
      'text-decoration',
      'text-indent',
      'text-justify',
      'text-overflow',
      'text-overflow-ellipsis',
      'text-overflow-mode',
      'text-rendering',
      'text-outline',
      'text-shadow',
      'text-transform',
      'text-wrap',
      'word-wrap',
      'word-break',

      'text-emphasis',

      'vertical-align',
      'white-space',
      'word-spacing',
      'hyphens',

      'src',
      'cursor',
      '-webkit-appearance'
    ],

    /**
     * We no longer need to use single colon pseudo-selectors, as we've dropped
     * support for Internet Explorer 8.  Override the
     * `selector-pseudo-element-colon-notation` value until the upstream
     * Stylelint config has been updated.
     *
     * https://github.com/alphagov/stylelint-config-gds/pull/36
     * https://stylelint.io/user-guide/rules/list/selector-pseudo-element-colon-notation/
     */
    'selector-pseudo-element-colon-notation': 'double'
  }
}

module.exports = {
  extends: ["stylelint-config-standard-scss"],
  rules: {
    indentation: 4,
    "string-quotes": "double",
    "no-duplicate-selectors": true,
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-attribute-quotes": "always",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-brackets-space-inside": "never",
    "declaration-block-trailing-semicolon": "always",
    "declaration-colon-space-before": "never",
    "declaration-colon-space-after": "always",
    "number-leading-zero": "never",
    "function-url-quotes": "always",
    "font-weight-notation": "numeric",
    "font-family-name-quotes": "always-where-recommended",
    "comment-whitespace-inside": "always",
    "comment-empty-line-before": "always",
    "selector-pseudo-element-colon-notation": "single",
    "selector-pseudo-class-parentheses-space-inside": "never",
    "media-feature-range-operator-space-before": "always",
    "media-feature-range-operator-space-after": "always",
    "media-feature-parentheses-space-inside": "never",
    "media-feature-colon-space-before": "never",
    "media-feature-colon-space-after": "always",
    "no-descending-specificity": null,
    "at-rule-no-unknown": null,
    "color-no-invalid-hex": true,
    "block-no-empty": true,
    "comment-no-empty": true,
    "max-empty-lines": 1,
    "rule-empty-line-before": ["always", { except: ["first-nested"] }],
    "selector-list-comma-newline-after": "always",
    "at-rule-empty-line-before": [
      "always",
      { except: ["first-nested", "blockless-after-blockless"] },
    ],
    "declaration-colon-newline-after": null,
    "block-closing-brace-newline-after": [
      "always",
      { ignoreAtRules: ["if", "else if", "else"] },
    ],
    "alpha-value-notation": "number",
    "color-function-notation": "legacy",
    "value-keyword-case": [
      "lower",
      { ignoreProperties: ["/font/"], camelCaseSvgKeywords: true },
    ],
    "selector-class-pattern": null,
    "selector-id-pattern": null,
    "hue-degree-notation": null,
    "max-line-length": null,
    "scss/at-mixin-pattern": null,
    "scss/dollar-variable-pattern": null,
    "scss/at-rule-conditional-no-parentheses": null,
    "scss/at-extend-no-missing-placeholder": null,
    "scss/no-global-function-names": null,
    "scss/operator-no-unspaced": null,
  },
};
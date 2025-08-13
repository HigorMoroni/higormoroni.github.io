import antfu from '@antfu/eslint-config';

export default antfu({
  vue: true,
  typescript: true,

  rules: {
    'style/semi': ['error', 'always'],
    'style/comma-dangle': ['error', 'never'],
    'vue/comma-dangle': ['error', 'never'],
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: 1
    }],
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'ignore',
      multiline: 'below'
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'always'
    }]
  }
});

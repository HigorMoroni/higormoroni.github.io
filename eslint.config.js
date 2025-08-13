import antfu from '@antfu/eslint-config';

export default antfu({
  vue: true,
  typescript: true,

  rules: {
    'style/semi': ['error', 'always'],
    'style/comma-dangle': ['error', 'never']
  }
});

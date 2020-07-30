module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      Js: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'semi': 'error',
    'no-multiple-empty-lines': 'error',
    'no-var': 'error',
    'max-len': [
      'error',
      {
        'code': 100
      }
    ],
    'quotes': [
      'error',
      'single'
    ],
    'no-console': 'error',
    'no-alert': 'error',
    'react/prop-types': 0,
    'react/jsx-filename-extension': [1, {
      'extensions': ['.js', '.jsx']
      }
    ]
  },
};

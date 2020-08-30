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
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: [
    'react-hooks',
    'jsx-a11y',
    'import',
    'react',
    'import',
    'prettier',
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
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [1, {
      'extensions': ['.js', '.jsx']
      }
    ]
  },
  'settings': {
    'import/resolver': {
      'node': {
        'paths': ['src']
      }
    }
  },
  'parser': 'babel-eslint'
};

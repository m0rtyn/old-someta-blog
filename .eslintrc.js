module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  plugins: [
    'prettier',
    'react',
    'react-hooks'
  ],
  extends: [
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  env: {
    es6: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  parser: 'babel-eslint',
  rules: {
    //common
    camelcase: 0, // off
    'import/extensions': 0, // off
    'no-nested-ternary': [2],
    complexity: ['error', { max: 4 }],
    // react
    'react/prop-types': 0, // off
    'react/jsx-props-no-spreading': 0, // off
    'react/destructuring-assignment': 0, // off
    'react/jsx-no-bind': 2,
    'react/display-name': 'error',
    // imports
    'import/no-extraneous-dependencies': 0, // off
    'import/no-named-as-default': 0, // off
    'import/no-unresolved': ['off'], // off
    'import/no-relative-parent-imports': 'error',
    // React Hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    // other
    'jsx-a11y/label-has-associated-control': [0], // off
    // 'prettier/prettier': 'error',
    'jsx-a11y/label-has-associated-control': [0],
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/anchor-has-content': 0,
    // complex
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['const', 'let'],
        next: '*'
      },
      {
        blankLine: 'any',
        prev: ['const', 'let'],
        next: ['const', 'let']
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      }
    ]
  }
};

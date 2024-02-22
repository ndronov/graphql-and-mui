module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/vite.config.ts',
        ],
        optionalDependencies: false,
      },
    ],
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'no-void': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key':'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css'] }]
  },
  ignorePatterns: ['**/generated/*.ts'],
};

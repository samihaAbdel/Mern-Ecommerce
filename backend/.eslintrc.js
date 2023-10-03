Module.exports = {
  env: {
    es2016: true,
    nodel: true,
  },
  extends: ['eslint:recommanded', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'es2016',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
}

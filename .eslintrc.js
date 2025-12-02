module.exports = {
  extends: [
    'next/core-web-vitals', "next", "plugin:@typescript-eslint/recommended"
    // Note: eslint-config-prettier is removed from extends to fix Netlify build
    // If you need it, install: npm install -D eslint-config-prettier
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    // Customize rules as needed
    '@next/next/no-html-link-for-pages': 'off',
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
  },
}

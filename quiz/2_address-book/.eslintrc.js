module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    // '@typescript-eslint/no-explicit-any': 'off',
    // "@typescript-eslint/explicit-function-return-type": 'off',
    "prefer-const": "off",
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
};

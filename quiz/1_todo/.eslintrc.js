module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    // "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint"],
  rules: { "prefer-const": 0, "@typescript-eslint/no-unused-vars": 0 },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
};

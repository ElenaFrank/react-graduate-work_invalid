module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "comma-dangle": [
      "error",
      {
        objects: "always-multiline",
        functions: "always-multiline",
      },
    ],
    indent: ["error", 2],
    // semi: [2, "never"],
    "space-before-function-paren": ["error", "always"],
    quotes: ["error", "double", { allowTemplateLiterals: false }],
  },
};

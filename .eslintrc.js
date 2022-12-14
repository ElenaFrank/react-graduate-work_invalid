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
                objects: "only-multiline",
                functions: "only-multiline",
            }
        ],
        indent: ["error", 4],
        semi: [2, "never"],
        "space-before-function-paren": [
            "error",
            { anonymous: "always", named: "never" }
        ],
        quotes: ["error", "double", { allowTemplateLiterals: false }],
        // yoda: ["never", { exceptRange: true }]
    },
}

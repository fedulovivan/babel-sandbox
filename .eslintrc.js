module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint",
        "react"
    ],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    env: {
        amd: true,
        node: true,
        browser: true,
        es6: true
    },
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    rules: {
        // TODO
    },
    settings: {
        react: {
            version: "detect",
        }
    }
};
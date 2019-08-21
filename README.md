Don't forget to enable typescript validation for eslint extension in vscode's settings.js:
```js
"eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "typescript", "autoFix": false },
    { "language": "typescriptreact", "autoFix": false  }
]
```
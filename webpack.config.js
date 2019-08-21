const path = require("path");
module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "main.js"
    },
    module: {
        rules: [{
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
        }]
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
}
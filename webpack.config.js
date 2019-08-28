const path = require('path');
module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'main.js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        },{
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },{
            test: /\.styl$/,
            use: ['style-loader', 'css-loader', 'stylus-loader']
        }],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
}
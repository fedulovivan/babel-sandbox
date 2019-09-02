const path = require('path');
const webpack = require('webpack');
module.exports = {
    mode: 'development',
    entry: [
        // 'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
        // 'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
        // 'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        'webpack-hot-middleware/client',
        "./src/index.tsx"
    ],
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
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: [ path.join(__dirname, 'node_modules') ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
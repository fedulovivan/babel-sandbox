/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
module.exports = {
    mode: 'development',
    entry: [
        'react-hot-loader/patch', // Adding React Hot Loader to preserve component state
        'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
        "./src/index.tsx"
    ],
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'http://localhost:3000/dist/',
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
        modules: [ path.join(__dirname, 'node_modules') ],
        // alias: { 'react-dom': '@hot-loader/react-dom'  },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        publicPath: 'http://localhost:3000/dist/',
        headers: { 'Access-Control-Allow-Origin': '*' },
    },
}
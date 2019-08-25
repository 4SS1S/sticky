const webpack = require("webpack");

module.exports = {
    plugins: [
        new webpack.ExternalsPlugin('commonjs', [
            'electron'
        ])
    ],
    entry: './src/App.js',
    output: {
        path: './public',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3333
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}
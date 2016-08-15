'use strict'
var path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ROOT_PATH = path.resolve(__dirname)
const SRC_PATH = path.resolve(ROOT_PATH, 'src')
const BUILD_PATH = path.resolve(ROOT_PATH, 'build')

module.exports = (() => {
    let config = {}

    config.entry = {
        app: path.resolve(SRC_PATH, 'index.js'),
        vendors: ['babel-polyfill', 'jquery']
    }

    config.output = {
        filename: 'bundle.js',
        path: BUILD_PATH
    }

    config.module = {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'stage-3']
            },
            include: SRC_PATH
        }]
    }

    config.plugins = [
        new HtmlWebpackPlugin({
            template: path.resolve(SRC_PATH, 'index.html'),
            filename: 'index.html',
            chunks: ['app', 'vendors'],
            inject: 'body'
        }),

        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]

    config.devtool = 'eval-source-map'

    config.devServer = {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    }

    return config
})()
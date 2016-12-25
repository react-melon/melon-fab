/**
 * @file webpack 开发配置
 * @author chenxiao07 <chenxiao07@baidu.com>
 */

'use strict';

const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const nib = require('nib');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const css = new ExtractTextPlugin('styles.css');

const config = {

    entry: [
        'webpack-hot-middleware/client',
        'webpack/hot/only-dev-server',
        path.join(__dirname, '../example/index.js')
    ],

    module: {
        loaders: [
            {
                test: /\.js?$/,
                loaders: [
                    'react-hot',
                    'babel?cacheDirectory'
                ],
                exclude: [
                    /node_modules/
                ]
            },
            {
                test: /\.styl$/,
                loader: css.extract([
                    'css',
                    'stylus?paths=node_modules&resolve url'
                ])
            },
            {
                test: /\.(svg|eot|ttf|woff|woff2|jpg|png)(\?.*)?$/,
                loader: 'file?name=asset/[name].[ext]'
            },
            {
                test: /\.json(\?.*)?$/,
                loader: 'json'
            }
        ]
    },

    output: {
        path: path.resolve(__dirname, '../asset'),
        publicPath: '/',
        filename: '[name].js'
    },

    cache: true,

    debug: true,

    devtool: 'eval-source-map',

    stylus: {
        'use': [nib()],
        'import': ['~nib/lib/nib/index.styl']
    },

    plugins: [
        new webpack.DllReferencePlugin({
            context: '.',
            manifest: require('../asset/inf-manifest.json')
        }),
        css,
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            templateContent: (function () {
                return fs
                    .readFileSync(
                        path.join(__dirname, '../example/index.html'),
                        'utf8'
                    )
                    .replace(/<!--@inject=([\w._-]+)-->/ig, function ($0, $1) {
                        return `<script src="${$1}"></script>`;
                    });
            })(),
            filename: path.resolve(__dirname, '../asset/index.html'),
            alwaysWriteToDisk: true
        }),
        new HtmlWebpackHarddiskPlugin()
    ]

};


module.exports = config;

import * as path from 'path';
import * as webpack from 'webpack';

import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
    entry: path.resolve('src/main.js'),
    output: {
        path: path.resolve('dist'), // If no path segments are passed, will return the absolute path of the current working directory.
        filename: '[name].[chunkhash].js'
    },

    resolve: {
        modules: [
            'node_modules',
            'devtools',
            'src'
        ],
        alias: {
            'calendar': path.resolve('src/components/calendar'),
            'side-bar': path.resolve('src/components/side-bar'),
            'dashboard': path.resolve('src/components/dashboard'),
            'tasks': path.resolve('src/components/tasks'),
            'weather': path.resolve('src/components/weather-widget')
        },
        extensions: ['.ts', '.js']
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'AngularJS 1.6. Boilerplate',
            template: path.resolve('src/index.ejs'),
            inject: 'head'
        })
    ],

    module: {
        rules: [{
                test: /\.html$/,
                exclude: /node_modules/,
                use: [{ loader: 'html-loader' }]
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'resolve-url-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            includePaths: []
                        }
                    }
                ]
            }
        ]
    }
}

export default config;
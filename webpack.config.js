const webpack = require('webpack');
module.exports = {
    entry: './src/app.js',
    output: {
        //get an absolute path for current directory ie: /
        path: '/dist/assets',
        filename: './bundle.js',
        publicPath: 'assets'
    },
    resolve: {
        alias: {
            jquery: "jquery/src/jquery"
        }
    },
    devServer: {
        //inline tells the webpack-dev-server to use a client entry point so that we can browse our file on local host port 3000.
        inline: true,
        contentBase: './dist',
        port: 3000
    },
    watch: true,
    module: {
        loaders: [
            //trasnpilers
            {
                //any file with .js
                test: /\.js$/,
                //don't run on any modules from node_modules
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'latest', 'stage-0']
                }
            },
            {
                test: /\.json$/,
                exclude: /(node_modules)/,
                loader: 'json-loader'
            }
        ]
    }
};
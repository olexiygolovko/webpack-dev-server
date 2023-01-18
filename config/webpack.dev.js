const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
    devServer: {
        static: './dist',
        hot: true,
        port: 3001,
    },
    stats: {
        children: false,
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                use: 'eslint-loader',
                test: /\.js$/,
                exclude: '/node_modules/'
            }
        ]
    },
};

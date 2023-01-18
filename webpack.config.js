const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	mode: 'development',

	entry: './src/index.js',
	devtool: 'inline-source-map',
	devServer: {
		historyApiFallback: true,
		static:'./dist',
		open: true,
		port: '3001',
		hot: true,
	},
    output: {
        filename: 'main.js'
    },

    plugins: [
        new HtmlWebpackPlugin({template: './src/index.pug'}, {title:'Development'})
    ],
    module: {
		rules: [
				{
				test: /\.pug$/,
				loader: 'pug-loader',
				options: {
				pretty: true
				}
			}
		]
	}
};

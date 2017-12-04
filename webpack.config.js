var path = require('path');

module.exports = {
	entry: './src/main.js',
	output: { 
		path: path.resolve(__dirname, './dist/'),
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist/'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{ 
				test: /\.css$/, 
				loader: "style-loader!css-loader", 
			},
			{
				test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
				loader: 'url-loader',
				options: {
					limit: 10000
				}
			}
		]
	}
};

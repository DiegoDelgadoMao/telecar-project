const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[contenthash].js",
		assetModuleFilename: 'assets/images/[hash][ext][query]',
		clean: true,
	},
	mode: 'development',
	resolve: {
		extensions: [".js", ".jsx"],
		alias: {
			'@fonts': path.resolve(__dirname, 'src/styles/fonts'),
			'@styles': path.resolve(__dirname, 'src/styles'),
			'@images': path.resolve(__dirname, 'src/assets/images'),
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
					},
				],
			},
			{
				test: /\.css$/i,
				include: path.resolve(__dirname, 'src'),
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			// {
			// 	test: /\.(sa|sc|c)ss$/i,
			// 	use: [
			// 		'css-loader',
			// 		'style-loader',
			// 		'postcss-loader'
			// 	]
			// 
			// 	// use: [
			// 	// 	MiniCssExtractPlugin.loader,
			// 	// 	'css-loader',
			// 	// 	'sass-loader',
			// 	// 	'style-loader',
			// 	// 	'postcss-loader'
			// 	// ]
			// },
			{
				test: /\.(woff|woff2)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'styles/fonts/[hash][ext][query]'
				}
			},
			{
				test: /\.png/,
				type: 'asset/resource'
			}
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			filename: "index.html",
		})
	],
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
			watch: true,
		},
		watchFiles: path.join(__dirname, "./**"),
		compress: true,
		historyApiFallback: true,
		port: 3006,
		open: true,
	},
};
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[contenthash].js",
		assetModuleFilename: 'assets/images/[hash][ext][query]',
		clean: true
	},
	mode: 'production',
	resolve: {
		extensions: [".js", ".jsx"],
		alias: {
			'@fonts': path.resolve(__dirname, 'src/styles/fonts'),
			'@styles': path.resolve(__dirname, 'src/styles'),
			'@images': path.resolve(__dirname, 'src/assets/images')
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
				test: /\.(sa|sc|c)ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				]
			},
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
		}),
		new MiniCssExtractPlugin({
			filename: 'styles/[name].[contenthash].css',
		})
	],
	optimization: {
		minimize: true,
		minimizer: [
			new CssMinimizerPlugin(),
		]
	}
};
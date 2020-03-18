const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const UglifyJS = require('uglify-es');

const DefaultUglifyJsOptions = UglifyJS.default_options();
const compress = DefaultUglifyJsOptions.compress;
for (let compressOption in compress) {
	compress[compressOption] = false;
}
compress.unused = true;

module.exports = env => {
	return {
		entry: {
			CartComponents: './resources/js/CartComponents.js',
			ProductAddToCart: './resources/js/components/ProductAddToCart.js',
			// CartPopup: './resources/js/components/CartPopup.js'
			// SApp: './resources/js/components/svelte/SvelteApp.js',
			// main: './resources/js/main.js'
		},
		output: {
			path: path.resolve(__dirname, 'public/js/dist'),
			filename: '[name].js'
		},
		resolve: {
			// see below for an explanation // '[name].[chunkhash].js' put this if you want to get hashed files to cache bust
			alias: { svelte: path.resolve('node_modules', 'svelte') },
			extensions: ['.mjs', '.js', '.svelte'],
			mainFields: ['svelte', 'browser', 'module', 'main']
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: ['babel-loader', 'prettier-loader']
				},
				{ test: /\.svelte$/, exclude: /node_modules/, use: 'svelte-loader' },
				{
					test: /\.scss$/,
					use: [
						'style-loader',
						MiniCssExtractPlugin.loader,
						'css-loader',
						'sass-loader',
						'postcss-loader'
					]
				}
			]
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: 'styles.css' // 'style.[contenthash].css' put this if you want to get hashed files to cache bust
			}), // new HtmlWebpackPlugin({
			// 	inject: false,
			// 	hash: true,
			// 	template: './resources/index.html',
			// 	children: false,
			// 	filename: '../index.html'
			// }),
			new WebpackMd5Hash()
		],
		optimization: {
			splitChunks: {
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
						name: 'vendors',
						chunks: 'all'
					}
				}
			},
			minimize: true,
			minimizer: [
				new UglifyJsPlugin({
					uglifyOptions: {
						compress,
						mangle: false,
						output: {
							beautify: env.NODE_ENV !== 'production' ? true : false
						}
					}
				})
			],
			usedExports: true,
			sideEffects: true
		}
	};
};

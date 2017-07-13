const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = [{
	context:__dirname,
		entry:{
			main:'./src/build.js'
		},
		output:{
			filename:'[name].page.js',
			path:path.resolve(__dirname,'build'),
			library:'page',
			libraryTarget:'commonjs'
		},
		resolve:{
			extensions:['.js','.jsx','.css'],
		},
		module:{
			rules:[
				{
					test:/\.js$/,
					exclude:path.resolve(__dirname,'node_modules'),
					loader:'babel-loader',  //处理es6代码在浏览器环境中运行
					query:{
						presets:['react','es2015'],
						"plugins":[
	                        ["import",{"libraryName":"antd","style":'css'}]
	                    ]
					}
				},
				{
					test:/\.css$/,
					//loader:'css-loader?importLoaders=1',  //loader串联使用
					loader:ExtractTextPlugin.extract([
	                    'css-loader',
	                    'postcss-loader'
	                ])
				},
				{
					test:/\.less$/,
					loader:'css-loader!less-loader'
				},
				{
					test:/\.(png|jpg|gif|svg)$/i,
					loader:'url-loader',
					query:{
						'limit':20000, //图片小于20000时被打包到html或者css里成base64格式的，大于20000，采用file-loader打包成单个文件
						'name':'assets/[name]-[hash:5].[ext]'   //图片打包输出的文件名
					}
				}
			]
		},
		plugins:[
			new HtmlWebpackPlugin({
				template:__dirname + '/public/index.html',
				filename:__dirname + '/index.html'
			}),
			//css单独打包
			new ExtractTextPlugin('/css/[name].css'),
			//css压缩
	        new OptimizeCssAssetsPlugin({
	            cssProcessorOptions: { discardComments: {removeAll: true } },
	            canPrint: false
	        }),
			//热启动
	        new webpack.HotModuleReplacementPlugin(),
		]
	},
	{
		context:__dirname,
		entry:{
			main:'./src/main.js'
		},
		output:{
			filename:'[name].bundle.js',
			path:path.resolve(__dirname,'build')
		},
		resolve:{
			extensions:['.js','.jsx','.css'],
		},
		/*devServer:{
		   port: 9000,
		   host:'10.200.121.79'  //默认是localhost：8080，可以配置成本机ip，同一网段的 ，别人也可以访问
		},*/
		module:{
			rules:[
				{
					test:/\.js$/,
					exclude:path.resolve(__dirname,'node_modules'),
					loader:'babel-loader',  //处理es6代码在浏览器环境中运行
					query:{
						presets:['react','es2015'],
						"plugins":[
	                        ["import",{"libraryName":"antd","style":'css'}]
	                    ]
					}
				},
				{
					test:/\.css$/,
					//loader:'style-loader!css-loader?importLoaders=1',  //loader串联使用
					use:ExtractTextPlugin.extract([
	                    'css-loader',
	                    'postcss-loader'
	                ])
				},
				{
					test:/\.less$/,
					loader:'style-loader!css-loader!less-loader'
				},
				{
					test:/\.(png|jpg|gif|svg)$/i,
					loader:'url-loader',
					query:{
						'limit':20000, //图片小于20000时被打包到html或者css里成base64格式的，大于20000，采用file-loader打包成单个文件
						'name':'assets/[name]-[hash:5].[ext]'   //图片打包输出的文件名
					}
				}
			]
		},
		plugins:[
			//css单独打包
			new ExtractTextPlugin('/css/[name].css'),
			//css压缩
	        new OptimizeCssAssetsPlugin({
	            cssProcessorOptions: { discardComments: {removeAll: true } },
	            canPrint: false
	        })
		]
	}
]
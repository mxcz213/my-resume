const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context:__dirname,
	devtool: 'eval-source-map',
	entry:{
		main:'./src/main.js'
	},
	output:{
		filename:'dist/js/[name].dev.js',
		path:path.resolve(__dirname,'build')
	},
	resolve:{
		extensions:['.js','.jsx','.css']
	},
	/*devServer:{
	   port: 9000,
	   host:'10.200.121.79'  //默认是localhost：8080，可以配置成本机ip，同一网段的 ，别人也可以访问
	},*/
	/*devServer: {
	    contentBase: "./src",//本地服务器所加载的页面所在的目录
	    historyApiFallback: true,//不跳转
	    inline: true//实时刷新
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
				loader:'style-loader!css-loader?importLoaders=1',  //loader串联使用
			},
			{
				test:/\.less$/,
				loader:'style-loader!css-loader!postcss-loader!less-loader'
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
			inject:true,
			template:'./public/index.html',
			filename:'index.html'
		}),
		//css单独打包
		new ExtractTextPlugin(''),
		//热启动
        new webpack.HotModuleReplacementPlugin(),
	]
}
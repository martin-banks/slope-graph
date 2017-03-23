const HTMLWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/src/preview.html',
	filename: 'preview.html',
	inject: 'body'
})

const webpack = require("webpack");

module.exports = {
  plugins: [
    new webpack.NewWatchingPlugin()
  ]
};

module.exports = {
	entry: __dirname + '/src/app.js',
	output: {
		filename: 'app_build.js',
		path: __dirname + '/build/',
		publicPath: ''
	},
	resolve: {
    extensions: ['.js', '.css']
  },

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.css/,
				loader: ExtractTextPlugin.extract({
          loader: [
            {
              loader: 'css-loader',
              query: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
                modules: true,
                minimize: true
              }
            },
            {
              loader: 'postcss-loader'
            }
          ]
        })
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file?hash=sha512&digest=hex&name=[hash].[ext]',
					'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
				]
			}
		]
	},
	
	plugins: [
		new HTMLWebpackPlugin({
			template: __dirname + '/src/preview.html',
			filename: 'preview.html',
			inject: 'body'
		}),
    new ExtractTextPlugin({
      filename: 'app_build.css',
      allChunks: true
    })
	]

}


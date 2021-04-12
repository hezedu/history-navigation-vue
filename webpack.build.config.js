process.env.NODE_ENV = 'production';

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const NODE_ENV = process.env.NODE_ENV;
const isPro = NODE_ENV === 'production';

const bundleName = 'vue-multi';
const outputPath = path.join(__dirname, './dist');

var optimization;

var cssRule;
if(!isPro){ //使用 命令weblack
  cssRule = {
    test: /(\.scss$)|(\.css$)/,
    use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
    // include: path.join(__dirname, './src')
  }
}else{
  cssRule = {
    test: /(\.scss$)|(\.css$)/,
    //use: ["css-loader", "postcss-loader", "sass-loader"]
    use: [
      {
        loader: MiniCssExtractPlugin.loader
      },
      "css-loader",  'postcss-loader', "sass-loader"
    ]
  }
}



// ***************************** plugins *****************************
var plugins = [
  new VueLoaderPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(NODE_ENV)
    }
  }),
]
var rules = [
  {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/
  },
  {
    test: /\.vue$/,
    loader: 'vue-loader'
  },
  cssRule
]
// ***************************** 环境适配 *****************************
if (isPro) {
  optimization = {
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin({})
    ]
  }

  plugins = plugins.concat([
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].min.css"
      // chunkFilename: "chunk_[name]_[contenthash].css"
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: true
    })

  ]);

  // -------- pre lint --------
  rules.unshift({
    enforce: "pre",
    test: /(\.js|\.vue)$/,
    include: [path.resolve(__dirname, "src")],
    loader: "eslint-loader"
  })

};

// ***************************** webpackConf *****************************
const webpackConf = {
  mode: NODE_ENV,
  optimization,
  context: path.join(__dirname, './src'),
  entry: {
    z_app: "./index.js"
  },
  output: {
    path: outputPath,
    filename: bundleName + '.min.js',
    chunkFilename: 'chunk_' + bundleName
  },
  module: {
    rules
  },
  resolve: {
    extensions: ['.js'],
    // alias: {
    //   '__ROOT__' : path.join(__dirname, './src')
    // }
  },
  plugins: plugins,
  performance: {
    hints: false
  }
};

module.exports = webpackConf;

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const setup = require('./server/setup');
const config = require('./config');

const NODE_ENV = process.env.NODE_ENV || 'development';

const isPro = NODE_ENV === 'production';
const {indexDir,
      bundleName,
        outputPath,
        publicPath} = require('./script/get_config')();

// console.log('indexDir', indexDir);
// console.log('bundleName', bundleName);
// console.log('outputPath', outputPath);
// console.log('publicPath', publicPath);

var optimization;

var cssRule;
if(!isPro){ //使用 命令weblack
  cssRule = {
    test: /(\.scss$)|(\.css$)/,
    use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
    include: path.join(__dirname, './src')
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

  // create index.html
  new HtmlWebpackPlugin({
    filename: path.join(indexDir + '/index.html'),
    template: path.join(__dirname, '/src/index.ejs'),
    staticMap: setup.staticMap,
    data: {
      title: 'Vue Multi Demo'
    }
  })
]
var rules = [
  {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/
  },
  {
    test: /\.jade$/,
    loader: 'pug-plain-loader'
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

  plugins = plugins.concat([//正式环境下压缩
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name]_[contenthash].css",
      chunkFilename: "chunk_[name]_[contenthash].css"
    }),

    // new webpack.optimize.TerserPlugin({
    //   compress: {
    //     warnings: false,
    //   },
    //   sourceMap: false,
    //   output: {
    //     comments: false,
    //   }
    // }),

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

// ***************************** config *****************************
const webpackConf = {
  mode: NODE_ENV,
  optimization,
  context: path.join(__dirname, './src'),
  entry: {
    z_app: "./app.js"
  },
  output: {
    path: outputPath,
    publicPath,
    filename: bundleName,
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
  devServer: {
    port: config.port,
    before: setup,
    host: '0.0.0.0',
    contentBase: indexDir,
    hot: true,
    // proxy: {
    //   '/api': {
    //     target: '',
    //     changeOrigin: true
    //   }
    // }
  },
  performance: {
    hints: false
  }
};

module.exports = webpackConf;

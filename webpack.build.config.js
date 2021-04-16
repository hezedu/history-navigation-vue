

const isPro = process.argv.indexOf('--node-env=production') !== -1;

process.env.NODE_ENV = 'production';
const NODE_ENV = process.env.NODE_ENV;

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');



const bundleName = 'history-navigation-vue';
const outputPath = path.join(__dirname, './dist');
const filename = isPro ? '[name].min' : '[name]';
var optimization;

var cssRule = {
  test: /(\.scss$)|(\.css$)/,
  //use: ["css-loader", "postcss-loader", "sass-loader"]
  use: [
    {
      loader: MiniCssExtractPlugin.loader
    },
    "css-loader",  'postcss-loader', "sass-loader"
  ]
};



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
optimization = {
  minimize: isPro,
  minimizer: [
    new TerserPlugin(
    //   {
    //   extractComments: {
    //     condition: true,
    //     filename: 'bundleName',
    //     banner: (commentsFile) => {
    //       return `My custom banner about license information ${commentsFile}`;
    //     },
    //   }
    // }
    ),
    new OptimizeCSSAssetsPlugin({})
  ]
}

plugins = plugins.concat([
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: filename + ".css"
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

// ***************************** webpackConf *****************************
const webpackConf = {
  mode: NODE_ENV,
  optimization,
  context: path.join(__dirname, './src'),
  entry: {
    [bundleName]: "./index.js"
  },
  output: {
    path: outputPath,
    filename: filename + '.js',
    library: 'HistoryNavigationVue',
    libraryTarget: 'umd'
  },
  module: {
    rules
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: plugins,
  performance: {
    hints: false
  }
};

if(!isPro){
  
  const fs = require('fs');
  _emptyDirSync(path.join(__dirname, 'dist'));
  function _emptyDirSync(dir){
    const names = fs.readdirSync(dir);
    names.forEach(name => {
      fs.unlinkSync(path.join(dir, name));
    })
  }
} else {
  console.log('build minimize files...');
}

module.exports = webpackConf;

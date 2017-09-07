const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');  //独立打包css
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //压缩CSS
const autoprefixer = require('autoprefixer');
const cssnext = require('postcss-cssnext');
const postImport = require('postcss-import');

module.exports = {
    entry: path.resolve(__dirname, 'app.js'), // 入口文件路径
    output: { 
        path: path.resolve(__dirname, 'dist'),   //打包路径
        filename: '[name].build.js?v=[hash]'    //打包文件名
    },
    resolve: {
        extensions: ['.js', '.css']    //可省略文件名后缀        
    },
    module: {
        rules: [
            {
                test: /\.js$/,    // 正则匹配js文件 
                exclude: /node_modules/,    //需要排除的目录
                use: [{         //js 转义规则
                  loader: 'babel-loader',  
                  options: {    // 配置参数
                      presets: ['react', 'latest','stage-0']
                  }
                }]
                
            },
            {
                test: /\.css$/,  // 正则匹配css文件 
                exclude: /node_modules/,    //需要排除的目录
                use: ExtractTextPlugin.extract({   //配置单独打包css规则    
                    fallback: "style-loader",
                    use: [
                      "css-loader",
                      {
                        loader: 'postcss-loader',
                        options: {
                          plugins: () => [
                            autoprefixer(
                              { browsers: ['iOS >= 7', 'Android >= 4.1', 'last 10 Chrome versions', 'last 10 Firefox versions', 'Safari >= 6', 'ie > 8'] }
                            ),
                            cssnext(),
                            postImport()
                          ]
                        }
                      }
                    ],                    
                })  //转义css文件规则
            },
            {
                test: /favicon\.png$/,    //打包网站图标
                use: [{
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]?[hash]'
                    }
                }]
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                exclude: /favicon\.png$/,     // 排除favicon.png
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 10000,
                      name: '[name].[ext]'
                    }
                  }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({    //配置独立包css生成路径
            filename: '[name].build.css?v=[hash]'  
        }),
        //压缩css(因为没有用style-loader打包到js里所以webpack.optimize.UglifyJsPlugin的压缩本身对独立css不管用)
        new OptimizeCssAssetsPlugin({
          assetNameRegExp: /\.css$/g, //正则匹配后缀.css文件;
          cssProcessor: require('cssnano'), //加载‘cssnano’css优化插件;
          cssProcessorOptions: {
            discardComments: {
              removeAll: true
            }
          }, //插件设置,删除所有注释;
          canPrint: true //设置是否可以向控制台打日志,默认为true;
        }),
        new webpack.DefinePlugin({     //创建一个可以在编译时可以配置的全局常量
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({     //es6 压缩
            compress: {
                warnings: false
            }
        }),        
    ],
    devServer: {      //配置本地Server
    		contentBase: path.join(__dirname, 'dist'), //设置启动文件目录;
    		port: 8080,    //设置端口号；
    		compress: true, //设置gzip压缩;
    		//inline:true,  //开启更新客户端入口(可在package.json scripts 里设置 npm run xxx);
    		//hot: true    //设置热更新(可在package.json scripts 里设置 npm run xxx);
	  },
};

/*
关于babel插件的一些用途

babel-preset-react   用于转换jsx

babel-preset-stage-0  用于尝试es7的特性

babel-preset-latest  相当于es6

extract-text-webpack-plugin  独立打包css

optimize-css-assets-webpack-plugin 压缩css

postcss-cssnext  css4转义器(变量)
*/

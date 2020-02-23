const path = require('path')
let htmlWebpackPlugin = require('html-webpack-plugin')
//  webpakc shi node 写出来的 node的写法
module.exports = {
  mode: 'development', // 两种模式 production development
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash:8].js', // 打包后的文件名 bundle.[hash].js 文件名中添加hash值  [hash:8]  冒号后边的数字指定hash值得长度
    path: path.resolve(__dirname, 'dist') // 路径必须是一个绝对路径
  },
  devServer: {
    // 开发服务器的配置
    port: 3000,
    progress: true, // 进度条
    contentBase: path.join(__dirname, './dist'), // 指定启动的静态服务访问的页面 dist下的index.html页面
    compress: true // 启用gzip 压缩
  },
  plugins: [
    // 放着所有的webpack 插件
    new htmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: {
        removeAttributeQuotes: true, // 打包出来的html去掉html中的双引号
        collapseWhitespace: true // 打包出来的html变成一行
      },
      hash: true
    })
  ],
  module: {
    // 模块
    rules: [
      // 规则
      // css-loader 解析@import这种语法的 style-loader 把css 插入到head标签中
      // loader的顺序默认是从右向左执行 从下向上执行
      //loader 还可以写成对象的方式 可以多传一个 options的选项
      {
        test: /\.css/,
        use: [
          {
            loader: 'style-loader',
            options: {
              // insert: 'top' // 插入到style的最上边
            }
          },
          'css-loader'
        ]
      }
    ]
  }
}

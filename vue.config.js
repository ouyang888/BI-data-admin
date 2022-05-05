module.exports = {
  // 选项...
  // 基本路径
  publicPath: './',
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://10.33.119.107:80/',
        changeOrigin:true, // 允许跨域
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  },
  outputDir: 'inspectionClient'
}
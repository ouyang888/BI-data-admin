module.exports = {
  // 选项...
  // 基本路径
  publicPath: './',
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/apa': {
        target: 'http://p.midea.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/apa': ''
        }
      },
    }
  },
  outputDir: 'inspectionClient'
}
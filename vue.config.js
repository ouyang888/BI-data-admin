module.exports = {
  // 选项...
  // 基本路径
  publicPath: './',
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/apa': {
        target: 'https://devnewdota.smartmidea.net/quality-service/',
        // target: 'https://lease.msmartlife.com/quality-service/',
        // target: 'http://10.73.44.48:8085/',
        // target: 'http://10.73.41.36:8085/',//才哥
        changeOrigin: true,
        pathRewrite: {
          '^/apa': ''
        }
      },
    }
  },
  outputDir: 'inspectionClient'
}
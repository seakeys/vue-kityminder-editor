module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
        .add(require('path').join(__dirname,'..', 'packages'))
        .end()
      .use('babel')
        .loader('babel-loader')
        .tap(options => {
          return options
        })
  }
}
const path = require('path')

module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? './':'/',
  configureWebpack:{
    resolve:{
      alias:{
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
        'store': '@/store',
        'router': '@/router',
        'utils': '@/utils'
      }
    }
  },

  css:{
    loaderOptions:{
      sass:{
        prependData: `@import 'assets/styles/global.scss';`
      }
    }
  }
}

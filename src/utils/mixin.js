import { mapGetters,mapActions } from 'vuex'
import { themeList,injectCss,removeAllCss } from 'utils/book'

export const bookMixin = {
  computed:{
    ...mapGetters(
      [
        'fileName',
        'isBarShow',
        'isSettingShow',
        'currentFont',
        'currentFamily',
        'currentTheme',
        'currentBook',
        'isFamilyPopShow',
      ]),
    _themeList(){
      return themeList(this)
    }  
  },
  methods:{
    ...mapActions(
      [
        'setFileName',
        'setBarShow',
        'setSetting',
        'setCurrentFont',
        'setCurrentBook',
        'setCurrentFamily',
        'setCurrentTheme',
        'setFamilyPop'
      ]),
    injectCssByTheme(name){
      removeAllCss()
      const baseUrl = process.env.NODE_ENV === 'development'?
        process.env.VUE_APP_DEV : process.env.VUE_APP_PRO
      switch(name){
        case 'Default':
          injectCss(`${baseUrl}/themes/theme_default.css`)
          break
        case 'Gold':
          injectCss(`${baseUrl}/themes/theme_gold.css`)      
          break
        case 'Night':
          injectCss(`${baseUrl}/themes/theme_night.css`)
          break
        case 'Eye':
          injectCss(`${baseUrl}/themes/theme_eye.css`)
          break
        default:
          injectCss(`${baseUrl}/themes/theme_default.css`)
      }
    }  
  }
}
import { mapGetters,mapActions } from 'vuex'
import { themeList,injectCss,removeAllCss } from 'utils/book'
import { saveProgress } from 'utils/localStorage'

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
        'isBookLoaded',
        'progress',
        'section',
        'currentSectionName',
        'locations',
        'isLoadingShow',
        'readTime',
        'slideBookInfo',
        'toc'
      ]),
    _themeList(){
      return themeList(this)
    },
    getReadTime(){
      return this.$t('book.haveRead').replace('$1',`${this.readTime}`)
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
        'setFamilyPop',
        'setBookLoaded',
        'setBookProgress',
        'setBookSection',
        'setSectionName',        
        'setLocations',
        'setLoading',
        'setReadTime',
        'setSlideBookInfo',
        'setToc'
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
    },
    // 页面跳转
    jumpToPage(currentProgress) {
      saveProgress(this.fileName,currentProgress)
      const ratio = currentProgress / 100
      let toLocation = 0
      if(this.locations){
        toLocation = this.locations.cfiFromPercentage(ratio) 
      }
      this.setLoading(true)
      this.currentBook.rendition.display(toLocation).then(() => {
        console.log('页面跳转')
        this.syncSection()
        this.setLoading(false)
      })      
    },
    // 章节跳转
    jumpToSection(href){
      this.setLoading(true)
      // 跳转到对应章节
      this.currentBook.rendition.display(href).then(() => {
        this.setLoading(false)
        // 基于当前所在位置同步progress，并更新本地存储
        this.syncProgress()
        // 修改章节标题：section改变触发监听，自动修改标题，不需要手动修改            
      })
    },    
    // 同步章节
    syncSection(){
      const currentLocation = this.currentBook.rendition.currentLocation()
      this.setBookSection(currentLocation.start.index)
      console.log(currentLocation.start.index)
    },
    // 同步章节标题
    syncSectionName(section){
      // 批注：需要改进
      if(this.currentBook && this.currentBook.navigation){
        const sectionInfo = this.currentBook.section(section)     
        if(sectionInfo && sectionInfo.href) {
          const currentSectionName = this.currentBook.navigation.get(sectionInfo.href).label
          this.setSectionName(currentSectionName)
        }
      }         
    },
    // 根据当前位置同步 progress
    syncProgress(){
      const currentLocation = this.currentBook.rendition.currentLocation()
      const currentProgress = Math.floor(currentLocation.start.percentage * 100)
      this.setBookProgress(currentProgress)
      saveProgress(this.fileName,currentProgress)      
    }
  }
}
<template>
  <div>
    <title-bar></title-bar>
    <div id="read"></div>
    <menu-bar></menu-bar>
  </div>
</template>

<script>
import titleBar from 'components/EBook/titleBar'
import menuBar from 'components/EBook/menuBar'

import { bookMixin } from 'utils/mixin'
import fontFile from 'utils/font'
import {
  getFontSize,
  saveFontSize,
  getFontFamily,
  saveFontFamily,
  saveTheme,
  getTheme
} from 'utils/localStorage'

import Epub from 'epubjs'
global.epub = Epub

export default {
  mixins:[bookMixin],
  components:{
    titleBar,
    menuBar
  },
  mounted(){
    // 获取当前书籍对应参数
    const fileName = this.$route.params.fileName.replace('|','/')
    // 将当前书籍异步写入全局状态
    this.setFileName(fileName).then(() => {
      // 1.渲染书籍
      this.initBook()
      // 2.绑定事件
      this.bindTouch()
      // 3.注入字体文件
      this.injectFont()
    })    
  },
  methods:{
    initBook(){
      // 初始化渲染书籍
      const baseUrl = 'http://localhost:8081/epub/'
      const book = new Epub(`${baseUrl}${this.fileName}.epub`)
      this.setCurrentBook(book)
      this.rendition = book.renderTo('read',{
        width:window.innerWidth,
        height:window.innerHeight,
        method:'default'
      })
      this.rendition.display().then(() => {
        this.initTheme()
        this.initGlobalTheme()
        this.initFontSize()
        this.initFontFamily()
      })
    },
    initTheme(){
      // 写入本地存储
      let theme = getTheme(this.fileName)
      if(!theme){
        theme = this._themeList[0].name
        saveTheme(this.fileName,theme)
      }
      // 注册主题
      const themesObject = this.currentBook.rendition.themes
      this._themeList.forEach(theme => {
        themesObject.register(theme.name,theme.style)
      })
      // 应用阅读器主题样式
      this.setCurrentTheme(theme)
      themesObject.select(theme)
      // 应用全局主题样式

    },
    initGlobalTheme(){
      this.injectCssByTheme(this.currentTheme)
    },
    initFontSize(){
      let fontSize = getFontSize(this.fileName)
      if(!fontSize){
        saveFontSize(this.fileName,this.currentFont)
      } else {
        this.currentBook.rendition.themes.fontSize(fontSize)
        this.setCurrentFont(fontSize)
      }
    },
    initFontFamily(){
      let fontFamily = getFontFamily(this.fileName)
      if(!fontFamily){
        saveFontFamily(this.fileName,this.currentFamily)
      } else {
        this.currentBook.rendition.themes.font(fontFamily)
        this.setCurrentFamily(fontFamily)
      }
    },
    bindTouch(){
      // 绑定滑动翻页事件
      let startX,startTime
      this.rendition.on('touchstart',event => {
        startX = event.changedTouches[0].clientX
        startTime = event.timeStamp
      })
      this.rendition.on('touchend',event => {
        const offset = event.changedTouches[0].clientX - startX
        const duration = event.timeStamp - startTime
        if(duration < 500 && offset > 40){
          this.prevPage()
        } else if(duration < 500 && offset < -40){
          this.nextPage()
        } else {
          // 其它情况包括点击事件
          this.toggleBar()
        }
      })
    },
    prevPage(){
      this.rendition.prev()
      this.hideBar()
    },
    nextPage(){
      this.rendition.next()
      this.hideBar()
    },
    toggleBar(){
      if(this.isBarShow){
        this.setSetting(-1)
      }
      if(this.isFamilyPopShow){
        this.setFamilyPop(false)
      }
      this.setBarShow(!this.isBarShow)
    },
    hideBar(){
      this.setBarShow(false)
      this.setSetting(-1)
      this.setFamilyPop(false)
    },
    injectFont(){
      const baseUrl = process.env.NODE_ENV === 'development'?
        process.env.VUE_APP_DEV : process.env.VUE_APP_PRO
      this.currentBook.rendition.hooks.content.register(contents => {
        fontFile.forEach(item => {
          contents.addStylesheet(`${baseUrl}/fonts/${item}`)
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
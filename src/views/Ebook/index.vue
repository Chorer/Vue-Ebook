<template>
  <div>
    <title-bar></title-bar>
    <div id="read"></div>
    <!--加载弹窗-->
    <loading-modal></loading-modal>
    <menu-bar></menu-bar>
  </div>
</template>

<script>
import titleBar from 'components/EBook/titleBar'
import menuBar from 'components/EBook/menuBar'
import loadingModal from 'components/EBook/loadingModal'

import { bookMixin } from 'utils/mixin'
import fontFile from 'utils/font'
import {
  getFontSize,
  saveFontSize,
  getFontFamily,
  saveFontFamily,
  saveTheme,
  getTheme,
  saveProgress,
  getProgress
} from 'utils/localStorage'
import baseUrl from '@/config'

import Epub from 'epubjs'
global.epub = Epub

export default {
  mixins:[bookMixin],
  components:{
    titleBar,
    menuBar,
    loadingModal
  },
  mounted(){
    // 获取当前书籍对应参数
    const fileName = this.$route.params.fileName.replace('|','/')
    // 将当前书籍异步写入全局状态
    this.setFileName(fileName).then(() => {
      // 1.渲染书籍，初始化各种配置
      this.initBook()
      // 2.绑定事件
      this.bindTouch()
      // 3.注入字体文件
      this.injectFont()
    })    
  },
  methods:{
    initBook(){
      // 渲染书籍
      const _baseUrl = `${baseUrl}/epub/`
      const book = new Epub(`${_baseUrl}${this.fileName}.epub`)
      this.setCurrentBook(book)
      this.rendition = book.renderTo('read',{
        width:window.innerWidth,
        height:window.innerHeight,
        method:'default'
      })
      // 生成locations对象
      book.ready.then(() => {
        this.generateLocation()
      })
      // 渲染配置
      this.rendition.display().then(() => {
        console.log('视图渲染')
        this.initTheme()
        this.initGlobalTheme()
        this.initFontSize()
        this.initFontFamily()
      })
    },
    generateLocation(){
      // 单页字数
      const totalWords = 750 * (window.innerWidth / 375) * (getFontSize(this.fileName) / 16)
      // 生成 locations 对象并保存
      this.currentBook.locations.generate(totalWords).then(res => {
        // 注意这里的res只是分页后的数组结果，而不是locations对象
        this.setLocations(this.currentBook.locations)
        this.setBookLoaded(true)
        this.initProgress()
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
    initProgress(){
      const currentProgress = getProgress(this.fileName)
      // 如果是初次进入
      if(!currentProgress){
        saveProgress(this.fileName,this.progress)
        this.syncSectionName(this.section)           
      } else {
        this.setBookProgress(currentProgress)
        this.jumpToPage(currentProgress)
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
export default {
  _setFileName(state,fileName){
    state.book.fileName = fileName
  },
  _setBarShow(state,isShow){
    state.book.isBarShow = isShow
  },
  _setSetting(state,num){
    state.book.isSettingShow = num
  },
  _setCurrentFont(state,currentFont){
    state.book.currentFont = currentFont
  },
  _setCurrentBook(state,currentBook){
    state.book.currentBook = currentBook
  },
  _setCurrentFamily(state,currentFamily){
    state.book.currentFamily = currentFamily
  },
  _setFamilyPop(state,isFamilyPopShow){
    state.book.isFamilyPopShow = isFamilyPopShow
  },
  _setCurrentTheme(state,currentTheme){
    state.book.currentTheme = currentTheme
  },
  _setBookLoaded(state,isBookLoaded){
    state.book.isBookLoaded = isBookLoaded
  },
  _setBookProgress(state,progress){
    state.book.progress = progress
  },
  _setBookSection(state,section){
    state.book.section = section
  },    
  _setSectionName(state,currentSectionName){
    state.book.currentSectionName = currentSectionName
  },      
  _setLocations(state,locations){
    state.book.locations = locations
  },
  _setLoading(state,isLoadingShow){
    state.book.isLoadingShow = isLoadingShow
  },
  _setReadTime(state,readTime){
    state.book.readTime = readTime
  },
  _setSlideBookInfo(state,slideBookInfo){
    state.book.slideBookInfo = slideBookInfo
  }
}
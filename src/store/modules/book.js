export default {
  state:{
    fileName:'',
    isBarShow: false,
    isSettingShow: -1,    // -1 不显示，0显示目录，1显示进度，2显示主题，3显示字号
    isFamilyPopShow: false,
    currentFont: 14,
    currentFamily:'Default',
    currentTheme: 'Default',
    currentBook: null,
    isBookLoaded: false,     // 记录书本是否加载完毕的状态
    progress: 0,             // 书本阅读进度
    section: 0,              // 书本章节
    currentSectionName: '',
    locations: null,            // 用于操作书籍页面跳转的对象
    isLoadingShow: false
  },
  mutations:{
    _setFileName(state,fileName){
      state.fileName = fileName
    },
    _setBarShow(state,isShow){
      state.isBarShow = isShow
    },
    _setSetting(state,num){
      state.isSettingShow = num
    },
    _setCurrentFont(state,currentFont){
      state.currentFont = currentFont
    },
    _setCurrentBook(state,currentBook){
      state.currentBook = currentBook
    },
    _setCurrentFamily(state,currentFamily){
      state.currentFamily = currentFamily
    },
    _setFamilyPop(state,isFamilyPopShow){
      state.isFamilyPopShow = isFamilyPopShow
    },
    _setCurrentTheme(state,currentTheme){
      state.currentTheme = currentTheme
    },
    _setBookLoaded(state,isBookLoaded){
      state.isBookLoaded = isBookLoaded
    },
    _setBookProgress(state,progress){
      state.progress = progress
    },
    _setBookSection(state,section){
      state.section = section
    },    
    _setSectionName(state,currentSectionName){
      state.currentSectionName = currentSectionName
    },      
    _setLocations(state,locations){
      state.locations = locations
    },
    _setLoading(state,isLoadingShow){
      state.isLoadingShow = isLoadingShow
    }
  },
  actions:{

  }
}
export default {
  state:{
    fileName:'',
    isBarShow: false,
    isSettingShow: -1,    // -1 不显示，0显示目录，1显示进度，2显示主题，3显示字号
    isFamilyPopShow: false,
    currentFont: 14,
    currentFamily:'Default',
    currentBook: null
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
    }
  },
  actions:{

  }
}
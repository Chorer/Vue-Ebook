export default {
  setFileName({ commit,state },fileName){
    return commit('_setFileName',fileName)
  },
  setBarShow({ commit,state },isShow){
    return commit('_setBarShow',isShow)
  },
  setSetting({ commit,state },num){
    return commit('_setSetting',num)
  },
  setCurrentFont({ commit,state },currentFont){
    return commit('_setCurrentFont',currentFont)
  },
  setCurrentBook({ commit,state },currentBook){
    return commit('_setCurrentBook',currentBook)
  },
  setCurrentFamily({ commit,state },currentFamily){
    return commit('_setCurrentFamily',currentFamily)
  },
  setFamilyPop({ commit,state },isFamilyPopShow){
    return commit('_setFamilyPop',isFamilyPopShow)
  },
  setCurrentTheme({ commit,state },currentTheme){
    return commit('_setCurrentTheme',currentTheme)
  },
  setBookLoaded({ commit,state },isBookLoaded){
    return commit('_setBookLoaded',isBookLoaded)
  },
  setBookProgress({ commit,state },progress){
    return commit('_setBookProgress',progress)
  },
  setBookSection({ commit,state },section){
    return commit('_setBookSection',section)
  },  
  setSectionName({ commit,state }, currentSectionName){
    return commit('_setSectionName', currentSectionName)
  },    
  setLocations({ commit,state },locations){
    return commit('_setLocations',locations)
  },
  setLoading({ commit,state },isLoadingShow){
    return commit('_setLoading',isLoadingShow)
  },
  setReadTime({ commit,state },readTime){
    return commit('_setReadTime',readTime)
  }
}
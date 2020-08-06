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
  }
}
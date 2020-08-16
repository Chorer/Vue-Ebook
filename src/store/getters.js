export default {
  fileName: state => state.book.fileName,
  isBarShow: state => state.book.isBarShow,
  isSettingShow: state => state.book.isSettingShow,
  currentFont: state => state.book.currentFont,
  currentFamily: state => state.book.currentFamily,
  currentBook: state => state.book.currentBook,
  isFamilyPopShow: state => state.book.isFamilyPopShow,
  currentTheme: state => state.book.currentTheme,
  isBookLoaded: state => state.book.isBookLoaded,
  progress: state => state.book.progress,
  section: state => state.book.section,  
  currentSectionName: state => state.book.currentSectionName,
  locations: state => state.book.locations,
  isLoadingShow: state => state.book.isLoadingShow,
  readTime: state => state.book.readTime,
  slideBookInfo: state => state.book.slideBookInfo
}
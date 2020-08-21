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
    readTime: 0,          // 累计阅读时长（分钟）
    section: 0,              // 书本章节
    currentSectionName: '',
    locations: null,            // 用于操作书籍页面跳转的对象
    isLoadingShow: false,
    slideBookInfo: null,
    toc: []
  },
  mutations:{
  
  },
  actions:{

  }
}
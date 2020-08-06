import { mapGetters,mapActions } from 'vuex'

export const bookMixin = {
  computed:{
    ...mapGetters(
      [
        'fileName',
        'isBarShow',
        'isSettingShow',
        'currentFont',
        'currentFamily',
        'currentBook',
        'isFamilyPopShow'
      ])
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
        'setFamilyPop'
      ])
  }
}
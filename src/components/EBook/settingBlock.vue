<template>
  <transition name="slide-up">
    <div v-show="isBarShow && isSettingShow >= 0">
      <setting-list v-show="isSettingShow === 0"></setting-list>
      <setting-progress v-show="isSettingShow === 1"></setting-progress>
      <setting-theme v-show="isSettingShow === 2"></setting-theme>
      <setting-font v-show="isSettingShow === 3"></setting-font>
    </div>
  </transition>  
</template>

<script>
import settingFont from 'components/EBook/settingFont'
import settingList from 'components/EBook/settingList'
import settingTheme from 'components/EBook/settingTheme'
import settingProgress from 'components/EBook/settingProgress'

import { bookMixin } from 'utils/mixin'

export default {
  mixins:[bookMixin],
  components:{
    settingFont,
    settingList,
    settingTheme,
    settingProgress
  }
}
</script>

<style scoped lang="scss">
  .slide-up-enter,.slide-up-leave-to {
    transform: translate(0,rem(150));
  }
  .slide-up-enter-to,.slide-up-leave {
    transform: translate(0,0);
  }
  .slide-up-enter-active,.slide-up-leave-active {
    transition: all .2s linear;
  }
</style>
<template>
    <div class="setting-block">
      <setting-slide></setting-slide>
      <setting-progress></setting-progress>
      <setting-theme></setting-theme>
      <setting-font></setting-font>
    </div>
</template>

<script>
import settingFont from 'components/EBook/settingFont'
import settingSlide from 'components/EBook/settingSlide'
import settingTheme from 'components/EBook/settingTheme'
import settingProgress from 'components/EBook/settingProgress'

import { bookMixin } from 'utils/mixin'

export default {
  mixins:[bookMixin],
  components:{
    settingFont,
    settingSlide,
    settingTheme,
    settingProgress
  }
}
</script>

<style scoped lang="scss">

</style>
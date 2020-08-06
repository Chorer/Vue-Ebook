<template>
  <div>
    <setting-block></setting-block>
    <transition name="slide-up">
      <div class="menu-bar"  
        :class="{'hide-bar-shadow':isSettingShow >= 0 || !isBarShow}"
        v-show="isBarShow" 
        @click="toggleSetting" >
        <div class="icon-wrapper">
          <span class="icon-menu"></span>
        </div>
        <div class="icon-wrapper">
         <span class="icon-progress"></span>
        </div>
        <div class="icon-wrapper">
         <span class="icon-bright"></span>
        </div>
        <div class="icon-wrapper">
         <span class="icon-A"></span>
       </div>
      </div>
    </transition>  
  </div>
</template>

<script>
import { bookMixin } from 'utils/mixin'

import settingBlock from 'components/EBook/settingBlock'

export default {
  mixins:[bookMixin],
  components:{
    settingBlock
  },
  methods:{
    toggleSetting(event){
      switch(event.target.className){
        case 'icon-menu': this.setSetting(0); break
        case 'icon-progress': this.setSetting(1); break
        case 'icon-bright': this.setSetting(2); break
        case 'icon-A': this.setSetting(3); break
        default: 
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .menu-bar.hide-bar-shadow {
    box-shadow: none;
  }
  .menu-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: rem(60);
    z-index: 100;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: rem(24);
    background-color: #fff;
    box-shadow: 0 rem(-8) rem(8) rgba(0,0,0,.15);
    .icon-wrapper{
      span {
        padding:rem(10)
      }
    }
  }
  .slide-up-enter,.slide-up-leave-to {
    transform: translate(0,rem(150));
  }
  .slide-up-enter-to,.slide-up-leave {
    transform: translate(0,0);
  }
  .slide-up-enter-active,.slide-up-leave-active {
    transition: all .3s linear;
  }
</style>
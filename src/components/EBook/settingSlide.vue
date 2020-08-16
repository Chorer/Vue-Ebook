<template>
  <transition name="fade">
    <div class="setting-slide" v-show="isBarShow && isSettingShow === 0">
      <transition name="slide-right">
        <div class="slide-container" v-if="isSettingShow === 0">
          <div class="slide-content">
            <component :is="currentTab == 1 ? list : mark"></component>
          </div>
          <div class="slide-tabbar">
            <div class="slide-tabbar-item"
                :class="{'selected':currentTab == 1}"
                @click="toggleTab(1)"
            >{{$t("book.navigation")}}</div>
            <div class="slide-tabbar-item"
                :class="{'selected':currentTab == 2}"
                @click="toggleTab(2)"            
            >{{$t("book.bookmark")}}</div>
          </div>
        </div>
      </transition>
      <div class="slide-bg" @click="hideSlide"></div>
    </div>
  </transition>    
</template>

<script>
import { bookMixin } from 'utils/mixin'

import settingSlideList from 'components/EBook/settingSlideList'
import settingSlideMark from 'components/EBook/settingSlideMark'

export default {
  mixins: [bookMixin],
  data(){
    return {
      currentTab: 1,
      list: settingSlideList,
      mark: settingSlideMark
    }
  },
  methods:{
    hideSlide(){
      this.setSetting(-1)
      this.setBarShow(false)
    },
    toggleTab(index){
      this.currentTab = index
    }
  }
}
</script>

<style scoped lang="scss">
  .setting-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 401;
    display: flex;
    background: rgba(120, 120, 120, .7);
    .slide-container {
      flex: 85%;
      width: 85%;
      height: 100%;
      background-color: #cecece;
      display: flex;
      flex-direction: column;
      .slide-content {
        flex: 1;
        overflow: hidden;
        width: 100%;
      }
      .slide-tabbar {
        flex: 0 0 rem(48);
        width: 100%;   
        height: rem(48);
        display: flex;
        .slide-tabbar-item {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: rem(14);
          &.selected {
            color: #346cb9;
            font-weight: bold;
          }
        }
      }
    }
    .slide-bg {
      flex: 15%;
      width: 15%;
      height: 100%;
    }
  }
  .fade-enter,.fade-leave-to {
    opacity: 0;
  } 
  .fade-enter-to,.fade-leave {
    opacity: 1;
  }
  .fade-enter-active,.fade-leave-active {
    transition: all .3s linear;
  }
  .slide-right-enter-active,.slide-right-leave-active {
    transition: all .3s linear;
  }  
  .slide-right-enter,.slide-right-leave-to {
    transform: translate3d(-100%,0,0);
  }
  .slide-right-enter-to,.slide-right-leave {
    transform: translate3d(0,0,0);
    opacity: 1;
  }
</style>
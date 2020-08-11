<template>
  <transition name="slide-down">
    <div class="title-bar" v-show="isBarShow">
        <div class="left">
          <span class="icon-back iconfont"></span>
        </div>
        <div class="right">
          <div class="icon-wrapper">
            <span class="icon-shelf iconfont"></span>
          </div>
          <div class="icon-wrapper">
            <span class="icon-cart iconfont"></span>
          </div>
          <div class="icon-wrapper">
            <span class="icon-more iconfont"></span>
          </div>
        </div>
    </div>        
  </transition>
</template>

<script>
import { bookMixin } from 'utils/mixin'

export default {
  mixins:[bookMixin],
}
</script>

<style scoped lang="scss">
  .title-bar {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 400;
    display: flex;
    width: 100%;
    height: rem(60);
    background-color: #fff;
    box-shadow: 0 rem(8) rem(8) rgba(0,0,0,.15);
    .left {
      flex: 0 0 rem(60);
      display: flex;
      justify-content: center;
      align-items: center;
      .icon-back {
        font-size: rem(26);
      }
    }
    .right {
      flex:1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .icon-wrapper {
        padding: rem(12);
        .iconfont {
          font-size: rem(24);
        }
      }
    }
  }
  .slide-down-enter,.slide-down-leave-to {
    transform: translate(0,-100%);
  }
  .slide-down-enter-active,.slide-down-leave-active {
    transition: all .3s linear;
  }
  .slide-down-enter-to,.slide-down-leave  {
    transform: translate(0,0);
  }
</style>
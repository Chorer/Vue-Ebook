<template>
  <transition name="pop-slide-up">
    <div class="setting-font-family-pop">
      <div class="pop-title">
        <div class="pop-title-icon" @click="hidePop">
          <span class="icon-down2 iconfont"></span>
        </div>
        <div class="pop-title-text">
          <span>{{$t("book.selectFont")}}</span>
        </div>
      </div>
      <div class="pop-list">
        <div class="pop-list-item" 
          v-for="item in fontFamilyList" 
          :key="item.font"
          @click="setFontFamily(item.font)"
          >
          <div class="list-item-text" :class="{'selected':item.font == currentFamily}">{{item.font}}</div>
          <div class="list-item-icon" v-show="item.font == currentFamily">
            <span class="icon-check iconfont"></span>
          </div>
        </div>
      </div>
    </div>
  </transition>  
</template>

<script>
import { bookMixin } from 'utils/mixin'
import { fontFamilyList } from 'utils/book'
import { saveFontFamily,getFontFamily } from 'utils/localStorage'

export default {
  mixins:[bookMixin],
  data(){
    return {
      fontFamilyList
    }
  },
  methods:{
    hidePop(){
      this.setFamilyPop(false)
    },
    setFontFamily(font){
      // 1.视图渲染
      this.setCurrentFamily(font)
      saveFontFamily(this.fileName,font)
      // 2.实际修改字体
      if(font == 'Default'){
        font = 'Times New Roman'
      }
      this.currentBook.rendition.themes.font(font)
    }
  }
}
</script>

<style scoped lang="scss">
  .setting-font-family-pop {
    position: absolute;
    z-index: 300;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 rem(-8) rem(8) rgba(0,0,0,.15);
    .pop-title{
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: rem(1) solid #ccc;
      padding: rem(12);
      position: relative;
      .pop-title-icon {
        font-size: rem(20);
        position: absolute;
        left: rem(14);
      }
      .pop-title-text {
        font-size: rem(15);
      }
    }
    .pop-list{
      .pop-list-item {
        display: flex;
        justify-content: space-between;
        padding: rem(10) rem(16);
        font-size: rem(14);
        .list-item-text {
          &.selected {
            font-weight: bold;
            color: #346cb9;
          }
        }
        .list-item-icon {
          .icon-check{
            font-weight: bold;
            color: #346cb9;
          }
        }
      }
    }
  }
  .pop-slide-up-enter,.pop-slide-up-leave-to {
    transform: translate(0,100%);
    opacity: 0;
  }
  .pop-slide-up-enter-to,.pop-slide-up-leave {
    transform: translate(0,0);
    opacity: 1;
  }
  .pop-slide-up-enter-active,.pop-slide-up-leave-active {
    transition: all .2s linear;
  }
</style>
<template>
  <div class="setting-font">
    <div class="setting-font-size">
      <div class="preview" :style="{fontSize: miniFont + 'px'}">
        <span>A</span>
      </div>
      <div class="select">
        <div class="select-wrapper" 
          v-for="item in fontList" 
          :key="item.fontSize"
          @click="changeFont(item.fontSize)"
          >
          <div class="line"></div>
          <div class="dot">
            <div class="big-dot" v-show="currentFont == item.fontSize">
              <div class="small-dot"></div>
            </div>
          </div>
          <div class="line"></div>
        </div>
      </div>
      <div class="preview" :style="{fontSize: maxFont + 'px'}">
        <span>A</span>
      </div>
    </div>
    <div class="setting-font-family" @click="changeFamilyPopup">
      <div class="family-text">
        <span>{{currentFamily}}</span>
      </div>
      <div class="famliy-icon">
        <span class="icon-forward"></span>
      </div>
    </div>
    <setting-family v-show="isFamilyPopShow"></setting-family>
  </div>  
</template>

<script>
import settingFamily from 'components/EBook/settingFamily'

import { bookMixin } from 'utils/mixin'

export default {
  mixins:[bookMixin],
  components:{
    settingFamily
  },
  data(){
    return {
      fontList:[
        {fontSize: 12},
        {fontSize: 14},
        {fontSize: 16},
        {fontSize: 18},
        {fontSize: 20},
        {fontSize: 22},
        {fontSize: 24}
      ]
    }
  },
  computed:{
    miniFont(){
      return this.fontList[0].fontSize
    },
    maxFont(){
      return this.fontList[this.fontList.length - 1].fontSize
    }
  },
  methods:{
    changeFont(fontSize){
      // 改变状态，渲染视图
      this.setCurrentFont(fontSize)
      // 设置实际字号
      this.currentBook.rendition.themes.fontSize(fontSize)
    },
    changeFamilyPopup(){
      this.setFamilyPop(true)
    }
  }
}
</script>

<style scoped lang="scss">
  .setting-font{
    position: absolute;
    left: 0;
    bottom: rem(60);
    width: 100%;
    height: rem(90);
    background-color: #fff;
    z-index: 100;
    display: flex;
    flex-direction: column;
    box-shadow: 0 rem(-8) rem(8) rgba(0,0,0,.15);
    .setting-font-size{
      flex: 2;
      display: flex;
      .preview{
        flex: 0 0 rem(40);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .select {
        flex: 1;
        display: flex;
        .select-wrapper {
          flex: 1;
          display: flex;
          align-items: center;
          .line{
            height: 0;
            flex: 1;
            border-top: rem(1) solid #ccc;
          }
          .dot{
            width: 0;
            height: rem(8);
            border-left: rem(1) solid #ccc;
            position: relative;
            .big-dot{
              box-shadow: 0 rem(4) rem(4) rgba(0, 0, 0, .15);
              width: rem(20);
              height: rem(20);
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%,-50%);
              background-color: #fff;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              .small-dot {
                width: rem(5);
                height: rem(5);
                border-radius: 50%;
                background-color: black;
              }
            }
          }
          &:first-child {
            .line {
              &:first-child {
                border-top: none;
              }
            }
          }
          &:last-child {
            .line {
              &:last-child {
                border-top: none;
              }
            }
          }
        }
      }
    }
    .setting-font-family {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: rem(15);
      .family-text {
        padding: rem(5);
      }
    }

  }
</style>
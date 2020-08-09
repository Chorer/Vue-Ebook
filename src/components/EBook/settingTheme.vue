<template>
  <div class="setting-theme">
    <div class="setting-theme-item" v-for="(item,index) in _themeList" :key="item.name" @click="changeTheme(index)">
      <div class="theme-review"
        :style="{ background: item.style.body.background }"
        :class="{'select': item.name == currentTheme}"
      ></div>
      <div class="theme-name"
        :class="{'select': item.name == currentTheme}"
      >
        {{item.alias}}
      </div>
    </div>
  </div>
</template>

<script>
import { bookMixin } from 'utils/mixin'
import { saveTheme,getTheme } from 'utils/localStorage'

export default {
  mixins:[bookMixin],
  methods:{
    changeTheme(index){
      const name = this._themeList[index].name
      // 1. 修改全局状态
      this.setCurrentTheme(name)
      // 2. 渲染阅读器样式
      // 该方法暂时有bug，先用override应急：this.currentBook.rendition.themes.select(name)
      const bodyObject = this._themeList[index].style.body
      for(let key in bodyObject){
        this.currentBook.rendition.themes.override(key,bodyObject[key],true)
      }
      // 3. 渲染全局样式
      this.injectCssByTheme(name)
      // 4. 写入本地存储
      saveTheme(this.fileName,name)
    }
  }
}
</script>

<style scope lang="scss">
  .setting-theme {
    position: absolute;
    left: 0;
    bottom: rem(60);
    width: 100%;
    height: rem(90);
    background-color: #fff;
    z-index: 100;
    display: flex;
    box-shadow: 0 rem(-8) rem(8) rgba(0,0,0,.15);
    .setting-theme-item{
      flex: 1;
      padding: rem(5);
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      .theme-review{
        flex: 1;
        border: px2rem(1) solid #ccc;
        box-sizing: border-box;
        border: none;
        &.select {
          box-shadow: 0 rem(4) rem(6) 0 rgba(0, 0, 0, .1);
          border: rem(1.5) solid #346cb9;
        }
      }
      .theme-name{
        flex: 0 0 rem(20);
        margin-top: rem(2);
        font-size: rem(14);
        text-align: center;
        &.select {
          color: #346cb9;
        }
      }
    }
  }
</style>
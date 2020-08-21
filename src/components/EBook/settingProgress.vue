<template>
  <transition name="slide-up">
    <div class="setting-progress" v-show="isBarShow && isSettingShow === 1">
      <div class="icon-wrapper" @click="prevSection">
        <span class="icon-back iconfont"></span>
      </div>
      <div class="progress-wrapper">
        <div class="progress-readtime">
          <span class="cal-time">{{getReadTime}}</span>
          <span class="icon-forward iconfont"></span>
        </div>
        <div class="progress-slider">
          <input type="range"
            min="0"
            max="100"
            step="1"
            ref="slider"
            :disabled="!isBookLoaded"
            :value="progress"
            @input="onDragSlider"
            @change="onUpSlider"
          >
        </div>
        <div class="progress-ratio">
          <span class="section-name">{{currentSectionName}}</span>
          <span class="section-percentage">{{isBookLoaded ? '(' + progress + '%)' : '加载中…'}}</span>
        </div>
      </div>
      <div class="icon-wrapper" @click="nextSection">
        <span class="icon-forward iconfont"></span>
      </div>
    </div>
  </transition>  
</template>

<script>
 /* eslint-disable */
import { bookMixin } from 'utils/mixin'
import { 
    saveProgress,
    saveTime,
    getTime 
  } from 'utils/localStorage'
import loadingModal from 'components/EBook/loadingModal'

export default {
  mixins:[bookMixin],
  methods:{
    // 拖拽时，修改progress状态，触发监听后修改背景颜色
    onDragSlider(event){
      // 这里也可以一边拖拽一边实时渲染，但比较损耗性能，所以结束拖拽后再渲染
      const currentValue = event.target.value
      this.setBookProgress(currentValue)
      this.$refs.slider.style.backgroundSize = `${currentValue}% 100%`
    },
    // 结束拖拽时，跳到对应页面
    onUpSlider(event){
      // 跳到对应页面
      this.jumpToPage(event.target.value)
      // 同步 section 的值
    },
    // 上一章节
    prevSection(){
      if(this.isBookLoaded && this.section > 0){
        // 修改section
        this.setBookSection(this.section - 1).then(() => {
          // 获取对应的章节对象
          const sectionInfo = this.currentBook.section(this.section)
          if(sectionInfo && sectionInfo.href){
            this.jumpToSection(sectionInfo.href)
          }
        })
      }
    },
    // 下一章节
    nextSection(){
      if(this.isBookLoaded && this.section < this.currentBook.spine.length - 1){
        // 修改section
        this.setBookSection(this.section + 1).then(() => {
          // 获取对应的章节对象
          const sectionInfo = this.currentBook.section(this.section)
          if(sectionInfo && sectionInfo.href){
            this.jumpToSection(sectionInfo.href)
          }
        })
      }
    },
  },
  watch:{
    // 监听progress改变，同步进度条样式
    progress(newVal,oldVal) {
      if(newVal){
        this.$refs.slider.style.backgroundSize = `${newVal}% 100%`
      }
    },
    // 监听section改变，同步章节标题
    section(newVal,oldVal) {
      this.syncSectionName(newVal)    
    }
  }
}
</script>

<style scoped lang="scss">
  .setting-progress {
    position: absolute;
    left: 0;
    bottom: rem(60);
    width: 100%;
    height: rem(90);
    background-color: #fff;
    z-index: 100;
    display: flex;
    align-items: center;
    box-shadow: 0 rem(-8) rem(8) rgba(0,0,0,.15);    
    .icon-wrapper {
      flex: 0 0 rem(40);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      .icon-back,.icon-forward {
        font-size: rem(20);
      }
    }
    .progress-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: rem(14);
      .progress-readtime {
        margin-bottom: rem(-8);
        .cal-time {
          vertical-align: text-top;
        }
      }
      .progress-slider {
        margin: rem(16) 0 rem(22) 0;
        width: 100%;
        display: flex;
        align-items: center;
        input {
          -webkit-appearance: none;
          width: 100%;
          height: rem(2);
          &:focus {
            outline: none;
          }
          &::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: rem(20);
            height: rem(20);
            border-radius: 50%;
            background: #ceced0;
            box-shadow: 0 rem(4) rem(6) 0 rgba(0, 0, 0, .15);
            border: none;
          }
        }
      }
      .progress-ratio {
        position: absolute;
        left: 0;
        bottom: rem(5);
        padding: 0 rem(15);
        box-sizing: border-box;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .section-name {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          display: inline-block;
        }
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
    transition: all .2s linear;
  }     
</style>
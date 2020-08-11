<template>
  <div class="setting-progress">
    <div class="icon-wrapper">
      <span class="icon-back iconfont"></span>
    </div>
    <div class="progress-wrapper">
      <div class="progress-readtime">
        <span>读了3分钟</span>
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
        {{isBookLoaded ? progress + '%' : '加载中…'}}
      </div>
    </div>
    <div class="icon-wrapper">
      <span class="icon-forward iconfont"></span>
    </div>

  </div>
</template>

<script>
import { bookMixin } from 'utils/mixin'


export default {
  mixins:[bookMixin],
  methods:{
    // 拖拽时，修改progress状态，触发监听后修改背景颜色
    onDragSlider(event){
      // 这里也可以一边拖拽一边实时渲染，但比较损耗性能，所以结束拖拽后再渲染
      const currentValue = event.target.value
      this.setBookProgress(currentValue)
    },
    // 结束拖拽时，跳到对应页面
    onUpSlider(event){
      this.jumpToPage(event.target.value)
    },
  },
  watch:{
    progress(newVal,oldVal) {
      this.$refs.slider.style.backgroundSize = `${newVal}% 100%`
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
      .progress-slider {
        margin: rem(16) 0 rem(22) 0;
        width: 100%;
        display: flex;
        align-items: center;
        input {
          -webkit-appearance: none;
          width: 100%;
          height: rem(2);
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
    }
  }
</style>
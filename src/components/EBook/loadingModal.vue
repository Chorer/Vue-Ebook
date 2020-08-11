<template>
  <div class="loading-modal-mask" v-show="isLoadingShow">
    <div class="modal">
      <div class="icon-wrapper">
        <span class="icon-loading1 iconfont"></span>
      </div>
      <div class="remind">加载中…</div>
    </div>
  </div>
</template>

<script>
import { bookMixin } from 'utils/mixin'

export default {
  mixins:[bookMixin]
}
</script>

<style scoped lang="scss">
  .loading-modal-mask {
    position: fixed;
    z-index: 10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,.3);
    display: flex;
    justify-content: center;
    align-items: center;
    .modal {
      width: rem(120);
      height: rem(110);
      border-radius: rem(4);
      background-color: rgba(95,95,95);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon-wrapper {
        margin-bottom: rem(18);
        .icon-loading1 {
          font-size: rem(36);
          color: #e9e9e9;
          display: inline-block;
          animation: rotate 2s linear infinite;
        }
        @keyframes rotate {
          from { 
            transform: rotate(0deg); 
          }
          to { 
            transform: rotate(360deg); 
          }
        }
      }
      .remind {
        font-size: rem(14);
        color: #e9e9e9;
      }
    }
  }
</style>
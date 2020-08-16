<template>
  <div class="loading-modal-container" v-show="isLoadingShow">
    <common-mask class="loading-modal-mask">
      <div class="modal">
        <div class="icon-wrapper">
          <span class="icon-loading1 iconfont"></span>
        </div>
        <div class="remind">加载中…</div>
      </div>
    </common-mask>
  </div>
</template>

<script>
import { bookMixin } from 'utils/mixin'
import commonMask from 'components/common/commonMask'

export default {
  mixins:[bookMixin],
  components:{
    commonMask
  }
}
</script>

<style scoped lang="scss">
  .loading-modal-container {
    .loading-modal-mask {
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
  }
</style>
<template>
  <div class="setting-slide-list">
    <div class="list-search">
      <div class="search-input-wrapper" @click="showSearchPage">
        <div class="search-icon">
          <span class="iconfont icon-search"></span>
        </div>
        <div class="search-input">
          <input 
            type="text"
            :placeholder="$t('book.searchHint')"  
          >
        </div>
      </div>
      <div class="search-cancel-wrapper" @click="hideSearchPage" :class="{'active':isSearchShow}">
        <span>{{$t("book.cancel")}}</span>
      </div>     
    </div>
    <div class="list-panel">
      <div class="list-panel-info">
        <div class="cover-info">
          <img class="cover-info-img" :src="slideBookInfo.coverUrl" >
        </div>
        <div class="writer-info">
          <div class="writer-info-title">{{slideBookInfo.title}}</div>
          <div class="writer-info-author">{{slideBookInfo.creator}}</div>
        </div>
        <div class="read-info">
          <div class="read-info-progress">
            <span>{{progress}}%</span>
            <span>{{$t('book.haveRead2')}}</span>
          </div>
          <div class="read-info-time">
            <span>{{getReadTime}}</span>
          </div>
        </div>
      </div>
      <div class="list-panel-toc"></div>
    </div>
  </div>
</template>

<script>
import { bookMixin } from 'utils/mixin'

export default {
  mixins: [bookMixin],
  data(){
    return {
      isSearchShow: false
    }
  },
  methods:{
    showSearchPage(){
      this.isSearchShow = true
    },
    hideSearchPage(){
      this.isSearchShow = false
    }
  }
}
</script>

<style scoped lang="scss">
  .setting-slide-list {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .list-search {
      width: 100%;
      flex: 0 0 rem(30);
      margin: rem(20) 0;
      padding: 0 rem(14);
      box-sizing: border-box;
      display: flex;
      .search-input-wrapper {
        flex: 1;
        display: flex;
        border: 1px solid #919191;
        .search-icon {
          flex: 0 0 rem(30);
          display: flex;
          justify-content: center;
          align-items: center;
          .icon-search {
            font-size: rem(14);
          }
        }
        .search-input {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          input {
            width: 100%;
            background-color: transparent;
            border: none;
            height: rem(30);
            font-size: rem(14);
            &:focus {
              outline: none;
            }
          }
        }
      }
      .search-cancel-wrapper {
        width: 0;
        overflow:hidden;
        white-space: nowrap;
        display: flex;
        font-size: rem(14);
        color: #346cb9;
        justify-content: center;
        align-items: center;
        transition: width .2s linear;
        &.active {
          width: rem(40);
          box-sizing: border-box;
          margin-left: rem(14);
        }
      }      
    }
    .list-panel {
      width: 100%;
      flex: 1;
      .list-panel-info {
        display: flex;
        padding: rem(8) rem(14);
        .cover-info {
          flex: 0 0 rem(45);
          display: flex;
          align-items: center;
          .cover-info-img {
            width: rem(45);
            height: rem(60);
          }
        }
        .writer-info {
          flex: 1;
          padding: 0 rem(8);
          width: rem(160);
          .writer-info-title {
            font-size: rem(14);
            // 375*0.85-28-45-16-60
            width: 100%;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            white-space: normal;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: keep-all;
            line-height: rem(16);
          }
          .writer-info-author {
            font-size: rem(12);
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-top: rem(5);
          }
        }
        .read-info {
          flex: 0 0 rem(70);
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .read-info-progress {
            font-size: rem(14);
          }
          .read-info-time {
            font-size: rem(12);
            margin-top: rem(5);
          }
        }
      }
      .list-panel-toc {

      }
    }
  }  
</style>
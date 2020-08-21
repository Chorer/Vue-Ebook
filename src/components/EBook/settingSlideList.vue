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
      <div class="list-panel-toc">
        <common-scroll :customDown="slideDown" :customUp="slideUp">
          <div class="list-panel-toc-item" 
            v-for="(item,index) in toc" 
            :key="index"
            @click="_jumpToSection(item.href,index)"
          >
            <span 
              class="chapter-name"
              :style="textIndent(item.level)"  
              :class="{'selected': section === index}"
            >{{item.label}}</span>
            <span class="chapter-page">{{index}}</span>
          </div>
        </common-scroll>
      </div>
    </div>
  </div>
</template>

<script>
import commonScroll from 'components/common/commonScroll'

import { bookMixin } from 'utils/mixin'
import { px2rem } from 'utils/common'

export default {
  mixins: [bookMixin],
  components:{
    commonScroll
  },
  data(){
    return {
      isSearchShow: false,
      slideDown:{
        use: false
      },
      slideUp:{
        use: false,
        scrollbar:{
          use : true           
        }
      }
    }
  },
  methods:{
    textIndent(level){
      return {
        textIndent: px2rem(`${level * 10}`) 
      }
    },
    _jumpToSection(href,index){
      // 修改全局 section
      this.setBookSection(index).then(() => {
        return this.jumpToSection(href)
      }).then(() => {
        this.setSetting(-1)
        this.setBarShow(false)
      })
    },
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
            @include ellipse(3);
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
        height: calc(100% - #{rem(76)});
        .mescroll {
          position: fixed;
          width: 85%;
          height: auto;
          top: rem(148);
          bottom: rem(48);
          box-sizing: border-box;
          padding: 0 rem(15);
          .list-panel-toc-item {
            display: flex;
            box-sizing: border-box;
            padding: rem(20) 0;
            font-size: rem(14);
            .chapter-name {
              flex: 1;
              @include ellipse(1);
              &.selected {
                color: #346cb9;
              }
            }
            .chapter-page {

            }
          }
        }
      }
    }
  }  
</style>
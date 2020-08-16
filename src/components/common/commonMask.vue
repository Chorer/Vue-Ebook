<template>
  <div class="mask">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .mask {
    position: fixed;
    z-index: 10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,.3);    
  }
</style>
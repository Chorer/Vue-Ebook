<template>
  <mescroll-vue ref="mescroll" :down="customDown" :up="customUp">
    <slot></slot>
  </mescroll-vue>
</template>

<script>
import MescrollVue from 'mescroll.js/mescroll.vue'

export default {
  components:{
    MescrollVue
  },
  props:{
    customDown: Object,
    customUp: Object
  }
}
</script>

<style scoped>

</style>
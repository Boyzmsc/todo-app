<template>
  <div class = "clearAllContainer" v-on:click = "clearTodo">
      <span class = "clearAllBtn">
        Clear All
      </span>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

// 기존 함수 -> 헬퍼 함수 적용
export default {
  methods: {
    ...mapMutations({
      clearTodo : 'clearAll'
    })
    // clearTodo(){
    //   // this.$emit('clear');
    //   this.$store.commit('clearAll');
    // }
  }
}
</script>

<style scoped>
.clearAllContainer{
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn{
  color:#e20303;
  display: block;
}
</style>
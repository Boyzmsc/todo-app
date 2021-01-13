<template>
  <div class = "inputBox shadow">
      <input type="text" v-model = "newTodoItem" v-on:keyup.enter = "addTodo">
      <!-- <button v-on:click = "addTodo">add</button> -->
      <span class = "addContainer" v-on:click = "addTodo">
        <i class="fas fa-plus addBtn" ></i>
      </span>
  </div>
</template>

<script>
export default {
  data : function(){
    return {
      newTodoItem : ""
    }
  },
  methods: {
    addTodo : function(){
      if (this.newTodoItem !== ''){
        // 상위 컴포넌트로 이벤트 발생
        this.$emit("add",this.newTodoItem);
        this.clearInput();
      }
    },
    // input box 초기화
    clearInput : function(){
      this.newTodoItem = '';
    }
  }
}
</script>

<style scoped>
input:focus{
  outline : none;
}
.inputBox {
  background : white;
  height : 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 1rem;
  float: left;
  height:100%;
  background: none;
  width: 85%;
}
.addContainer{
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: inline-block;
  width: 13%;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
<template>
  <div class = "inputBox shadow">
      <input type="text" v-model = "newTodoItem" v-on:keyup.enter = "addTodo">
      <!-- <button v-on:click = "addTodo">add</button> -->
      <span class = "addContainer" v-on:click = "addTodo">
        <i class="fas fa-plus addBtn" ></i>
      </span>

      <modal v-if="showModal" @close="showModal = false">
        <!--
      you can use custom content here to overwrite
      default content
    -->
        <h3 slot="header">
          경고!
          <i class="fas fa-times closeModalBtn" @click="showModal = false"></i>
        </h3>
        <div slot="body">아무것도 입력하지 않으셨습니다.</div>
      </modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
  data : function(){
    return {
      newTodoItem : "",
      showModal: false
    }
  },
  methods: {
    addTodo : function(){
      if (this.newTodoItem !== ''){
        this.$emit("add",this.newTodoItem);
        this.clearInput();
      }else{
        this.showModal = true;
      }
    },
    // input box 초기화
    clearInput : function(){
      this.newTodoItem = '';
    }
  },
  components: {
    modal : Modal
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
.closeModalBtn{
    color : #42b983;
}

</style>
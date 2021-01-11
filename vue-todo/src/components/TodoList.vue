<template>
  <div>
      <ul>
        <li class = "shadow" v-for = "(item, index) in todoItems" v-bind:key = "item">
          {{item}}
          <span class = "removeBtn" v-on:click = "removeTodo(item, index)">
            <i class="fas fa-trash-alt"></i>
          </span>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      todoItems : []
    }
  },
  created: function(){
    if (localStorage.length > 0){
      for (var i = 0; i < localStorage.length; i++){
        // 웹팩 정보 제외 구문
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          console.log(localStorage.key(i));
          this.todoItems.push(localStorage.key(i));
        }
      }
    }
  },
  methods: {
    removeTodo : function(item, index){
      console.log(item, index);
      localStorage.removeItem(item);
      this.todoItems.splice(index,1);
    }
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-left:0px;
    margin-top : 0;
    text-align: left;
  }
  li{
    display: flex;
    min-height: 50px;
    height:50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .removeBtn{
    margin-left: auto;
    color : #de4343;
  }
  .checkBtn{
    line-height: 45px;
    color: #62acde;
    margin-right:5px
  }
  .checkBtnCompleted{
    color: #b3adad;
  }
  .textCompleted {
    text-decoration: line-through;
    color: #b3adad;
  }
</style>
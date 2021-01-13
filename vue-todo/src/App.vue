<template>
    <div id="app">
        <todo-header></todo-header>
        <todo-input></todo-input>
        <todo-list v-bind:propsdata = "todoItems"></todo-list>
        <todo-footer></todo-footer>
    </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
    data : function(){
        return {
            todoItems : []
        }
    },
    created : function(){
        if (localStorage.length > 0){
            for (var i = 0; i < localStorage.length; i++){
                // 웹팩 정보 제외 구문
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
    },
    components : {
        'todo-header' : TodoHeader,
        'todo-input' : TodoInput,
        'todo-list' : TodoList,
        'todo-footer' : TodoFooter
    }
}
</script>

<style>
body {
    text-align:center;
    background-color: #F6F6F6;
}
input {
    border-style: groove;
    width: 200px;
}

button {
    border-style: groove;
}

.shadow {
    box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}
</style>
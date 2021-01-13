<template>
    <div id="app">
        <todo-header></todo-header>
        <todo-input v-on:add = "addItem"></todo-input>
        <todo-list v-bind:propsdata = "todoItems" v-on:remove = "removeItem" v-on:complete = "completeItem"></todo-list>
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
    },
    methods : {
        addItem : function(itemAdded){
            var obj = {completed : false, item : itemAdded};
            localStorage.setItem(itemAdded, JSON.stringify(obj));
            this.todoItems.push(obj);
        },
        removeItem : function(todoItem, index){
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index,1);
        },
        completeItem : function(todoItem, index){
            this.todoItems[index].completed = !this.todoItems[index].completed
            // 로컬 스트리지의 데이터 갱신 -> 제거 이후 추가
            console.log(todoItem.completed);
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item,JSON.stringify(todoItem));
        }
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
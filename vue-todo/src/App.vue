<template>
    <div id="app">
        <todo-header></todo-header>
        <todo-input v-on:add = "addItem"></todo-input>
        <todo-list v-bind:propsdata = "todoItems" v-on:remove = "removeItem" v-on:complete = "completeItem"></todo-list>
        <todo-footer v-on:clear = "clearAll"></todo-footer>
    </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
    // 중앙 컴포넌트 형식으로 데이터 관리
    data(){
        return {
            todoItems : []
        }
    },
    components : {
        'todo-header' : TodoHeader,
        'todo-input' : TodoInput,
        'todo-list' : TodoList,
        'todo-footer' : TodoFooter
    },
    created(){
        if (localStorage.length > 0){
            for (let i = 0; i < localStorage.length; i++){
                // 웹팩 정보 제외 구문
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
    },
    methods : {
        // 데이터 추가
        addItem(itemAdded){
            const obj = {completed : false, item : itemAdded};
            localStorage.setItem(itemAdded, JSON.stringify(obj));
            this.todoItems.push(obj);
        },
        // 지정 데이터 삭제 (로컬 스토리지, 리스트 배열)
        removeItem(todoItem, index){
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index,1);
        },
        // 지정 데이터 completed 속성 갱신 (로컬 스토리지, 리스트 배열)
        completeItem(todoItem, index){
            this.todoItems[index].completed = !this.todoItems[index].completed
            // 로컬 스트리지의 데이터 갱신 -> 제거 이후 추가
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item,JSON.stringify(todoItem));
        },
        // 데이터 초기화
        clearAll(){
            this.todoItems = [];
            localStorage.clear();
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
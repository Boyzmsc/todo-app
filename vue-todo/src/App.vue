<template>
    <div id="app">
        <todo-header></todo-header>
        <todo-input></todo-input>
        <todo-list></todo-list>
        <todo-footer></todo-footer>
    </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
    components : {
        'todo-header' : TodoHeader,
        'todo-input' : TodoInput,
        'todo-list' : TodoList,
        'todo-footer' : TodoFooter
    }
}
</script>

<style>

</style>
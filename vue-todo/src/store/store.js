import Vue from 'vue'
import Vuex from 'vuex'

// Vue를 사용할 때 전역으로 기능을 추가하고 싶을 때 .use() 사용
Vue.use(Vuex);

// App.vue 내의 created 속성을 가져옴
const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                // 웹팩 정보 제외 구문
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    }
}; 

// Vuex 적용
export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch()
    },
    getters : {
        fetchTodoItems(state){
            return state.todoItems;
        }
    },
    mutations : {
        // 데이터 추가
        addItem(state,itemAdded){
            const obj = {completed : false, item : itemAdded};
            localStorage.setItem(itemAdded, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        // 지정 데이터 삭제 (로컬 스토리지, 리스트 배열)
        removeItem(state,payload){
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index,1);
        },
        // 지정 데이터 completed 속성 갱신 (로컬 스토리지, 리스트 배열)
        completeItem(state,payload){
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
            // 로컬 스트리지의 데이터 갱신 -> 제거 이후 추가
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item,JSON.stringify(payload.todoItem));
        },
        // 데이터 초기화
        clearAll(state){
            state.todoItems = [];
            localStorage.clear();
        }
    }
});
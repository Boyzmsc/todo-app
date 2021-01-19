import Vue from 'vue'
import Vuex from 'vuex'

// Vue를 사용할 때 전역으로 기능을 추가하고 싶을 때 .use() 사용
Vue.use(Vuex);

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

export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch()
    },
    mutations : {
        // 데이터 추가
        addItem(state,itemAdded){
            const obj = {completed : false, item : itemAdded};
            localStorage.setItem(itemAdded, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        // 지정 데이터 삭제 (로컬 스토리지, 리스트 배열)
        removeItem(state,obj){
            localStorage.removeItem(obj.todoItem);
            state.todoItems.splice(obj.index,1);
        },
        // 지정 데이터 completed 속성 갱신 (로컬 스토리지, 리스트 배열)
        completeItem(state,obj){
            state.todoItems[obj.index].completed = !state.todoItems[obj.index].completed
            // 로컬 스트리지의 데이터 갱신 -> 제거 이후 추가
            localStorage.removeItem(obj.todoItem.item);
            localStorage.setItem(obj.todoItem.item,JSON.stringify(obj.todoItem));
        },
        // 데이터 초기화
        clearAll(state){
            state.todoItems = [];
            localStorage.clear();
        }
    }
});
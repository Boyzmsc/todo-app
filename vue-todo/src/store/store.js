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
    }
});
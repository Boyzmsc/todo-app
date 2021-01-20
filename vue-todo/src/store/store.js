import Vue from 'vue'
import Vuex from 'vuex'
// 프로젝트 모듈화 단계
import todoApp from './modules/todoApp'
// 프로젝트 구조화 단계
// import * as getters from './getters'
// import * as mutations from './mutations'

// Vue를 사용할 때 전역으로 기능을 추가하고 싶을 때 .use() 사용
Vue.use(Vuex);

// Vuex 적용 -> 모듈화 적용
export const store = new Vuex.Store({
    modules: {
        todoApp : todoApp
    }
});
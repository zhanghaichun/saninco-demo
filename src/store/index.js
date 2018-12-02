/*
计数器状态管理
 */

import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user.js'
import Types from './mutations-types.js'

Vue.use( Vuex );

const state = {
    count: 10,
    todos: [
        {id: 1, thingName: 'write the text', done: true},
        {id: 2, thingName: 'close the door', done: false},
        {id: 3, thingName: 'see the books', done: true}
    ]
};


const getters = {
    count(state) {

        return state.user.count + 3;
    },

    doneTodosCount(state) {

        return state.todos.filter(todo => todo.done).length;
    },

    // getter 接受的第一个参数是 state， 第二个参数是 getters.
    certainTodo(state, getters) {

        return state.todos[getters.doneTodosCount];
    },

    // 计算属性返回方法， 每次都调用， 不能够缓存结果
    getTodoById: (state) => (id) => {
        return state.todos.filter(todo => todo.id === id);
    },

    rootGettersRefer(state, getters, rootState, rootGetters) {

        return rootGetters;
    },


}


const actions = {

    increment({commit, state}) {
        // console.log(value);
        
        commit(Types.ADD_ONE);
    }
}

const mutations = {
	[Types.ADD_ONE](state) {
		state.count += 10;
	}
}




export default new Vuex.Store({
    state() {
        return {
            count: 10,
            todos: [
                {id: 1, thingName: 'write the text', done: true},
                {id: 2, thingName: 'close the door', done: false},
                {id: 3, thingName: 'see the books', done: true}
            ]
        }
    },
    actions,
    getters,
    mutations,
    modules: {
        user
    }
  
})
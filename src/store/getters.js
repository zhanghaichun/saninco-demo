

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


export default getters;
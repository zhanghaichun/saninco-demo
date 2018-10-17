const state = {
    count: 0
};

const getters = {
    count(state) {
        return state.count;
    }
};

const actions = {
    /*
    vue devtools 可以跟踪 mutations 的状态。
     */
    increment(context, value) {
        // state.count ++;
        /*commit({
            type: 'increment',
            amount: 10
        });
*/

        context.commit('increment', {val: value});
        console.log(context.rootGetters['user/count']);
    },

    decrement({ commit, state }) {

        commit('decrement');
    },

    incrementAsync({ commit, state }) {

        const o = {name: 'box'}

        const p = new Promise((resolve, reject) => {

            setTimeout(resolve, 3000, o);
        });

        p.then( (value) => {
           commit('increment'); 
           console.log(value);
        } ).catch( () => {
            console.log('异步请求失败');
        } );

        
    }


}

const mutations = {
    increment: (state, {val}) => state.count += val,
    decrement: state => state.count --,

    globalIncrement: state => state.count = state.count + 5
}

export default {
    namespaced: true, //
    state,
    getters,
    actions,
    mutations
}
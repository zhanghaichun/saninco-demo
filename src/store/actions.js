

const actions = {

    increment({commit, state}, value) {
        // console.log(value);
        commit('globalIncrement');
    }
}

export default actions;
export const alert = {
    namespaced: true,
    state: {
        type: null,
        message: null,
        show: false,
    },
    actions: {
        success({ commit }, message) {
            commit('success', message);
            
        },
        error({ commit }, message) {
            commit('error', message);
        },
        clear({ commit }) {
            commit('clear');
        }
    },
    mutations: {
        success(state, message) {
            state.type = 'success';
            state.message = message;
            state.show = true;
        },
        error(state, message) {
            state.type = 'danger';
            state.message = message;
            state.show = true;
        },
        clear(state) {
            state.type = null;
            state.message = null;
            state.show = false;
        }
    }
}
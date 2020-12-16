export const auth = {
    namespaced: true,
    state: {
        status: '',
        isSignedIn: false,
        loading: false,

    },
    actions: {
        signin({commit}, obj){
            commit('isLoading');

            console.log(obj.Username);
            console.log(obj.Password);
            if(obj.Username === "tutor" && obj.Password === "aRdCg5$k!"){
                commit('auth_success');
                localStorage.setItem('isSignedIn', true)
                return 1;
            }
            else{
                return 0;
            }
            

        },



        signout(){

        },

    




    },
    mutations: {
        isLoading(state){
            state.loading = true;

        },

        doneLoading (state){
            state.loading = false;
        },

        auth_request (state){
            state.status = 'loading';
        },

        auth_success (state){
            state.isSignedIn = true;
            state.status = 'success';
            
        },

        auth_signout (state){
            state.status = '';
            state.isSignedIn = false;
            state.userId = '';
            state.user = {};
        },





    },
    
    getters: {
        isSignedIn: state => {
            return state.isSignedIn;
        },
    }
}
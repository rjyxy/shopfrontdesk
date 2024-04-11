import { createStore } from 'vuex'

export default createStore( {
    state: {
        /*
        * 定义用户名
        * 定义用户是否登录
        */
        user:sessionStorage.getItem('user'),
            isLogin:sessionStorage.getItem('isLogin')
    },
    getters:{

    },
    mutations: {
        login:function(state,user) {
            /*
            * 修改状态
            * 以及保护用户名和保存用户登录状态
            *
            */
            state.user = user;
            state.isLogin = true;
            sessionStorage.setItem('user',user);
            sessionStorage.setItem('isLogin',true);
        },
            logout:function(state) {
                /*
                * 修改状态
                * 删除用户名和用户登录状态
                */
            state.user = null;
            state.isLogin = false;
            sessionStorage.removeItem('user');
            sessionStorage.removeItem('isLogin');
            },

    },
    actions:{
        loginAction:function(context,user) {
            //提交mutation
            context.commit('login',user);
        },
        logoutAction:function(context) {
            //提交mutation
            context.commit('logout');

        }
    }

})
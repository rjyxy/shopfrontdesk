import { createStore } from 'vuex'

export default createStore( {
    state: {
        /*
        * 定义用户名
        * 定义用户是否登录
        */
        user:sessionStorage.getItem('user'),
        isLogin:sessionStorage.getItem('isLogin'),
        list : sessionStorage.getItem('list')?JSON.parse(sessionStorage.getItem('list')):[{
            img : require("@/assets/images/oppo.jpg"),
            name : "OPPO Reno9 新品拍照游戏手机",
            num : 2,
            unitPrice : 2699,
            isSelect : true
        },{
            img: require("@/assets/images/vivo.jpg"),
            name: "vivo X90 蔡司摄像拍照手机",
            num:  1,
            unitPrice: 3999,
            isSelect:  true
        }]
    },
    getters:{
        length: function (state) {
            return state.list.length
        },
        list: function (state) {
            var payList  = state.list.filter(function (item) {
                if (item.isSelect == true){
                    return item;
                }
            })
            return payList;
        }
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
        getList : function (state,obj) {
            var arr = [];
            state.list.forEach(function (item) {
                arr.push(item.name);
            });
            if (arr.indexOf(obj.goodsInfo.name) == -1){
                obj.goodsInfo.num += obj.number;
                state.list.unshift(obj.goodsInfo);
            }else {
                state.list[arr.indexOf(obj.goodsInfo.name)].num += obj.number;
            }
            sessionStorage.setItem('list',JSON.stringify(state.list));
            //state.list = JSON.parse(sessionStorage.getItem('list)

        },
        removeGoods :function (state,index) {
            state.list.splice(index,1);
            sessionStorage.setItem('list',JSON.stringify(state.list));
        },
        selectGoods: function (state,obj) {
            state.list[obj.index].isSelect = obj.bool;
            sessionStorage.setItem('list',JSON.stringify(state.list));
        },
        selectAll: function (state,bool) {
            for (var i=0;i<state.list.length;i++) {
                state.list[i].isSelect = bool;
            }
            sessionStorage.setItem('list',JSON.stringify(state.list));
        },
        reduce: function (state,index) {
            var goods = state.list[index];
            if (goods.num >=2){
                goods.num--;
            }
            sessionStorage.setItem('list',JSON.stringify(state.list));
        },
        add: function (state,index) {
            var goods = state.list[index];
            goods.num++;
            sessionStorage.setItem('list',JSON.stringify(state.list));
        },
        emptyCar: function (state) {
            state.list.splice(0,state.list.length);
            sessionStorage.setItem('list',JSON.stringify(state.list));
        }
    },
    actions:{
        loginAction:function(context,user) {
            //提交mutation
            context.commit('login',user);
        },
        logoutAction:function(context) {
            //提交mutation
            context.commit('logout');
        },
        getListAction: function (context,obj) {
            context.commit('getList',obj);
        },
        removeGoodsAction: function (context,index) {
            context.commit('removeGoods',index);
        },
        selectGoodsAction: function (context,obj) {
            context.commit('selectGoods',obj);
        },
        selectAllAction: function (context,bool) {
            context.commit('selectAll',bool);
        },
        reduceAction: function (context,index) {
            context.commit('reduce',index);
        },
        addAction: function (context,index) {
            context.commit('add',index);
        },
        emptyCarAction: function (context) {
            context.commit('emptyCar');
        }
    }
})
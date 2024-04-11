import {createRouter, createWebHistory} from 'vue-router'

import LoginHome from "@/views/login/LoginHome.vue";
import RegisterHome from "@/views/register/RegisterHome.vue";
// import TheNav from "@/components/TheNav.vue"
// import IndexHome from "@/views/index/IndexHome.vue";
// import IndexBanner from "@/views/index/IndexBanner.vue";
// import indexActivity from "@/views/index/IndexActivity.vue";
// import indexPhone from "@/views/index/IndexPhone.vue";
// import indexComputer from "@/views/index/IndexComputer.vue";
// import IndexShopMain from "@/views/index/IndexShopMain.vue";
// import theFooter from "@/components/TheFooter.vue";
import IndexHome from "@/views/index/IndexHome.vue";
import TheTop from "@/components/TheTop.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: TheTop,
    },
    {
        path: '/',
        name: 'home',
        component: IndexHome,
    },
    {
        path:'/login',
        name:'login',
        component:LoginHome,
        meta:{
            title:'登录'
        }
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterHome,
        meta: {
            title: '注册'
        }
    },
]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes,
})
router.beforeEach((to,from,next) =>{
        /*路由器发生变化时修改页面title*/
        if (to.meta.title) {
            document.title =to.meta.title
        }
        next()
}
)
export default router
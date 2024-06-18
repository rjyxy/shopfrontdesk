import {createRouter, createWebHistory} from 'vue-router'
import LoginHome from "@/views/login/LoginHome.vue";
import RegisterHome from "@/views/register/RegisterHome.vue";
import IndexHome from "@/views/index/IndexHome.vue";
// import IndexBanner from "@/views/index/IndexBanner.vue";
// import indexActivity from "@/views/index/IndexActivity.vue";
// import indexPhone from "@/views/index/IndexPhone.vue";
// import indexComputer from "@/views/index/IndexComputer.vue";
// import IndexShopMain from "@/views/index/IndexShopMain.vue";
// import theFooter from "@/components/TheFooter.vue";
// import IndexHome from "@/views/index/IndexHome.vue";
// import TheTop from "@/components/TheTop.vue";
// import TheNav from "@/components/TheNav.vue"
// import shopinfoInfo from "@/views/shopinfo/ShopinfoInfo.vue";
// import shopinfoComment from "@/views/shopinfo/ShopinfoComment.vue";
// import ShopinfoBrowse from "@/views/shopinfo/ShopinfoBrowse.vue";
// import ShopinfoDiscount from "@/views/shopinfo/ShopinfoDiscount.vue";
// import ShopinfoIntroduce from "@/views/shopinfo/ShopinfoIntroduce.vue";
// import ShopinfoDetails from "@/views/shopinfo/ShopinfoDetails.vue";
// import shopinfoLike from "@/views/shopinfo/ShopinfoLike.vue";
// import ShopinfoRelated from "@/views/shopinfo/ShopinfoRelated.vue";
import ShopinfoHome from "@/views/shopinfo/ShopinfoHome.vue";
// import ShopcartBottom from "@/views/shopcart/ShopcartBottom.vue";
// import ShopcartCart from "@/views/shopcart/ShopcartCart.vue";
// import ShopCartHome from "@/views/shopcart/ShopCartHome.vue";
// import ShopcartCart from "@/views/shopcart/ShopcartCart.vue";
// import ShopcartBottom from "@/views/shopcart/ShopcartBottom.vue";
// import PayHome from "@/views/pay/PayHome.vue";

const routes = [
    // {   path: '/',
    //     name: 'PayHome',
    //     component: PayHome,
    // },
    // {
    //     path: '/',
    //     name: 'home',
    //     component: ShopcartBottom
    // },
    // {
    //     path: '/',
    //     name: 'home',
    //     component: ShopCartHome
    // },
    // {   path: '/',
    //     name: 'home',
    //     component: ShopCartHome,
    //     meta: {
    //     title: '主页'
    //     }
    // },
    // {
    //     path: '/shopcart',
    //     name: 'ShopcartBottom',
    //     component: ShopcartBottom
    // },
    {
        path: '/shopinfo',
        name: 'shopinfo',
        component: ShopinfoHome,
        meta: {
            title: '商品信息'
        }
    },
    // {
    //     path: '/',
    //     name: 'home',
    //     component: ShopinfoRelated
    // },
    // {
    //     path: '/',
    //     name: 'home',
    //     component: ShopinfoBrowse
    // },
    // {
    //     path: '/',
    //     name: 'home',
    //     component: ShopinfoDiscount
    // },
    // {
    //     path: '/',
    //     name: 'home',
    //     component: ShopinfoIntroduce
    // },
    // {
    //     path: '/',
    //     name: 'home',
    //     component: ShopinfoDetails
    // },
    // {
    //     path: '/',
    //     name: 'home',
    //     component: shopinfoLike
    // },
    // {
    //     path: '/',
    //     name: 'home',
    //     component: shopinfoComment
    // },
    // {
    //     path: '/',
    //     name: 'home',
    //     component: shopinfoInfo
    // },
    // {
    //     path: '/',
    //     name: 'home',
    //     component: TheTop,
    // },
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
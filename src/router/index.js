import VueRouter from 'vue-router';
import Vue from 'vue';
import store from '@/store'
import { Dialog } from 'vant';
import { login } from '@/api/user';
Vue.use(VueRouter)
const routes = [
    {
        path: '/login',
        name: 'login',
        meta: {requireAuth: false},
        component: () => import('@/views/login')
    },
    // {
    //     path: '/register',
    //     name: 'register',
    //     component: () => import('@/views/register')
    // },
    {
        path: '/search',
        name: 'search',
        meta: {requireAuth: false},
        component: () => import('@/views/search')
    },
    {
        path: '/article/:articleId',
        name: 'article',
        meta: {requireAuth: false},
        component: () => import('@/views/article'),
        props: true
    },
    {
        path: '/user/profile',
        name: 'userprofile',
        meta: {requireAuth: true},
        component: () => import('@/views/userprofile'),
        props: true
    },
    {
        path: '/userchat',
        name: 'userchat',
        meta: {requireAuth: true},
        component: () => import('@/views/userchat'),
        props: true
    },
    // {
    //     path: '/usercollect',
    //     name: 'usercollect',
    //     meta: {
    //         requireAuth: true
    //     },
    //     component: () => import('@/views/usercollect'),
    //     props: true
    // },
    // {
    //     path: '/userhistory',
    //     name: 'userhistory',
    //     meta: {
    //         requireAuth: true
    //     },
    //     component: () => import('@/views/usercollect'),
    //     props: true
    // },
    {
        path: '/',
        redirect:'/home',
        meta: {requireAuth: false},
        component: () => import('@/views/layout'),
        children: [{
            path: '/home', //默认子路由
            component: () => import('@/views/home')
        },
        {
            path: '/todolist',
            meta: {requireAuth: false},
            component: () => import('@/views/todolist')
        },
        {
            path: '/weather',
            meta: {requireAuth: false},
            component: () => import('@/views/weather')
        },
        {
            path: '/mine',
            meta: {requireAuth: false},
            component: () => import('@/views/mine')
        }
        ]
    }
]

const router = new VueRouter({
    routes,
})
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        if (store.state.user) {
           return next();
        } else {
            Dialog.confirm({
                title: '提示信息',
                message: '没有登陆，是否去登陆？',
              })
                .then(() => {
                  router.replace({
                    name:"login",
                    query:{
                        redirect: router.currentRoute.fullPath
                    }
                  })
                })
                .catch(() => {
                  next(false)
                });
        }
    } else {
        next();
    }
})
export default router;
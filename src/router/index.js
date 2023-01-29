import VueRouter from 'vue-router';
import Vue from 'vue';
Vue.use(VueRouter)
const routes = [
    {
        path: '/login',
        name: 'Login',
        meta: {
            requireAuth: false
        },
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
        meta: {
            requireAuth: false
        },
        component: () => import('@/views/search')
    },
    {
        path: '/article/:articleId',
        name: 'article',
        meta: {
            requireAuth: false
        },
        component: () => import('@/views/article'),
        props: true
    },
    {
        path: '/user/profile',
        name: 'userprofile',
        meta: {
            requireAuth: true
        },
        component: () => import('@/views/userprofile'),
        props: true
    },
    {
        path: '/userchat',
        name: 'userchat',
        meta: {
            requireAuth: false
        },
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
        meta: {
            requireAuth: false
        },
        component: () => import('@/views/layout'),
        children: [{
            path: '/home', //默认子路由
            component: () => import('@/views/home')
        },
        {
            path: '/todolist',
            meta: {
                requireAuth: false
            },
            component: () => import('@/views/todolist')
        },
        {
            path: '/weather',
            meta: {
                requireAuth: false
            },
            component: () => import('@/views/weather')
        },
        {
            path: '/mine',
            meta: {
                requireAuth: false
            },
            component: () => import('@/views/mine')
        }
        ]
    }
]

const router = new VueRouter({
    routes,
})
export default router;
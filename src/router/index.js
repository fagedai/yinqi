import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/home/content'
        },
        {
            path: '/:pathMatch(.*)',
            component: () => import('@/components/Wrong/index.vue')

        },
        {
            path: "/home",
            component: () => import('@/views/Home/index.vue'),
            children: [
                {
                    path: '/home/content',
                    component: () => import('@/views/Content/index.vue'),
                },
                {
                    path: "/home/about",
                    component: () => import('@/views/About/index.vue'),
                },
                {
                    path: "/home/skills",
                    name: 'skills',
                    component: () => import('@/views/Skills/index.vue'),
                },
                {
                    path: "/home/model",
                    name: 'model',
                    component: () => import('@/views/Model_Library/index.vue'),
                },
                {
                    path: "/home/service",
                    name: 'service',
                    component: () => import('@/views/Service/index.vue'),
                },
                {
                    path: '/home/settings',
                    name: 'settings',
                    component: () => import('@/views/Settings/index.vue'),
                    children: [
                        //重定向，自动跳转到baseMessage
                        {
                            path: '',
                            redirect: '/home/settings/baseMessage'
                        },
                        {
                            path: '/home/settings/baseMessage',
                            name: 'baseMessage',
                            component: () => import('@/views/Settings/components/ReightModule/BaseMessage/index.vue'),
                        },
                        {
                            path: '/home/settings/trade',
                            name: 'trade',
                            component: () => import('@/views/Settings/components/ReightModule/Trade/index.vue'),
                        },
                        {
                            path: '/home/settings/shoppingcart',
                            name: 'shoppingcart',
                            component: () => import('@/views/Settings/components/ReightModule/ShoppingCart/index.vue'),
                        }
                    ]
                }
            ]
        },
    ],
    scrollBehavior() {
        return {
            top: 0
        }
    }
});

export default router
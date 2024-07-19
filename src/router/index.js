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
                    path: "/home/pricing",
                    name: 'pricing',
                    component: () => import('@/views/Pricing/index.vue'),
                },
                {
                    path: "/home/skills",
                    name: 'skills',
                    component: () => import('@/views/Pages/Skills/index.vue'),
                },
                {
                    path: "/home/team",
                    name: 'team',
                    component: () => import('@/views/Pages/TeamMembers/index.vue'),
                },
                {
                    path: "/home/reviews",
                    name: 'reviews',
                    component: () => import('@/views/Pages/Reviews/index.vue'),
                },
                {
                    path: "/home/clients",
                    name: 'clients',
                    component: () => import('@/views/Pages/Clients/index.vue'),
                },
                {
                    path: "/home/single",
                    name: 'single',
                    component: () => import('@/views/Pages/SinglePage/index.vue'),
                },
                {
                    path: "/home/contact",
                    name: 'contact',
                    component: () => import('@/views/Contact/index.vue'),
                },
                {
                    path: "/home/contact",
                    name: 'contact',
                    component: () => import('@/views/Contact/index.vue'),
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
                    component: () => import('@/views/Settings/index.vue')
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
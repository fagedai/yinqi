import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue';
import About from '@/views/AboutView.vue';
import Content from '@/components/Content/index.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/home/content'
        },
        {
            path:'/:pathMatch(.*)',
            component:()=>import('@/components/Wrong/index.vue')

        },
        {
            path: "/home",
            component: Home,
            children: [
                {
                    path: '/home/content',
                    component: Content
                },
                {
                    path: "/home/about",
                    component: About
                },
                {
                    path: "/home/pricing",
                    name:'pricing',
                    component: ()=>import('@/components/Pricing/index.vue'),
                },
                {
                    path: "/home/skills",
                    name:'skills',
                    component: ()=>import('@/components/Pages/Skills/index.vue'),
                },
                {
                    path: "/home/team",
                    name:'team',
                    component: ()=>import('@/components/Pages/TeamMembers/index.vue'),
                },
                {
                    path: "/home/reviews",
                    name:'reviews',
                    component: ()=>import('@/components/Pages/Reviews/index.vue'),
                },
                {
                    path: "/home/clients",
                    name:'clients',
                    component: ()=>import('@/components/Pages/Clients/index.vue'),
                },
                {
                    path: "/home/single",
                    name:'single',
                    component: ()=>import('@/components/Pages/SinglePage/index.vue'),
                },
                {
                    path: "/home/contact",
                    name:'contact',
                    component: ()=>import('@/components/Contact/index.vue'),
                },


            ]
        },
    ],
    scrollBehavior() {
        return {
            top: 0
        }
    }
})

export default router
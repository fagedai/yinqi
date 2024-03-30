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
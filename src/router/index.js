import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/index.vue';
import Login from '@/views/Login/index.vue';
import About from '@/views/About/index.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: Home,
            children: [
                {
                    path: "about",
                    component: About
                }
            ]
        },
        {
            path: "/login",
            component: Login
        }
    ],
    scrollBehavior() {
        return {
            top: 0
        }
    }
})

export default router
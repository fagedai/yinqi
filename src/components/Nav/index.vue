<script setup>
import { ref } from 'vue'

const list = ref([
    { path: '/home/content', name: 'Home|主页' },
    { path: '/home/about', name: 'About|关于本司' },
    { path: '/', name: 'Service|服务' },
    { path: '/', name: 'Model Library|模型库' },
    { path: '/', name: 'Pricing|定价' },
    { path: '/', name: 'PAGES' },
    { path: '/', name: 'Contact|联系' }
])
const drop_list = ref([
    { path: '/', name: 'Skills|技术' },
    { path: '/', name: 'Team Members|团队成员' },
    { path: '/', name: 'Reviews' },
    { path: '/', name: 'Clients' },
    { path: '/', name: 'Single Page' },
])

const curIdx = ref(0);
const actIdx = ref(0);
const menushow = ref(false);
const isIndexActive = (index) => {
    return index === curIdx.value || index === actIdx.value;
};


</script>
<template>
    <div id="nav">
        <div class="container-fluid">
            <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                <router-link to="/" class="navbar-brand">
                    <img src="/src/assets/newLogo.png" alt="Logo">
                </router-link>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav ml-auto">
                        <router-link v-for="(route, index) in list" :key="index" :to="route.path"
                            class="nav-item nav-link" :class="{ active: isIndexActive(index) }"
                            @mouseenter="curIdx = index" @mouseout="curIdx = -1" @click="actIdx = index">
                            <span v-if="route.name !== 'PAGES'">{{ route.name }}</span>
                            <div v-else class="dropdown dropdown-toggle" @mouseenter="menushow = true"
                                @mouseleave="menushow = false">
                                <span>{{ route.name }}</span>
                                <div class="dropdown-menu" :class="{ show: menushow }" @mouseenter="menushow = true"
                                    @mouseleave="menushow = false">
                                    <router-link v-for="(route, index) in drop_list" :key="index" :to="route.path"
                                        class="dropdown-item" @mouseenter="menushow = true"
                                        @mouseleave="menushow = false">
                                        {{ route.name }}
                                    </router-link>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

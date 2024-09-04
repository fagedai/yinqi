<script setup lang="ts">
import { ref } from "vue";

interface Route {
  path: string;
  name: string;
}

const list = ref<Route[]>([
  { path: "/home/content", name: "主页" },
  { path: "/home/about", name: "关于本司" },
  { path: "/home/service", name: "服务" },
  { path: "/home/model", name: "模型库" },
  { path: "/home/Skills", name: "服务价目表" },
]);
</script>

<template>
  <div id="nav">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <router-link to="/" class="navbar-brand">
          <img src="/src/assets/newLogo.png" alt="Logo" />
        </router-link>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
          <div class="navbar-nav ml-auto">
            <router-link v-for="(route, index) in list" :key="index" :to="route.path" class="nav-item nav-link"
              active-class="active">
              {{ route.name }}
            </router-link>
            <router-link to="/home/settings" class="user nav-link">
              <img src="@/assets/登录.png" alt="">
              我的
            </router-link>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.dropdown-menu.show {
  display: block;
}

.dropdown-item.active {
  background-color: #007bff;
  color: white;
}

.dropdown-item:hover {
  background-color: #007bff;
  color: white;
}

.user {
  display: flex;
  justify-content: center;
  width: 85px;
  height: 40px;
  margin-left: 10px;
  background-color: red;
  border-radius: 10px;
}
</style>

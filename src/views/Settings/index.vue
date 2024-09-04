<script setup>
import LeftModule from "./components/LeftModule/index.vue";

</script>

<template>
  <div class="background">
    <div class="box">
      <LeftModule />
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.background {
  background-color: #f4f4f4;
  margin-top: 100px;
}

.box {
  display: flex;
  width: 1200px;
  font-family: "Arial", "Microsoft YaHei", sans-serif;
  margin: 0 auto;
  padding: 20px 0;
}
</style>
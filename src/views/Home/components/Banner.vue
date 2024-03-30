<script setup>
import { ref } from 'vue'

const bannerList = ref([
    { first_name: '航空母舰', second_name: '合众国', imgUrl: '/src/assets/lunbo1.png' },
    { first_name: '航空母舰', second_name: '赤龙(1946)', imgUrl: '/src/assets/lunbo2.png' },
    { first_name: '航空母舰', second_name: '赤龙(1956)', imgUrl: '/src/assets/lunbo3.png' },
])

</script>

<template>
    <div class="header">
        <div id="header-slider" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <el-carousel indicator-position="none">
                    <el-carousel-item v-for="(item, index) in bannerList" :key="index">
                        <div class="carousel-item active">
                            <div class="row align-items-center">
                                <div class="col-md-6">
                                    <div class="carousel-content">
                                        <h2>{{ item.first_name }}</h2>
                                        <p>{{ item.second_name }}</p>
                                        <a class="btn" href="">Read More</a>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="carousel-img">
                                        <img :src="item.imgUrl" alt="Image">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header {
    position: relative;
    width: 100%;
    background: #ffffff;
    margin-top: 100px;
    top: 50px
}
</style>
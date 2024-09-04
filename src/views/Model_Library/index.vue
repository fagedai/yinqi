<script setup>
import { ref } from 'vue'

const images = ref([
    {
        id: 1,
        src: '/src/assets/model1.png',
        title: '吃豆人模具',
        description: '模型1'
    },
    {
        id: 2,
        src: '/src/assets/model2.png',
        title: '蓝色蛋糕模具',
        description: '模型2'
    },
    {
        id: 3,
        src: '/src/assets/model3.png',
        title: '蓝洞模具',
        description: '模型3'
    },
    {
        id: 4,
        src: '/src/assets/model4.png',
        title: '心型模具',
        description: '模型4'
    },
    {
        id: 5,
        src: '/src/assets/model5.png',
        title: '喷头固定架模具',
        description: '模型5'
    },
    {
        id: 6,
        src: '/src/assets/model6.png',
        title: '跑车模具',
        description: '模型6'
    },
    {
        id: 7,
        src: '/src/assets/model7.png',
        title: '网状模具',
        description: '模型7'
    },
    {
        id: 8,
        src: '/src/assets/model8.png',
        title: '盒子模具',
        description: '模型8'
    },
])

</script>

<template>

    <div class="portfolio mt-100">
        <div class="container">
            <div class="section-header animate__animated animate__fadeInUp">
                <h2>我们的模型库</h2>
                <p>
                    携手深圳技术大学等高校进行校企合作，致力于建立一个类似中国知网的数字建模作业、毕设数据库。此举旨在为学生和教师提供一个便捷、高效的数字建模作品存储和分享平台，促进教育资源的整合与优化，推动 3D
                    打印技术在教育领域的应用，满足不同层次用户的需求。
                </p>
            </div>

            <div class="row portfolio-container">
                <div class="col-lg-4 col-md-6 portfolio-item" v-for="item in images" :key="item.id">
                    <div class="portfolio-img">
                        <img :src="item.src" class="img-fluid" alt="Portfolio">
                        <a :href="item.src" data-lightbox="portfolio" data-title="Lorem ipsum dolor"
                            class="link-preview" title="Preview"><i class="ion-md-eye"></i></a>
                        <a href="" class="link-details" title="More Details"><i class="ion-md-open"></i></a>
                    </div>

                    <div class="portfolio-info">
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
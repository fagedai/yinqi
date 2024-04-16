<template>
    <div class="skills mt-100">
        <div class="section-header animate__animated animate__fadeInUp">
            <h2>参与的3D打印项目</h2>
        </div>
        <div class="project-container">
            <div class="project-list">
                <div class="project-item" v-for="item in items" :key="item.id">
                    <img :src="item.imageUrl" :alt="item.title" class="project-image">
                    <h2 class="project-title">{{ item.title }}</h2>
                    <p class="project-description">{{ item.description }}</p>
                    <a :href="item.linkUrl" class="project-button">继续阅读</a>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';
const items = ref([
    {
        id: 1,
        title: 'Bodo Pistor:专业模型制作者，使用3D打印来制作模型轮胎',
        description: '从制造工变为专业模型制作者在将爱好变成职业之前，Pistor曾接受过专业的车床和铣床操作培训。如今，他开了个网店，根据线上订单制作、生产和销售自己做的模型作品及各种模型配件。他的模型作品有坦克、卡车、挖掘机、农业机械等。图片来源...',
        linkUrl: '/',
        imageUrl: 'https://xometry.asia/wp-content/uploads/2021/12/image-13-1440x1080-1.png'
    },
    {
        id: 2,
        title: '不到2周内，助力开发适用于苹果AirTag的自行车支架',
        description: '很多时候市场一旦有了一款新的技术，就必须迅速开发和发布相关产品才能牢牢抓住市场机遇。Nyckle Sijtsma 就做到了！他在苹果...',
        linkUrl: '/',
        imageUrl: 'https://xometry.asia/wp-content/uploads/2021/07/Рисунок1-1-1440x810.png'
    },
    {
        id: 3,
        title: 'Scewo AG公司：如果爬楼梯对您就像攀登珠穆朗玛峰那样困难，该怎么办？',
        description: 'Scewo AG是瑞士一家制造电动轮椅的创新公司。Xometry与Scewo AG的机械设计师Florentin Westernmann及市场负责人Rüegg进行了交流。关于...',
        linkUrl: '/',
        imageUrl: 'https://xometry.asia/wp-content/uploads/2020/06/Scewo_Treppensteigen-270x160.jpg'
    }
])
</script>

<style scoped>
.project-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.project-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
}

.project-item {
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.project-image {
    width: 100%;
    height: auto;
    border-radius: 4px;
}

.project-title {
    margin-top: 15px;
    font-size: 1.2rem;
    color: #333;
}

.project-description {
    margin-top: 10px;
    color: #000;
    font-size: 16px;
    line-height: 1.6;
}

.project-button {
    display: inline-block;
    margin-top: 15px;
    padding: 8px 15px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.project-button:hover {
    background-color: #0056b3;
}
</style>
<script setup>
import { ref } from 'vue'

const list = ref([
    {
        id: 1,
        name: '上传模型',
        bind_class: 'ion-ios-desktop',
        content: '将设计好的3D模型文件上传至打印软件，确保格式兼容，为后续打印流程做好准备。'
    },
    {
        id: 2,
        name: '选择材料',
        bind_class: 'ion-ios-laptop',
        content: '根据模型用途和性能要求，挑选合适的3D打印材料，如PLA、ABS或PETG等。'
    },
    {
        id: 3,
        name: '调整参数',
        bind_class: 'ion-ios-tablet-portrait',
        content: '设置打印层厚、填充密度、打印速度等参数，确保打印质量和效率。'
    },
    {
        id: 4,
        name: '优化设计',
        bind_class: 'ion-ios-phone-portrait',
        content: '对模型进行必要的修正和优化，避免打印过程中的支撑过多或结构缺陷。'
    },
    {
        id: 5,
        name: '预览效果',
        bind_class: 'ion-ios-desktop',
        content: '在软件中预览模型打印效果，检查是否有必要进行进一步的调整或修改。'
    },
    {
        id: 6,
        name: '切片处理',
        bind_class: 'ion-ios-laptop',
        content: '将3D模型转换成打印机可识别的层叠切片文件，为实际打印提供指导。'
    },
    {
        id: 7,
        name: '开始打印',
        bind_class: 'ion-ios-tablet-portrait',
        content: '启动3D打印机，按照预设参数开始逐层打印模型，耐心等待完成。'
    },
    {
        id: 8,
        name: '后期处理',
        bind_class: 'ion-ios-phone-portrait',
        content: '打印完成后，进行去支撑、打磨、抛光等后期处理，提升模型外观和实用性。'
    },

])
</script>

<template>

    <div class="service mt-100">
        <div class="container">
            <div class="section-header animate__animated animate__fadeInUp">
                <h2>服务</h2>
                <p>
                    创意产品设计与生产是印奇科技当前的核心业务。印奇科技当前主要设计、生产“小比例模型”“创意潮玩”套件和成品，现已自主开发超30种产品；由于产品品质优良、价格合理，能提升许多玩家的制作和收藏体验，印奇科技正收获越来越多客户的认可。
                </p>
            </div>
            <div class="row">
                <div v-for="item in list" :key="item.id" class="col-sm-6 col-md-4 col-lg-3">
                    <div class="service-item">
                        <div class="service-icon">
                            <i :class="item.bind_class"></i>
                        </div>
                        <div class="service-detail">
                            <h4><a href="">{{ item.name }}</a></h4>
                            <p>{{ item.content }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



</template>